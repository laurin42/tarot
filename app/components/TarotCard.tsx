import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import FetchCardExplanation from "./FetchCardExplanation";

interface TarotCardProps {
  image: any;
  name: string;
  isShown: boolean;
}

export default function TarotCard({ image, name, isShown }: TarotCardProps) {
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
        {isShown && <FetchCardExplanation cardName={name} />}
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
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.8,
    borderRadius: 10,
  },
  CardInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.1,
    marginTop: 10,
    borderRadius: 10,
  },
  CardName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
