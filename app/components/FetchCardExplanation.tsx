// app/app/components/FetchCardExplanation.tsx
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

interface FetchCardExplanationProps {
  cardName: string;
  className?: string;
}

export default function FetchCardExplanation({
  cardName,
  className,
}: FetchCardExplanationProps) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExplanation = async () => {
      try {
        const formattedName = cardName.toLowerCase().replace(/ /g, "_");
        const res = await fetch(
          `http://192.168.2.187:8000/tarot/cards/${formattedName}`
        );
        const data = await res.json();
        setResponse(data.explanation);
      } catch (err) {
        setError("Erklärung konnte nicht geladen werden");
      } finally {
        setLoading(false);
      }
    };

    fetchExplanation();
  }, [cardName]);

  return (
    <View className="flex-1 justify-center">
      {loading ? (
        <ActivityIndicator size="large" color="#FFF" />
      ) : error ? (
        <Text className="text-red-400 text-center">{error}</Text>
      ) : (
        <Text className={`${className}`}>{response}</Text>
      )}
    </View>
  );
}
