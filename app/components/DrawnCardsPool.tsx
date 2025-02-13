import { tarotCards, ISelectedAndShownCard } from "@/constants/tarotcards";

export async function getRandomDrawnCards(): Promise<ISelectedAndShownCard[]> {
  const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
  const drawnCards = shuffledCards.slice(0, 3);

  const explanations: { [key: string]: string } = {};
  const cardImageMap: { [key: string]: any } = drawnCards.reduce(
    (map: { [key: string]: any }, card) => {
      map[card.name] = card.image;
      return map;
    },
    {} as { [key: string]: any }
  );

  await Promise.all(
    drawnCards.map(async (card) => {
      try {
        const formattedName = card.name.toLowerCase().replace(/ /g, "_");
        const response = await fetch(
          `http://192.168.178.67:8000/tarot/cards/${formattedName}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        explanations[card.name] = data.explanation;
      } catch (error) {
        console.error("Error fetching card explanation:", error);
        explanations[card.name] = "Erklärung konnte nicht geladen werden";
      }
    })
  );

  return drawnCards.map((card) => ({
    ...card,
    showFront: false,
    explanation: explanations[card.name],
    image: cardImageMap[card.name],
    onNextCard: () => {}, // Add a placeholder function for onNextCard
  }));
}

export async function getRandomDrawnCard(): Promise<ISelectedAndShownCard> {
  try {
    // Hole die bereits gezogenen Karten vom Server
    const response = await fetch(
      "http://192.168.178.67:8000/tarot/drawn-cards"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const drawnCards = await response.json();

    // Wähle eine zufällige Karte aus den bereits gezogenen
    const randomCard =
      drawnCards[Math.floor(Math.random() * drawnCards.length)];

    return {
      ...randomCard,
      showFront: false,
      explanation: randomCard.explanation,
      image: randomCard.image,
      onNextCard: () => {},
    };
  } catch (error) {
    console.error("Error fetching drawn card:", error);
    throw error;
  }
}
