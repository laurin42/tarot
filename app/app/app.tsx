import "react-native-gesture-handler";
import { useEffect } from "react";
import { ExpoRoot } from "expo-router";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Bugsnag importieren
import { bugsnagService } from "@/services/bugsnag";

// Firebase-Importe
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/analytics";
// ✅ Korrekte Typ-Definition über Parameter von initializeApp
type FirebaseAppOptions = Parameters<typeof firebase.initializeApp>[0];

// Typdefinitionen
interface UserData {
  id: string;
  name?: string;
  email?: string;
}

function App(): JSX.Element {
  // Initialize error service
  useEffect(() => {
    // Firebase-Initialisierung mit Fehlerbehandlung
    try {
      if (!firebase.apps.length) {
        // ✅ Typsicherheit durch Prüfung auf erforderliche Werte
        const apiKey = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;
        const appId = process.env.EXPO_PUBLIC_FIREBASE_APP_ID;
        const projectId = process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID;

        // Prüfe, ob die erforderlichen Firebase-Konfigurationen vorhanden sind
        if (!apiKey || !appId || !projectId) {
          throw new Error(
            "Firebase configuration missing required values (apiKey, appId, projectId)"
          );
        }

        // ✅ Explizit typisierte Firebase-Konfiguration mit korrektem Typ
        const firebaseConfig: FirebaseAppOptions = {
          apiKey,
          projectId,
          appId,
          // Optionale Werte mit Fallback-Leerstrings (nicht undefined)
          authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
          storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
          messagingSenderId:
            process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
          measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
        };

        // ✅ Initialisierung mit typsicherer Konfiguration
        firebase.initializeApp(firebaseConfig);
        bugsnagService.leaveBreadcrumb("Firebase initialized", {
          success: true,
          projectId, // Hilfreiche Metadaten für Debugging
        });
      }
    } catch (error: unknown) {
      bugsnagService.notify(
        error instanceof Error
          ? error
          : new Error("Firebase initialization failed")
      );
      console.error(
        "Firebase initialization failed:",
        error instanceof Error ? error.message : String(error)
      );
    }

    // Set up Bugsnag user if available
    const setUserForBugsnag = async (): Promise<void> => {
      try {
        const userToken = await AsyncStorage.getItem("userToken");
        const userDataString = await AsyncStorage.getItem("userData");

        if (userToken && userDataString) {
          // Validate und parse userData mit explizitem Type-Casting
          let userData: UserData;
          try {
            const parsedData = JSON.parse(userDataString) as Partial<UserData>;
            userData = {
              id: parsedData.id || "unknown-id",
              name: parsedData.name,
              email: parsedData.email,
            };
          } catch (parseError) {
            bugsnagService.notify(
              parseError instanceof Error
                ? parseError
                : new Error("Failed to parse user data")
            );
            userData = { id: "parse-error" };
          }

          bugsnagService.setUser(userData.id, userData.name, userData.email);
        } else {
          bugsnagService.setUser("anonymous-user");
        }

        bugsnagService.leaveBreadcrumb("App started", {
          authenticated: !!userToken,
          timestamp: new Date().toISOString(),
        });
      } catch (error: unknown) {
        bugsnagService.notify(
          error instanceof Error ? error : new Error(String(error))
        );
        console.error(
          "Failed to set user data for Bugsnag:",
          error instanceof Error ? error.message : String(error)
        );
      }
    };

    setUserForBugsnag();
  }, []);

  return (
    <ErrorBoundary>
      <ExpoRoot context={require.context(".", true, /^\.\/app(_|\/).*$/)} />
    </ErrorBoundary>
  );
}

export default App;
