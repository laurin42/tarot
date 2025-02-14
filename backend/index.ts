import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { usersTable, drawnCardsTable } from "./db/schema"; // tarotCardsTable entfernt

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

// Endpoint, um eine gezogene Karte zu speichern (mit Beschreibung)
app.post("/tarot/drawn-card", async (req: Request, res: Response) => {
  const { card } = req.body;  // card enthält z. B. { id, name, image, ... }
  try {
    console.log("Received drawn card:", card);

    // Erstelle eine Kopie und entferne evtl. vorhandene id
    const { id, ...rest } = { ...card };
    const prompt = `Du legst Tarot Karten für Menschen. Erkläre kurz und prägnant die soeben gelegte Karte "${card.name}" ohne Sonderzeichen.`;
    const response = await model.generateContent(prompt);
    const description = response.response.candidates[0].content.parts[0].text;

    if (!description) {
      throw new Error("Es wurde keine Beschreibung generiert.");
    }

    // Speichere die Karte in der Tabelle drawn_cards inklusive Beschreibung
    const newCard = await db
      .insert(drawnCardsTable)
      .values({ ...rest, description })
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

// Endpoint, um eine Karte zu erklären (optional)
app.get("/tarot/cards/:cardName", async (req: Request, res: Response) => {
  try {
    const cardName = decodeURIComponent(req.params.cardName);
    const prompt = `Du legst Tarot Karten für Menschen. Erkläre kurz und prägnant die Karte "${cardName}" ohne Sonderzeichen.`;
    const response = await model.generateContent(prompt);
    const geminiResponse = response.response.candidates[0].content.parts[0].text;
    res.json({ explanation: geminiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler bei der Erklärungserstellung" });
  }
});

// Füge diesen neuen Endpoint hinzu
app.post("/tarot/summary", async (req: Request, res: Response) => {
  try {
    const { cards } = req.body;
    console.log('Received cards for summary:', cards); // Debug log

    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      throw new Error('Invalid or empty cards array received');
    }

    const cardNames = cards.map((card: any) => card.name).join(", ");
    console.log('Card names for prompt:', cardNames); // Debug log

    const prompt = `Du bist ein erfahrener Tarot-Kartenleser. 
    Gib eine zusammenhängende, persönliche Interpretation der folgenden drei Tarotkarten: ${cardNames}. Die erste Karte repräsentiert die jetzige persönliche Lage, die zweite ein mögliches Problem und die dritte ein Lösungsansatz oder Weisung. 
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

app.listen(port, () => {
  console.log(`Server ist aktiv auf http://192.168.178.67:${port}`);
});
