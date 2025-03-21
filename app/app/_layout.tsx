import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments, Router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import {
  useEffect,
  createContext,
  useState,
  useContext,
  useCallback,
} from "react";
import "react-native-reanimated";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Pressable,
} from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";

import "../global.css";
import { UserProvider } from "../context/UserContext";
import { AuthProvider, useAuth } from "../context/AuthContext";
import {
  DynamicRoute,
  DynamicRoutesContextType,
  DynamicRouteService,
  CustomRoutePathString,
  navigateToCustomPath,
} from "../services/dynamicRoutes";
import { bugsnagService } from "../services/bugsnag";

// Prevent the splash screen from auto-hiding before asset loading is complete.
try {
  SplashScreen.preventAutoHideAsync().catch((error: unknown) => {
    bugsnagService.notify(
      error instanceof Error
        ? error
        : new Error("Failed to prevent splash screen auto hiding")
    );
  });
} catch (error: unknown) {
  bugsnagService.notify(
    error instanceof Error
      ? error
      : new Error("Error in SplashScreen.preventAutoHideAsync()")
  );
}

// Kontext für dynamische Routen
const DynamicRoutesContext = createContext<DynamicRoutesContextType>({
  routes: [],
  registerRoute: () => {},
  getRouteComponent: () => null,
});

// Provider für dynamische Routen
function DynamicRoutesProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [routes, setRoutes] = useState<DynamicRoute[]>([]);

  // Tatsächliche Implementierung des Route-Registrierens
  const registerRoute = useCallback(
    (
      path: string,
      component: React.ComponentType<Record<string, unknown>>
    ): void => {
      try {
        console.log(`Registering route: ${path}`);
        setRoutes((prevRoutes) => {
          const existingRouteIndex = prevRoutes.findIndex(
            (route) => route.path === path
          );
          if (existingRouteIndex >= 0) {
            const updatedRoutes = [...prevRoutes];
            updatedRoutes[existingRouteIndex] = { path, component };
            return updatedRoutes;
          } else {
            return [...prevRoutes, { path, component }];
          }
        });

        bugsnagService.leaveBreadcrumb("Route registered", { path });
      } catch (error: unknown) {
        bugsnagService.notify(
          error instanceof Error
            ? error
            : new Error(`Failed to register route: ${path}`)
        );
      }
    },
    []
  );

  const getRouteComponent = useCallback(
    (path: string): React.ComponentType<Record<string, unknown>> | null => {
      try {
        const route = routes.find((r) => r.path === path);
        return route ? route.component : null;
      } catch (error: unknown) {
        bugsnagService.notify(
          error instanceof Error
            ? error
            : new Error(`Failed to get route component: ${path}`)
        );
        return null;
      }
    },
    [routes]
  );

  return (
    <DynamicRoutesContext.Provider
      value={{ routes, registerRoute, getRouteComponent }}
    >
      {children}
    </DynamicRoutesContext.Provider>
  );
}

// Hook zum Verwenden der dynamischen Routen
function useDynamicRoutes(): DynamicRoutesContextType {
  return useContext(DynamicRoutesContext);
}

// Komponente für dynamische Routen-Anzeige
function DynamicRouteRenderer({ path }: { path: string }): JSX.Element {
  const { getRouteComponent } = useDynamicRoutes();

  try {
    const Component = getRouteComponent(path);

    if (!Component) {
      bugsnagService.leaveBreadcrumb("Route not found", { path });
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Route nicht gefunden: {path}</Text>
        </View>
      );
    }

    return <Component />;
  } catch (error: unknown) {
    bugsnagService.notify(
      error instanceof Error
        ? error
        : new Error(`Error rendering dynamic route: ${path}`)
    );

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>
          Fehler beim Rendern der Route: {path}
        </Text>
      </View>
    );
  }
}

