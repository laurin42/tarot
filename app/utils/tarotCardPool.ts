import { tarotCards, ISelectedAndShownCard } from "@/constants/tarotcards";
import { storage } from "./storage";
import { optimizeImage } from "./imageOptimization";

export async function getRandomDrawnCards(): Promise<ISelectedAndShownCard[]> {
  const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
  const drawnCards = shuffledCards.slice(0, 3);

  const explanations: { [key: string]: string } = {};

  // Get authentication token if available
  const token = await storage.getItem("userToken");

  // Fetch explanations for each card
  await Promise.all(
    drawnCards.map(async (card) => {
      try {
        const headers: HeadersInit = {};
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        // Format the card name to match the expected format on the backend
        const formattedCardName = card.name.toLowerCase().replace(/ /g, "_");

        const response = await fetch(
          `${
            process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000"
          }/tarot/cards/${formattedCardName}`,
          { headers }
        );

        if (!response.ok) {
          throw new Error(`Failed to get explanation for: ${card.name}`);
        }

        const data = await response.json();
        explanations[card.name] =
          data.explanation || "Keine Erklärung verfügbar";
      } catch (error) {
        console.error(`Failed to get explanation for ${card.name}:`, error);
        explanations[card.name] = "Erklärung konnte nicht geladen werden";
      }
    })
  );

  // Add optimization for card images
  const optimizedCards = await Promise.all(
    drawnCards.map(async (card) => {
      if (card.image) {
        card.image = await optimizeImage(card.image);
      }
      return card;
    })
  );

  return optimizedCards.map((card) => ({
    ...card,
    showFront: false,
    isSelected: false,
    explanation: explanations[card.name],
    image: card.image,
    onNextCard: () => {},
  }));
}

export async function getRandomDrawnCard(): Promise<ISelectedAndShownCard> {
  try {
    // Get authentication token if available
    const token = await storage.getItem("userToken");

    // Add authentication header if token exists
    const headers: HeadersInit = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(
      `${
        process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000"
      }/tarot/cards/random`,
      { headers }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const drawnCard = await response.json();

    return {
      ...drawnCard,
      showFront: false,
      explanation: drawnCard.explanation,
      image: drawnCard.image,
      onNextCard: () => {},
    };
  } catch (error) {
    console.error("Error fetching random card:", error);
    throw error;
  }
}
