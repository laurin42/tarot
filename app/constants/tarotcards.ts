export interface ITarotCard {
  id: string;
  name: string;
  image: any;
}

export interface ISelectedAndShownCard extends ITarotCard {
  name: string;
  showFront?: boolean;
  isSelected?: boolean;
  currentIndex?: number;
  explanation?: string;
  image: any;
  onNextCard: () => void;
}

export const tarotCards: ITarotCard[] = [
  {
    id: "0",
    name:  "Der Narr",
    image: require("@/assets/images/tarot_cards/The_fool.jpg"),
  },
  {
    id: "1",
    name:  "Der Magier",
    image: require("@/assets/images/tarot_cards/The_magician.jpg"),
  },
  {
    id: "2",
    name: "Die Kaiserin",
    image: require("@/assets/images/tarot_cards/The_empress.jpg"),
  },
  {
    id: "3",
    name: "Die Hohepriesterin",
    image: require("@/assets/images/tarot_cards/High_priestess.jpg"),
  },
  {
    id: "4",
    name: "König der Kelche",
    image: require("@/assets/images/tarot_cards/King_of_cups.jpg"),
  },
  {
    id: "5",
    name: "Ritter der Kelche",
    image: require("@/assets/images/tarot_cards/Knight_of_cups.jpg"),
  },
  {
    id: "6",
    name: "Ritter der Münzen",
    image: require("@/assets/images/tarot_cards/Knight_of_pentacles.jpg"),
  },
  {
    id: "7",
    name: "Page der Kelche",
    image: require("@/assets/images/tarot_cards/Page_of_cups.jpg"),
  },
  {
    id: "8",
    name: "Page der Münzen",
    image: require("@/assets/images/tarot_cards/Page_of_pentacles.jpg"),
  },
  {
    id: "9",
    name: "Königin der Kelche",
    image: require("@/assets/images/tarot_cards/Queen_of_cups.jpg"),
  },
  {
    id: "10",
    name: "Zwei Kelche",
    image: require("@/assets/images/tarot_cards/Two_Cups.jpg"),
  },
  {
    id: "11",
    name: "Drei Kelche",
    image: require("@/assets/images/tarot_cards/Three_Cups.jpg"),
  },
  {
    id: "12",
    name: "Vier Kelche",
    image: require("@/assets/images/tarot_cards/Four_Cups.jpg"),
  },
  {
    id: "13",
    name: "Fünf Kelche",
    image: require("@/assets/images/tarot_cards/Five_Cups.jpg"),
  },
  {
    id: "14",
    name: "Sechs Kelche",
    image: require("@/assets/images/tarot_cards/Six_Cups.jpg"),
  },
  {
    id: "15",
    name: "Sieben Kelche",
    image: require("@/assets/images/tarot_cards/Seven_Cups.jpg"),
  },
  {
    id: "16",
    name: "Acht Kelche",
    image: require("@/assets/images/tarot_cards/Eight_Cups.jpg"),
  },
  {
    id: "17",
    name: "Neun Kelche",
    image: require("@/assets/images/tarot_cards/Nine_Cups.jpg"),
  },
  {
    id: "18",
    name: "Zehn Kelche",
    image: require("@/assets/images/tarot_cards/Ten_Cups.jpg"),
  },
  {
    id: "19",
    name: "Drei Münzen",
    image: require("@/assets/images/tarot_cards/Three_pents.jpg"),
  },
  {
    id: "20",
    name: "Vier Münzen",
    image: require("@/assets/images/tarot_cards/Four_pents.jpg"),
  },
  {
    id: "21",
    name: "Fünf Münzen",
    image: require("@/assets/images/tarot_cards/Five_pents.jpg"),
  },
  {
    id: "22",
    name: "Sechs Münzen",
    image: require("@/assets/images/tarot_cards/Six_pents.jpg"),
  },
  {
    id: "23",
    name: "Sieben Münzen",
    image: require("@/assets/images/tarot_cards/Seven_pents.jpg"),
  },
  {
    id: "24",
    name: "Acht Münzen",
    image: require("@/assets/images/tarot_cards/Eight_pents.jpg"),
  },
  {
    id: "25",
    name: "Neun Münzen",
    image: require("@/assets/images/tarot_cards/Nine_pents.jpg"),
  },
  {
    id: "26",
    name: "Zehn Münzen",
    image: require("@/assets/images/tarot_cards/Ten_pents.jpg"),
  },
  {
    id: "27",
    name: "Ass Münzen",
    image: require("@/assets/images/tarot_cards/Ace_of_Pentacles.jpg"),
  },
];

export async function getRandomDrawnCards(): Promise<ISelectedAndShownCard[]> {
  const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
  const drawnCards = shuffledCards.slice(0, 3);

  const explanations: { [key: string]: string } = {};

  await Promise.all(
    drawnCards.map(async (card, index) => {
      try {
        const formattedName = encodeURIComponent(card.name.toLowerCase().replace(/ /g, "_"));
        console.log(`Fetching explanation for: ${card.name} (${formattedName})`);

        const response = await fetch(
          `http://192.168.178.67:8000/tarot/cards/${formattedName}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch ${card.name}`);
        }
        const data = await response.json();
        explanations[card.name] = data.explanation || "Keine Erklärung verfügbar";

        // Speichern der gezogenen Karte
        await fetch("http://192.168.178.67:8000/tarot/drawn-card", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ card, index, explanation: data.explanation }),
        });
      } catch (error) {
        console.error(`Error fetching/storing ${card.name}:`, error);
        explanations[card.name] = "Erklärung konnte nicht geladen werden";
      }
    })
  );

  // Debugging-Ausgabe für die finalen Karten
  console.log(
    "Final Drawn Cards:",
    drawnCards.map((card) => ({
      name: card.name,
      imageExists: card.image ? "✅" : "❌",
      explanation: explanations[card.name] || "Keine Erklärung",
    }))
  );

  return drawnCards.map((card) => ({
    ...card,
    showFront: false,
    isSelected: false,
    explanation: explanations[card.name] || "Keine Erklärung",
    image: card.image || require("@/assets/images/tarot_cards/Card_back.png"),
    onNextCard: () => {},
  }));
}

