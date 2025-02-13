import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import CardImage from "@/components/CardImage";

interface SummaryViewProps {
  cards: ISelectedAndShownCard[];
  onDismiss: () => void;
}

const SummaryView: React.FC<SummaryViewProps> = ({ cards, onDismiss }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zusammenfassung</Text>
      <View style={styles.cardsContainer}>
        {cards.map((card, index) => (
          <View key={index} style={styles.card}>
            <CardImage
              name={card.name}
              showFront={true}
              width={100}
              height={160}
            />
            <Text style={styles.cardName}>{card.name}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={onDismiss} style={styles.dismissButton}>
        <Text style={styles.dismissButtonText}>Schließen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  card: {
    alignItems: "center",
  },
  cardName: {
    color: "white",
    marginTop: 10,
  },
  dismissButton: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  dismissButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SummaryView;
