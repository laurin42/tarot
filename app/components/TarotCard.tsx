import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import FetchCardExplanation from "./FetchCardExplanation";

interface TarotCardProps {
  image: any;
  name: string;
  isShown: boolean;
  showExplanation?: boolean;
}

export default function TarotCard({
  image,
  name,
  isShown,
  showExplanation = false,
}: TarotCardProps) {
  return (
    <View style={styles.CardView}>
      <Image
        source={
          isShown ? image : require("@/assets/images/tarot_cards/Card_back.png")
        }
        style={styles.TarotCardFront}
      />
      {showExplanation && (
        <View style={styles.CardInfo}>
          <Text style={styles.CardName}>{name}</Text>
          {isShown && <FetchCardExplanation cardName={name} />}
        </View>
      )}
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
    position: "absolute",
    bottom: -120,
    width: Dimensions.get("screen").width * 0.9,
    minHeight: 100,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  CardName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
