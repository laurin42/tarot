import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { errorService } from "@/services/ErrorService";

export default function SentryTest() {
  const triggerHandledError = () => {
    try {
      // Absichtlich einen Fehler werfen
      throw new Error("Test: Behandelter Fehler für Sentry");
    } catch (error) {
      // Mit errorService erfassen
      errorService.captureException(error as Error, {
        context: { source: "SentryTest", type: "manual" },
      });
      alert("Behandelter Fehler wurde an Sentry gesendet");
    }
  };

  const triggerUnhandledError = () => {
    // Dies wird vom ErrorBoundary abgefangen
    throw new Error("Test: Unbehandelter Fehler für Sentry");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sentry-Test</Text>
      <Button
        title="Behandelten Fehler auslösen"
        onPress={triggerHandledError}
      />
      <View style={styles.spacer} />
      <Button
        title="Unbehandelten Fehler auslösen"
        onPress={triggerUnhandledError}
        color="#e53e3e"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  spacer: {
    height: 16,
  },
});
