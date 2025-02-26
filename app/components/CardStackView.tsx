import React, { useState, memo } from "react";
import { View, Animated, Pressable, Dimensions } from "react-native";
import CardImage from "./CardImage";
import { ISelectedAndShownCard, tarotCards } from "@/constants/tarotcards";
import { getRandomDrawnCards } from "./DrawnCardsPool";
import { useCardDimensions } from "@/hooks/useCardDimensions";

interface CardStackViewProps {
  onAnimationComplete: () => void;
  onCardSelect: (card: ISelectedAndShownCard) => void;
  sessionStarted: boolean;
  cardDimensions: { width: number; height: number };
  drawnSlotPositions: { x: number; y: number }[];
}

const CardStackView = memo(
  ({
    onCardSelect,
    sessionStarted,
    onAnimationComplete,
    cardDimensions,
  }: CardStackViewProps) => {
    const [currentRound, setCurrentRound] = useState(0);
    const [cards, setCards] = useState<ISelectedAndShownCard[]>([]);

    // Animation Values für 5 Karten
    const translateY = React.useRef(
      new Array(5).fill(0).map(() => new Animated.Value(1000))
    ).current;
    const translateX = React.useRef(
      new Array(5).fill(0).map(() => new Animated.Value(0))
    ).current;
    const rotations = React.useRef(
      new Array(5).fill(0).map(() => new Animated.Value(0))
    ).current;

    // Funktion für die Rotation der Karten
    const getRotation = (index: number) => {
      // -3° -> 0° -> -3° über 5 Karten
      if (index < 2) return -3 + index * 1.5; // Von -3° bis 0°
      if (index === 2) return 0; // Mittlere Karte
      return -1.5 * (index - 2); // Von 0° zurück zu -3°
    };

    React.useEffect(() => {
      if (sessionStarted) {
        const initializeCards = async () => {
          try {
            // Hole die vorbestimmten Karten für alle 3 Runden
            const predeterminedCards = await getRandomDrawnCards();

            // Erstelle 5er Stapel mit der Karte der aktuellen Runde
            const currentCard = predeterminedCards[currentRound];
            const stackCards = Array(5)
              .fill(null)
              .map(() => ({
                ...currentCard,
                showFront: false,
                isSelected: false,
                onNextCard: () => {
                  setCurrentRound((prev) => prev + 1);
                },
              }));

            setCards(stackCards);

            // Berechne Layout
            const { width: screenWidth, height: screenHeight } =
              Dimensions.get("window");
            const overlap = cardDimensions.width * 0.66;

            // Korrigierte Berechnung der Gesamtbreite für 5 Karten
            const totalWidth =
              cardDimensions.width + 4 * (cardDimensions.width - overlap);

            // Zentriere horizontal
            const startX = (screenWidth - totalWidth) / 2;

            // Positioniere vertikal im oberen Drittel, mit Berücksichtigung der Kartenhöhe
            const centerY = screenHeight * 0.33 - cardDimensions.height / 2;

            // Animiere Karten
            stackCards.forEach((_, index) => {
              Animated.parallel([
                Animated.spring(translateY[index], {
                  toValue: centerY,
                  friction: 6,
                  tension: 40,
                  useNativeDriver: true,
                }),
                Animated.spring(translateX[index], {
                  toValue: startX + index * (cardDimensions.width - overlap),
                  friction: 6,
                  tension: 40,
                  useNativeDriver: true,
                }),
                Animated.spring(rotations[index], {
                  toValue: getRotation(index),
                  friction: 6,
                  tension: 40,
                  useNativeDriver: true,
                }),
              ]).start();
            });

            if (currentRound === 0) {
              onAnimationComplete();
            }
          } catch (error) {
            console.error("Fehler beim Laden der Karten:", error);
          }
        };
        initializeCards();
      }
    }, [sessionStarted, currentRound]); // Abhängigkeit von currentRound hinzugefügt

    const handleCardSelect = (card: ISelectedAndShownCard) => {
      onCardSelect(card);
    };

    return (
      <View className="flex-1 items-center justify-center bg-gray-900">
        {cards.map((card, index) => (
          <Animated.View
            key={index}
            style={{
              position: "absolute",
              zIndex: cards.length - index, // Wichtig für die Überlappung
              transform: [
                { translateY: translateY[index] },
                { translateX: translateX[index] },
                {
                  rotate: rotations[index].interpolate({
                    inputRange: [-3, 3],
                    outputRange: ["-3deg", "3deg"],
                  }),
                },
              ],
            }}
          >
            <Pressable
              className="active:opacity-80"
              onPress={() => handleCardSelect(card)}
            >
              <CardImage
                name={card.name}
                showFront={false}
                width={cardDimensions.width}
                height={cardDimensions.height}
                image={card.image}
              />
            </Pressable>
          </Animated.View>
        ))}
      </View>
    );
  }
);

CardStackView.displayName = "CardStackView";

export default CardStackView;
