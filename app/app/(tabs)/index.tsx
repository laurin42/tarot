import React, { useState, useEffect } from "react";
import { View, Pressable, Text, Dimensions } from "react-native";
import CardStackView from "@/components/CardStackView";
import DrawnCardsDisplay from "@/components/DrawnCardsDisplay";
import { getRandomDrawnCards } from "@/components/DrawnCardsPool";
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
  const [currentRound, setCurrentRound] = useState(0);
  const [predeterminedCards, setPredeterminedCards] = useState<
    ISelectedAndShownCard[]
  >([]);

  // Laden der vorbestimmten Karten beim Start
  useEffect(() => {
    if (sessionStarted) {
      const loadPredeterminedCards = async () => {
        const cards = await getRandomDrawnCards();
        setPredeterminedCards(cards);
      };
      loadPredeterminedCards();
    }
  }, [sessionStarted]);

  const handleAnimationComplete = () => {
    setCardsDrawn(true);
    console.log("Die Animation wurde abgeschlossen!");
  };

  const handleCardSelect = (selectedCard: ISelectedAndShownCard) => {
    if (selectedCard.explanation) {
      setSelectedCard(selectedCard.name);
      setSelectedCards((prev) => [...prev, selectedCard]);
    }
  };

  const handleDismissExplanation = () => {
    setSelectedCard(null); // Entfernt die Kartenansicht
    setCurrentRound((prev) => {
      const nextRound = prev + 1;
      // Wenn wir bei Runde 3 sind, zeige Zusammenfassung
      if (nextRound === 3) {
        setShowSummary(true);
      }
      return nextRound;
    });
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
    <View className="flex-1 bg-gray-900 relative">
      {!sessionStarted ? (
        <Pressable
          className="absolute self-center bg-orange-600/90 px-4 py-4 rounded-lg z-50"
          style={{ bottom: height * 0.05 }}
          onPress={handleStartSession}
        >
          <Text className="text-white text-base font-bold">Start</Text>
        </Pressable>
      ) : (
        <>
          <CardStackView
            onAnimationComplete={handleAnimationComplete}
            onCardSelect={handleCardSelect}
            sessionStarted={sessionStarted}
            cardDimensions={cardDimensions}
            drawnSlotPositions={drawnSlotPositions}
            currentRound={currentRound}
          />

          {selectedCard ? (
            <View className="absolute inset-0 z-50">
              <DrawnCardsDisplay
                selectedCards={selectedCards}
                onDismiss={handleDismissExplanation}
                currentRound={currentRound}
              />
            </View>
          ) : null}
        </>
      )}
    </View>
  );
}
function setExplanation(explanation: string) {
  throw new Error("Function not implemented.");
}
