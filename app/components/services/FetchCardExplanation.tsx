import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface FetchCardExplanationProps {
  cardName: string;
  onDismiss?: () => void;
}

export default function FetchCardExplanation({
  cardName,
  onDismiss,
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
        console.error("Fehler beim Laden der Karte:", err);
        setError("Erklärung konnte nicht geladen werden");
      } finally {
        setLoading(false);
      }
    };

    fetchExplanation();
  }, [cardName]);

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="white" />;
    }

    if (error) {
      return <Text style={styles.errorText}>{error}</Text>;
    }

    return <Text style={styles.responseText}>{response}</Text>;
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      {onDismiss && (
        <TouchableOpacity onPress={onDismiss} style={styles.dismissButton}>
          <Text style={styles.dismissButtonText}>Schließen</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 16,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
  responseText: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  dismissButton: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  dismissButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
