import React from "react";
import { Image, StyleSheet } from "react-native";
import { cardImageMap } from "@/constants/tarotcards";

interface CardImageProps {
  name: string;
  showFront: boolean;
  width: number;
  height: number;
}

const CardImage: React.FC<CardImageProps> = ({
  name,
  showFront,
  width,
  height,
}) => {
  console.log(`CardImage: name=${name}, showFront=${showFront}`);
  return (
    <Image
      source={
        showFront
          ? cardImageMap[name]
          : require("@/assets/images/tarot_cards/Card_back.png")
      }
      style={[styles.cardImage, { width, height }]}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "white",
  },
});

export default CardImage;
