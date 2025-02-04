// app/app/components/DrawnCardsDisplay.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import TarotCard from "./TarotCard";
import { ITarotCard } from "@/constants/tarotcards";

const screenWidth = Dimensions.get("screen").width;

interface DrawnCardsDisplayProps {
  cards: ITarotCard[];
}

export default function DrawnCardsDisplay({ cards }: DrawnCardsDisplayProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [explanations, setExplanations] = useState<{ [key: string]: string }>(
    {}
  );

  const handleCardPress = (cardId: string, cardName: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <View className="flex-1 items-center justify-center mt-12">
      {[...cards].reverse().map((card, index) => (
        <TouchableOpacity
          key={card.id}
          onPress={() => handleCardPress(card.id, card.name)}
          className="absolute shadow-lg" // Tailwind-Klassen direkt hier
          style={{
            zIndex: expandedCard === card.id ? 1000 : cards.length - index,
            transform: [
              { translateY: -index * 20 },
              { scale: expandedCard === card.id ? 1 : 1 },
            ],
          }}
        >
          <TarotCard image={card.image} name={card.name} isShown={true} />

          {expandedCard === card.id && (
            <View
              className="absolute top-0 w-80 h-[500px] bg-white/95 rounded-xl p-4 shadow-xl" // Tailwind-Klassen
              style={{ elevation: 10 }} // Android Schatten
            >
              <Text className="text-base leading-6 text-gray-800">
                {explanations[card.id] || "Lade Erklärung..."}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
