import React, { useState, useRef } from "react";
import { Dimensions, ScrollView, Animated, PanResponder } from "react-native";
import {
  Box,
  Center,
  Button,
  HStack,
  Pressable,
  Text,
  VStack,
  NativeBaseProvider,
} from "native-base";
import TarotCard from "./TarotCard";
import { ITarotCard } from "@/constants/tarotcards";
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
    <NativeBaseProvider>
      <VStack flex={1} bg="gray.900" {...panResponder.panHandlers}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        >
          {cards.map((card) => (
            <Center key={card.id} w={screenWidth}>
              <Pressable
                onPress={() =>
                  setExpandedCard(expandedCard === card.id ? null : card.id)
                }
              >
                <TarotCard
                  image={card.image}
                  name={card.name}
                  isShown={true}
                  style={{
                    width: "90%",
                    height: "75%",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 4,
                  }}
                />

                {expandedCard === card.id && (
                  <Center
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="black:alpha.75"
                    p={6}
                  >
                    <Pressable onPress={() => setExpandedCard(null)}>
                      <FetchCardExplanation cardName={card.name} />
                    </Pressable>
                  </Center>
                )}
              </Pressable>
            </Center>
          ))}
        </ScrollView>

        <HStack
          position="absolute"
          bottom={8}
          justifyContent="center"
          w="full"
          space={2}
        >
          {cards.map((_, index) => (
            <Box
              key={index}
              size={2}
              borderRadius="full"
              bg={index === currentIndex ? "white" : "gray.500"}
            />
          ))}
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
}
