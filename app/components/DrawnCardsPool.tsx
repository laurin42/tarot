import { tarotCards, ISelectedAndShownCard } from "@/constants/tarotcards";

export async function getRandomDrawnCards(): Promise<ISelectedAndShownCard[]> {
  const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
  const drawnCards = shuffledCards.slice(0, 3);

  const explanations: { [key: string]: string } = {};

  await Promise.all(
    drawnCards.map(async (card) => {
      try {
        // Hole direkt die Erklärung für jede Karte
        const response = await fetch(
          `http://192.168.2.187:8000/tarot/cards/${encodeURIComponent(
            card.name
          )}`
        );

        if (!response.ok) {
          throw new Error(`Failed to get explanation for: ${card.name}`);
        }

        const data = await response.json();
        explanations[card.name] =
          data.explanation || "Keine Erklärung verfügbar";
      } catch (error) {
        console.error(`Error processing ${card.name}:`, error);
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
    const response = await fetch(
      "http://192.168.2.187:8000/tarot/cards/random"
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
