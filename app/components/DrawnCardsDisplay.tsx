// DrawnCardsDisplay.tsx
import React, { useState, useRef, useEffect } from "react";
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
import FetchCardExplanation from "@/components/FetchCardExplanation";

const { width: screenWidth } = Dimensions.get("screen");

export default function DrawnCardsDisplay({ cards }: { cards: ITarotCard[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false); // Ob die Karte aufgeklappt ist
  const [showExplanation, setShowExplanation] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
        ? (currentIndex + 1) % cards.length
        : (currentIndex - 1 + cards.length) % cards.length;

    pan.setValue({ x: 0, y: 0 });
    setCurrentIndex(newIndex);
    setExpanded(false);
    setShowExplanation(false);
  };

  // Wenn die Karte aufgeklappt wird, warte 4 Sekunden und zeige dann das Erklärungsoverlay an
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (expanded && !showExplanation) {
      timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }).start();
        setShowExplanation(true);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [expanded]);

  const cardWidth = 250;
  const cardHeight = cardWidth * 1.6;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ transform: [{ translateX: pan.x }], flex: 1 }}
        {...panResponder.panHandlers}
      >
        <View style={styles.center}>
          <TouchableOpacity
            onPress={() => {
              if (!expanded) {
                setExpanded(true);
              }
            }}
          >
            <TarotCard
              image={cards[currentIndex].image}
              name={cards[currentIndex].name}
              isShown={true}
              style={{
                width: cardWidth,
                height: cardHeight,
                transform: [{ scale: expanded ? 1.1 : 1 }],
              }}
            />
          </TouchableOpacity>

          {showExplanation && (
            <Animated.View
              style={[
                styles.explanationOverlay,
                { width: cardWidth, height: cardHeight, opacity: fadeAnim },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  // Overlay ein- bzw. ausblenden
                  Animated.timing(fadeAnim, {
                    toValue: fadeAnim._value > 0 ? 0 : 1,
                    duration: 300,
                    useNativeDriver: false,
                  }).start(() => setShowExplanation((prev) => !prev));
                }}
              >
                <FetchCardExplanation
                  cardName={cards[currentIndex].name}
                  onDismiss={() => {
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 300,
                      useNativeDriver: false,
                    }).start(() => setShowExplanation(false));
                  }}
                />
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
      </Animated.View>

      <View style={styles.stackIndicator}>
        {cards.map((_, index) => (
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
  container: { flex: 1, backgroundColor: "black" },
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
  explanationOverlay: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
