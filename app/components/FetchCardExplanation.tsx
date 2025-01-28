import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

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
          `http://192.168.2.187:8000/tarot/cards/${cardName}`
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
    <View style={styles.container}>
      {response ? (
        <Text style={styles.responseText}>{response}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
      {error && <Text>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  responseText: {
    position: "relative",
    width: 200,
    height: 300,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: "transparent",
  },
});
