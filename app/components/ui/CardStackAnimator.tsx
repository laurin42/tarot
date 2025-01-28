import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
  Image,
  Easing,
} from "react-native";

interface CardStackAnimatorProps {
  onAnimationComplete?: () => void;
}

export default function CardStackAnimator({
  onAnimationComplete,
}: CardStackAnimatorProps) {
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const translateYValues = useRef(
    Array(3)
      .fill(0)
      .map(() => new Animated.Value(Dimensions.get("window").height))
  ).current;

  const pullCards = () => {
    const animations = translateYValues.map((value, index) =>
      Animated.timing(value, {
        toValue: 0,
        duration: 200,
        delay: index * 200,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
        useNativeDriver: true,
      })
    );

    Animated.sequence(animations).start(() => {
      onAnimationComplete && onAnimationComplete();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardBackContainer}>
        {translateYValues.map((value, index) => (
          <Animated.View
            key={index}
            style={[
              styles.card,
              {
                transform: [
                  { translateY: value },
                  { rotate: `${index * 16}deg` },
                ],
                top: index * +70,
              },
            ]}
          >
            <Image
              source={require("@/assets/images/tarot_cards/Card_back.png")}
              style={styles.cardBack}
            />
          </Animated.View>
        ))}
      </View>
      {activeCards.length === 0 && (
        <Pressable style={styles.startButton} onPress={pullCards}>
          <Text style={styles.startText}>PULL CARDS</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBackContainer: {
    marginBlockEnd: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  card: {
    position: "absolute",
    width: 200,
    height: 300,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: "transparent",
  },
  cardBack: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "gray", // Rückseite der Karte
    borderWidth: 2,
    borderColor: "white",
  },
  startButton: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  startText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
