import React, { useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  getRandomDrawnCards,
  getRandomDrawnCard,
} from "@/components/DrawnCardsPool";
import { ISelectedAndShownCard, tarotCards } from "@/constants/tarotcards";
import { useCardAnimations } from "@/components/utils/useCardAnimations";
import CardImage from "@/components/CardImage";

const CARD_COUNT = 5;

interface CardStackViewProps {
  onAnimationComplete?: () => void;
  onCardSelect: (card: ISelectedAndShownCard, index: number) => void;
  sessionStarted: boolean; // neue Prop
}

export default function CardStackView({
  onAnimationComplete,
  onCardSelect,
  sessionStarted,
}: CardStackViewProps) {
  const { width } = Dimensions.get("window");
  const cardWidth = width > 400 ? 150 : 100;
  const cardHeight = cardWidth * 1.6;

  const drawnSlotPositions = [
    { x: 20, y: 400 },
    { x: (width - cardWidth) / 2, y: 400 },
    { x: width - cardWidth - 20, y: 400 },
  ];

  const [drawnCards, setDrawnCards] = useState<ISelectedAndShownCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [cards, setCards] = useState<ISelectedAndShownCard[]>([]);
  const [explanations, setExplanations] = useState<{ [key: string]: string }>(
    {}
  );
  const [showSummaryButton, setShowSummaryButton] = useState(false);
  const [deckInitialized, setDeckInitialized] = useState(false); // Zustand, um zu verfolgen, ob das Deck initialisiert wurde
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hasSelectedFirst, setHasSelectedFirst] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);

  const {
    translateY,
    translateX,
    rotations,
    scales,
    flipAnim,
    animateCards,
    centerDrawnCards,
    resetDeck,
    handleCardClick,
  } = useCardAnimations({
    drawnCards,
    setDrawnCards,
    setCards,
    onAnimationComplete,
  });

  useEffect(() => {
    async function fetchInitialDrawnCards() {
      try {
        // Hole die initialen 3 Karten
        const cards = await getRandomDrawnCards();
        setDrawnCards(cards);
        const explanationMap: { [key: string]: string } = {};
        cards.forEach((card) => {
          explanationMap[card.name] =
            card.explanation || "Erklärung konnte nicht geladen werden";
        });
        setExplanations(explanationMap);
        setDeckInitialized(true);
      } catch (error) {
        console.error("Error fetching initial drawn cards:", error);
      }
    }
    fetchInitialDrawnCards();
  }, []);

  useEffect(() => {
    async function initializeDeck() {
      try {
        // Wähle eine zufällige Karte aus dem Deck
        const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
        const selectedCard = shuffled[0];

        // Erstelle 5 Kopien dieser Karte für das Deck
        const newCards = Array(CARD_COUNT)
          .fill(null)
          .map(() => ({
            ...selectedCard,
            showFront: false,
            isSelected: false,
            onNextCard: () => {},
          }));

        setCards(newCards);
        setDeckInitialized(true);
      } catch (error) {
        console.error("Error initializing deck:", error);
      }
    }
    initializeDeck();
  }, []);

  useEffect(() => {
    if (drawnCards.length > 0) {
      setCards(Array(CARD_COUNT).fill(drawnCards[currentRound]));
    }
  }, [drawnCards, currentRound]);

  useEffect(() => {
    if (drawnCards.length === 3) {
      centerDrawnCards();
      setShowSummaryButton(true); // Zeige den Button, wenn 3 Karten gezogen wurden
    }
  }, [drawnCards]);

  useEffect(() => {
    if (drawnCards.length >= 3) {
      setTimeout(() => resetDeck(), 500);
    }
  }, [drawnCards]);

  // Starte Animation wenn Session startet
  useEffect(() => {
    if (sessionStarted && deckInitialized) {
      animateCards();
    }
  }, [sessionStarted, deckInitialized]);

  const handleCardSelect = async (index: number) => {
    if (!hasSelectedFirst) {
      setHasSelectedFirst(true);
    }

    try {
      const drawnCard = drawnCards[currentRound];
      handleCardClick(index, drawnSlotPositions);
      setShowExplanation(true); // Zeige die Erklärung für die neue Karte

      // Warte mit dem Erhöhen des currentRound und dem Reset des Decks
      // bis der Benutzer auf "Weiter" klickt
    } catch (error) {
      console.error("Error in handleCardSelect:", error);
    }
  };

  const handleNextCard = () => {
    setShowExplanation(false); // Ausblenden der Erklärung

    // Hier die Logik für die nächste Runde
    if (currentRound < 2) {
      setCurrentRound((prev) => prev + 1);
      resetDeck();
    }
    if (currentRound === 2) {
      setShowSummaryButton(true);
    }
  };

  const handleShowSummary = () => {
    // Erstelle einen Prompt mit den Namen der gezogenen Karten
    const cardNames = drawnCards.map((card) => card.name).join(", ");
    const prompt = `Gib eine kurze Zusammenfassung der folgenden Tarotkarten: ${cardNames}.`;

    // Zeige den Prompt in einem Alert (oder verwende eine andere Methode, um den Prompt anzuzeigen)
    Alert.alert("Zusammenfassung", prompt);
  };

  return (
    <View style={styles.container}>
      {deckInitialized && cards.length > 0 && drawnCards.length === 0 && (
        <Pressable style={styles.startButton} onPress={animateCards}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      )}

      {deckInitialized &&
        cards.map((card, index) => {
          const verticalOffset = index * 0;
          const leftPosition = (width - cardWidth) / 2;
          return (
            <Animated.View
              key={index}
              style={[
                styles.cardContainer,
                {
                  top: 88 + verticalOffset,
                  left: leftPosition,
                  transform: [
                    { translateY: translateY[index] },
                    { translateX: translateX[index] },
                    {
                      rotateZ: rotations[index].interpolate({
                        inputRange: [-10, 10],
                        outputRange: ["-10deg", "10deg"],
                      }),
                    },
                    { scale: scales[index] },
                    {
                      rotateY: flipAnim[index].interpolate({
                        inputRange: [0, 180],
                        outputRange: ["0deg", "180deg"],
                      }),
                    },
                  ],
                  zIndex: index,
                },
              ]}
            >
              <Pressable onPress={() => handleCardSelect(index)}>
                <CardImage
                  name={card.name}
                  showFront={card.showFront ?? false}
                  width={cardWidth}
                  height={cardHeight}
                  image={card.image}
                />
              </Pressable>
            </Animated.View>
          );
        })}

      {/* Zeige die gezogenen Karten nur an, wenn bereits eine erste Karte ausgewählt wurde */}
      {deckInitialized &&
        hasSelectedFirst &&
        drawnCards.length > 0 &&
        showExplanation && (
          <View style={styles.selectedCardContainer}>
            <CardImage
              name={drawnCards[currentRound]?.name}
              showFront={true}
              width={cardWidth}
              height={cardHeight}
              image={drawnCards[currentRound]?.image}
            />

            <Text style={styles.explanationText}>
              {explanations[drawnCards[currentRound]?.name] ||
                "Erklärung konnte nicht geladen werden"}
            </Text>
            <TouchableOpacity
              onPress={handleNextCard}
              style={styles.nextButton}
            >
              <Text style={styles.nextButtonText}>Weiter</Text>
            </TouchableOpacity>
          </View>
        )}

      {/* Zeige den Zusammenfassungs-Button nur an, wenn drei Karten ausgewählt wurden */}
      {deckInitialized && showSummaryButton && hasSelectedFirst && (
        <TouchableOpacity
          onPress={handleShowSummary}
          style={styles.summaryButton}
        >
          <Text style={styles.summaryButtonText}>Zusammenfassung anzeigen</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a202c",
    justifyContent: "center",
  },
  cardContainer: {
    position: "absolute",
    top: 88,
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "rgba(112, 62, 229, 0.9)",
    padding: 16,
    borderRadius: 8,
    zIndex: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedCardContainer: {
    position: "absolute",
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    zIndex: 1000,
  },
  explanationText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  summaryButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "rgba(112, 62, 229, 0.9)",
    padding: 16,
    borderRadius: 8,
    zIndex: 100,
  },
  summaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
