import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CrashlyticsTest from "@/components/CrashlyticsTest";

export default function CrashlyticsTestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Firebase Crashlytics Test</Text>
      <CrashlyticsTest />
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
