import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
  StyleSheet,
  Platform,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from "react-native";
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import TarotCard from "@/components/TarotCard";
import { storage } from "../utils/storage"; // Import storage utility
import { Shadow } from "react-native-shadow-2";

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
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);

  // Füge einen Ref für den ScrollView hinzu
  const summaryScrollViewRef = useRef<ScrollView>(null);

  // Scroll-Handler um zu erkennen, wann der Benutzer das Ende erreicht hat
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20; // Einen kleinen Puffer hinzufügen
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;

    if (isCloseToBottom) {
      setHasScrolledToEnd(true);
    }
  };

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

  // Geräteabmessungen erhalten
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  // Dynamische Größen berechnen
  const cardWidth = screenWidth * 0.25; // ~31% mit etwas Abstand
  const cardHeight = cardWidth * 1.6; // Typisches Kartenverhältnis
  const labelHeight = screenHeight * 0.025;
  const nameHeight = screenHeight * 0.045;

  return (
    <View style={styles.container}>
      <ScrollView
        ref={summaryScrollViewRef}
        style={styles.mainScrollView}
        onScroll={handleScroll}
        scrollEventThrottle={400}
      >
        <Text style={styles.title}>Deine Kartenlegung</Text>

        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <View key={index} style={styles.cardWrapper}>
              {/* 1. Label Text mit fester Höhe */}
              <Text style={styles.labelText}>
                (
                {index === 0
                  ? "Gegenwart"
                  : index === 1
                  ? "Konflikt"
                  : "Perspektive"}
                )
              </Text>

              {/* 2. Tarot Card in Container mit fester Höhe */}
              <View style={styles.cardImageContainer}>
                <TouchableOpacity onPress={() => handleCardPress(index)}>
                  <Shadow
                    distance={8}
                    startColor="rgba(139, 92, 246, 0.4)"
                    endColor="rgba(139, 92, 246, 0.0)"
                    offset={[0, 0]}
                  >
                    <TarotCard
                      image={card.image}
                      isShown={true}
                      style={{
                        width: cardWidth,
                        height: cardWidth * 1.6,
                        borderRadius: 8,
                      }}
                    />
                  </Shadow>
                </TouchableOpacity>
              </View>

              {/* 3. Card Name mit fester Höhe */}
              <View style={styles.cardNameWrapper}>
                <Text
                  style={styles.cardName}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {card.name}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : error ? (
          <Text className="text-red-500 mt-5 text-center">{error}</Text>
        ) : (
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>{summary}</Text>

            {hasScrolledToEnd && (
              <TouchableOpacity
                style={styles.summaryButtonFullWidth}
                onPress={onDismiss}
              >
                <Text style={styles.buttonText}>Neue Legung beginnen</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Ein leerer Abstandshalter, um sicherzustellen, dass der Benutzer scrollen kann */}
        <View style={{ height: 40 }} />
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

                <ScrollView
                  style={styles.modalScrollView}
                  contentContainerStyle={styles.modalScrollContent}
                  showsVerticalScrollIndicator={true}
                >
                  <Text style={styles.modalText}>
                    {cards[selectedCardIndex].explanation}
                  </Text>
                </ScrollView>

                <TouchableOpacity
                  style={styles.modalButtonFullWidth}
                  onPress={() => setSelectedCardIndex(null)}
                >
                  <Text style={styles.buttonText}>Schließen</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
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
    justifyContent: "space-evenly", // Von space-between zu space-evenly ändern
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 8, // Von 16 auf 8 reduziert, um mehr Platz am Rand zu geben
    marginBottom: 4,
  },
  // Verbesserter cardWrapper mit stärkerem Glow-Effekt
  cardWrapper: {
    alignItems: "center",
    width: "29%", // Von 31% auf 29% reduziert
    maxWidth: "30%", // Von 33% auf 30% reduziert
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    flexDirection: "column", // Wichtig: Explizit vertikale Anordnung festlegen
    height: "auto", // Höhe automatisch anpassen
    // Füge expliziten Rand hinzu
    marginHorizontal: 2,
  },
  cardNameWrapper: {
    marginTop: 8,
    width: "100%",
    minHeight: 36, // Minimalhöhe statt fester Höhe
    justifyContent: "center",
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
  // Verbesserter summaryContainer mit subtilerem Glow
  summaryContainer: {
    backgroundColor: "rgba(31, 41, 55, 0.95)",
    borderRadius: 16,
    padding: 24,
    paddingBottom: 24, // Jetzt Padding unten für Abstand
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    position: "relative", // Hinzufügen für bessere absolute Positionierung
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 0 }, // Zentrierter Glow
    shadowOpacity: 0.3, // Höhere Opazität
    shadowRadius: 15, // Größerer Radius
    elevation: 8, // Für Android
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  // Verbessertes modalContent mit ähnlichem Glow wie DrawnCardsDisplay
  modalContent: {
    backgroundColor: "rgba(31, 41, 55, 0.98)",
    borderRadius: 16,
    padding: 24,
    paddingBottom: 0, // Kein Padding am Boden
    width: "100%",
    maxHeight: "85%", // Etwas mehr Höhe für den Inhalt
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 0 }, // Zentrierter Glow
    shadowOpacity: 0.5, // Leicht gedämpft
    shadowRadius: 20, // Größerer Radius wie in DrawnCardsDisplay
    elevation: 10, // Erhöht von 6 auf 10
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
    textAlign: "left", // Von "center" zu "left" ändern
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
  modalButtonFullWidth: {
    width: "100%",
    paddingVertical: 12, // Reduziert von 16px auf 12px
    backgroundColor: "rgba(249, 115, 22, 0.9)",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    marginTop: 4, // Reduziert von 8px auf 4px
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  labelText: {
    color: "rgba(249, 115, 22, 0.7)", // Erhöhte Opazität für bessere Sichtbarkeit
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 8, // Abstand zwischen Label und Karte
    textAlign: "center",
    width: "100%", // Volle Breite für das Label
    height: 20, // Feste Höhe für gleichmäßige Ausrichtung
  },
  modalScrollView: {
    width: "100%",
    maxHeight: "80%", // Erhöht von 70% auf 80%
    marginBottom: 0, // Entferne den großen Abstand unten
  },
  modalScrollContent: {
    paddingBottom: 8, // Reduziert von 16px auf 8px
  },
  mainScrollView: {
    flex: 1,
    width: "100%",
  },
  summaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left", // Von "center" zu "left" ändern
  },
  summaryButtonFullWidth: {
    width: "100%", // Bleibt bei voller Breite innerhalb des verfügbaren Bereichs
    paddingTop: 12,
    paddingBottom: 18,
    backgroundColor: "rgba(249, 115, 22, 0.9)",
    borderRadius: 8, // Normale abgerundete Ecken
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    marginTop: 24,
    // marginLeft und marginRight entfernen
    alignItems: "center",
    alignSelf: "center",
  },
  cardImageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4, // Etwas Abstand oben und unten
  },
});

export default SummaryView;
