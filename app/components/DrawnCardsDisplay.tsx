// app/app/components/DrawnCardsDisplay.tsx
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import TarotCard from "./TarotCard";
import { ITarotCard } from "@/constants/tarotcards";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

interface DrawnCardsDisplayProps {
  cards: ITarotCard[];
}

export default function DrawnCardsDisplay({ cards }: DrawnCardsDisplayProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [explanations, setExplanations] = useState<{ [key: string]: string }>(
    {}
  );

  const handleCardPress = async (cardId: string, cardName: string) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
      return;
    }

    if (!explanations[cardId]) {
      try {
        const formattedName = encodeURIComponent(
          cardName.toLowerCase().replace(/ /g, "_")
        );
        const res = await fetch(
          `http://192.168.178.67:8000/tarot/cards/${formattedName}`
        );
        const data = await res.json();

        setExplanations((prev) => ({
          ...prev,
          [cardId]: data.explanation,
        }));
      } catch (err) {
        setExplanations((prev) => ({
          ...prev,
          [cardId]: "Erklärung konnte nicht geladen werden",
        }));
      }
    }

    setExpandedCard(cardId);
  };

  return (
    <View style={styles.container}>
      {[...cards].reverse().map((card, index) => (
        <TouchableOpacity
          key={card.id}
          onPress={() => handleCardPress(card.id, card.name)}
          style={[
            styles.cardWrapper,
            {
              zIndex: expandedCard === card.id ? 1000 : cards.length - index,
              transform: [
                { translateY: -index * 20 },
                { scale: expandedCard === card.id ? 1 : 1 },
              ],
            },
          ]}
        >
          <TarotCard image={card.image} name={card.name} isShown={true} />

          {expandedCard === card.id && (
            <View style={styles.explanationBubble}>
              <Text>{explanations[card.id] || "Lade Erklärung..."}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

// Styling für die Erklärung
const styles = StyleSheet.create({
  explanationBubble: {
    position: "absolute",
    top: 0,
    width: screenWidth * 0.8,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 10,
  },
  explanationText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#2c3e50",
  },
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
