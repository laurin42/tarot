import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TarotCard from "./TarotCard";
import { ISelectedAndShownCard } from "@/constants/tarotcards";

interface DrawnCardsDisplayProps {
  selectedCards: ISelectedAndShownCard[];
  onDismiss: () => void;
  currentRound: number;
}

export default function DrawnCardsDisplay({
  selectedCards,
  onDismiss,
  currentRound,
}: DrawnCardsDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(currentRound);

  const cardWidth = 200;
  const cardHeight = cardWidth * 1.6;

  const handleNextCard = () => {
    if (currentIndex === selectedCards.length - 1) {
      onDismiss(); // Dies triggert handleDismissExplanation im Parent
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <View
        style={{
          width: "90%",
          height: "80%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(17, 24, 39, 0.95)",
          borderRadius: 12,
          padding: 16,
          alignSelf: "center",
        }}
      >
        <TarotCard
          image={selectedCards[currentIndex].image}
          name={selectedCards[currentIndex].name}
          isShown={true}
          style={{
            width: cardWidth,
            height: cardHeight,
          }}
        />

        <View className="w-full mt-5 p-4 bg-black/80 rounded-lg">
          <Text className="text-white text-base text-center">
            {selectedCards[currentIndex].explanation}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNextCard}
          className="mt-5 px-6 py-3 bg-orange-600/90 rounded-lg"
        >
          <Text className="text-white text-base font-semibold">
            {currentIndex === selectedCards.length - 1
              ? currentRound === 2
                ? "Deutung anzeigen"
                : "Nächste Runde"
              : "Nächste Karte"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
