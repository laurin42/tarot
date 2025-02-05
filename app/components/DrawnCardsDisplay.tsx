import React, { useState, useRef, useEffect } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import {
  Box,
  Center,
  HStack,
  Pressable,
  Text,
  VStack,
  useToken,
} from "native-base";
import TarotCard from "./TarotCard";
import { ITarotCard } from "@/constants/tarotcards";
import FetchCardExplanation from "./FetchCardExplanation";

const { width: screenWidth } = Dimensions.get("screen");

export default function DrawnCardsDisplay({ cards }: { cards: ITarotCard[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [gray900] = useToken("colors", ["gray.900"]);
  const pan = useRef(new Animated.ValueXY()).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], {
      useNativeDriver: true, // Native Driver aktiviert
    }),
    onPanResponderRelease: (_, gesture) => {
      if (Math.abs(gesture.dx) > screenWidth / 4) {
        Animated.spring(pan, {
          toValue: { x: gesture.dx > 0 ? screenWidth : -screenWidth, y: 0 },
          useNativeDriver: true, // Native Driver aktiviert
        }).start(() => handleSwipeComplete(gesture.dx > 0 ? "left" : "right"));
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true, // Native Driver aktiviert
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
    setExpandedCard(null);
  };

  useEffect(() => {
    if (expandedCard) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true, // Native Driver aktiviert
      }).start();
    }
  }, [expandedCard]);

  return (
    <VStack flex={1} bg="gray.900">
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }],
          flex: 1,
        }}
        {...panResponder.panHandlers}
      >
        <Center flex={1}>
          <Pressable onPress={() => setExpandedCard(cards[currentIndex].id)}>
            <TarotCard
              image={cards[currentIndex].image}
              name={cards[currentIndex].name}
              isShown={true}
              style={{ transform: [{ scale: expandedCard ? 1.1 : 1 }] }}
            />
          </Pressable>

          {expandedCard && (
            <Animated.View
              style={{
                position: "absolute",
                opacity: fadeAnim,
                transform: [{ scale: fadeAnim }],
              }}
            >
              <FetchCardExplanation
                cardName={cards[currentIndex].name}
                onDismiss={() => {
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true, // Native Driver aktiviert
                  }).start(() => setExpandedCard(null));
                }}
              />
            </Animated.View>
          )}
        </Center>
      </Animated.View>

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
  );
}
