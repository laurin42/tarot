import React, { useState, memo, useEffect } from "react";
import { View, Animated, Pressable, StyleSheet, Text } from "react-native";
import TarotCard from "./TarotCard";
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import { useCardFanAnimation } from "@/hooks/useCardFanAnimation";
import { useCardSelectionAnimation } from "@/hooks/useCardSelectionAnimation";

import { globalStyles, layoutPatterns } from "@/styles/globalStyles";
import { glowEffects } from "@/styles/theme";

interface CardStackViewProps {
  onAnimationComplete: () => void;
  onCardSelect: (card: ISelectedAndShownCard) => void;
  sessionStarted: boolean;
  cardDimensions: { width: number; height: number };
  drawnSlotPositions: { x: number; y: number }[];
  currentRound: number;
  predeterminedCards: ISelectedAndShownCard[];
  onCardPositioned?: () => void;
}

const CardStackView = memo(
  ({
    onAnimationComplete,
    onCardSelect,
    sessionStarted,
    cardDimensions,
    currentRound,
    predeterminedCards,
    drawnSlotPositions,
    onCardPositioned,
  }: CardStackViewProps) => {
    const [cards, setCards] = useState<ISelectedAndShownCard[]>([]);
    const [showInstruction, setShowInstruction] = useState(false);
    const [isCardSelected, setIsCardSelected] = useState(false);
    const [animatingToPosition, setAnimatingToPosition] = useState(false);

    // Animation hooks
    const fanAnimation = useCardFanAnimation({
      cardCount: 5,
      spreadAngle: 60,
      cardDimensions,
      currentRound,
      sessionStarted,
    });

    const cardAnimation = useCardSelectionAnimation(onCardPositioned);
    const {
      instructionOpacity,
      stackOpacity,
      selectedCardPosition,
      selectedCardScale,
      showInstruction: animateInstruction,
      resetAnimations,
    } = cardAnimation;

    // Initialize cards and start animation
    useEffect(() => {
      if (
        sessionStarted &&
        predeterminedCards.length > 0 &&
        currentRound < predeterminedCards.length
      ) {
        const newStack = Array(5)
          .fill(null)
          .map(() => ({
            ...predeterminedCards[currentRound],
            showFront: false,
            isSelected: false,
          }));

        setCards(newStack);

        // Start fan animation with delay
        const timer = setTimeout(() => {
          fanAnimation.animateToFan().start(() => {
            if (typeof onAnimationComplete === "function") {
              onAnimationComplete();
            }
          });
        }, 300);

        return () => clearTimeout(timer);
      }
    }, [currentRound, predeterminedCards, sessionStarted, onAnimationComplete]);

    // Reset states when round changes
    useEffect(() => {
      setIsCardSelected(false);
      resetAnimations();
    }, [currentRound]);

    // Show instruction after card initialization
    useEffect(() => {
      if (cards.length > 0 && !cards.some((c) => c.isSelected)) {
        const timer = setTimeout(() => {
          setShowInstruction(true);
          animateInstruction().start();
        }, 1000);

        return () => clearTimeout(timer);
      }
    }, [cards]);

    // Handle card selection with animations
    const handleCardSelect = (card: ISelectedAndShownCard) => {
      if (cards.some((c) => c.isSelected) || isCardSelected) return;

      setIsCardSelected(true);
      setAnimatingToPosition(true);

      setCards((prevCards) =>
        prevCards.map((c) => ({
          ...c,
          showFront: c === card ? true : false,
          isSelected: c === card ? true : false,
        }))
      );

      // Start the card selection animation sequence
      cardAnimation.animateCardSelection(
        card,
        currentRound,
        drawnSlotPositions,
        (selectedCard) => {
          setAnimatingToPosition(false);
          onCardSelect(selectedCard);
        }
      );

      // Hide instruction
      setShowInstruction(false);
    };

    return (
      <View style={globalStyles.centeredContainer}>
        {/* Mystical glow background */}
        <View style={globalStyles.mysticalGlowContainer} />

        <View style={styles.gamePlayArea}>
          {/* Instruction floating indicator */}
          {showInstruction && (
            <Animated.View
              style={[
                globalStyles.floatingIndicator,
                styles.instructionContainer,
                { opacity: instructionOpacity },
              ]}
            >
              <Text style={globalStyles.mysticalText}>
                {"Tippe auf den Stapel, um eine Karte zu ziehen"}
              </Text>
            </Animated.View>
          )}

          {/* Card fan container */}
          <View style={layoutPatterns.cardFan}>
            {cards.map((card, index) => (
              <Animated.View
                key={`${currentRound}-${index}`}
                style={[
                  styles.animatedCard,
                  {
                    zIndex: cards.length - index,
                    transform:
                      card.isSelected && animatingToPosition
                        ? [
                            { translateX: selectedCardPosition.x },
                            { translateY: selectedCardPosition.y },
                            { scale: selectedCardScale },
                            { rotate: "0deg" },
                          ]
                        : [
                            { translateY: fanAnimation.translateY[index] },
                            { translateX: fanAnimation.translateX[index] },
                            {
                              rotate: fanAnimation.rotations[index].interpolate(
                                {
                                  inputRange: [-30, 30],
                                  outputRange: ["-30deg", "30deg"],
                                }
                              ),
                            },
                            { scale: fanAnimation.scales[index] },
                          ],
                    opacity: card.isSelected ? 1 : stackOpacity,
                  },
                ]}
              >
                <Pressable
                  style={[globalStyles.cardBase, styles.cardPressable]}
                  onPress={() => handleCardSelect(card)}
                >
                  <TarotCard
                    image={card.image}
                    isShown={card.showFront || false}
                    style={{
                      width: cardDimensions.width,
                      height: cardDimensions.height,
                    }}
                  />
                </Pressable>
              </Animated.View>
            ))}
          </View>

          {/* Card indicator */}
          {cards.length > 0 && !isCardSelected && (
            <View
              style={[
                globalStyles.floatingIndicator,
                styles.cardIndicatorContainer,
              ]}
            >
              <Text style={globalStyles.mysticalText}>
                {currentRound === 2
                  ? "Letzte Karte"
                  : `Karte ${currentRound + 1}/3`}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
);

// Komponenten-spezifische Styles - deutlich reduziert
const styles = StyleSheet.create({
  animatedCard: {
    position: "absolute",
    ...glowEffects.medium,
  },
  cardPressable: {
    borderRadius: 16,
  },
  gamePlayArea: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  instructionContainer: {
    top: "10%",
    zIndex: 100,
    alignSelf: "center",
  },
  cardIndicatorContainer: {
    bottom: "8%",
    alignSelf: "center",
  },
});

export default CardStackView;
