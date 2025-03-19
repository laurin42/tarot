import "react-native-gesture-handler";
import { useEffect } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { errorService } from "@/services/ErrorService";
import { ExpoRoot } from "expo-router";

export default function App() {
  // Initialize error service
  useEffect(() => {
    errorService.init();
  }, []);

  return (
    <ErrorBoundary>
      <ExpoRoot context={require.context(".", true, /^\.\/app(_|\/).*$/)} />
    </ErrorBoundary>
  );
}
