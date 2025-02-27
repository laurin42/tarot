import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import CardImage from "@/components/CardImage";

interface SummaryViewProps {
  cards: ISelectedAndShownCard[];
  onDismiss: () => void;
}

const SummaryView: React.FC<SummaryViewProps> = ({ cards, onDismiss }) => {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch(
          "http://192.168.2.187:8000/tarot/summary",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ cards }),
          }
        );

        if (!response.ok) {
          throw new Error("Fehler beim Laden der Zusammenfassung");
        }

        const data = await response.json();
        setSummary(data.summary);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ein Fehler ist aufgetreten"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [cards]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deine Kartenlegung</Text>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <View key={index} style={styles.card}>
              <CardImage
                name={card.name}
                showFront={true}
                width={100}
                height={160}
                image={card.image}
              />
              <Text style={styles.cardName}>{card.name}</Text>
              <Text style={styles.cardPosition}>
                {index === 0
                  ? "Aktuelle Situation"
                  : index === 1
                  ? "Herausforderung"
                  : index === 2
                  ? "Ratschlag"
                  : ""}
              </Text>
            </View>
          ))}
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <Text style={styles.summaryText}>{summary}</Text>
        )}
      </ScrollView>
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
  scrollContainer: {
    width: "100%",
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
  cardPosition: {
    color: "white",
    marginTop: 5,
  },
  summaryText: {
    color: "white",
    marginTop: 20,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginTop: 20,
    textAlign: "center",
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
