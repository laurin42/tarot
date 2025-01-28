import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { tarotCardsTable, usersTable } from "./db/schema";

//For env File
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app: Application = express();
const port = process.env.PORT || 8002;

app.use(cors());
app.use(express.json());

app.post("/tarot/cards", async (req: Request, res: Response) => {
  const drawncard = req.body.card;
  const prompt = `Explain something to me about the ${drawncard} tarot card in short.`;
  const response = await model.generateContent(prompt);
  const geminiResponse = response.response.candidates[0].content.parts[0];
  console.log(geminiResponse);
  await db.select().from(tarotCardsTable);
  res.send(geminiResponse);
});

app.post("/tarot/cards/summary", async (req: Request, res: Response) => {
  const cards = req.body.cards;
  const entry = await db.insert(tarotCardsTable).values({
    description: "geminiResponse",
    name: "drawncard",
  });

  res.send(entry);
   const prompt = `You recieved the following tarot cards: ${cards.join(
     ", "
   )}, explain something to me about the tarot cards in short.`;
   const response = await model.generateContent(prompt);
   const geminiResponse = response.response.text();
});

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
  console.log(`Server is Fire at http://localhost:${port}`);
});
