import { tarotCards, ISelectedAndShownCard } from "@/constants/tarotcards";
import { storage } from "../utils/storage"; // Import storage utility

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

  return drawnCards.map((card) => ({
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

async function saveDrawnCards(drawnCards: ISelectedAndShownCard[]) {
  const token = await storage.getItem("userToken");
  if (!token) return;

  await Promise.all(
    drawnCards.map(async (card, index) => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const saveResponse = await fetch(
          `${
            process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000"
          }/tarot/drawn-card`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({
              name: card.name,
              description: card.explanation,
              position: index, // Store card position (0=situation, 1=problem, 2=advice)
            }),
          }
        );

        if (saveResponse.ok) {
          console.log(`✅ Card saved to user history: ${card.name}`);
        } else {
          console.error(
            `❌ Failed to save card: ${card.name}`,
            await saveResponse.text()
          );
        }
      } catch (saveError) {
        console.error("Failed to save card:", saveError);
      }
    })
  );
}
