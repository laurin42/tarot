import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  Dimensions,
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import {
  ICardWithShowFront,
  ITarotCard,
  tarotCards,
} from "@/constants/tarotcards";

const CARD_COUNT = 5;
const MAX_SELECTIONS = 3;

interface CardStackAnimatorProps {
  onAnimationComplete?: () => void;
}

export default function CardStackAnimator({
  onAnimationComplete,
}: CardStackAnimatorProps) {
  // Dimensionen und Kartengrößen
  const { width, height } = Dimensions.get("window");
  const cardWidth = width > 400 ? 150 : 100;
  const cardHeight = cardWidth * 1.6;

  // Fest definierte Positionen (Slots) für die gezogenen Karten im unteren Container
  const drawnSlotPositions = [
    { x: 20, y: 400 },
    { x: (width - cardWidth) / 2, y: 400 },
    { x: width - cardWidth - 20, y: 400 },
  ];

  // Initialer Kartenstapel (5 Karten) – alle Karten sind zunächst verdeckt
  // Hier nutzen wir direkt das Interface ICardWithShowFront, sodass alle Karten diese Eigenschaften besitzen
  const [cards, setCards] = useState<ICardWithShowFront[]>(() => {
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    return shuffledCards.slice(0, CARD_COUNT).map((card) => ({
      ...card,
      showFront: false,
      isSelected: false,
    }));
  });

  // Hier werden die bereits ausgewählten (gezogenen) Karten gespeichert
  const [drawnCards, setDrawnCards] = useState<ICardWithShowFront[]>([]);

  const centerDrawnCards = () => {
    const centerX = (width - cardWidth * MAX_SELECTIONS) / 2;
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

    useEffect(() => {
      if (drawnCards.length === MAX_SELECTIONS) {
        centerDrawnCards();
      }
    }, [drawnCards]);

    // Neuinitialisierung des Decks nach maximaler Auswahl
    useEffect(() => {
      if (drawnCards.length >= MAX_SELECTIONS) {
        setTimeout(() => resetDeck(), 500); // Deck neu setzen nach Abschluss
      }
    }, [drawnCards]);
  };
  // Animationswerte für den Kartenstapel (für jeden der 5 Karten)
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
  // Animationswert für den Flip (Rotation um die Y-Achse) für jede Karte
  const flipAnim = useRef(
    Array(CARD_COUNT)
      .fill(null)
      .map(() => new Animated.Value(0))
  ).current;

  // Bringt den aktuellen Kartenstapel in die "Ruheposition"
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

  // Setzt den Kartenstapel (Deck) neu auf – es werden 5 neue, verdeckte Karten geladen
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
    // Setze alle Animationswerte zurück (inklusive Flip)
    for (let i = 0; i < CARD_COUNT; i++) {
      translateY[i].setValue(-1000);
      translateX[i].setValue(0);
      rotations[i].setValue(0);
      scales[i].setValue(1);
      flipAnim[i].setValue(0);
    }
    animateCards();
  };

  // Wird aufgerufen, wenn der Nutzer auf eine Karte klickt.
  // Direkt nach dem Antippen wird die Karte geflipt und fliegt danach in ihren Slot.
  // Nach 3 gezogenen Karten wird keine weitere Interaktion zugelassen.
  const handleCardClick = (index: number) => {
    if (drawnCards.length + 1 >= MAX_SELECTIONS) {
      setTimeout(() => {
        setCards([]);
      }, 500);
    }

    // Erst: Flip-Animation, um die Karte aufzudecken
    Animated.timing(flipAnim[index], {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Nach dem Flip als aufgedeckt markieren
      const updatedCards = [...cards];
      updatedCards[index] = {
        ...updatedCards[index],
        showFront: true,
        isSelected: true,
      };
      setCards(updatedCards);

      // Danach: Die Karte in den entsprechenden Slot animieren
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
        // Nach Auswahl (sofern noch nicht 3 Karten gezogen wurden) den Stapel neu aufsetzen
        if (drawnCards.length + 1 < MAX_SELECTIONS) {
          resetDeck();
        }
      });
    });
  };

  return (
    <View style={styles.container}>
      {/* Start-Button zum Initialisieren der Animation – erscheint solange noch kein Deck gezogen wurde */}
      {cards.length > 0 && drawnCards.length === 0 && (
        <Pressable style={styles.startButton} onPress={animateCards}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      )}

      {/* Oberer Bereich: Kartenstapel (alle 5 Karten sind interaktiv) */}
      {cards.map((card, index) => {
        const verticalOffset = index * 0;
        const leftPosition = (width - cardWidth) / 2;
        return (
          <Animated.View
            key={index}
            style={[
              styles.cardContainer,
              {
                top: 88 + verticalOffset,
                left: leftPosition,
                transform: [
                  { translateY: translateY[index] },
                  { translateX: translateX[index] },
                  {
                    rotateZ: rotations[index].interpolate({
                      inputRange: [-10, 10],
                      outputRange: ["-10deg", "10deg"],
                    }),
                  },
                  { scale: scales[index] },
                  {
                    rotateY: flipAnim[index].interpolate({
                      inputRange: [0, 180],
                      outputRange: ["0deg", "180deg"],
                    }),
                  },
                ],
                zIndex: index,
              },
            ]}
          >
            <Pressable onPress={() => handleCardClick(index)}>
              <Image
                source={
                  card.showFront
                    ? card.image
                    : require("@/assets/images/tarot_cards/Card_back.png")
                }
                style={[
                  styles.cardImage,
                  { width: cardWidth, height: cardHeight },
                ]}
              />
            </Pressable>
          </Animated.View>
        );
      })}

      {/* Unterer Bereich: Container (Frame) für die gezogenen Karten */}
      <View style={styles.drawnCardsContainer}>
        {drawnCards.map((card, i) => (
          <View key={i} style={styles.drawnCard}>
            <Image
              source={card.image}
              style={[
                styles.cardImage,
                { width: cardWidth, height: cardHeight },
              ]}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a202c",
  },
  cardContainer: {
    position: "absolute",
    top: 88,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "white",
  },
  drawnCardsContainer: {
    position: "absolute",
    top: 400, // Position des unteren Containers (Frame)
    left: 0,
    right: 0,
    height: 180,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  drawnCard: {
    // Zusätzliche Styleanpassungen für einzelne gezogene Karten (optional)
  },
  startButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "rgba(112, 62, 229, 0.9)",
    padding: 16,
    borderRadius: 8,
    zIndex: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
