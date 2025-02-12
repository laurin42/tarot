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
    const prompt = `Erkläre kurz und prägnant die Bedeutung der Tarotkarte "${card.name}". Konzentriere dich auf die wesentlichen Aspekte.`;
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
    const prompt = `Erkläre kurz und prägnant die Bedeutung der Tarotkarte "${cardName}". Konzentriere dich auf die wesentlichen Aspekte.`;
    const response = await model.generateContent(prompt);
    const geminiResponse = response.response.candidates[0].content.parts[0].text;
    res.json({ explanation: geminiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler bei der Erklärungserstellung" });
  }
});

app.listen(port, () => {
  console.log(`Server ist aktiv auf http://192.168.178.67:${port}`);
});
