import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TarotCard from "./TarotCard";
import { ISelectedAndShownCard, ITarotCard } from "@/constants/tarotcards";

const { width: screenWidth } = Dimensions.get("screen");

interface DrawnCardsDisplayProps {
  selectedCards: ISelectedAndShownCard[];
}

export default function DrawnCardsDisplay({
  selectedCards,
}: DrawnCardsDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [explanations, setExplanations] = useState<{ [key: string]: string }>(
    {}
  );

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
