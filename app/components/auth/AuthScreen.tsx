import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { useAuth } from "../../context/AuthContext";

interface AuthResponse {
  token: string;
  error?: string;
}

interface GoogleAuthResponse extends ReturnType<typeof useAuthRequest> {
  type?: string;
  authentication?: {
    accessToken: string;
    idToken?: string;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1F2937",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 32,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#1F2937",
    fontSize: 16,
    fontWeight: "bold",
  },
  appleButton: {
    width: "100%",
    height: 44,
    marginTop: 16,
  },
  errorText: {
    color: "#EF4444",
    marginBottom: 16,
    textAlign: "center",
    fontSize: 14,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
});

export default function AuthScreen() {
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAppleAuthAvailable, setIsAppleAuthAvailable] = useState(false);
  const [isAppleLoading, setIsAppleLoading] = useState(false);

  WebBrowser.maybeCompleteAuthSession();

  const [_, response, promptAsync] = useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    scopes: ["profile", "email"],
    redirectUri: makeRedirectUri(),
  }) as [any, GoogleAuthResponse | null, () => Promise<GoogleAuthResponse>];

  const handleAuthError = useCallback((error: Error) => {
    console.error("Authentication failed:", error);
    setError("Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.");
    setIsLoading(false);
  }, []);

  const handleServerAuth = useCallback(
    async (authData: {
      authProvider: string;
      authId: string;
      username?: string;
    }) => {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(authData),
          }
        );
        const data: AuthResponse = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Server authentication failed");
        }
        await signIn(data.token);
      } catch (error) {
        handleAuthError(error as Error);
      }
    },
    [signIn, handleAuthError]
  );

  const handleGoogleAuth = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    await promptAsync();
  }, [promptAsync]);

  const handleAppleAuth = useCallback(async () => {
    try {
      setIsAppleLoading(true);
      setError(null);
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      await handleServerAuth({
        authProvider: "apple",
        authId: credential.user,
        username: credential.fullName?.givenName || "Apple User",
      });
    } catch (error) {
      handleAuthError(error as Error);
    } finally {
      setIsAppleLoading(false);
    }
  }, [handleServerAuth, handleAuthError]);

  useEffect(() => {
    const checkAppleAuth = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setIsAppleAuthAvailable(isAvailable);
    };
    checkAppleAuth();
  }, []);

  React.useEffect(() => {
    if (response?.type === "success" && response.authentication?.idToken) {
      handleServerAuth({
        authProvider: "google",
        authId: response.authentication.idToken,
        username: undefined, // Add username from Google profile if needed
      });
    }
  }, [response, handleServerAuth]);

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity
        style={[styles.googleButton, isLoading && styles.buttonDisabled]}
        onPress={handleGoogleAuth}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#1F2937" />
        ) : (
          <Text style={styles.buttonText}>Mit Google fortfahren</Text>
        )}
      </TouchableOpacity>
      {isAppleAuthAvailable && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={styles.appleButton}
          onPress={handleAppleAuth}
        />
      )}
    </View>
  );
}
