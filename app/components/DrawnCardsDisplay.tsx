// app/app/components/DrawnCardsDisplay.tsx
import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import TarotCard from "./TarotCard";
import { ITarotCard } from "@/constants/tarotcards";
import { PanResponder } from "react-native";
import FetchCardExplanation from "./FetchCardExplanation";

const { width: screenWidth } = Dimensions.get("screen");

export default function DrawnCardsDisplay({ cards }: { cards: ITarotCard[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 50) {
        handleSwipe("left");
      } else if (gestureState.dx < -50) {
        handleSwipe("right");
      }
    },
  });

  const handleSwipe = (direction: "left" | "right") => {
    const newIndex =
      direction === "right"
        ? (currentIndex + 1) % cards.length
        : (currentIndex - 1 + cards.length) % cards.length;

    setCurrentIndex(newIndex);
    scrollViewRef.current?.scrollTo({
      x: newIndex * screenWidth,
      animated: true,
    });
  };

  return (
    <View className="flex-1 bg-gray-900" {...panResponder.panHandlers}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        {cards.map((card) => (
          <View
            key={card.id}
            style={{ width: screenWidth }}
            className="items-center justify-center"
          >
            <TouchableOpacity
              onPress={() =>
                setExpandedCard(expandedCard === card.id ? null : card.id)
              }
              className="relative"
            >
              <TarotCard
                image={card.image}
                name={card.name}
                isShown={true}
                className="w-[90%] h-[75vh] shadow-xl"
              />

              {expandedCard === card.id && (
                <TouchableOpacity
                  className="absolute inset-0 justify-center p-6 bg-black/75"
                  onPress={() => setExpandedCard(null)}
                >
                  <FetchCardExplanation
                    cardName={card.name}
                    className="text-lg text-white leading-relaxed"
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View className="absolute bottom-8 w-full flex-row justify-center space-x-2">
        {cards.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
