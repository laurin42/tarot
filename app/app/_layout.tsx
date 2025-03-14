import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { StyleSheet, View, ActivityIndicator } from "react-native";

if (typeof document !== "undefined") {
  document.documentElement.classList.add("darkMode");
}

import { useColorScheme } from "@/hooks/useColorScheme";

import "../global.css";
import { UserProvider } from "../context/UserContext";
import { AuthProvider, useAuth } from "../context/AuthContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Füge diese Komponente hinzu
function RootLayoutNav() {
  const { isAuthenticated, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // Warte auf Laden des Auth-Zustands

    console.log("Auth state changed:", { isAuthenticated });

    // Überprüft, ob Nutzer im Auth-Bereich ist
    const inAuthGroup = segments[0] === "(auth)";

    if (isAuthenticated && inAuthGroup) {
      // Angemeldeter Nutzer sollte zur App weitergeleitet werden
      router.replace("/(tabs)");
    } else if (!isAuthenticated && !inAuthGroup) {
      // Nicht angemeldeter Nutzer sollte zum Login weitergeleitet werden
      router.replace("/(auth)");
    }
  }, [isAuthenticated, segments, isLoading]);

  // Zeige einen Ladebildschirm während des Ladens
  if (isLoading) {
    return <LoadingScreen />; // Du kannst hier deine eigene Loading-Komponente erstellen
  }

  return <Slot />;
}

// Anpassen der RootLayout-Komponente
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserProvider>
      <AuthProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <RootLayoutNav /> {/* Statt Stack direkt */}
          <StatusBar style="auto" />
        </ThemeProvider>
      </AuthProvider>
    </UserProvider>
  );
}

// Einfache Lade-Komponente
function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1F2937",
      }}
    >
      <ActivityIndicator size="large" color="#A78BFA" />
    </View>
  );
}
