import React, { useState, useEffect } from "react";
import { View, Pressable, Text, Dimensions } from "react-native";
import CardStackView from "@/components/CardStackView";
import DrawnCardsDisplay from "@/components/DrawnCardsDisplay";
import { getRandomDrawnCards } from "@/components/DrawnCardsPool";
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import SummaryView from "@/components/SummaryView";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importiere AsyncStorage

export default function Index() {
  const { width, height } = Dimensions.get("window");

  const baseCardWidth = width > 400 ? 150 : 100;
  const cardDimensions = {
    width: baseCardWidth,
    height: baseCardWidth * 1.6,
    spacing: baseCardWidth * 0.52,
  };

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

  useEffect(() => {
    if (sessionStarted) {
      (async () => {
        const cards = await getRandomDrawnCards();
        setPredeterminedCards(cards);
        await saveDrawnCards(cards); // Hier aufrufen
      })();
    }
  }, [sessionStarted]);

  const handleAnimationComplete = () => {
    setCardsDrawn(true);
  };

  const handleCardSelect = (selectedCard: ISelectedAndShownCard) => {
    setSelectedCard(selectedCard.name);
    setSelectedCards((prev) => [...prev, selectedCard]);
  };

  const handleDismissExplanation = () => {
    setSelectedCard(null);
    setCurrentRound((prev) => prev + 1);
  };

  const handleDismissSummary = () => {
    setShowSummary(false);
    setSessionStarted(false);
    setSelectedCards([]);
    setCurrentRound(0);
  };

  const handleStartSession = () => {
    setSessionStarted(true);
  };

  return (
    <View className="flex-1 relative bg-gray-900">
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
          {currentRound < 3 ? (
            <View className="flex-1 items-center justify-center">
              <CardStackView
                onAnimationComplete={handleAnimationComplete}
                onCardSelect={handleCardSelect}
                sessionStarted={sessionStarted}
                cardDimensions={cardDimensions}
                drawnSlotPositions={drawnSlotPositions}
                currentRound={currentRound}
              />
            </View>
          ) : null}

          {selectedCard ? (
            <View className="absolute inset-0 z-50">
              <DrawnCardsDisplay
                selectedCards={selectedCards}
                onDismiss={handleDismissExplanation}
                currentRound={currentRound}
              />
            </View>
          ) : null}

          {currentRound === 3 ? (
            <View className="absolute inset-0 z-50">
              <SummaryView
                cards={selectedCards}
                onDismiss={handleDismissSummary}
              />
            </View>
          ) : null}
        </>
      )}
    </View>
  );
}

function saveDrawnCards(cards: ISelectedAndShownCard[]) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) {
        console.warn("No user token found, skipping save to database");
        resolve();
        return;
      }

      await Promise.all(
        cards.map(async (card, index) => {
          try {
            const headers = {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            };

            const saveResponse = await fetch(
              `${
                process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000"
              }/tarot/drawn-card`,
              {
                method: "POST",
                headers,
                body: JSON.stringify({
                  name: card.name,
                  description: card.explanation,
                  position: index, // Store card position (0=situation, 1=problem, 2=advice)
                }),
              }
            );

            if (saveResponse.ok) {
              console.log(`✅ Card saved to user history: ${card.name}`);
            } else {
              console.error(
                `❌ Failed to save card: ${card.name}`,
                await saveResponse.text()
              );
            }
          } catch (saveError) {
            console.error("Failed to save card:", saveError);
          }
        })
      );

      console.log("✅ All drawn cards saved to database");
      resolve();
    } catch (error) {
      console.error("Failed to save drawn cards:", error);
      reject(error);
    }
  });
}
