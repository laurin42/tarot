import React, { useState, memo, useRef, useEffect } from "react";
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
  currentRound: number; // Neue Prop
}

const CardStackView = memo(
  ({
    onCardSelect,
    sessionStarted,
    onAnimationComplete,
    cardDimensions,
    currentRound,
  }: CardStackViewProps) => {
    const [cards, setCards] = useState<ISelectedAndShownCard[]>([]);
    const [predeterminedCards, setPredeterminedCards] = useState<
      ISelectedAndShownCard[]
    >([]);

    // Animation Values für 5 Karten
    const translateY = useRef(
      new Array(5).fill(0).map(() => new Animated.Value(1000))
    ).current;
    const translateX = useRef(
      new Array(5).fill(0).map(() => new Animated.Value(0))
    ).current;
    const rotations = useRef(
      new Array(5).fill(0).map(() => new Animated.Value(0))
    ).current;

    // Initialisierung beim ersten Render
    useEffect(() => {
      if (sessionStarted) {
        const loadCards = async () => {
          const loadedCards = await getRandomDrawnCards();
          setPredeterminedCards(loadedCards);
        };
        loadCards();
      }
    }, [sessionStarted]);

    // Neuer Kartenstapel bei Rundenwechsel
    useEffect(() => {
      if (
        predeterminedCards.length > 0 &&
        currentRound < predeterminedCards.length
      ) {
        // Erstelle 5 identische Karten für den Stapel
        const newStack = Array(5)
          .fill(null)
          .map(() => ({
            ...predeterminedCards[currentRound],
            showFront: false,
            isSelected: false,
          }));

        setCards(newStack);

        // Reset und starte Animationen
        const { width: screenWidth, height: screenHeight } =
          Dimensions.get("window");
        const overlap = cardDimensions.width * 0.66;
        const totalWidth =
          cardDimensions.width + 4 * (cardDimensions.width - overlap);
        const startX = (screenWidth - totalWidth) / 2;
        const centerY = screenHeight * 0.33 - cardDimensions.height / 2;

        newStack.forEach((_, index) => {
          translateY[index].setValue(1000);
          translateX[index].setValue(0);
          rotations[index].setValue(0);

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
              toValue:
                index < 2
                  ? -3 + index * 1.5
                  : index === 2
                  ? 0
                  : -1.5 * (index - 2),
              friction: 6,
              tension: 40,
              useNativeDriver: true,
            }),
          ]).start();
        });
      }
    }, [currentRound, predeterminedCards]);

    const handleCardSelect = (card: ISelectedAndShownCard) => {
      if (cards.some((c) => c.isSelected)) return;

      setCards((prevCards) =>
        prevCards.map((c) => ({
          ...c,
          showFront: c === card,
          isSelected: c === card,
        }))
      );

      onCardSelect({
        ...card,
        showFront: true,
        isSelected: true,
      });
    };

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
        }}
      >
        {cards.map((card, index) => (
          <Animated.View
            key={`${currentRound}-${index}`}
            style={{
              position: "absolute",
              zIndex: cards.length - index,
              top: translateY[index], // Animierter Y-Wert
              left: translateX[index], // Animierter X-Wert
              transform: [
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
              style={{ opacity: 1, active: { opacity: 0.8 } }}
              onPress={() => handleCardSelect(card)}
            >
              <CardImage
                name={card.name}
                showFront={card.showFront || false}
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
