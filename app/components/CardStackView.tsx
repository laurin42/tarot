import React, { useState, useCallback, memo } from "react";
import { View } from "react-native";
import { CardDisplay } from "./CardDisplay";
import { StartingInstructions } from "./StartView";
import { useCardAnimations } from "@/hooks/useCardAnimations";
import { useCardDimensions } from "@/hooks/useCardDimensions";
import { ISelectedAndShownCard } from "@/constants/tarotcards";

interface CardStackViewProps {
  onAnimationComplete: () => void;
  onCardSelect: (card: ISelectedAndShownCard) => void;
  sessionStarted: boolean;
  cardDimensions: {
    width: number;
    height: number;
    spacing: number;
  };
  drawnSlotPositions: { x: number; y: number }[];
}

const CardStackView = memo(
  ({ onCardSelect, sessionStarted }: CardStackViewProps) => {
    const dimensions = useCardDimensions();
    const [deckInitialized, setDeckInitialized] = useState(false);

    const {
      cards,
      animations: {
        translateY,
        translateX,
        rotations,
        scales,
        flipAnim,
        opacity,
      },
      animateCards,
      handleCardClick,
    } = useCardAnimations();

    const handleCardSelection = useCallback(
      async (index: number) => {
        handleCardClick(index, dimensions.slots);
        if (cards[index]) {
          try {
            // Send card data to backend
            await fetch("http://192.168.178.67:8000/tarot/drawn-card", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                card: cards[index],
                explanation: cards[index].explanation,
                round: index + 1,
                timestamp: new Date().toISOString(),
                sessionId: sessionStarted ? "active" : "inactive",
              }),
            });

            // Notify parent component
            onCardSelect(cards[index]);
          } catch (error) {
            console.error("Error sending card data:", error);
          }
        }
      },
      [cards, handleCardClick, onCardSelect, dimensions.slots, sessionStarted]
    );

    return (
      <View className="flex-1 bg-gray-900 justify-center items-center">
        <CardDisplay
          deckInitialized={deckInitialized}
          cards={cards}
          cardWidth={dimensions.width}
          cardHeight={dimensions.height}
          translateY={translateY}
          translateX={translateX}
          rotations={rotations}
          scales={scales}
          flipAnim={flipAnim}
          opacity={opacity}
          onCardSelect={handleCardSelection}
          stackPosition={dimensions.slots.center}
        />

        <StartingInstructions
          deckInitialized={deckInitialized}
          cardsExist={cards.length > 0}
          drawnCardsEmpty={true}
          floatingAnim={scales[0]}
          onStart={animateCards}
        />
      </View>
    );
  }
);

CardStackView.displayName = "CardStackView";

export default CardStackView;
