import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TarotCard from "@/components/TarotCard";
import { Shadow } from "react-native-shadow-2";
import { ISelectedAndShownCard } from "@/constants/tarotcards";

interface TarotCardWithLabelProps {
  card: ISelectedAndShownCard;
  index: number;
  onPress: (index: number) => void;
}

const TarotCardWithLabel: React.FC<TarotCardWithLabelProps> = ({
  card,
  index,
  onPress,
}) => {
  // Geräteabmessungen für responsive Darstellung
  const { width: screenWidth } = Dimensions.get("window");
  const cardWidth = screenWidth * 0.25; // ~25% mit etwas Abstand

  const getPositionLabel = (index: number): string => {
    switch (index) {
      case 0:
        return "Gegenwart";
      case 1:
        return "Konflikt";
      case 2:
        return "Perspektive";
      default:
        return `Position ${index + 1}`;
    }
  };

  return (
    <View style={styles.cardWrapper}>
      {/* Position Label */}
      <Text style={styles.labelText}>({getPositionLabel(index)})</Text>

      {/* Tarot Card Image */}
      <View style={styles.cardImageContainer}>
        <TouchableOpacity onPress={() => onPress(index)}>
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

      {/* Card Name */}
      <View style={styles.cardNameWrapper}>
        <Text style={styles.cardName} numberOfLines={2} ellipsizeMode="tail">
          {card.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    alignItems: "center",
    width: "29%",
    maxWidth: "30%",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    flexDirection: "column",
    height: "auto",
    marginHorizontal: 2,
  },
  labelText: {
    color: "rgba(249, 115, 22, 0.7)",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
    width: "100%",
    height: 20,
  },
  cardImageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
  cardNameWrapper: {
    marginTop: 8,
    width: "100%",
    minHeight: 36,
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
});

export default TarotCardWithLabel;
