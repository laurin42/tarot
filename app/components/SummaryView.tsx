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
              <Text style={styles.cardName}>{card.name}</Text>
              <TarotCard
                image={card.image}
                isShown={true}
                style={{
                  width: 100,
                  height: 160,
                }}
                name={card.name}
              />
              <Text style={styles.cardText}>
                {index === 0 ? "Lage" : index === 1 ? "Problem" : "Ratschlag"}
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
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  cardWrapper: {
    alignItems: "center",
    width: "31%",
    maxWidth: 120,
    minHeight: 280,
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
  cardName: {
    color: "#A78BFA",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
    height: 40,
    flexWrap: "wrap",
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
    marginTop: 16,
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
});

export default SummaryView;