// Registriere Debug-Route im Dev-Modus
if (__DEV__) {
  try {
    DynamicRouteService.registerRoute(
      `/dev-tools` as CustomRoutePathString,
      (): React.ComponentType<Record<string, unknown>> => {
        try {
          const BugsnagTestComponent =
            require("../dev-tools/BugsnagTest").default;
          if (!BugsnagTestComponent) {
            throw new Error("BugsnagTest-Komponente nicht gefunden");
          }
          return BugsnagTestComponent;
        } catch (error: unknown) {
          bugsnagService.notify(
            error instanceof Error ? error : new Error(String(error))
          );
          console.error(
            "Fehler beim Laden der BugsnagTest-Komponente:",
            error instanceof Error ? error.message : String(error)
          );
          return () => (
            <View
              style={{
                flex: 1,
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "red" }}>
                Fehler beim Laden der Debug-Tools
              </Text>
            </View>
          );
        }
      }
    );

    bugsnagService.leaveBreadcrumb("Debug route registered");
  } catch (error: unknown) {
    bugsnagService.notify(
      error instanceof Error ? error : new Error(String(error))
    );
    console.error(
      "Fehler beim Registrieren der Debug-Route:",
      error instanceof Error ? error.message : String(error)
    );
  }
}

// Komponente für Webseiten-spezifischen Code
if (typeof document !== "undefined") {
  try {
    document.documentElement.classList.add("darkMode");
  } catch (error: unknown) {
    bugsnagService.notify(
      error instanceof Error
        ? error
        : new Error("Failed to add dark mode class")
    );
  }
}

// Navigationskomponente mit dynamischen Routen
function RootLayoutNav(): JSX.Element {
  const { isAuthenticated, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { registerRoute } = useDynamicRoutes();

  // Registriere alle ausstehenden Routen
  useEffect(() => {
    try {
      // Hole Routen aus dem Service mit explizitem Typ
      const pendingRoutes: ReadonlyArray<DynamicRoute> =
        DynamicRouteService.getPendingRoutes();

      if (pendingRoutes.length > 0) {
        pendingRoutes.forEach(({ path, component }) => {
          registerRoute(path, component);
        });
        // Leere die Liste nach der Registrierung
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

  // Authentifizierungsbasierte Navigation
  useEffect(() => {
    try {
      if (isLoading) return;

      const inAuthGroup = segments[0] === "(auth)";

      // Typsichere Prüfung auf dynamische Routen
      const isDynamicRoute =
        typeof segments[0] === "string" && segments[0].startsWith("/");

      if (isDynamicRoute) {
        // Bei dynamischen Routen keine Umleitung
        return;
      }

      if (isAuthenticated && inAuthGroup) {
        router.replace("/(tabs)/threecards");
        bugsnagService.leaveBreadcrumb("Redirected authenticated user", {
          from: "(auth)",
          to: "/(tabs)/threecards",
        });
      } else if (
        !isAuthenticated &&
        !inAuthGroup &&
        segments[0] !== undefined
      ) {
        router.replace("/(auth)");
        bugsnagService.leaveBreadcrumb("Redirected unauthenticated user", {
          from: segments[0],
          to: "/(auth)",
        });
      }
    } catch (error: unknown) {
      bugsnagService.notify(
        error instanceof Error
          ? error
          : new Error("Navigation error in auth routing")
      );
    }
  }, [isAuthenticated, segments, isLoading, router]);

  // Debug-Menü im Dev-Modus
  function DevMenu(): JSX.Element | null {
    if (!__DEV__) return null;

    return (
      <View style={styles.devMenu}>
        <Pressable
          style={styles.devButton}
          onPress={() => {
            try {
              navigateToCustomPath(
                router,
                "/dev-tools" as CustomRoutePathString
              );
              bugsnagService.leaveBreadcrumb("Opened dev tools");
            } catch (error: unknown) {
              bugsnagService.notify(
                error instanceof Error
                  ? error
                  : new Error("Failed to navigate to dev tools")
              );
            }
          }}
        >
          <Text style={styles.devButtonText}>Debug-Tools</Text>
        </Pressable>
      </View>
    );
  }

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

    // Fallback UI bei Fehlern
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red", marginBottom: 20 }}>
          Ein Fehler ist aufgetreten
        </Text>
        <Pressable style={styles.devButton} onPress={() => router.replace("/")}>
          <Text style={styles.devButtonText}>Neu laden</Text>
        </Pressable>
      </View>
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

    // Minimale Fallback-UI, wenn alles andere fehlschlägt
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1F2937",
        }}
      >
        <Text style={{ color: "white" }}>
          Die App konnte nicht geladen werden
        </Text>
      </View>
    );
  }
}

function LoadingScreen(): JSX.Element {
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

const styles = StyleSheet.create({
  devMenu: {
    position: "absolute",
    bottom: 20,
    right: 20,
    opacity: 0.8,
    zIndex: 1000,
  },
  devButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  devButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
