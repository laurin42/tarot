import "react-native-gesture-handler";
import { useEffect } from "react";
import { ExpoRoot } from "expo-router";

// Initialize Firebase
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/analytics";

// This function was missing the "export default" statement
function App() {
  // Initialize error service
  useEffect(() => {
    // Initialize Firebase if needed
    if (!firebase.apps.length) {
      // Add your Firebase configuration object here
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
  }, []);

  return (
    <ErrorBoundary>
      <ExpoRoot context={require.context(".", true, /^\.\/app(_|\/).*$/)} />
    </ErrorBoundary>
  );
}

export default App;
