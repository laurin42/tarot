import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { usersTable, drawnCardsTable, type NewUser } from "./db/schema";
import { eq, desc } from "drizzle-orm";
import { authMiddleware, generateToken } from './middleware/auth';
import { jwtDecode } from "jwt-decode";

// Load environment variables
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app: Application = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;

app.use(cors({
  origin: 'http://localhost:8081', 
  credentials: true,
}));
app.use(express.json());

// Interface for card requests
interface CardRequest {
  cards: Array<{ name: string }>;
  userGoals?: string;
}

// Add interfaces for request types
interface GoalsUpdateRequest {
  goals: string;
}

// Update the card reading endpoint
app.post("/tarot/card", async (req: Request<{}, {}, CardRequest>, res: Response) => {
  try {
    const { cards, userGoals = "" } = req.body;
    const card = cards[0];

    const cardReadingPrompt = "Deute die Karte im Kontext der aktuellen Situation.";
    
    const prompt = `Du legst Tarot Karten für Menschen. Erkläre und deute prägnant die soeben gelegte Karte "${card.name}" ohne Sonderzeichen. ${
      userGoals ? `Berücksichtige bei der Deutung folgende Ziele des Users: ${userGoals}.` : ""
    } ${cardReadingPrompt}`;

    const response = await model.generateContent(prompt);
    const description = response.response.candidates[0].content.parts[0].text;

    if (!description) {
      throw new Error("Es wurde keine Beschreibung generiert.");
    }

    // Speichere die Karte in der Tabelle drawn_cards inklusive Beschreibung
    const newCard = await db
      .insert(drawnCardsTable)
      .values({ ...card, description })
      .returning();
    console.log("newCard:", newCard);
    res.status(201).json(newCard[0]);
  } catch (error) {
    console.error("Error storing drawn card:", error);
    res.status(500).json({ error: "Fehler beim Speichern der gezogenen Karte" });
  }
});

// Falls du mehrere Karten gleichzeitig speichern möchtest, kannst du diesen Endpoint anpassen oder entfernen
// Hier aber nutzen wir ausschließlich den Einzelkarten-Endpoint

app.get("/tarot/cards/:cardName", authMiddleware, async (req: Request, res: Response) => {
  try {
    const cardName = decodeURIComponent(req.params.cardName);
    
    // Get user ID from token to fetch their goals
    const userId = req.user?.id;
    let userGoals = "";
    
    if (userId) {
      // Try to get user's goals from database
      const user = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, parseInt(userId)))
        .limit(1);
        
      if (user.length > 0) {
        userGoals = user[0].goals || "";
      }
    }
    
    const cardReadingPrompt = "Deute die Karte im Kontext der aktuellen Situation.";
    
    // Include user goals in the prompt
    const prompt = `Du legst Tarot Karten für Menschen. Erkläre und deute prägnant die Karte "${cardName}" ohne Sonderzeichen. Berücksichtige bei der Deutung folgende Ziele des Users: ${userGoals}. ${cardReadingPrompt}`;
    
    const response = await model.generateContent(prompt);
    const geminiResponse = response.response.candidates[0].content.parts[0].text;
    
    res.json({ 
      explanation: geminiResponse,
      goalsIncluded: userGoals ? true : false // Debug info
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler bei der Erklärungserstellung" });
  }
});

