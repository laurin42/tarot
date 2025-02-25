import { useRef, useState } from "react";
import { Animated, Dimensions } from "react-native";
import { ISelectedAndShownCard, tarotCards } from "@/constants/tarotcards";

const CARD_COUNT = 5;
const MAX_SELECTIONS = 3;

interface IUseCardAnimationsParams {
  drawnCards: ISelectedAndShownCard[];
  setDrawnCards: React.Dispatch<React.SetStateAction<ISelectedAndShownCard[]>>;
  setCards: React.Dispatch<React.SetStateAction<ISelectedAndShownCard[]>>;
  onAnimationComplete?: () => void;
}

interface IUseCardAnimationsReturn {
  translateY: Animated.Value[];
  translateX: Animated.Value[];
  rotations: Animated.Value[];
  scales: Animated.Value[];
  flipAnim: Animated.Value[];
  opacity: Animated.Value;
  animateCards: () => void;
  centerDrawnCards: () => void;
  resetDeck: () => void;
  handleCardClick: (
    index: number,
    drawnSlotPositions: { x: number; y: number }[]
  ) => void;
}

export function useCardAnimations({
  drawnCards,
  setDrawnCards,
  setCards,
  onAnimationComplete,
}: IUseCardAnimationsParams): IUseCardAnimationsReturn {
  const { width } = Dimensions.get("window");
  const [cards, setCardsState] = useState<ISelectedAndShownCard[]>([]);
  const cardWidth = width > 400 ? 150 : 100;

  const translateY = useRef(
    Array(CARD_COUNT)
      .fill(null)
      .map(() => new Animated.Value(-1000))
  ).current;
  const translateX = useRef(
    Array(CARD_COUNT)
      .fill(null)
      .map(() => new Animated.Value(0))
  ).current;
  const rotations = useRef(
    Array(CARD_COUNT)
      .fill(null)
      .map(() => new Animated.Value(180)) // Initial um 180 Grad gedreht
  ).current;
  const scales = useRef(
    Array(CARD_COUNT)
      .fill(null)
      .map(() => new Animated.Value(1))
  ).current;
  const flipAnim = useRef(
    Array(CARD_COUNT)
      .fill(null)
      .map(() => new Animated.Value(0))
  ).current;

  // Neuer Opacity Animated.Value
  const opacity = useRef(new Animated.Value(1)).current;

  const animateCards = () => {
    // Hole die erste Karte aus drawnCards für das initiale Deck
    const initialCard =
      tarotCards[Math.floor(Math.random() * tarotCards.length)];
    const newCards = Array(CARD_COUNT)
      .fill(null)
      .map(() => ({
        ...initialCard,
        showFront: false,
        isSelected: false,
        onNextCard: () => {}, // Add a default onNextCard function
      }));
    setCards(newCards);

    // Animiere die Karten
    const animations = translateY.map((value, index) => {
      const delay = index * 250;
      return Animated.spring(value, {
        toValue: 0,
        friction: 6,
        tension: 50,
        delay,
        useNativeDriver: true,
      });
    });

    const xAnimations = translateX.map((xValue, index) => {
      const targetX = (index - (CARD_COUNT - 1) / 2) * -52;
      const rotationValue = (index - (CARD_COUNT - 1) / 2) * 8.8;
      return [
        Animated.spring(xValue, {
          toValue: targetX,
          friction: 6,
          tension: 50,
          delay: index * 250,
          useNativeDriver: true,
        }),
        Animated.spring(rotations[index], {
          toValue: rotationValue + 180,
          friction: 6,
          tension: 50,
          delay: 0,
          useNativeDriver: true,
        }),
      ];
    });

    // Entferne onAnimationComplete aus dem Callback
    Animated.parallel([...animations, ...xAnimations.flat()]).start();
  };

  const centerDrawnCards = () => {
    const centerX = (width - cardWidth * drawnCards.length) / 2;
    Animated.parallel(
      drawnCards.map((_, index) => {
        return Animated.timing(translateX[index], {
          toValue: centerX + index * (cardWidth + 10),
          duration: 500,
          useNativeDriver: true,
        });
      })
    ).start();
  };

  const resetDeck = () => {
    // Reset animations
    for (let i = 0; i < CARD_COUNT; i++) {
      translateY[i].setValue(-1000);
      translateX[i].setValue(0);
      rotations[i].setValue(180); // Beibehalten der 180-Grad-Drehung
      scales[i].setValue(1);
      flipAnim[i].setValue(0);
    }

    // Reset opacity für neue Karten
    opacity.setValue(1);

    // Hole die aktuelle Karte aus drawnCards für das neue Deck
    const currentCard = drawnCards[drawnCards.length];
    if (currentCard) {
      const newCards = Array(CARD_COUNT)
        .fill(null)
        .map(() => ({
          ...currentCard,
          showFront: false,
          isSelected: false,
        }));
      setCards(newCards);
    }

    // Starte die Animations-Sequenz
    const animations = translateY.map((value, index) => {
      const delay = index * 250;
      return Animated.spring(value, {
        toValue: 0,
        friction: 6,
        tension: 50,
        delay,
        useNativeDriver: true,
      });
    });

    const xAnimations = translateX.map((xValue, index) => {
      const targetX = (index - (CARD_COUNT - 1) / 2) * -52;
      const rotationValue = (index - (CARD_COUNT - 1) / 2) * 8.8;
      return [
        Animated.spring(xValue, {
          toValue: targetX,
          friction: 6,
          tension: 50,
          delay: index * 250,
          useNativeDriver: true,
        }),
        Animated.spring(rotations[index], {
          toValue: rotationValue + 180,
          friction: 6,
          tension: 50,
          delay: index * 250,
          useNativeDriver: true,
        }),
      ];
    });

    Animated.parallel([...animations, ...xAnimations.flat()]).start();
  };

  interface IDrawnSlotPositions {
    x: number;
    y: number;
  }

  const handleCardClick = (
    index: number,
    drawnSlotPositions: IDrawnSlotPositions[]
  ) => {
    // Füge Fade-Out Animation hinzu
    Animated.parallel([
      Animated.timing(flipAnim[index], {
        toValue: 180,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 230,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setDrawnCards((prev) => [...prev, { ...cards[index], showFront: true }]);

      const slotIndex = drawnCards.length;
      if (slotIndex < drawnSlotPositions.length) {
        Animated.parallel([
          Animated.timing(translateX[index], {
            toValue: drawnSlotPositions[slotIndex].x,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(translateY[index], {
            toValue: drawnSlotPositions[slotIndex].y,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }
    });
  };

  return {
    translateY,
    translateX,
    rotations,
    scales,
    flipAnim,
    opacity, // Neue Export
    animateCards,
    centerDrawnCards,
    resetDeck,
    handleCardClick,
  };
}
