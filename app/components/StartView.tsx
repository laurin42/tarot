import React from "react";
import { Animated, TouchableOpacity, Text } from "react-native";

interface StartingInstructionsProps {
  deckInitialized: boolean;
  cardsExist: boolean;
  drawnCardsEmpty: boolean;
  floatingAnim: Animated.Value;
  onStart: () => void;
}

export const StartingInstructions = ({
  deckInitialized,
  cardsExist,
  drawnCardsEmpty,
  floatingAnim,
  onStart,
}: StartingInstructionsProps) => {
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  if (!deckInitialized || !cardsExist || !drawnCardsEmpty) return null;

  return (
    <Animated.View className="absolute bottom-10 left-0 right-0 items-center">
      <AnimatedTouchableOpacity
        className="bg-purple-600/90 px-4 py-4 rounded-lg z-50"
        style={{
          transform: [{ translateY: floatingAnim }],
        }}
        onPress={onStart}
      >
        <Text className="text-white text-base font-bold">Start</Text>
      </AnimatedTouchableOpacity>
    </Animated.View>
  );
};
