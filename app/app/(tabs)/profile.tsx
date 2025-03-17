import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";

export default function ProfileScreen() {
  const { user, updateGoals } = useUser();
  const { signOut } = useAuth();
  const [goals, setGoals] = useState(user?.goals || "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Add this useEffect to update local goals when user changes
  useEffect(() => {
    if (user?.goals !== undefined) {
      setGoals(user.goals);
    }
  }, [user]);

  const handleUpdateGoals = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(false);
      await updateGoals(goals);
      setSuccess(true);
    } catch (error) {
      setError("Fehler beim Speichern der Ziele");
      console.error("Failed to update goals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    console.log("Sign out button pressed");
    try {
      await signOut();
      console.log("Sign out completed successfully");
    } catch (error) {
      console.error("Sign out error:", error);
      Alert.alert(
        "Fehler",
        "Abmelden fehlgeschlagen. Bitte versuche es erneut."
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {user?.picture && (
          <Image source={{ uri: user.picture }} style={styles.profileImage} />
        )}
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meine Ziele</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Beschreibe deine Ziele..."
          value={goals}
          onChangeText={setGoals}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        {success && (
          <Text style={styles.successText}>Ziele erfolgreich gespeichert!</Text>
        )}
        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleUpdateGoals}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Wird gespeichert..." : "Speichern"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.signOutButton}
        onPress={handleSignOut}
        activeOpacity={0.7} // Besseres Feedback für den Benutzer
      >
        <Text style={styles.signOutText}>Abmelden</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    color: "#FF3B30",
    marginBottom: 10,
  },
  successText: {
    color: "#34C759",
    marginBottom: 10,
  },
  signOutButton: {
    margin: 20,
    padding: 15,
    backgroundColor: "#FF3B30",
    borderRadius: 8,
    alignItems: "center",
  },
  signOutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
