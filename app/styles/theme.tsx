import { Platform, Easing, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Glow-Effekte mit verschiedenen Intensitäten
export const glowEffects = {
  // Starker Glow für Hauptelemente
  strong: {
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
      },
      android: {
        elevation: 15,
      },
    }),
  },

  // Mittlerer Glow für wichtige UI-Elemente
  medium: {
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
      },
      android: {
        elevation: 10,
      },
    }),
  },

  // Schwacher Glow für subtile Hervorhebungen
  subtle: {
    ...Platform.select({
      ios: {
        shadowColor: "#8B5CF6",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  // Speziell für Text-Glow
  text: {
    textShadowColor: "rgba(139, 92, 246, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  // Goldener Glow für spezielle Elemente
  gold: {
    ...Platform.select({
      ios: {
        shadowColor: "#FFD700",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
      },
      android: {
        elevation: 20,
        backgroundColor: "rgba(255,215,0,0.05)",
      },
    }),
  },
};

// Zentrale Farbpalette
export const colors = {
  primary: "#8B5CF6", // Hauptfarbe (Lila)
  primaryLight: "#A78BFA",
  primaryDark: "#7C3AED",
  background: "#111827", // Dunkler Hintergrund
  backgroundLight: "rgba(31, 41, 55, 0.95)",
  text: "#FFFFFF",
  textSecondary: "#F3F4F6",
  border: "rgba(139, 92, 246, 0.3)",
  gold: "#FFD700",
};

// Wiederverwendbare Rahmeneffekte
export const borderEffects = {
  standard: {
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
    borderRadius: 16,
  },
  none: {
    borderWidth: 0,
    borderColor: "transparent",
  },
};

// Typografie-Stile
export const typography = {
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primaryLight,
  },
  body: {
    fontSize: 17,
    lineHeight: 26,
    color: colors.textSecondary,
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
};

// In c:\Users\lauri\tarot\app\styles\theme.tsx hinzufügen
export const animationPresets = {
  fadeIn: {
    duration: 800,
    useNativeDriver: true,
  },
  fadeOut: {
    duration: 500,
    useNativeDriver: true,
  },
  move: {
    duration: 700,
    easing: Easing.out(Easing.cubic),
    useNativeDriver: true,
  },
  // Weitere Animation-Presets...
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const sizes = {
  cardWidth: width * 0.6,
  cardHeight: width * 0.6 * 1.6, // Standard Kartenverhältnis
  buttonHeight: 48,
  indicatorHeight: 40,
  // Weitere responsive Größen...
};
