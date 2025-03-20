import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { crashlyticsService } from "@/services/CrashlyticsService";

export default function CrashlyticsTest() {
  const triggerHandledError = (): void => {
    try {
      // Intentionally throw an error
      throw new Error("Test: Handled error for Crashlytics");
    } catch (error) {
      // Capture with crashlyticsService
      crashlyticsService.recordError(error as Error, {
        context: { source: "CrashlyticsTest", type: "manual" },
      });
      alert("Handled error was sent to Crashlytics");
    }
  };

  const triggerUnhandledError = (): void => {
    // This will be caught by the ErrorBoundary
    throw new Error("Test: Unhandled error for Crashlytics");
  };

  // This will actually crash the app
  const triggerFatalError = (): void => {
    // Using a non-existent function to cause a real crash
    // @ts-ignore - Intentional crash for testing
    const nonExistentFunction = global.nonExistentFunction;
    nonExistentFunction();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crashlytics Test</Text>
      <Button title="Trigger Handled Error" onPress={triggerHandledError} />
      <View style={styles.spacer} />
      <Button title="Trigger Unhandled Error" onPress={triggerUnhandledError} />
      <View style={styles.spacer} />
      <Button
        title="Trigger Fatal Crash"
        onPress={triggerFatalError}
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
