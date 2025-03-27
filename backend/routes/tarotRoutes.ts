import express from "express";
import { authMiddleware } from '../middleware/auth';
import { usersTable, drawnCardsTable } from "../db/schema";
import { eq, desc } from "drizzle-orm";
import { asyncHandler } from '../utils/errorHandler';
import { db } from '../db';
import { processGeminiResponse } from "../utils/geminiUtils";
import { model } from '../services/geminiService';

const router = express.Router();

// Card endpoint with asyncHandler
router.post("/card", asyncHandler(async (req, res) => {
  const { cards, userGoals = "" } = req.body;
  const card = cards[0];

  // Validate input
  if (!card || !card.name) {
    res.status(400).json({ error: "Ungültige Karteninformationen" });
    return;
  }

  const cardReadingPrompt = "Deute die Karte im Kontext der aktuellen Situation.";
  const prompt = `Du legst Tarot Karten für Menschen. Erkläre und deute prägnant die soeben gelegte Karte "${card.name}" ohne Sonderzeichen. ${
    userGoals ? `Berücksichtige bei der Deutung folgende Ziele des Users: ${userGoals}.` : ""
  } ${cardReadingPrompt}`;

  const response = await model.generateContent(prompt);
  const description = processGeminiResponse(response);
  
  if (!description) {
    throw new Error("Es wurde keine Beschreibung generiert.");
  }

  // Speichere die Karte in der Tabelle drawn_cards inklusive Beschreibung
  const newCard = await db
    .insert(drawnCardsTable)
    .values({ name: card.name, description })
    .returning();
    
  res.status(201).json(newCard[0]);
}));

// Get card explanation
router.get("/cards/:cardName", authMiddleware, asyncHandler(async (req, res) => {
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
  const geminiResponse = processGeminiResponse(response);
  
  res.json({ 
    explanation: geminiResponse,
    goalsIncluded: userGoals ? true : false
  });
}));

// Get summary for tarot reading
router.post("/summary", authMiddleware, asyncHandler(async (req, res) => {
  const { cards } = req.body;
  let userGoals = "";
  let userGender = "";
  let userZodiacSign = "";
  let userAge = null;
  
  // Get user ID from token to fetch their profile data
  const userId = req.user?.id;
  
  if (userId) {
    // Try to get user's profile from database
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, parseInt(userId)))
      .limit(1);
      
    if (user.length > 0) {
      // Extract all profile information
      userGoals = user[0].goals || "";
      userGender = user[0].gender || "";
      userZodiacSign = user[0].zodiacSign || "";
      
      // Calculate age if birthday is available
      if (user[0].birthday) {
        const birthDate = new Date(user[0].birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        userAge = age;
      }
    }
  }
  
  // Fallback to request body goals if no DB goals found
  if (!userGoals && req.body.userGoals) {
    userGoals = req.body.userGoals;
  }
  
  if (!cards || !Array.isArray(cards) || cards.length === 0) {
    throw new Error('Invalid or empty cards array received');
  }

  const cardNames = cards.map((card) => card.name);
  const [firstCard, secondCard, thirdCard] = cardNames;
  
  // Build personal context with all profile information
  let personalContext = "";
  if (userGoals) personalContext += `Ziele der Person: ${userGoals}. `;
  if (userGender) {
    const genderText = userGender === 'm' ? 'männlich' : 
                      userGender === 'w' ? 'weiblich' : 'divers';
    personalContext += `Geschlecht: ${genderText}. `;
  }
  if (userZodiacSign) personalContext += `Sternzeichen: ${userZodiacSign}. `;
  if (userAge) personalContext += `Alter: ${userAge} Jahre. `;
  
  const prompt = `Du bist ein erfahrener Tarot-Kartenleser. 
  ${personalContext ? `Hier sind Informationen über die Person, für die du liest: ${personalContext}` : ''}
  Gib eine zusammenhängende, persönliche Interpretation der folgenden drei Tarotkarten:
  ${firstCard} repräsentiert die jetzige persönliche Lage (Gegenwart),
  ${secondCard} ein mögliches Problem (Konflikt) und
  ${thirdCard} ein Lösungsansatz oder Weisung (Perspektive).
  Die Interpretation soll motivierend und aufschlussreich sein.`;

  const response = await model.generateContent(prompt);
  const summary = processGeminiResponse(response);

  if (!summary) {
    throw new Error("Es wurde keine Zusammenfassung generiert.");
  }

  res.json({ 
    success: true,
    summary,
    cards: cardNames,
    profileInfoIncluded: {
      goals: !!userGoals,
      gender: !!userGender,
      zodiac: !!userZodiacSign,
      age: userAge !== null
    }
  });
}));

// Save drawn card
router.post("/drawn-card", authMiddleware, asyncHandler(async (req, res) => {
  const { name, description, position = null, sessionId = null } = req.body;
  const userId = req.user?.id ? parseInt(req.user.id) : null;
  
  if (!userId) {
    res.status(401).json({ error: "Authentication required" });
    return;
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
  
  res.status(201).json(result[0]);
}));

// Get user's card history
router.get("/user-cards", authMiddleware, asyncHandler(async (req, res) => {
  const userId = req.user?.id ? parseInt(req.user.id) : null;
  
  if (!userId) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }
  
  // Get user's card history, ordered by most recent first
  const userCards = await db
    .select()
    .from(drawnCardsTable)
    .where(eq(drawnCardsTable.userId, userId))
    .orderBy(desc(drawnCardsTable.createdAt));
    
  // Group cards by session for readings
  const readings = userCards.reduce((acc: { [key: string]: { date: Date; cards: any[] } }, card) => {
    const sessionId = card.sessionId || 'default_session';
    if (!acc[sessionId]) {
      acc[sessionId] = {
        date: card.createdAt,
        cards: []
      };
    }
    
    acc[card.sessionId || 'default_session'].cards.push(card);
    return acc;
  }, {});
  
  res.json({
    cards: userCards,
    readings: Object.values(readings)
  });
}));

// Save reading summary
router.post("/reading-summary", authMiddleware, asyncHandler(async (req, res) => {
  const { sessionId, summary } = req.body;
  const userId = req.user?.id ? parseInt(req.user.id) : null;
  
  if (!userId) {
    res.status(401).json({ error: "Authentication required" });
    return;
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
  
  res.status(201).json(result[0]);
}));

export default router;