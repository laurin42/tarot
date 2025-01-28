// app/app/components/DrawnCardsDisplay.tsx
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import TarotCard from "./TarotCard";
import { ITarotCard } from "@/constants/tarotcards";
import FetchCardExplanation from "./FetchCardExplanation";

interface FetchCardExplanationProps {
  cardName: string;
}

interface DrawnCardsDisplayProps {
  cards: ITarotCard[];
}

export default function DrawnCardsDisplay({ cards }: DrawnCardsDisplayProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const screenWidth = Dimensions.get("window").width;

  const handleCardPress = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <View style={styles.container}>
      {cards.reverse().map((card, index) => (
        <TouchableOpacity
          key={card.id}
          activeOpacity={0.8}
          onPress={() => handleCardPress(card.id)}
          style={[
            styles.cardWrapper,
            {
              zIndex: cards.length - index,
              transform: [
                { translateY: -index * 20 }, // Stapeleffekt
                { scale: expandedCard === card.id ? 1.05 : 1 },
              ],
            },
          ]}
        >
          <TarotCard
            image={card.image}
            name={card.name}
            isShown={true}
            showExplanation={expandedCard === card.id}
          />
          <FetchCardExplanation />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  cardWrapper: {
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
