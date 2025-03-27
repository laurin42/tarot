import React, { useState, useRef } from "react";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";
import { ISelectedAndShownCard } from "@/constants/tarotcards";
import { useTarotSummary } from "@/hooks/useTarotSummary";
import { useScrollEndDetection } from "@/hooks/useScrollEndDetection";
import TarotCardWithLabel from "@/components/TarotCardWithLabel";
import CardDetailModal from "@/components/CardDetailModal";
import SummaryPanel from "@/components/SummaryPanel";
import { colors, globalTextStyles, shadowStyles } from "@/styles/tarotTheme";

interface SummaryViewProps {
  cards: ISelectedAndShownCard[];
  onDismiss: () => void;
}

const SummaryView: React.FC<SummaryViewProps> = ({ cards, onDismiss }) => {
  // State für den ausgewählten Kartenindex für das Modal
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  // Custom Hooks
  const { summary, loading, error } = useTarotSummary(cards);
  const { hasScrolledToEnd, handleScroll } = useScrollEndDetection();

  // ScrollView Referenz
  const summaryScrollViewRef = useRef<ScrollView>(null);

  // Handler
  const handleCardPress = (index: number) => {
    setSelectedCardIndex(index);
  };

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
            <TarotCardWithLabel
              key={index}
              card={card}
              index={index}
              onPress={handleCardPress}
            />
          ))}
        </View>

        <SummaryPanel
          loading={loading}
          error={error}
          summary={summary}
          showButton={hasScrolledToEnd}
          onButtonPress={onDismiss}
        />

        {/* Spacer for scrolling */}
        <View style={{ height: 40 }} />
      </ScrollView>

      <CardDetailModal
        isVisible={selectedCardIndex !== null}
        card={selectedCardIndex !== null ? cards[selectedCardIndex] : null}
        onClose={() => setSelectedCardIndex(null)}
      />
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
    ...globalTextStyles.title,
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
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  mainScrollView: {
    flex: 1,
    width: "100%",
  },
});

export default SummaryView;
