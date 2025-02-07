// app/app/components/TarotCard.tsx
import { Text, View, Image, ViewStyle } from "react-native";

interface TarotCardProps {
  image: any;
  name: string;
  isShown: boolean;
  className?: string;
  style?: ViewStyle;
}

export default function TarotCard({
  image,
  name,
  isShown,
  className,
}: TarotCardProps) {
  return (
    <View className={`relative ${className}`}>
      <Image
        source={
          isShown ? image : require("@/assets/images/tarot_cards/Card_back.png")
        }
        className="w-full h-full rounded-xl"
      />
      <Text className="absolute bottom-4 left-4 text-white text-xl font-bold">
        {name}
      </Text>
    </View>
  );
}
