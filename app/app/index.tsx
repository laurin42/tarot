import "react-native-gesture-handler";
import { useEffect } from "react";
import { ExpoRoot } from "expo-router";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Bugsnag importieren
import { bugsnagService } from "@/services/bugsnag";

// Initialize Firebase
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/analytics";

function App() {
  // Initialize error service
  useEffect(() => {
    // Initialize Firebase if needed
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID",
      };
      firebase.initializeApp(firebaseConfig);
    }

    // Set up Bugsnag user if available
    const setUserForBugsnag = async () => {
      try {
        const userToken = await AsyncStorage.getItem("userToken");
        const userDataString = await AsyncStorage.getItem("userData");

        if (userToken && userDataString) {
          const userData = JSON.parse(userDataString);
          bugsnagService.setUser(
            userData.id || "unknown-id",
            userData.name || "Unknown User",
            userData.email || undefined
          );
        } else {
          bugsnagService.setUser("anonymous-user");
        }

        bugsnagService.leaveBreadcrumb("App started", {
          authenticated: !!userToken,
        });
      } catch (error) {
        console.error("Failed to set user data for Bugsnag:", error);
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
