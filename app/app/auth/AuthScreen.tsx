import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as AppleAuthentication from "expo-apple-authentication";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri } from "expo-auth-session";
import { useAuth } from "../../context/AuthContext";
import { useGoogleAuth } from "../../providers/GoogleAuthProvider";
import { jwtDecode } from "jwt-decode";

// Initialize WebBrowser for auth session
WebBrowser.maybeCompleteAuthSession();

interface AuthResponse {
  token: string;
  error?: string;
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

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
    responseType: "id_token",
    redirectUri: makeRedirectUri({
      native: "tarot://",
    }),
  } as Google.GoogleAuthRequestConfig);

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

  const handleGoogleSignIn = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await promptAsync();
      console.log("Auth result type:", result?.type);

      if (result?.type === "success") {
        const { id_token } = result.params;
        if (!id_token) {
          throw new Error("No ID token received");
        }

        // Decode the token to extract user info
        try {
          const decoded: any = jwtDecode(id_token);
          console.log("Decoded token:", decoded);

          // Extract user information
          const firstName = decoded.given_name || decoded.name || "Google User";
          const email = decoded.email || "";
          const picture = decoded.picture || "";

          console.log("🔄 Exchanging Google token for server token...");

          // Send user data with the token
          const response = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                authProvider: "google",
                authId: id_token,
                username: firstName,
                email: email,
                picture: picture,
              }),
            }
          );

          // Handle HTTP errors better
          if (!response.ok) {
            const errorData = await response
              .json()
              .catch(() => ({ error: "Unknown error" }));
            console.error("Server login failed:", response.status, errorData);
            throw new Error(
              errorData.error || `Server error: ${response.status}`
            );
          }

          const authData = await response.json();
          console.log("✅ Got server token");
          await signIn(authData.token);
        } catch (err) {
          console.error("Google Sign In Error:", err);
          setError(
            err instanceof Error ? err.message : "Ein Fehler ist aufgetreten"
          );
        } finally {
          setIsLoading(false);
        }
      } else {
        setError("Anmeldung fehlgeschlagen");
      }
    } catch (err) {
      console.error("Google Sign In Error:", err);
      setError(
        err instanceof Error ? err.message : "Ein Fehler ist aufgetreten"
      );
    } finally {
      setIsLoading(false);
    }
  }, [promptAsync, signIn]);

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

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity
        style={[styles.googleButton, isLoading && styles.buttonDisabled]}
        onPress={handleGoogleSignIn}
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