app.post("/tarot/summary", authMiddleware, async (req: Request<{}, {}, CardRequest>, res: Response) => {
  try {
    const { cards } = req.body;
    let userGoals = "";
    
    // Get user ID from token to fetch their goals
    const userId = req.user?.id;
    
    if (userId) {
      // Try to get user's goals from database
      const user = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, parseInt(userId)))
        .limit(1);
        
      if (user.length > 0) {
        userGoals = user[0].goals || "";
      }
    }
    
    // Otherwise, use goals from request if provided as fallback
    if (!userGoals && req.body.userGoals) {
      userGoals = req.body.userGoals;
    }
    
    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      throw new Error('Invalid or empty cards array received');
    }

    const cardNames = cards.map((card: any) => card.name).join(", ");
    
    const prompt = `Du bist ein erfahrener Tarot-Kartenleser. 
    Gib eine zusammenhängende, persönliche Interpretation der folgenden drei Tarotkarten: ${cardNames}. Die erste Karte repräsentiert die jetzige persönliche Lage, die zweite ein mögliches Problem und die dritte ein Lösungsansatz oder Weisung. ${
      userGoals ? `Berücksichtige bei der Deutung folgende Ziele des Users: ${userGoals}.` : ""
    }
    Die Interpretation soll motivierend und aufschlussreich sein, aber nicht länger als 5-6 Sätze.`;

    const response = await model.generateContent(prompt);
    const summary = response.response.candidates[0].content.parts[0].text;

    if (!summary) {
      throw new Error("Es wurde keine Zusammenfassung generiert.");
    }

    res.json({ 
      success: true,
      summary,
      cards: cardNames,
      goalsIncluded: userGoals ? true : false // Debug info
    });
  } catch (error) {
    console.error("Error in /tarot/summary:", error);
    res.status(500).json({ 
      error: "Fehler bei der Erstellung der Zusammenfassung",
      details: (error as Error).message
    });
  }
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { username, authProvider, authId, goals } = req.body;
    const newUser = await db
      .insert(usersTable)
      .values({
        username,
        authProvider,
        authId,
        goals,
      })
      .returning();
    res.status(201).json(newUser[0]);
  } catch (error) {
    console.error("Error user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Add this endpoint for saving drawn cards with proper user association
app.post("/tarot/drawn-card", authMiddleware, async (req: Request, res: Response) => {
  try {
    const { name, description, position = null, sessionId = null } = req.body;
    const userId = req.user?.id ? parseInt(req.user.id) : null;
    
    console.log("📝 Saving card:", { name, userId, position });
    
    if (!userId) {
      console.log("⚠️ No user ID found, not saving card");
      return res.status(401).json({ error: "Authentication required" });
    }
    
    // Insert card with user association and timestamp
    const result = await db.insert(drawnCardsTable).values({
      name,
      description,
      userId,
      position,
      sessionId: sessionId || `session_${Date.now()}`, // Generate session ID if not provided
      createdAt: new Date() // Current timestamp
    }).returning();
    
    console.log("✅ Card saved:", result[0]);
    res.status(201).json(result[0]);
  } catch (error) {
    console.error("Error saving card:", error);
    res.status(500).json({ 
      error: "Failed to save card",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

// Add endpoint to get user's card history
app.get("/users/me/cards", authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id ? parseInt(req.user.id) : null;
    
    if (!userId) {
      return res.status(401).json({ error: "Authentication required" });
    }
    
    // Get user's card history, ordered by most recent first
    const userCards = await db
      .select()
      .from(drawnCardsTable)
      .where(eq(drawnCardsTable.userId, userId))
      .orderBy(desc(drawnCardsTable.createdAt));
      
    // Group cards by session for readings
    const readings = userCards.reduce((acc: any, card: any) => {
      if (!acc[card.sessionId]) {
        acc[card.sessionId] = {
          date: card.createdAt,
          cards: []
        };
      }
      
      acc[card.sessionId].cards.push(card);
      return acc;
    }, {});
    
    res.json({
      cards: userCards,
      readings: Object.values(readings)
    });
  } catch (error) {
    console.error("Error fetching user cards:", error);
    res.status(500).json({ error: "Failed to fetch card history" });
  }
});

// Add endpoint for saving reading summaries
app.post("/tarot/reading-summary", authMiddleware, async (req: Request, res: Response) => {
  try {
    const { sessionId, summary, cardNames } = req.body;
    const userId = req.user?.id ? parseInt(req.user.id) : null;
    
    if (!userId) {
      return res.status(401).json({ error: "Authentication required" });
    }
    
    // Insert summary as a special card record
    const result = await db.insert(drawnCardsTable).values({
      name: "Reading Summary",
      description: summary,
      userId,
      sessionId,
      position: 999, // Special position to indicate it's a summary
      createdAt: new Date()
    }).returning();
    
    console.log("✅ Reading summary saved:", result[0]);
    res.status(201).json(result[0]);
  } catch (error) {
    console.error("Error saving reading summary:", error);
    res.status(500).json({ error: "Failed to save reading summary" });
  }
});

// Fix the goals update endpoint type
app.put("/users/:authId/goals", authMiddleware, async (req: Request, res: Response) => {
  try {
    const { goals } = req.body;
    const { authId } = req.params;
    
    const updatedUser = await db
      .update(usersTable)
      .set({ 
        goals,
        updatedAt: new Date()
      })
      .where(eq(usersTable.authId, authId))
      .returning();
      
    if (!updatedUser.length) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.json(updatedUser[0]);
  } catch (error) {
    console.error("Error updating goals:", error);
    res.status (500).json({ error: "Failed to update goals" });
  }
});

// Add this endpoint to directly access goals
app.get("/users/:authId/goals", authMiddleware, async (req: Request, res: Response) => {
  try {
    const { authId } = req.params;
    
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.authId, authId))
      .limit(1);
      
    if (!user.length) {
      return res.status(404).json({ error: "User not found" });
    }
    
    // Return just the goals or the whole user object
    res.json({ goals: user[0].goals });
  } catch (error) {
    console.error("Error retrieving goals:", error);
    res.status(500).json({ error: "Failed to retrieve goals" });
  }
});

// Fix the login endpoint to extract stable user ID
app.post("/auth/login", async (req: Request, res: Response) => {
  try {
    console.log("📝 Auth login request received");
    let { authProvider, authId, username, email, picture, profile } = req.body;
    console.log("✅ Received username:", username); // Debug log
    
    // Validate required fields
    if (!authProvider || !authId) {
      console.error("❌ Missing required auth fields");
      return res.status(400).json({ error: "Missing required authentication data" });
    }
    
    // Handle Google authentication specially - extract stable user ID
    let stableAuthId = authId;
    
    if (authProvider === "google") {
      try {
        // Decode the token to get the stable user ID
        const decoded: any = jwtDecode(authId);
        
        // The 'sub' field is the stable Google user ID
        if (decoded.sub) {
          stableAuthId = `google|${decoded.sub}`;
          console.log("✅ Extracted stable Google user ID:", stableAuthId);
        } else {
          console.warn("⚠️ No 'sub' field found in Google token");
        }
        
        // IMPORTANT: Only use these as fallbacks if no values were provided
        // This ensures the frontend-provided values take precedence
        if (!username && decoded.given_name) {
          console.log("Using decoded name:", decoded.given_name);
          username = decoded.given_name;
        }
        if (!email && decoded.email) {
          email = decoded.email;
        }
        if (!picture && decoded.picture) {
          picture = decoded.picture;
        }
      } catch (decodeError) {
        console.error("❌ Failed to decode Google token:", decodeError);
      }
    }
    
    // Look for existing user with the stable ID
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.authId, stableAuthId))
      .limit(1);

    if (existingUser.length) {
      console.log("✅ Existing user found:", existingUser[0].id);
      
      // Update user profile data if new information is provided
      if (username || email || picture) {
        console.log("🔄 Updating existing user profile with new data");
        
        await db.update(usersTable)
          .set({
            username: username || existingUser[0].username,
            name: username || existingUser[0].name,
            email: email || existingUser[0].email,
            picture: picture || existingUser[0].picture,
            updatedAt: new Date()
          })
          .where(eq(usersTable.id, existingUser[0].id));
          
        // Get updated user data
        const updatedUser = await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.id, existingUser[0].id))
          .limit(1);
        
        const token = generateToken({ 
          id: updatedUser[0].id.toString(), 
          authProvider 
        });
        
        return res.json({ token, user: updatedUser[0] });
      }
      
      // If no update needed, return existing user data
      const token = generateToken({ 
        id: existingUser[0].id.toString(), 
        authProvider 
      });
      return res.json({ token, user: existingUser[0] });
    }

    // Create new user
    console.log("🆕 Creating new user with:", { authProvider, username: username || "New User" });
    const newUser = {
      authId: stableAuthId,
      username: username || "New User",
      authProvider,
      email: email || null,
      picture: picture || null,
      name: username || null,
      goals: "",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Insert user
    const insertedUser = await db
      .insert(usersTable)
      .values(newUser)
      .returning();

    console.log("✅ New user created:", insertedUser[0].id);
    const token = generateToken({ 
      id: insertedUser[0].id.toString(), 
      authProvider 
    });
    
    res.status(201).json({
      token,
      user: insertedUser[0]
    });
  } catch (error) {
    console.error("❌ Auth error details:", error);
    res.status(500).json({ 
      error: "Authentication failed", 
      details: error instanceof Error ? error.message : "Unknown error" 
    });
  }
});

