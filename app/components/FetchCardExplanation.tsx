import { useEffect, useState } from "react";
import { ViewStyle } from "react-native";
import { VStack, Text, Spinner, Center, NativeBaseProvider } from "native-base";

interface FetchCardExplanationProps {
  cardName: string;
  className?: string;
}

export default function FetchCardExplanation({
  cardName,
  className,
}: FetchCardExplanationProps) {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
    <NativeBaseProvider>
      <Center flex={1}>
        {loading ? (
          <Spinner size="lg" color="white" />
        ) : error ? (
          <Text color="red.400" textAlign="center">
            {error}
          </Text>
        ) : (
          <Text style={{ color: "white" }} textAlign="center">
            {response}
          </Text>
        )}
      </Center>
    </NativeBaseProvider>
  );
}
