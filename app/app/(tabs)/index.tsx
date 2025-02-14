import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, Dimensions } from "react-native";
import CardStackView from "@/components/ui/CardStackView";
import DrawnCardsDisplay from "@/components/DrawnCardsDisplay";
import { ISelectedAndShownCard, tarotCards } from "@/constants/tarotcards";
import FetchCardExplanation from "@/components/FetchCardExplanation";
import SummaryView from "@/components/SummaryView";

export default function Index() {
  const { width, height } = Dimensions.get("window");

  // Responsive Dimensionen
  const baseCardWidth = width > 400 ? 150 : 100;
  const cardDimensions = {
    width: baseCardWidth,
    height: baseCardWidth * 1.6,
    spacing: baseCardWidth * 0.52, // 52% der Kartenbreite für den Abstand
  };

  // Positionen für die gezogenen Karten
  const drawnSlotPositions = [
    { x: 20, y: height * 0.5 }, // 50% der Bildschirmhöhe
    { x: (width - cardDimensions.width) / 2, y: height * 0.5 },
    { x: width - cardDimensions.width - 20, y: height * 0.5 },
  ];

  const [cardsDrawn, setCardsDrawn] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedCards, setSelectedCards] = useState<ISelectedAndShownCard[]>(
    []
  );
  const [showSummary, setShowSummary] = useState(false);

  const handleAnimationComplete = () => {
    setCardsDrawn(true);
    console.log("Die Animation wurde abgeschlossen!");
  };

  const handleCardSelect = (card: ISelectedAndShownCard) => {
    setSelectedCards((prev) => [...prev, card]);
    setSelectedCard(card.name);
  };

  const handleDismissExplanation = () => {
    setSelectedCard(null);
    if (selectedCards.length === 3) {
      setShowSummary(true);
    }
  };

  const handleSwipeLeft = () => {
    setSelectedCard(null);
  };

  const handleSwipeRight = () => {
    setSelectedCard(null);
  };

  const handleDismissSummary = () => {
    setShowSummary(false);
    setSelectedCards([]);
    setCardsDrawn(false);
  };

  const handleStartSession = () => {
    setSessionStarted(true);
  };

  return (
    <View style={styles.container}>
      {!sessionStarted ? (
        <Pressable
          style={[styles.startButton, { bottom: height * 0.05 }]}
          onPress={handleStartSession}
        >
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      ) : (
        <CardStackView
          onAnimationComplete={handleAnimationComplete}
          onCardSelect={handleCardSelect}
          sessionStarted={sessionStarted}
          cardDimensions={cardDimensions}
          drawnSlotPositions={drawnSlotPositions}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a202c",
  },
  drawnCardsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    position: "absolute",
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
