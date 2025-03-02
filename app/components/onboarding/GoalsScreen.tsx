import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { useUser } from "../../context/UserContext";

export default function GoalsScreen() {
  const [goals, setGoals] = useState("");
  const { user, updateGoals } = useUser();

  const handleSubmit = async () => {
    try {
      await updateGoals(goals);
      router.replace("/(tabs)");
    } catch (error) {
      // Show error message
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: "#666",
      marginBottom: 16,
    },
    input: {
      height: 100,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 8,
      padding: 8,
      textAlignVertical: "top",
      marginBottom: 16,
    },
    button: {
      backgroundColor: "#007bff",
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deine Ziele</Text>
      <Text style={styles.subtitle}>
        Was möchtest du manifestieren? Welche Ziele verfolgst du?
      </Text>

      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        value={goals}
        onChangeText={setGoals}
        placeholder="Beschreibe deine Ziele..."
        placeholderTextColor="#666"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Weiter</Text>
      </TouchableOpacity>
    </View>
  );
}
