import { createContext, useContext, useCallback } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Platform } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const GoogleAuthConfig = {
  androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  expoClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
};

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    ...GoogleAuthConfig,
    selectAccount: true,
    responseType: "id_token",
    shouldAutoExchangeCode: false,
    redirectUri: Platform.select({
      web: "https://auth.expo.io/@your-expo-username/tarot",
      default: "tarot://oauth2redirect",
    }),
  });

  return {
    request,
    response,
    promptAsync: useCallback(async () => {
      try {
        const result = await promptAsync({
          showInRecents: true,
          useProxy: true,
        });

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
