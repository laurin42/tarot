import { useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { ICardWithShowFront, tarotCards } from "@/constants/tarotcards";

const CARD_COUNT = 5;
const MAX_SELECTIONS = 3;

interface IUseCardAnimationsParams {
  drawnCards: ICardWithShowFront[];
  setDrawnCards: React.Dispatch<React.SetStateAction<ICardWithShowFront[]>>;
  setCards: React.Dispatch<React.SetStateAction<ICardWithShowFront[]>>;
  onAnimationComplete?: () => void;
}

interface IUseCardAnimationsReturn {
  translateY: Animated.Value[];
  translateX: Animated.Value[];
  rotations: Animated.Value[];
  scales: Animated.Value[];
  flipAnim: Animated.Value[];
  animateCards: () => void;
  centerDrawnCards: () => void;
  resetDeck: () => void;
  handleCardClick: (
    index: number,
    drawnSlotPositions: { x: number; y: number }[]
  ) => void;
}

export const useCardAnimations = ({
  drawnCards,
  setDrawnCards,
  setCards,
  onAnimationComplete,
}: IUseCardAnimationsParams): IUseCardAnimationsReturn => {
  const { width } = Dimensions.get("window");
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
      .map(() => new Animated.Value(0))
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

  const animateCards = () => {
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
      const targetX = (index - (CARD_COUNT - 1) / 2) * 40;
      const rotationValue = (index - (CARD_COUNT - 1) / 2) * 4.8;
      return [
        Animated.spring(xValue, {
          toValue: targetX,
          friction: 6,
          tension: 50,
          delay: index * 250,
          useNativeDriver: true,
        }),
        Animated.spring(rotations[index], {
          toValue: rotationValue,
          friction: 6,
          tension: 50,
          delay: 0,
          useNativeDriver: true,
        }),
      ];
    });
    Animated.parallel([...animations, ...xAnimations.flat()]).start(() => {
      onAnimationComplete && onAnimationComplete();
    });
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
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const newCards: ICardWithShowFront[] = shuffled
      .slice(0, CARD_COUNT)
      .map((card) => ({
        ...card,
        showFront: false,
        isSelected: false,
      }));
    setCards(newCards);
    for (let i = 0; i < CARD_COUNT; i++) {
      translateY[i].setValue(-1000);
      translateX[i].setValue(0);
      rotations[i].setValue(0);
      scales[i].setValue(1);
      flipAnim[i].setValue(0);
    }
    animateCards();
  };

  interface IDrawnSlotPositions {
    x: number;
    y: number;
  }

  const handleCardClick = (
    index: number,
    drawnSlotPositions: IDrawnSlotPositions[]
  ) => {
    if (drawnCards.length + 1 >= MAX_SELECTIONS) {
      setTimeout(() => {
        setCards([]);
      }, 500);
    }

    Animated.timing(flipAnim[index], {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      const updatedCards = [...drawnCards];
      updatedCards[index] = {
        ...updatedCards[index],
        showFront: true,
        isSelected: true,
      };
      setCards((prevCards) => {
        const newCards = [...prevCards];
        newCards[index] = {
          ...newCards[index],
          showFront: true,
          isSelected: true,
        };
        return newCards;
      });

      const slotIndex = drawnCards.length;
      const targetX = drawnSlotPositions[slotIndex].x;
      const targetY = drawnSlotPositions[slotIndex].y;

      Animated.parallel([
        Animated.timing(translateX[index], {
          toValue: targetX,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateY[index], {
          toValue: targetY,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setDrawnCards((prev) => [...prev, updatedCards[index]]);
        if (drawnCards.length + 1 < MAX_SELECTIONS) {
          resetDeck();
        }
      });
    });
  };

  return {
    translateY,
    translateX,
    rotations,
    scales,
    flipAnim,
    animateCards,
    centerDrawnCards,
    resetDeck,
    handleCardClick,
  };
};
