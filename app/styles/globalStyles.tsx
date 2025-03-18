import { StyleSheet } from "react-native";
import { colors, glowEffects, borderEffects } from "./theme";

export const globalStyles = StyleSheet.create({
  // Container & Layouts
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  modalContainer: {
    width: "90%",
    maxHeight: "90%",
    alignItems: "center",
    backgroundColor: colors.backgroundLight,
    padding: 20,
    ...borderEffects.standard,
    ...glowEffects.medium,
  },

  // Card Styles
  cardBase: {
    ...borderEffects.standard,
    ...glowEffects.medium,
  },

  cardImage: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.2)",
  },

  // Text Styles
  mysticalText: {
    color: colors.primaryLight,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    ...glowEffects.text,
  },

  explanationText: {
    color: colors.textSecondary,
    fontSize: 17,
    lineHeight: 26,
    textAlign: "center",
  },

  // Button Styles
  primaryButton: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: colors.primaryDark,
    borderRadius: 16,
    ...glowEffects.subtle,
  },

  primaryButtonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  // Floating Elements
  floatingIndicator: {
    position: "absolute",
    backgroundColor: colors.backgroundLight,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 18,
    ...borderEffects.none,
  },

  // Glow Container
  mysticalGlowContainer: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: "transparent",
    ...glowEffects.gold,
  },
});

export const layoutPatterns = StyleSheet.create({
  cardStack: {
    position: "relative",
    width: "100%",
    height: 300, // Anpassen nach Bedarf
    alignItems: "center",
    justifyContent: "center",
  },
  cardFan: {
    position: "relative",
    width: "100%",
    height: 300, // Anpassen nach Bedarf
    alignItems: "center",
    justifyContent: "center",
  },
  // Weitere Layout-Patterns...
});
