import { storage } from "../utils/storage";
import { ISelectedAndShownCard } from "@/constants/tarotcards";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000";

// Helper-Funktion zum Erstellen von Header mit Auth-Token
async function getAuthHeaders(): Promise<HeadersInit> {
  const token = await storage.getItem("userToken");
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

export const tarotApi = {
  // Fetch summary for a set of cards
  async fetchSummary(cards: ISelectedAndShownCard[]): Promise<string> {
    const headers = await getAuthHeaders();
    
    const response = await fetch(`${API_BASE_URL}/tarot/summary`, {
      method: "POST",
      headers,
      body: JSON.stringify({ cards }),
    });

    if (!response.ok) {
      throw new Error(`Fehler beim Laden der Zusammenfassung (${response.status})`);
    }

    const data = await response.json();
    return data.summary;
  },

  // Save a reading summary
  async saveSummaryReading(
    cards: ISelectedAndShownCard[],
    summary: string
  ): Promise<void> {
    const token = await storage.getItem("userToken");
    if (!token) return;

    const sessionId = `reading_${Date.now()}`;
    const headers = await getAuthHeaders();

    await fetch(`${API_BASE_URL}/tarot/reading-summary`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        sessionId,
        summary,
        cardNames: cards.map((card) => card.name),
      }),
    });
  }
};