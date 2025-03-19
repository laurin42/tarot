import "react-native-gesture-handler";
import * as Sentry from "@sentry/react-native";
import { useEffect } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { errorService } from "@/services/ErrorService";
import { ExpoRoot } from "expo-router";

// Initialize Sentry ONCE, here at the top level
if (process.env.EXPO_PUBLIC_ENVIRONMENT === "production") {
  Sentry.init({
    dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
    debug: true,
    environment: process.env.EXPO_PUBLIC_ENVIRONMENT || "development",
    sendDefaultPii: true,
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
  });
  console.log("Sentry direkt in index.tsx initialisiert");
}

// This function was missing the "export default" statement
function App() {
  // Initialize error service BUT skip Sentry init
  useEffect(() => {
    // Don't call errorService.init() since it does another Sentry init
    // Instead, only run your direct tests:

    if (process.env.EXPO_PUBLIC_ENVIRONMENT === "production") {
      console.log("Sending direct test to Sentry...");

      // Direct test event
      Sentry.captureMessage("App started in production mode", "info");

      // Direct test error
      try {
        throw new Error("Direct test error");
      } catch (error) {
        Sentry.captureException(error);
        console.log("Test error sent to Sentry");
      }
    }
  }, []);

  return (
    <ErrorBoundary>
      <ExpoRoot context={require.context(".", true, /^\.\/app(_|\/).*$/)} />
    </ErrorBoundary>
  );
}

// Export with Sentry.wrap
export default Sentry.wrap(App);
