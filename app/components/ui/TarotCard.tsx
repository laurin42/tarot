import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

interface TarotCardProps {
  image: any;
  name: string;
  description: string;
  isShown: boolean;
}

export default function TarotCard({
  image,
  name,
  description,
  isShown,
}: TarotCardProps) {
  return (
    <View style={styles.CardView}>
      <Image
        source={
          isShown ? image : require("@/assets/images/tarot_cards/Card_back.png")
        }
        style={styles.TarotCardFront}
      />
      <View style={styles.CardInfo}>
        <Text style={styles.CardName}>{name}</Text>
        <Text style={styles.CardDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CardView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TarotCardFront: {
    width: Dimensions.get("screen").width * 0.8,
    height: Dimensions.get("screen").height * 0.6,
    borderRadius: 10,
  },
  CardInfo: {
    display: "flex",
    gap: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.3,
    marginTop: 10,
    borderRadius: 10,
  },
  CardName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  CardDescription: {
    fontSize: 16,
    textAlign: "center",
  },
});
