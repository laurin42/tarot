import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";

export default function ProfileScreen() {
  const { user, updateGoals } = useUser();
  const [goals, setGoals] = useState(user?.goals || "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateGoals = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await updateGoals(goals);
    } catch (error) {
      setError("Failed to update goals");
      console.error("Failed to update goals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meine Ziele</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Beschreibe deine Ziele..."
        value={goals}
        onChangeText={setGoals}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handleUpdateGoals}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Speichern..." : "Speichern"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  errorText: {
    color: "#dc3545",
    marginBottom: 8,
  },
});
