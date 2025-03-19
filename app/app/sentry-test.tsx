import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SentryTest from "@/components/SentryTest";

export default function SentryTestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sentry Integration Test</Text>
      <SentryTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
});
