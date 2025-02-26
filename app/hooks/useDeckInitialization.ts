import { useState, useEffect } from 'react';
import { ISelectedAndShownCard } from '@/constants/tarotcards';

interface UseDeckInitializationProps {
  cards: ISelectedAndShownCard[];
  onAnimationComplete?: () => void;
}

export const useDeckInitialization = ({ 
  cards, 
  onAnimationComplete 
}: UseDeckInitializationProps) => {
  const [deckInitialized, setDeckInitialized] = useState(false);

  useEffect(() => {
    if (cards.length > 0 && !deckInitialized) {
      setDeckInitialized(true);
      console.log("Deck initialized with", cards.length, "cards");
      onAnimationComplete?.();
    }
  }, [cards, deckInitialized, onAnimationComplete]);

  return {
    deckInitialized,
    setDeckInitialized
  };
};