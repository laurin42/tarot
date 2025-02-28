import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
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

        <View style={styles.explanationBox}>
          <Text style={styles.explanationText}>
            {selectedCards[currentIndex].explanation}
          </Text>
        </View>

        <TouchableOpacity onPress={handleNextCard} style={styles.button}>
          <Text style={styles.buttonText}>
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
    padding: 24,
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
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
    width: 200,
    height: 320,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.2)",
  },
  explanationBox: {
    width: "100%",
    marginTop: 32,
    padding: 24,
    backgroundColor: "rgba(17, 24, 39, 0.95)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  explanationText: {
    color: "#F3F4F6",
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
  },
  button: {
    marginTop: 32,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "rgba(124, 58, 237, 0.9)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.5)",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
