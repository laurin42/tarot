import React from "react";
import { View, StyleSheet } from "react-native";
import CardStackAnimator from "@/components/ui/CardStackAnimator";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CardStackAnimator
        onAnimationComplete={() => {
          console.log("All cards have been pulled!");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
