import { useState, useCallback, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { ISelectedAndShownCard, tarotCards } from '@/constants/tarotcards';

const CARD_COUNT = 5;

export const useCardAnimations = () => {
  const [cards, setCards] = useState<ISelectedAndShownCard[]>([]);
  const { width } = Dimensions.get('window');
  
  // Initialisiere die Animation Values
  const translateY = useRef(Array(CARD_COUNT).fill(0).map(() => new Animated.Value(-1000))).current;
  const translateX = useRef(Array(CARD_COUNT).fill(0).map(() => new Animated.Value(0))).current;
  const rotations = useRef(Array(CARD_COUNT).fill(0).map(() => new Animated.Value(180))).current;
  const scales = useRef(Array(CARD_COUNT).fill(0).map(() => new Animated.Value(1))).current;
  const flipAnim = useRef(Array(CARD_COUNT).fill(0).map(() => new Animated.Value(0))).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const animateCards = useCallback(() => {
    console.log("Starting card animation");
    
    // Erstelle zufällige Karten
    const randomCards = Array(CARD_COUNT).fill(null).map(() => ({
      ...tarotCards[Math.floor(Math.random() * tarotCards.length)],
      showFront: false,
      isSelected: false,
      onNextCard: () => {}
    }));
    setCards(randomCards);

    // Animations-Sequenz
    const animations = translateY.map((yAnim, index) => {
      return Animated.spring(yAnim, {
        toValue: 0,
        friction: 6,
        tension: 50,
        delay: index * 250,
        useNativeDriver: true
      });
    });

    const xAnimations = translateX.map((xAnim, index) => {
      const targetX = (index - (CARD_COUNT - 1) / 2) * -52;
      return Animated.spring(xAnim, {
        toValue: targetX,
        friction: 6,
        tension: 50,
        delay: index * 250,
        useNativeDriver: true
      });
    });

    const rotationAnimations = rotations.map((rotation, index) => {
      return Animated.spring(rotation, {
        toValue: (index - (CARD_COUNT - 1) / 2) * 8.8,
        friction: 6,
        tension: 50,
        delay: index * 250,
        useNativeDriver: true
      });
    });

    Animated.parallel([
      ...animations,
      ...xAnimations,
      ...rotationAnimations
    ]).start(() => {
      console.log("Card animation completed");
    });
  }, []);

  const handleCardClick = useCallback((index: number, slots: any) => {
    console.log("Card clicked:", index);
    
    Animated.parallel([
      Animated.timing(flipAnim[index], {
        toValue: 180,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 230,
        useNativeDriver: true
      })
    ]).start();

    setCards(prevCards => 
      prevCards.map((card, i) => 
        i === index ? { ...card, showFront: true, isSelected: true } : card
      )
    );
  }, []);

  return {
    cards,
    animations: {
      translateY,
      translateX,
      rotations,
      scales,
      flipAnim,
      opacity
    },
    animateCards,
    handleCardClick
  };
};
