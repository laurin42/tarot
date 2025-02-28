import React, { useState, memo, useRef, useEffect } from "react";
import {
  View,
  Animated,
  Pressable,
  Dimensions,
  StyleSheet,
  Platform,
} from "react-native";
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
      const shouldCreateNewStack =
        predeterminedCards.length > 0 &&
        currentRound < predeterminedCards.length;

      shouldCreateNewStack
        ? // Create new stack and animate
          (() => {
            const newStack = Array(5)
              .fill(null)
              .map(() => ({
                ...predeterminedCards[currentRound],
                showFront: false,
                isSelected: false,
              }));

            setCards(newStack);

            const overlap = cardDimensions.width * 0.66;
            const spreadDistance = cardDimensions.width - overlap;

            newStack.forEach((_, index) => {
              translateY[index].setValue(1000);
              translateX[index].setValue(0);
              rotations[index].setValue(0);

              Animated.parallel([
                Animated.spring(translateY[index], {
                  toValue: 0,
                  friction: 6,
                  tension: 40,
                  useNativeDriver: true,
                }),
                Animated.spring(translateX[index], {
                  toValue: (index - 2) * spreadDistance,
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
                      : 1.5 * (2 - index),
                  friction: 6,
                  tension: 40,
                  useNativeDriver: true,
                }),
              ]).start();
            });
          })()
        : null;
    }, [currentRound, predeterminedCards]);

    // Update card selection logic
    const handleCardSelect = (card: ISelectedAndShownCard) => {
      cards.some((c) => c.isSelected)
        ? null
        : (setCards((prevCards) =>
            prevCards.map((c) => ({
              ...c,
              showFront: c === card ? true : false,
              isSelected: c === card ? true : false,
            }))
          ),
          onCardSelect({
            ...card,
            showFront: true,
            isSelected: true,
          }));
    };

    return (
      <View style={styles.container}>
        {cards.map((card, index) => (
          <Animated.View
            key={`${currentRound}-${index}`}
            style={[
              styles.animatedCard,
              {
                zIndex: cards.length - index,
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
              },
            ]}
          >
            <Pressable
              style={({ pressed }) => [
                styles.cardPressable,
                { opacity: pressed ? 0.8 : 1 },
              ]}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
    backgroundColor: "transparent", // Let parent handle background
  },
  animatedCard: {
    position: "absolute",
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cardPressable: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  cardImage: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.2)",
  },
});

CardStackView.displayName = "CardStackView";

export default CardStackView;
