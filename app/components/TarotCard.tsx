// app/app/components/TarotCard.tsx
import { Text, View, Image } from "react-native";
import FetchCardExplanation from "./FetchCardExplanation";

interface TarotCardProps {
  image: any;
  name: string;
  isShown: boolean;
  className?: string;
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
        className="w-full h-full rounded-2xl shadow-lg"
      />
      <Text className="absolute bottom-4 left-4 text-white text-xl font-bold">
        {name}
      </Text>
    </View>
  );
}
