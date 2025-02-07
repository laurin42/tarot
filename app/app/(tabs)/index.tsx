import React, { useState } from "react";
import { Pressable, View } from "react-native";
import CardStackAnimator from "@/components/ui/CardStackAnimator";

import { ITarotCard, tarotCards } from "@/constants/tarotcards";

export default function Index() {
  const [cardsDrawn, setCardsDrawn] = useState(false);

  // Wird aufgerufen, wenn der Kartenstapel animiert wurde
  const handleAnimationComplete = () => {
    setCardsDrawn(true);
    console.log("Die Animation wurde abgeschlossen!");
  };

  return (
    <View style={{ flex: 1 }}>
      <CardStackAnimator onAnimationComplete={handleAnimationComplete} />
    </View>
  );
}
