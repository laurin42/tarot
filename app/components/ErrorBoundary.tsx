import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import bugsnagService from "@/services/bugsnag";
import getBugsnagErrorBoundary from "@/services/bugsnag";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Versuche zuerst, die Bugsnag-ErrorBoundary zu verwenden
const BugsnagErrorBoundary = getBugsnagErrorBoundary();

// Wenn Bugsnag-ErrorBoundary verfügbar ist, exportiere sie
export const ErrorBoundary = BugsnagErrorBoundary
  ? BugsnagErrorBoundary
  : class ErrorBoundary extends React.Component<
      ErrorBoundaryProps,
      ErrorBoundaryState
    > {
      constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
      }

      static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
      }

      componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // Melde Fehler an Bugsnag
        bugsnagService.notify(error, {
          errorInfo: {
            componentStack: errorInfo.componentStack,
          },
        });
      }

      resetError = (): void => {
        this.setState({ hasError: false, error: null });
      };

      render(): React.ReactNode {
        if (this.state.hasError) {
          return (
            <View style={styles.container}>
              <Text style={styles.title}>Etwas ist schief gelaufen</Text>
              <Text style={styles.message}>
                {this.state.error?.message ||
                  "Ein unerwarteter Fehler ist aufgetreten"}
              </Text>
              <TouchableOpacity style={styles.button} onPress={this.resetError}>
                <Text style={styles.buttonText}>Noch einmal versuchen</Text>
              </TouchableOpacity>
            </View>
          );
        }

        return this.props.children;
      }
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#e63946",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: "#343a40",
  },
  button: {
    backgroundColor: "#457b9d",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
