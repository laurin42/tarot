import { GoogleGenerativeAI, GenerateContentResult } from "@google/generative-ai";
import { adaptGeminiResponse } from "../types/gemini";

// Gemini AI Client
export class GeminiService {
  private model;

  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY || (() => {
      console.error("API_KEY not found in environment");
      throw new Error("API_KEY is required");
    })());
    
    this.model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  // Gemini-Antworten verarbeiten
  public processGeminiResponse(response: GenerateContentResult): string {
    try {
      const adaptedResponse = adaptGeminiResponse(response);
      const text = adaptedResponse.response?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (typeof text === 'string') {
        return text;
      } else if (response.response?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return response.response.candidates[0].content.parts[0].text as string;
      }
      
      return "Keine Antwort erhalten";
    } catch (error) {
      console.error("Error processing Gemini response:", error);
      return "Keine Antwort erhalten";
    }
  }

  // Inhalt generieren
  public async generateContent(prompt: string): Promise<string> {
    try {
      const response = await this.model.generateContent(prompt);
      return this.processGeminiResponse(response);
    } catch (error) {
      console.error("Failed to generate content:", error);
      return "Keine Antwort erhalten";
    }
  }

  // Getter für das Model (falls direkt benötigt)
  public getModel() {
    return this.model;
  }
}

// Exportiere eine Singleton-Instanz
export const geminiService = new GeminiService();