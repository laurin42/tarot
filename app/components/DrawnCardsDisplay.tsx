import React, { useState, useRef } from "react";
import {
  Dimensions,
  Animated,
  PanResponder,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TarotCard from "./TarotCard";
import { ITarotCard } from "@/constants/tarotcards";

const { width: screenWidth } = Dimensions.get("screen");

interface DrawnCardsDisplayProps {
  selectedCards: ITarotCard[];
}

export default function DrawnCardsDisplay({
  selectedCards,
}: DrawnCardsDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (_, gesture) => {
      if (Math.abs(gesture.dx) > screenWidth / 4) {
        const direction = gesture.dx > 0 ? "right" : "left";
        Animated.spring(pan, {
          toValue: { x: gesture.dx > 0 ? screenWidth : -screenWidth, y: 0 },
          useNativeDriver: false,
        }).start(() => handleSwipeComplete(direction));
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const handleSwipeComplete = (direction: "left" | "right") => {
    const newIndex =
      direction === "right"
        ? (currentIndex + 1) % selectedCards.length
        : (currentIndex - 1 + selectedCards.length) % selectedCards.length;

    pan.setValue({ x: 0, y: 0 });
    setCurrentIndex(newIndex);
    setExpanded(false);
  };

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  const cardWidth = 200;
  const cardHeight = cardWidth * 1.6;

  return (
    <View style={styles.container}>
      {selectedCards.length > 0 && (
        <Animated.View
          style={{ transform: [{ translateX: pan.x }], flex: 1 }}
          {...panResponder.panHandlers}
        >
          <View style={styles.center}>
            <TouchableOpacity onPress={handleCardClick}>
              <TarotCard
                image={selectedCards[currentIndex].image}
                isShown={true}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: [{ scale: expanded ? 1.1 : 1 }],
                }}
              />
              <Text style={styles.cardName}>
                {selectedCards[currentIndex].name}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      <View style={styles.stackIndicator}>
        {selectedCards.map((_, index) => (
          <View
            key={index}
            style={[
              styles.stackIndicatorItem,
              index === currentIndex && styles.stackIndicatorActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    marginBottom: 88,
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  stackIndicator: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  stackIndicatorItem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 4,
  },
  stackIndicatorActive: { backgroundColor: "white" },
  cardName: {
    color: "yellow",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
