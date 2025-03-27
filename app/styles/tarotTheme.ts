import { StyleSheet } from 'react-native';

export const colors = {
  background: "rgba(31, 41, 55, 0.95)",
  backgroundDarker: "rgba(31, 41, 55, 0.98)",
  purple: "#A78BFA",
  purpleTransparent: "rgba(139, 92, 246, 0.3)",
  purpleGlow: "rgba(139, 92, 246, 0.4)",
  orange: "rgba(249, 115, 22, 0.9)",
  orangeLabel: "rgba(249, 115, 22, 0.7)",
  white: "#FFFFFF",
  error: "#EF4444",
};

export const globalTextStyles = StyleSheet.create({
  title: {
    color: colors.purple,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 24,
    paddingHorizontal: 48,
  },
  cardLabel: {
    color: colors.orangeLabel,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  cardName: {
    color: colors.purple,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 18,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export const shadowStyles = {
  cardGlow: {
    shadowColor: colors.purple,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  modalGlow: {
    shadowColor: colors.purple,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
};