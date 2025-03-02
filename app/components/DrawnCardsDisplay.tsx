import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
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

  const handleNextCard = () => {
    if (currentIndex === selectedCards.length - 1) {
      onDismiss();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.cardTitle}>{selectedCards[currentIndex].name}</Text>

        <View style={styles.cardWrapper}>
          <TarotCard
            image={selectedCards[currentIndex].image}
            isShown={true}
            style={styles.card}
          />
        </View>

        <View style={styles.explanationContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={true}
          >
            <Text style={styles.explanationText}>
              {selectedCards[currentIndex].explanation}
            </Text>
          </ScrollView>

          <TouchableOpacity onPress={handleNextCard} style={styles.button}>
            <Text style={styles.buttonText}>
              {currentIndex === selectedCards.length - 1
                ? currentRound === 2
                  ? "Deutung anzeigen"
                  : "Nächste Karte"
                : "Nächste Karte"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  container: {
    width: "90%",
    maxHeight: "90%",
    alignItems: "center",
    backgroundColor: "rgba(17, 24, 39, 0.98)",
    borderRadius: 16,
    padding: 20, // Reduced from 24
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  cardTitle: {
    color: "#A78BFA",
    fontSize: 24, // Reduced from 28
    fontWeight: "bold",
    marginBottom: 24, // Reduced from 32
    textAlign: "center",
  },
  cardWrapper: {
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  card: {
    width: 160, // Reduced from 200
    height: 256, // Reduced from 320
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.2)",
  },
  explanationContainer: {
    width: "100%",
    marginTop: 24, // Reduced from 32
    flex: 1.5, // Increased from 1 to give more space to text
    backgroundColor: "rgba(17, 24, 39, 0.95)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    overflow: "hidden", // Ensures content doesn't overflow
    display: "flex", // Ensures proper flex layout
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  scrollView: {
    flex: 1, // Takes remaining space
    padding: 20, // Adjusted padding
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  explanationText: {
    color: "#F3F4F6",
    fontSize: 17, // Slightly reduced from 18
    lineHeight: 26, // Adjusted for better readability
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "rgba(124, 58, 237, 0.9)",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    marginTop: "auto", // Pushes button to bottom
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
