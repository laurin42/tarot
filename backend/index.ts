import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { tarotCardsTable, usersTable } from "./db/schema";

// Umgebungsvariablen laden
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Verbindung zu PostgreSQL über die URL in der .env
});

const db = drizzle(pool); // Drizzle ORM mit PostgreSQL verbinden

const genAI = new GoogleGenerativeAI(process.env.API_KEY); // Google Generative AI instanziieren
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Endpoint, um eine Tarotkarte hinzuzufügen
app.post("/tarot/cards", async (req: Request, res: Response) => {
  const { name, description } = req.body;
  try {
    const newCard = await db.insert(tarotCardsTable).values({
      name,
      description,
    });
    res.status(201).json(newCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler beim Speichern der Karte" });
  }
});

// Endpoint, um gezogene Karten zu speichern
app.post("/tarot/drawn-cards", async (req: Request, res: Response) => {
  const { drawnCards } = req.body;
  try {
    const storedCards = await db.insert(tarotCardsTable).values(drawnCards);
    res.status(201).json(storedCards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler beim Speichern der gezogenen Karten" });
  }
});

// Endpoint, um eine Karte zu erklären
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

// Server starten
app.listen(port, () => {
  console.log(`Server ist aktiv auf http://localhost:${port}`);
});
