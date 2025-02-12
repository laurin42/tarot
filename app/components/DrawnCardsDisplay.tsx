import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TarotCard from "./TarotCard";
import { ITarotCard } from "@/constants/tarotcards";

const { width: screenWidth } = Dimensions.get("screen");

interface DrawnCardsDisplayProps {
  selectedCards: ITarotCard[];
}

export default function DrawnCardsDisplay({
  selectedCards,
}: DrawnCardsDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [explanations, setExplanations] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    if (selectedCards.length > 0) {
      storeDrawnCard(selectedCards[currentIndex], currentIndex);
      if (!explanations[selectedCards[currentIndex].name]) {
        fetchCardExplanation(selectedCards[currentIndex].name);
      }
    }
  }, [selectedCards, currentIndex]);

  const storeDrawnCard = async (card: ITarotCard, index: number) => {
    try {
      const response = await fetch(
        "http://192.168.178.67:8000/tarot/drawn-card",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ card, index }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Fehler beim Speichern der gezogenen Karte: ${errorData.details}`
        );
      }
      console.log("Drawn card saved successfully");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  const fetchCardExplanation = async (cardName: string) => {
    try {
      const formattedName = cardName.toLowerCase().replace(/ /g, "_");
      const response = await fetch(
        `http://192.168.178.67:8000/tarot/cards/${formattedName}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setExplanations((prev) => ({ ...prev, [cardName]: data.explanation }));
    } catch (error) {
      console.error("Error fetching card explanation:", error);
      setExplanations((prev) => ({
        ...prev,
        [cardName]: "Erklärung konnte nicht geladen werden",
      }));
    }
  };

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  const handleDismiss = () => {
    const newIndex = (currentIndex + 1) % selectedCards.length;
    setCurrentIndex(newIndex);
    setExpanded(false);
  };

  const cardWidth = 200;
  const cardHeight = cardWidth * 1.6;

  return (
    <View style={styles.container}>
      {selectedCards.length > 0 && (
        <View style={{ flex: 1 }}>
          <View style={styles.center}>
            <TouchableOpacity onPress={handleCardClick}>
              <TarotCard
                image={selectedCards[currentIndex].image}
                name={selectedCards[currentIndex].name}
                isShown={true}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: [{ scale: expanded ? 1.1 : 1 }],
                }}
              />
              <Text style={styles.cardName}>
                {selectedCards[currentIndex].name}
              </Text>
            </TouchableOpacity>
          </View>
          {expanded && (
            <View style={styles.explanationContainer}>
              <Text style={styles.explanationText}>
                {explanations[selectedCards[currentIndex].name]}
              </Text>
              <TouchableOpacity
                onPress={handleDismiss}
                style={styles.dismissButton}
              >
                <Text style={styles.dismissButtonText}>Schließen</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      <View style={styles.stackIndicator}>
        {selectedCards.map((_, index) => (
          <View
            key={index}
            style={[
              styles.stackIndicatorItem,
              index === currentIndex && styles.stackIndicatorActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    marginBottom: 88,
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  stackIndicator: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  stackIndicatorItem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 4,
  },
  stackIndicatorActive: { backgroundColor: "white" },
  cardName: {
    color: "yellow",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  explanationContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
  },
  explanationText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  dismissButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 5,
    alignItems: "center",
  },
  dismissButtonText: {
    color: "white",
    fontSize: 16,
  },
});
