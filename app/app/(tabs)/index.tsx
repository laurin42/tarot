import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CardStackView from "@/components/ui/CardStackView";
import DrawnCardsDisplay from "@/components/DrawnCardsDisplay";
import { ICardWithShowFront, tarotCards } from "@/constants/tarotcards";
import FetchCardExplanation from "@/components/FetchCardExplanation";
import SummaryView from "@/components/SummaryView";

export default function Index() {
  const [cardsDrawn, setCardsDrawn] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedCards, setSelectedCards] = useState<ICardWithShowFront[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnimationComplete = () => {
    setCardsDrawn(true);
    console.log("Die Animation wurde abgeschlossen!");
  };

  const handleCardSelect = (card: ICardWithShowFront) => {
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

  return (
    <View style={styles.container}>
      <CardStackView
        onAnimationComplete={handleAnimationComplete}
        onCardSelect={handleCardSelect}
      />
      {cardsDrawn && (
        <View style={styles.drawnCardsContainer}>
          <DrawnCardsDisplay selectedCards={selectedCards} />
        </View>
      )}

      {showSummary && (
        <SummaryView cards={selectedCards} onDismiss={handleDismissSummary} />
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
});
