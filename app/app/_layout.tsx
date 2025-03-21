import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import "../global.css";
import { UserProvider } from "../context/UserContext";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { DynamicRouteService, DynamicRoute } from "../services/dynamicRoutes";
import { bugsnagService } from "../services/bugsnag";
import {
  DynamicRoutesProvider,
  useDynamicRoutes,
} from "../components/routing/DynamicRoutesProvider";
import { DynamicRouteRenderer } from "../components/routing/DynamicRouteRenderer";
import { DevMenu } from "../components/development/DevMenu";
import { setupWebTheme } from "../utils/setupTheme";
import { registerDevRoutes } from "../utils/devRoutes";
import { useAuthNavigation } from "../hooks/useAuthNavigation";
import { ErrorDisplay } from "../components/ui/ErrorDisplay";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { initializeSplashScreen } from "../utils/splashScreen";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
initializeSplashScreen();

// Navigationskomponente mit dynamischen Routen
function RootLayoutNav(): JSX.Element {
  const { isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { registerRoute } = useDynamicRoutes();

  // Auth-Navigation Hook
  useAuthNavigation();

  // Setup-Code bei der ersten Renderung ausführen
  useEffect(() => {
    setupWebTheme();
    registerDevRoutes();
  }, []);

  // Registriere alle ausstehenden Routen
  useEffect(() => {
    try {
      const pendingRoutes: ReadonlyArray<DynamicRoute> =
        DynamicRouteService.getPendingRoutes();

      if (pendingRoutes.length > 0) {
        pendingRoutes.forEach(({ path, component }) => {
          registerRoute(path, component);
        });
        DynamicRouteService.clearPendingRoutes();
        bugsnagService.leaveBreadcrumb("Pending routes registered", {
          count: pendingRoutes.length,
        });
      }
    } catch (error: unknown) {
      bugsnagService.notify(
        error instanceof Error
          ? error
          : new Error("Failed to register pending routes")
      );
    }
  }, [registerRoute]);

  // Zeige einen Ladebildschirm während des Ladens
  if (isLoading) {
    return <LoadingScreen />;
  }

  try {
    // Typsichere Prüfung, ob es sich um eine dynamische Route handelt
    if (
      segments.length > 0 &&
      typeof segments[0] === "string" &&
      segments[0].startsWith("/")
    ) {
      const path = segments.join("/");
      return (
        <>
          <DynamicRouteRenderer path={path} />
          <DevMenu />
        </>
      );
    }

    return (
      <>
        <Slot />
        <DevMenu />
      </>
    );
  } catch (error: unknown) {
    bugsnagService.notify(
      error instanceof Error
        ? error
        : new Error("Error in root layout rendering")
    );

    return (
      <ErrorDisplay
        message="Ein Fehler ist aufgetreten"
        showReloadButton={true}
      />
    );
  }
}

export default function RootLayout(): JSX.Element | null {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().catch((error: unknown) => {
        bugsnagService.notify(
          error instanceof Error ? error : new Error(String(error))
        );
        console.error(
          "Fehler beim Ausblenden des SplashScreens:",
          error instanceof Error ? error.message : String(error)
        );
      });
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  try {
    return (
      <DynamicRoutesProvider>
        <UserProvider>
          <AuthProvider>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <RootLayoutNav />
              <StatusBar style="auto" />
            </ThemeProvider>
          </AuthProvider>
        </UserProvider>
      </DynamicRoutesProvider>
    );
  } catch (error: unknown) {
    bugsnagService.notify(
      error instanceof Error ? error : new Error("Failed to render root layout")
    );

    return (
      <ErrorDisplay
        message="Die App konnte nicht geladen werden"
        darkMode={true}
      />
    );
  }
}
