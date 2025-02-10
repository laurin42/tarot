import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardHintProps {
  hint: string;
}

const CardHint: React.FC<CardHintProps> = ({ hint }) => {
  return (
    <View style={styles.hintContainer}>
      <Text style={styles.hintText}>{hint}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hintContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 100,
  },
  hintText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    borderRadius: 8,
  },
});

export default CardHint;
