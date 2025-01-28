// app/app/tabs/index.tsx
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import CardStackAnimator from "@/components/ui/CardStackAnimator";
import DrawnCardsDisplay from "@/components/DrawnCardsDisplay";
import { tarotCards, ITarotCard } from "@/constants/tarotcards";

export default function HomeScreen() {
  const [selectedCards, setSelectedCards] = useState<ITarotCard[]>([]);

  const handlePullCards = () => {
    // Zufällige 3 Karten auswählen
    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    setSelectedCards(shuffled.slice(0, 3));
  };

  return (
    <View style={styles.container}>
      {selectedCards.length === 0 ? (
        <CardStackAnimator onAnimationComplete={handlePullCards} />
      ) : (
        <>
          <DrawnCardsDisplay cards={selectedCards} />
          <Pressable
            style={styles.resetButton}
            onPress={() => setSelectedCards([])}
          >
            <Text style={styles.resetText}>Neue Karten ziehen</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  resetButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#8b0000",
    padding: 15,
    borderRadius: 10,
  },
  resetText: {
    color: "white",
    fontWeight: "bold",
  },
});
