// app/app/components/TarotCard.tsx
import { Text, View, Image } from "react-native";

interface TarotCardProps {
  image: any;
  isShown: boolean;
  style?: any;
  name?: string; // Make name optional with ?
}

export interface ITarotCard {
  id: string;
  image: any;
  description?: string;
  showFront?: boolean;
  isSelected?: boolean;
}

export default function TarotCard({
  image,
  name,
  isShown,
  style,
}: TarotCardProps) {
  return (
    <View
      style={[
        {
          position: "relative",
          borderWidth: 0.4,
          borderColor: "rgba(224, 224, 224, 1)",
          borderRadius: 16,
        },
        style,
      ]}
    >
      <Image
        source={
          isShown ? image : require("@/assets/images/tarot_cards/Card_back.png")
        }
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 16,
        }}
      />
      {isShown && name && (
        <Text
          style={{
            position: "absolute",
            bottom: 4,
            left: 4,
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
      )}
    </View>
  );
}
