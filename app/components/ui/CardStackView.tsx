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
    async function initializeDeck() {
      try {
        const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
        const newCards = shuffled.slice(0, CARD_COUNT).map((card) => ({
          ...card,
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
      // Hole eine neue Karte
      const drawnCard = await getRandomDrawnCard();

      const selectedCard = {
        ...cards[index],
        showFront: true,
        isSelected: true,
      };
      onCardSelect(selectedCard, currentIndex);
      handleCardClick(index, drawnSlotPositions);

      // Füge die neue Karte zu drawnCards hinzu
      setDrawnCards((prev) => [...prev, drawnCard]);
      setExplanations((prev) => ({
        ...prev,
        [drawnCard.name]:
          drawnCard.explanation || "Erklärung konnte nicht geladen werden",
      }));

      if (drawnCards.length < 2) {
        // Wenn weniger als 2 Karten gezogen wurden
        resetDeck();
      } else {
        // Bei der dritten Karte
        setShowSummaryButton(true);
      }
    } catch (error) {
      console.error("Error in handleCardSelect:", error);
    }
  };

  // Die handleNextCard Funktion anpassen
  const handleNextCard = () => {
    if (drawnCards.length > 1) {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % drawnCards.length;
        return nextIndex;
      });
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
      {deckInitialized && hasSelectedFirst && drawnCards.length > 0 && (
        <View style={styles.selectedCardContainer}>
          <CardImage
            name={drawnCards[currentIndex]?.name}
            showFront={true}
            width={cardWidth}
            height={cardHeight}
            image={drawnCards[currentIndex]?.image}
          />

          <Text style={styles.explanationText}>
            {explanations[drawnCards[currentIndex]?.name] ||
              "Erklärung konnte nicht geladen werden"}
          </Text>
          {drawnCards.length > 1 && ( // Nur anzeigen wenn es mehr als eine Karte gibt
            <TouchableOpacity
              onPress={handleNextCard}
              style={styles.nextButton}
            >
              <Text style={styles.nextButtonText}>
                Nächste Karte ({currentIndex + 1}/{drawnCards.length})
              </Text>
            </TouchableOpacity>
          )}
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
