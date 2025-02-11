import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
} from "react-native";

interface FetchCardExplanationProps {
  cardName: string;
  onDismiss?: () => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onFetchComplete?: (explanation: string | null, error: string | null) => void;
}

export default function FetchCardExplanation({
  cardName,
  onDismiss,
  onSwipeLeft,
  onSwipeRight,
  onFetchComplete,
}: FetchCardExplanationProps) {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExplanation = async () => {
      try {
        const formattedName = cardName.toLowerCase().replace(/ /g, "_");
        const res = await fetch(
          `http://192.168.178.67:8000/tarot/cards/${formattedName}`
        );
        if (!res.ok) {
          if (res.status === 500) {
            throw new Error("Internal Server Error");
          } else {
            throw new Error("Network response was not ok");
          }
        }
        const data = await res.json();
        setResponse(data.explanation);
        onFetchComplete && onFetchComplete(data.explanation, null);
      } catch (err) {
        console.error("Fehler beim Laden der Karte:", err);
        if (err instanceof Error && err.message === "Internal Server Error") {
          setError("Serverfehler: Bitte versuchen Sie es später erneut.");
        } else {
          setError("Erklärung konnte nicht geladen werden");
        }
        onFetchComplete && onFetchComplete(null, error);
      } finally {
        setLoading(false);
      }
    };

    fetchExplanation();
  }, [cardName]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dx) > 10; // Adjusted sensitivity
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 30 && onSwipeRight) {
        // Adjusted sensitivity
        onSwipeRight();
      } else if (gestureState.dx < -30 && onSwipeLeft) {
        // Adjusted sensitivity
        onSwipeLeft();
      }
    },
  });

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
    <View style={styles.container} {...panResponder.panHandlers}>
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
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
