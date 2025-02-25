import React from "react";
import { Animated, View, Pressable } from "react-native";
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import CardImage from "@/components/ui/CardImage";

interface CardDisplayProps {
  deckInitialized: boolean;
  cards: ISelectedAndShownCard[];
  cardWidth: number;
  cardHeight: number;
  translateY: Animated.Value[];
  translateX: Animated.Value[];
  rotations: Animated.Value[];
  scales: Animated.Value[];
  flipAnim: Animated.Value[];
  opacity: Animated.Value;
  onCardSelect: (index: number) => void;
  stackPosition: { x: number; y: number };
}

export const CardDisplay = ({
  deckInitialized,
  cards,
  cardWidth,
  cardHeight,
  translateY,
  translateX,
  rotations,
  scales,
  flipAnim,
  opacity,
  onCardSelect,
  stackPosition,
}: CardDisplayProps) => {
  if (!deckInitialized || !cards.length) return null;

  return (
    <>
      {cards.map((card, index) => (
        <Animated.View
          key={index}
          className="absolute justify-center items-center"
          style={[
            {
              top: stackPosition.y,
              left: stackPosition.x,
              opacity,
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
              zIndex: cards.length - index, // Higher cards appear on top
            },
          ]}
        >
          <Pressable
            className="active:opacity-80 rounded-xl shadow-lg"
            onPress={() => onCardSelect(index)}
          >
            <CardImage
              name={card.name}
              showFront={card.showFront ?? false}
              width={cardWidth}
              height={cardHeight}
              image={card.image}
            />
          </Pressable>
        </Animated.View>
      ))}
    </>
  );
};
