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
  const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
  const drawnCard = shuffledCards[0];

  try {
    const formattedName = drawnCard.name.toLowerCase().replace(/ /g, "_");
    const response = await fetch(
      `http://192.168.178.67:8000/tarot/cards/${formattedName}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Speichern der gezogenen Karte in der Datenbank
    await fetch("http://192.168.178.67:8000/tarot/drawn-card", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        card: drawnCard,
        explanation: data.explanation,
      }),
    });

    return {
      ...drawnCard,
      showFront: false,
      explanation: data.explanation,
      image: drawnCard.image,
      onNextCard: () => {},
    };
  } catch (error) {
    console.error("Error fetching card explanation:", error);
    return {
      ...drawnCard,
      showFront: false,
      explanation: "Erklärung konnte nicht geladen werden",
      image: drawnCard.image,
      onNextCard: () => {},
    };
  }
}
