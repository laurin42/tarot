// app/components/ErrorBoundary.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { errorService } from "../services/ErrorService";

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
    // Log the error to our service
    errorService.captureException(error, {
      context: { componentStack: errorInfo.componentStack },
      level: "error",
    });
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        this.props.fallback || (
          <View className="flex-1 justify-center items-center p-4 bg-white">
            <Text className="text-xl font-bold mb-2 text-red-600">
              Etwas ist schiefgelaufen
            </Text>
            <Text className="text-base text-gray-700 mb-4 text-center">
              Ein unerwarteter Fehler ist aufgetreten. Wir arbeiten daran, das
              Problem zu beheben.
            </Text>
            <TouchableOpacity
              onPress={this.handleReload}
              className="py-3 px-6 bg-blue-600 rounded-lg"
            >
              <Text className="text-white font-semibold">Neu laden</Text>
            </TouchableOpacity>
          </View>
        )
      );
    }

    return this.props.children;
  }
}
