import { View, Image, StyleSheet, Dimensions } from "react-native";

export default function TarotCard() {
  return (
    <View style={styles.CardView}>
      <Image
        source={require("@/assets/images/TarotCards/Ace_of_cups.jpg")}
        style={styles.TarotCardFront}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  CardView: {
    margin: "auto",
    height: Dimensions.get() * 0.9,
  },
  TarotCardFront: {
    backgroundColor: "white",
  },
});
