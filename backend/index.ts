import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
const { GoogleGenerativeAI } = require("@google/generative-ai");

//For env File
dotenv.config();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// ...

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app: Application = express();
const port = process.env.PORT || 8002;

app.get("/", async (req: Request, res: Response) => {
  const prompt = "Explain something to me about the world";
  const response = await model.generateContent(prompt);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
