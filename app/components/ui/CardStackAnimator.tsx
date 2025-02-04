// app/app/components/CardStackAnimator.tsx
import React, { useRef } from "react";
import { View, Animated, Pressable, Text, Image } from "react-native";

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

  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Animated.View
        className="absolute"
        style={{
          transform: [{ translateY }],
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        }}
      >
        <Image
          source={require("@/assets/images/tarot_cards/Card_back.png")}
          className="w-64 h-96 rounded-xl border-2 border-white shadow-2xl"
        />
      </Animated.View>

      <Pressable
        onPress={animateCards}
        className="relative bottom-20 bg-red-600 px-8 py-3 rounded-2xl shadow-md"
      >
        <Text className="text-white text-lg font-bold">Karten ziehen</Text>
      </Pressable>
    </View>
  );
}
