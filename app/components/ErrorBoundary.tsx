// app/components/ErrorBoundary.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Sentry from "@sentry/react-native";
import { errorService } from "@/services/ErrorService";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Report error to Sentry
    errorService.captureException(error, {
      context: { componentStack: errorInfo.componentStack },
    });
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <View className="flex-1 items-center justify-center p-4">
            <Text className="text-lg font-bold mb-2">
              Etwas ist schiefgelaufen
            </Text>
            <Text className="text-center mb-4">
              Die App hat einen unerwarteten Fehler festgestellt. Wir haben das
              Problem aufgezeichnet und arbeiten an einer Lösung.
            </Text>
            <TouchableOpacity
              className="px-4 py-2 bg-blue-500 rounded"
              onPress={this.handleReload}
            >
              <Text className="text-white font-medium">Neu laden</Text>
            </TouchableOpacity>
          </View>
        )
      );
    }

    return this.props.children;
  }
}