// Add this endpoint to get user profile
app.get("/auth/me", authMiddleware, async (req: Request, res: Response) => {
  try {
    // Add more debug info
    console.log("👤 /auth/me - Headers:", req.headers);
    console.log("👤 /auth/me - Auth token present:", !!req.headers.authorization);
    console.log("👤 /auth/me - User ID from token:", req.user?.id);
    
    if (!req.user?.id) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    
    const userId = parseInt(req.user.id);
    console.log(`🔍 Looking up user with ID: ${userId}`);
    
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, userId))
      .limit(1);
    
    console.log(`🔍 User found: ${user.length > 0 ? "Yes" : "No"}`);
      
    if (!user.length) {
      return res.status(404).json({ error: "User not found" });
    }
    
    // Send user data including authId
    res.json(user[0]);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

// Add this simple endpoint to verify token formatting
app.get("/auth/verify-token", (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("🔍 Auth header received:", {
      exists: !!authHeader,
      value: authHeader ? authHeader.substring(0, 20) + "..." : "missing"
    });
    
    if (!authHeader) {
      return res.status(401).json({ 
        error: "No authorization header", 
        headers: Object.keys(req.headers)
      });
    }
    
    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        error: "Invalid authorization format", 
        format: authHeader.substring(0, 20)
      });
    }
    
    const token = authHeader.split(' ')[1];
    res.json({ 
      status: "success",
      tokenReceived: !!token,
      tokenLength: token.length
    });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(500).json({ error: "Token verification failed" });
  }
});

// Change this line at the bottom
app.listen(port, "0.0.0.0", () => {
  // Use 0.0.0.0 to listen on all network interfaces
  console.log(`Server ist aktiv auf http://${process.env.SERVER_HOST || '0.0.0.0'}:${port}`);
  console.log(`API URL in .env: ${process.env.EXPO_PUBLIC_API_URL}`);
});
