// app/app/components/TarotCard.tsx
import { Text, View, Image, ViewStyle } from "react-native";

interface TarotCardProps {
  image: any;
  name: string;
  isShown: boolean;
  className?: string;
  style?: ViewStyle;
}

export interface ITarotCard {
  id: string;
  name: string;
  image: any;
  description?: string;
  showFront?: boolean;
  isSelected?: boolean;
}

export default function TarotCard({
  image,
  name,
  isShown,
  className,
  style,
}: TarotCardProps) {
  return (
    <View style={[{ position: "relative" }, style]}>
      <Image
        source={
          isShown ? image : require("@/assets/images/tarot_cards/Card_back.png")
        }
        style={{ width: "100%", height: "100%", borderRadius: 16 }}
      />
      {isShown && (
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
