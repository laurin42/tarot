import React, { useState } from "react";
import { View, Pressable, Text, Dimensions } from "react-native";
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
    spacing: baseCardWidth * 0.52,
  };

  // Positionen für die gezogenen Karten
  const drawnSlotPositions = [
    { x: 20, y: height * 0.5 },
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
    <View className="flex-1 bg-gray-900">
      {!sessionStarted ? (
        <Pressable
          className="absolute self-center bg-orange-600/90 px-4 py-4 rounded-lg z-50"
          style={{ bottom: height * 0.05 }}
          onPress={handleStartSession}
        >
          <Text className="text-white text-base font-bold">Start</Text>
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
