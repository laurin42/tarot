import { useState, useEffect } from 'react';
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import { storage } from "../utils/storage";

export function useTarotSummary(cards: ISelectedAndShownCard[]) {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = await storage.getItem("userToken");
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000"}/tarot/summary`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({ cards }),
          }
        );

        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Zusammenfassung (${response.status})`);
        }

        const data = await response.json();
        setSummary(data.summary);

        // Save the complete reading with summary
        if (data.summary) {
          saveSummaryReading(cards, data.summary);
        }
      } catch (err) {
        console.error("Summary fetch error:", err);
        setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [cards]);

  const saveSummaryReading = async (
    cards: ISelectedAndShownCard[],
    summary: string
  ) => {
    try {
      const token = await storage.getItem("userToken");
      if (!token) return;

      const sessionId = `reading_${Date.now()}`;
      const summaryHeaders: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      await fetch(
        `${process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000"}/tarot/reading-summary`,
        {
          method: "POST",
          headers: summaryHeaders,
          body: JSON.stringify({
            sessionId,
            summary,
            cardNames: cards.map((card) => card.name),
          }),
        }
      );
    } catch (error) {
      console.error("Failed to save reading:", error);
    }
  };

  return { summary, loading, error };
}