import React, { useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { ICardWithShowFront, tarotCards } from "@/constants/tarotcards";
import { useCardAnimations } from "@/components/utils/useCardAnimations";
import CardImage from "@/components/CardImage";

const CARD_COUNT = 5;

interface CardStackViewProps {
  onAnimationComplete?: () => void;
  onCardSelect: (card: ICardWithShowFront) => void;
}

export default function CardStackView({
  onAnimationComplete,
  onCardSelect,
}: CardStackViewProps) {
  const { width } = Dimensions.get("window");
  const cardWidth = width > 400 ? 150 : 100;
  const cardHeight = cardWidth * 1.6;

  const drawnSlotPositions = [
    { x: 20, y: 400 },
    { x: (width - cardWidth) / 2, y: 400 },
    { x: width - cardWidth - 20, y: 400 },
  ];

  const [cards, setCards] = useState<ICardWithShowFront[]>(() => {
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    return shuffledCards.slice(0, CARD_COUNT).map((card) => ({
      ...card,
      showFront: false,
      isSelected: false,
    }));
  });

  const [drawnCards, setDrawnCards] = useState<ICardWithShowFront[]>([]);

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
    if (drawnCards.length === 3) {
      centerDrawnCards();
    }
  }, [drawnCards]);

  useEffect(() => {
    if (drawnCards.length >= 3) {
      setTimeout(() => resetDeck(), 500);
    }
  }, [drawnCards]);

  const handleCardSelect = (index: number) => {
    const selectedCard = cards[index];
    onCardSelect(selectedCard);
    handleCardClick(index, drawnSlotPositions);
  };

  return (
    <View style={styles.container}>
      {cards.length > 0 && drawnCards.length === 0 && (
        <Pressable style={styles.startButton} onPress={animateCards}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      )}

      {cards.map((card, index) => {
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
                showFront={card.showFront}
                width={cardWidth}
                height={cardHeight}
              />
            </Pressable>
          </Animated.View>
        );
      })}
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
});
