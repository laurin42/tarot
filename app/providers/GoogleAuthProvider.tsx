import { createContext, useContext, useCallback } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri } from "expo-auth-session";
import { Platform } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const GoogleAuthConfig = {
  androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  responseType: "id_token",
  selectAccount: true,
  redirectUri: Platform.select({
    web: "http://localhost:19006",
    android: makeRedirectUri({
      scheme: "com.laurin.tarot",
      path: "oauth2redirect/google",
    }),
  }),
};

// Add console.log for debugging
console.log("Auth Config:", {
  androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
  redirectUri: GoogleAuthConfig.redirectUri,
});

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    ...GoogleAuthConfig,
    shouldAutoExchangeCode: false,
  });

  return {
    request,
    response,
    promptAsync: useCallback(async () => {
      try {
        const result = await promptAsync();

        if (result?.type === "success") {
          const idToken = result.params?.id_token;
          if (!idToken) {
            throw new Error("No ID token received");
          }
          return { type: "success", token: idToken };
        }
        return { type: "error", error: "Auth cancelled" };
      } catch (error) {
        console.error("Google auth error:", error);
        return { type: "error", error };
      }
    }, [promptAsync]),
  };
}
