import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  Easing,
} from "react-native";
import {
  getRandomDrawnCards,
  getRandomDrawnCard,
} from "@/components/DrawnCardsPool";
import { ISelectedAndShownCard, tarotCards } from "@/constants/tarotcards";
import { useCardAnimations } from "@/components/utils/useCardAnimations";
import CardImage from "@/components/CardImage";
import { useFloatingAnimation } from "@/components/utils/useFloatingAnimation";

const CARD_COUNT = 5;

interface CardStackViewProps {
  onAnimationComplete: () => void;
  onCardSelect: (card: ISelectedAndShownCard) => void;
  sessionStarted: boolean;
  drawnSlotPositions: { x: number; y: number }[];
  cardDimensions: { width: number; height: number; spacing: number };
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
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [summaryText, setSummaryText] = useState("");

  const floatingAnim = useFloatingAnimation(currentRound);

  const {
    translateY,
    translateX,
    rotations,
    scales,
    flipAnim,
    opacity,
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

  // Den useEffect können wir jetzt auf die Start-Animation beschränken
  useEffect(() => {
    if (sessionStarted && deckInitialized && currentRound === 0) {
      const currentCard = drawnCards[currentRound];
      if (currentCard) {
        const newCards = Array(CARD_COUNT)
          .fill(null)
          .map(() => ({
            ...currentCard,
            showFront: false,
            isSelected: false,
          }));
        setCards(newCards);
        animateCards();
      }
    }
  }, [sessionStarted, deckInitialized]); // Entferne currentRound aus den Dependencies

  const handleCardSelect = async (index: number) => {
    if (!hasSelectedFirst) {
      setHasSelectedFirst(true);
    }

    try {
      const drawnCard = drawnCards[currentRound];

      // Speichere die gezogene Karte in der Datenbank
      await fetch("http://192.168.178.67:8000/tarot/drawn-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          card: drawnCard,
          explanation: explanations[drawnCard.name],
          round: currentRound + 1, // Runde 1-3
        }),
      });

      handleCardClick(index, drawnSlotPositions);
      setShowExplanation(true);
    } catch (error) {
      console.error("Error in handleCardSelect:", error);
    }
  };

  // Ändern Sie die handleNextCard Funktion
  const handleNextCard = () => {
    setShowExplanation(false);

    if (currentRound < 2) {
      setCurrentRound((prev) => prev + 1);
      resetDeck();
    }
    // Zeige den Summary Button nach der dritten Karte
    if (currentRound === 2) {
      console.log("Setting showSummaryButton to true"); // Debug log
      setShowSummaryButton(true);
    }
  };

  const handleShowSummary = async () => {
    try {
      console.log("Sending cards to summary:", drawnCards);

      const response = await fetch("http://192.168.178.67:8000/tarot/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cards: drawnCards.slice(0, 3), // Nur die ersten 3 Karten senden
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received summary data:", data);

      if (!data.summary) {
        throw new Error("No summary in response data");
      }

      setSummaryText(data.summary);
      setShowSummaryModal(true);
    } catch (error) {
      console.error("Detailed error in handleShowSummary:", error);
    }
  };

  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles.container}>
      {deckInitialized && cards.length > 0 && drawnCards.length === 0 && (
        <Animated.View
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            alignItems: "center",
            transform: [{ translateY: floatingAnim }], // Direct value
          }}
        >
          <AnimatedTouchableOpacity
            style={[
              styles.startButton,
              {
                transform: [{ translateY: floatingAnim }],
              },
            ]}
            onPress={animateCards}
          >
            <Text style={styles.buttonText}>Start</Text>
          </AnimatedTouchableOpacity>
        </Animated.View>
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
                  opacity, // Füge opacity hinzu
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
              width={Dimensions.get("screen").width * 0.8}
              height={Dimensions.get("screen").height * 0.66}
              image={drawnCards[currentRound]?.image}
            />

            <Text style={styles.explanationText}>
              {explanations[drawnCards[currentRound]?.name] ||
                "Erklärung konnte nicht geladen werden"}
            </Text>
            <AnimatedTouchableOpacity
              style={[
                styles.nextButton,
                {
                  transform: [{ translateY: floatingAnim }],
                },
              ]}
              onPress={handleNextCard}
            >
              <Text style={styles.nextButtonText}>Nächste Karte</Text>
            </AnimatedTouchableOpacity>
          </View>
        )}

      {/* Zeige den Zusammenfassungs-Button nur an, wenn drei Karten ausgewählt wurden */}
      {deckInitialized && showSummaryButton && (
        <Animated.View
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            alignItems: "center",
            transform: [{ translateY: floatingAnim }], // Direct value
          }}
        >
          <AnimatedTouchableOpacity
            onPress={handleShowSummary}
            style={[
              styles.summaryButton,
              {
                transform: [{ translateY: floatingAnim }],
              },
            ]}
          >
            <Text style={styles.summaryButtonText}>
              Jetzt Deutung generieren!
            </Text>
          </AnimatedTouchableOpacity>
        </Animated.View>
      )}

      {showSummaryModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deine Zusammenfassung</Text>
            <Text style={styles.modalText}>{summaryText}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowSummaryModal(false)}
            >
              <Text style={styles.modalButtonText}>Schließen</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a202c",
  },
  cardContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 88, // Vertikale Position
  },
  startButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "rgba(112, 62, 229, 0.9)",
    padding: 16,
    borderRadius: 8,
    zIndex: 100,
    transform: [{ translateY: 0 }], // Initial position
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedCardContainer: {
    position: "absolute",
    bottom: 10,
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
    backgroundColor: "rgba(112, 62, 229, 0.9)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    transform: [{ translateY: 1 }], // Initial position
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
    transform: [{ translateY: 0 }], // Initial position
  },
  summaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  modalContent: {
    backgroundColor: "#2D3748",
    borderRadius: 16,
    padding: 20,
    width: Dimensions.get("screen").width * 0.8,
    height: Dimensions.get("screen").height * 0.82,
  },
  modalTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  modalText: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "rgba(112, 62, 229, 0.9)",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
