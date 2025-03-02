import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { usersTable, drawnCardsTable, type NewUser } from "./db/schema"; // tarotCardsTable entfernt
import { eq } from "drizzle-orm";
import { authMiddleware, generateToken } from './middleware/auth';

// Umgebungsvariablen laden
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Optional: Endpoint, um einen User oder andere Daten zu verwalten
app.post("/tarot/cards", async (req: Request, res: Response) => {
  // Dieser Endpoint wird jetzt nicht mehr für Karten genutzt
  res.status(404).json({ error: "Nicht verfügbar" });
});

// Add interfaces for request types
interface CardRequest {
  cards: Array<{ name: string }>;
  userGoals?: string;
}

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

// Fix the card explanation endpoint
app.get("/tarot/cards/:cardName", async (req: Request, res: Response) => {
  try {
    const cardName = decodeURIComponent(req.params.cardName);
    const userGoals = req.body.userGoals || "";
    const cardReadingPrompt = "Deute die Karte im Kontext der aktuellen Situation.";
    
    const prompt = `Du legst Tarot Karten für Menschen. Erkläre und deute prägnant die Karte "${cardName}" ohne Sonderzeichen. Berücksichtige bei der Deutung folgende Ziele des Users: ${userGoals}. ${cardReadingPrompt}`;
    
    const response = await model.generateContent(prompt);
    const geminiResponse = response.response.candidates[0].content.parts[0].text;
    res.json({ explanation: geminiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler bei der Erklärungserstellung" });
  }
});

app.post("/tarot/summary", async (req: Request<{}, {}, CardRequest>, res: Response) => {
  try {
    const { cards, userGoals = "" } = req.body;
    console.log('Received cards for summary:', cards); // Debug log

    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      throw new Error('Invalid or empty cards array received');
    }

    const cardNames = cards.map((card: any) => card.name).join(", ");
    console.log('Card names for prompt:', cardNames); // Debug log

    const prompt = `Du bist ein erfahrener Tarot-Kartenleser. 
    Gib eine zusammenhängende, persönliche Interpretation der folgenden drei Tarotkarten: ${cardNames}. Die erste Karte repräsentiert die jetzige persönliche Lage, die zweite ein mögliches Problem und die dritte ein Lösungsansatz oder Weisung. ${
      userGoals ? `Berücksichtige bei der Deutung folgende Ziele des Users: ${userGoals}.` : ""
    }
    Die Interpretation soll motivierend und aufschlussreich sein, aber nicht länger als 5-6 Sätze.`;

    const response = await model.generateContent(prompt);
    const summary = response.response.candidates[0].content.parts[0].text;
    console.log('Generated summary:', summary); // Debug log

    if (!summary) {
      throw new Error("Es wurde keine Zusammenfassung generiert.");
    }

    res.json({ 
      success: true,
      summary,
      cards: cardNames // Include cards for verification
    });

  } catch (error) {
    console.error("Detailed error in /tarot/summary:", error);
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
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
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
    res.status(500).json({ error: "Failed to update goals" });
  }
});

// Fix the login endpoint type
app.post("/auth/login", async (req: Request, res: Response) => {
  try {
    const { authProvider, authId, username, goals } = req.body;
    
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.authId, authId))
      .limit(1);

    if (existingUser.length) {
      const token = generateToken({ 
        id: existingUser[0].id.toString(), 
        authProvider 
      });
      return res.json({ token, user: existingUser[0] });
    }

    // Neuen User erstellen
    const newUser: NewUser = {
      authId,
      username,
      authProvider,
      goals,
    };

    const insertedUser = await db
      .insert(usersTable)
      .values(newUser)
      .returning();

    const token = generateToken({ 
      id: insertedUser[0].id.toString(), 
      authProvider 
    });
    
    res.status(201).json({
      token,
      user: insertedUser[0]
    });
  } catch (error) {
    console.error("Auth error:", error);
    res.status(500).json({ error: "Authentication failed" });
  }
});

app.listen(port, () => {
  console.log(`Server ist aktiv auf http://192.168.178.67:${port}`);
});
