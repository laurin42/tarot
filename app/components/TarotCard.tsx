// app/app/components/TarotCard.tsx
import { Text, View, Image, TextStyle } from "react-native";
import FetchCardExplanation from "./FetchCardExplanation";
import { NativeBaseProvider } from "native-base";

interface TarotCardProps {
  image: any;
  name: string;
  isShown: boolean;
  className?: string;
  style?: TextStyle;
}

export default function TarotCard({
  image,
  name,
  isShown,
  className,
}: TarotCardProps) {
  return (
    <NativeBaseProvider>
      <View className={`relative ${className}`}>
        <Image
          source={
            isShown
              ? image
              : require("@/assets/images/tarot_cards/Card_back.png")
          }
          className="w-full h-full rounded-2xl shadow-lg"
        />
        <Text className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {name}
        </Text>
      </View>
    </NativeBaseProvider>
  );
}
