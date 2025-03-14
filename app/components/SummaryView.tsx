import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Platform,
} from "react-native";
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import TarotCard from "@/components/TarotCard";
import { storage } from "../utils/storage"; // Import storage utility

interface SummaryViewProps {
  cards: ISelectedAndShownCard[];
  onDismiss: () => void;
}

const SummaryView: React.FC<SummaryViewProps> = ({ cards, onDismiss }) => {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  const saveSummaryReading = async (
    cards: ISelectedAndShownCard[],
    summary: string
  ) => {
    try {
      const token = await storage.getItem("userToken");
      if (!token) return;

      const sessionId = `reading_${Date.now()}`;

      // Save the summary as an additional record
      const summaryHeaders: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      await fetch(
        `${
          process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000"
        }/tarot/reading-summary`,
        {
          method: "POST",
          headers: summaryHeaders,
          body: JSON.stringify({
            sessionId,
            summary,
            cardNames: cards.map((card) => card.name),
          }),
        }
      );

      console.log("✅ Complete reading saved with summary");
    } catch (error) {
      console.error("Failed to save reading:", error);
    }
  };

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        // Get authentication token if available
        const token = await storage.getItem("userToken");

        // Prepare headers
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        // Add authorization header if token exists
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(
          `${
            process.env.EXPO_PUBLIC_API_URL || "http://192.168.2.187:8000"
          }/tarot/summary`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({ cards }),
          }
        );

        if (!response.ok) {
          console.error("Summary API error:", response.status);
          throw new Error(
            `Fehler beim Laden der Zusammenfassung (${response.status})`
          );
        }

        const data = await response.json();
        setSummary(data.summary);

        // Save the complete reading with summary
        if (data.summary) {
          saveSummaryReading(cards, data.summary);
        }
      } catch (err) {
        console.error("Summary fetch error:", err);
        setError(
          err instanceof Error ? err.message : "Ein Fehler ist aufgetreten"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [cards]);

  const handleCardPress = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deine Kartenlegung</Text>

      <ScrollView>
        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cardWrapper}
              onPress={() => handleCardPress(index)}
            >
              <View style={styles.cardNameWrapper}>
                <Text
                  style={styles.cardName}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {card.name}
                </Text>
              </View>
              <TarotCard
                image={card.image}
                isShown={true}
                style={{
                  width: 100,
                  height: 160,
                }}
              />
              <Text style={styles.labelText}>
                {index === 0
                  ? "Gegenwart"
                  : index === 1
                  ? "Konflikt"
                  : "Perspektive"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : error ? (
          <Text className="text-red-500 mt-5 text-center">{error}</Text>
        ) : (
          <View style={styles.summaryContainer}>
            <Text className="text-white text-base text-center">{summary}</Text>
          </View>
        )}
      </ScrollView>

      <Modal
        visible={selectedCardIndex !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedCardIndex(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedCardIndex !== null && (
              <>
                <Text style={styles.modalTitle}>
                  {cards[selectedCardIndex].name}
                </Text>
                <Text style={styles.modalText}>
                  {cards[selectedCardIndex].explanation}
                </Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setSelectedCardIndex(null)}
                >
                  <Text style={styles.buttonText}>Schließen</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={onDismiss}>
        <Text style={styles.buttonText}>Neue Legung beginnen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(17, 24, 39, 0.98)",
    padding: 16,
    alignItems: "center",
  },
  title: {
    color: "#A78BFA",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 24,
    paddingHorizontal: 48,
    ...Platform.select({
      ios: {
        textShadowColor: "rgba(167, 139, 250, 0.5)",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
      },
    }),
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 4, // ggf. reduzieren
  },
  cardWrapper: {
    alignItems: "center",
    width: "31%",
    maxWidth: 120,
    // minHeight: 280, // entfernen oder verkleinern
    justifyContent: "flex-start",
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cardNameWrapper: {
    height: 36,
    justifyContent: "center",
    marginBottom: 8,
  },
  cardName: {
    color: "#A78BFA",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 18,
    overflow: "hidden",
  },
  cardText: {
    color: "#F3F4F6",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    height: 20,
  },
  summaryContainer: {
    backgroundColor: "rgba(31, 41, 55, 0.95)",
    borderRadius: 16,
    padding: 24,
    marginTop: 24,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "rgba(31, 41, 55, 0.98)",
    borderRadius: 16,
    padding: 24,
    width: "90%",
    maxHeight: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
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
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  modalText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "rgba(249, 115, 22, 0.9)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
  },
  modalButton: {
    backgroundColor: "rgba(249, 115, 22, 0.9)",
    padding: 12,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  labelText: {
    color: "rgba(249, 115, 22, 0.4)",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
});

export default SummaryView;
