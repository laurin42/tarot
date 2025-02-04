// app/app/(tabs)/index.tsx
import { View } from "react-native";
import CardStackAnimator from "@/components/ui/CardStackAnimator";
import DrawnCardsDisplay from "@/components/DrawnCardsDisplay";
import { useState } from "react";
import { tarotCards } from "@/constants/tarotcards";

export default function HomeScreen() {
  const [selectedCards, setSelectedCards] = useState<typeof tarotCards>([]);

  const handlePullCards = () => {
    setSelectedCards(
      [...tarotCards].sort(() => 0.5 - Math.random()).slice(0, 3)
    );
  };

  return (
    <View className="flex-1 bg-gray-100">
      {selectedCards.length === 0 ? (
        <CardStackAnimator onAnimationComplete={handlePullCards} />
      ) : (
        <DrawnCardsDisplay cards={selectedCards} />
      )}
    </View>
  );
}
