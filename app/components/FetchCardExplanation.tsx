import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface FetchCardExplanationProps {
  cardName: string;
}

export default function FetchCardExplanation({
  cardName,
}: FetchCardExplanationProps) {
  const [response, setResponse] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://192.168.1.10:8002/tarot/cards/${cardName}`
        );
        const data = await res.json();
        setResponse(data.explanation);
      } catch (err) {
        setError("Failed To Fetch");
      }
    };

    fetchData();
  }, [cardName]);

  return (
    <View>
      {response ? <Text>{response}</Text> : <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
    </View>
  );
}
