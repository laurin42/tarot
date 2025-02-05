import React, { useRef } from "react";
import { Animated, Dimensions } from "react-native";
import {
  Box,
  Button,
  Image,
  Center,
  NativeBaseProvider,
  useBreakpointValue,
} from "native-base";

export default function CardStackAnimator({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  const translateY = useRef(new Animated.Value(1000)).current;

  const animateCards = () => {
    Animated.spring(translateY, {
      toValue: 0,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start(onAnimationComplete);
  };

  // Move the buttonSize and cardSize calculation outside of JSX
  const buttonSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
  const { width } = Dimensions.get("window");
  const cardSize = width > 400 ? "2xl" : "lg";

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="blue.900">
        <Animated.View
          style={{
            transform: [{ translateY }],
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Image
            source={require("@/assets/images/tarot_cards/Card_back.png")}
            alt="Tarot Card Back"
            size={cardSize}
            borderRadius="xl"
            borderWidth={2}
            borderColor="white"
            shadow="9"
          />
        </Animated.View>

        <Button
          mt={8}
          size={buttonSize}
          bg="red.600"
          rounded="2xl"
          shadow="3"
          onPress={animateCards}
          _text={{
            fontSize: "lg",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Karten ziehen
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}
