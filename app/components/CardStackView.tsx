import React, { useState, memo, useRef, useEffect } from "react";
import {
  View,
  Animated,
  Pressable,
  Dimensions,
  StyleSheet,
  Platform,
  Text, // Add Text import
} from "react-native";
import TarotCard from "./TarotCard"; // Ändern von CardImage zu TarotCard
import { ISelectedAndShownCard, tarotCards } from "@/constants/tarotcards";
import { getRandomDrawnCards } from "./DrawnCardsPool";
import { useCardDimensions } from "@/hooks/useCardDimensions";
import { useCardFanAnimation } from "@/hooks/useCardFanAnimation";

interface CardStackViewProps {
  onAnimationComplete: () => void;
  onCardSelect: (card: ISelectedAndShownCard) => void;
  sessionStarted: boolean;
  cardDimensions: { width: number; height: number };
  drawnSlotPositions: { x: number; y: number }[];
  currentRound: number; // Neue Prop
  predeterminedCards: ISelectedAndShownCard[]; // Add it here
}

const CardStackView = memo(
  ({
    onAnimationComplete,
    onCardSelect,
    sessionStarted,
    cardDimensions,
    currentRound,
    predeterminedCards, // Destructure the passed prop
  }: CardStackViewProps) => {
    const [cards, setCards] = useState<ISelectedAndShownCard[]>([]);
    // Für die Anleitung und Animation
    const [showInstruction, setShowInstruction] = useState(false);
    const instructionOpacity = useRef(new Animated.Value(0)).current;
    const [isCardSelected, setIsCardSelected] = useState(false);

    const fanAnimation = useCardFanAnimation({
      cardCount: 5,
      spreadAngle: 60,
      cardDimensions,
      currentRound,
      sessionStarted, // Pass sessionStarted to the hook
    });

    // Initialisiere Karten und starte Animation
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

        // Starte Fan-Animation mit Verzögerung
        const timer = setTimeout(() => {
          fanAnimation.animateToFan().start(() => {
            // Safely call onAnimationComplete if it exists
            if (typeof onAnimationComplete === "function") {
              onAnimationComplete();
            }
          });
        }, 300);

        return () => clearTimeout(timer);
      }
    }, [currentRound, predeterminedCards, sessionStarted, onAnimationComplete]); // Add onAnimationComplete to dependencies

    // Nach Karteninitalisierung die Anleitung einblenden
    useEffect(() => {
      if (cards.length > 0 && !cards.some((c) => c.isSelected)) {
        const timer = setTimeout(() => {
          setShowInstruction(true);
          Animated.timing(instructionOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }).start();
        }, 1000); // Verzögerung nach Kartenanimation

        return () => clearTimeout(timer);
      }
    }, [cards]);

    // Update card selection logic mit Animation und Verzögerung
    const handleCardSelect = (card: ISelectedAndShownCard) => {
      if (cards.some((c) => c.isSelected) || isCardSelected) return;

      // Karte als selektiert markieren
      setIsCardSelected(true);

      // Anleitung ausblenden
      Animated.timing(instructionOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setShowInstruction(false);

        // Karten aktualisieren
        setCards((prevCards) =>
          prevCards.map((c) => ({
            ...c,
            showFront: c === card ? true : false,
            isSelected: c === card ? true : false,
          }))
        );

        // Nach Animation die Auswahl an Parent weitergeben
        setTimeout(() => {
          onCardSelect({
            ...card,
            showFront: true,
            isSelected: true,
          });
        }, 100);
      });
    };

    return (
      <View style={styles.container}>
        <View style={styles.glowContainer} />

        {/* Instruction Container über den Karten */}
        {showInstruction && (
          <Animated.View
            style={[
              styles.instructionContainer,
              { opacity: instructionOpacity },
            ]}
          >
            <Text style={styles.instructionText}>
              Tippe auf den Stapel, um die nächste Karte zu ziehen
            </Text>
          </Animated.View>
        )}

        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <Animated.View
              key={`${currentRound}-${index}`}
              style={[
                styles.animatedCard,
                {
                  zIndex: cards.length - index,
                  transform: [
                    { translateY: fanAnimation.translateY[index] },
                    { translateX: fanAnimation.translateX[index] },
                    {
                      rotate: fanAnimation.rotations[index].interpolate({
                        inputRange: [-30, 30],
                        outputRange: ["-30deg", "30deg"],
                      }),
                    },
                    { scale: fanAnimation.scales[index] },
                  ],
                },
              ]}
            >
              <Pressable
                style={styles.cardPressable}
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
  glowContainer: {
    position: "absolute",
    width: 500, // Even larger size for more spread
    height: 500,
    borderRadius: 250,
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        shadowColor: "#FFD700",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 100,
      },
      android: {
        backgroundColor: "rgba(255,215,0,0.05)",
        borderWidth: 50,
        borderColor: "rgba(255,215,0,0.03)",
        elevation: 25,
      },
    }),
  },
  // For Android, add additional glow layers
  glowInner: Platform.select({
    android: {
      position: "absolute",
      width: 360,
      height: 360,
      borderRadius: 180,
      backgroundColor: "rgba(255,215,0,0.12)",
      borderWidth: 25,
      borderColor: "rgba(255,215,0,0.08)",
      top: 20,
      left: 20,
    },
    default: {},
  }),
  glowOuter: Platform.select({
    android: {
      position: "absolute",
      width: 440,
      height: 440,
      borderRadius: 220,
      backgroundColor: "rgba(255,215,0,0.03)",
      borderWidth: 35,
      borderColor: "rgba(255,215,0,0.02)",
      top: -20,
      left: -20,
      elevation: 20,
    },
    default: {},
  }),
  // Add extra glow layers for Android
  glowExtraOuter: Platform.select({
    android: {
      position: "absolute",
      width: 480,
      height: 480,
      borderRadius: 240,
      backgroundColor: "rgba(255,215,0,0.01)",
      borderWidth: 40,
      borderColor: "rgba(255,215,0,0.01)",
      top: -40,
      left: -40,
      elevation: 15,
    },
    default: {},
  }),
  animatedCard: {
    position: "absolute",
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
      },
      android: {
        elevation: 10,
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
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardName: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  instructionText: {
    // Bestehender Style, aber ohne Positionierungsangaben
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    // Entferne die position, left, right, etc. hier
  },
  instructionContainer: {
    position: "absolute",
    top: 80, // oder wo du es haben möchtest
    left: 20,
    right: 20,
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 20,
    padding: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

CardStackView.displayName = "CardStackView";

export default CardStackView;
