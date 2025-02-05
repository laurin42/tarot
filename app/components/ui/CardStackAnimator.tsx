// CardStackAnimator.tsx
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Box,
  Button,
  Image,
  Center,
  NativeBaseProvider,
  useToken,
} from "native-base";

const CARD_COUNT = 3;
const { width } = Dimensions.get("window");

export default function CardStackAnimator({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  const positions = useRef(
    Array(CARD_COUNT)
      .fill(null)
      .map((_, i) => new Animated.Value(i * 20))
  ).current;
  const rotations = useRef(
    Array(CARD_COUNT)
      .fill(null)
      .map(() => new Animated.Value(0))
  ).current;
  const [isDealing, setIsDealing] = useState(false);
  const [red] = useToken("colors", ["red.600"]);

  const dealCards = () => {
    setIsDealing(true);
    const animations = positions.map((pos, i) =>
      Animated.timing(pos, {
        toValue: 0,
        duration: 800,
        delay: i * 150,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      })
    );

    Animated.parallel(animations).start(() => {
      setIsDealing(false);
      onAnimationComplete();
    });
  };

  const flipCard = (index: number) => {
    if (isDealing) return;

    Animated.spring(rotations[index], {
      toValue: 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Center flex={1} bg="blue.900">
      {positions.map((pos, i) => {
        const rotateY = rotations[i].interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "180deg"],
        });

        return (
          <TouchableWithoutFeedback key={i} onPress={() => flipCard(i)}>
            <Animated.View
              style={{
                position: "absolute",
                transform: [
                  { translateY: pos },
                  { rotateY },
                  { perspective: 1000 },
                ],
              }}
            >
              <Image
                source={require("@/assets/images/tarot_cards/Card_back.png")}
                alt="Tarot Card Back"
                size="2xl"
                borderRadius="xl"
                borderWidth={2}
                borderColor="white"
                shadow="9"
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}

      <Button
        mt={8}
        bg="red.600"
        rounded="2xl"
        shadow="3"
        onPress={dealCards}
        _text={{
          fontSize: "lg",
          fontWeight: "bold",
          color: "white",
        }}
        _pressed={{
          bg: "red.700",
          shadow: "6",
        }}
      >
        Karten ziehen
      </Button>
    </Center>
  );
}
