import React from "react";
import { Image, StyleSheet } from "react-native";

interface CardImageProps {
  name: string;
  showFront: boolean;
  width: number;
  height: number;
  image: any;
}

const CardImage: React.FC<CardImageProps> = ({
  name,
  showFront,
  width,
  height,
  image,
}) => {
  console.log(`CardImage: name=${name}, showFront=${showFront}`);
  return (
    <Image
      source={
        showFront ? image : require("@/assets/images/tarot_cards/Card_back.png")
      }
      style={[styles.cardImage, { width, height }]}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 16,
    borderWidth: 0.75,
    borderColor: "white",
  },
});

export default CardImage;
