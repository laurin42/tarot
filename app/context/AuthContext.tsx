import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "./UserContext";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Use UserContext to manage user data
  const { setUser } = useUser();

  // Bei App-Start Token aus Storage laden
  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        console.log(
          "Token beim App-Start:",
          token ? "vorhanden" : "nicht vorhanden"
        );

        setAuthState({
          token: token,
          isAuthenticated: !!token,
          isLoading: false,
        });
      } catch (error) {
        console.error("Fehler beim Laden des Tokens:", error);
        setAuthState({
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    loadToken();
  }, []);

  // Update the signIn function to properly navigate after setting auth state
  const signIn = async (token: string) => {
    try {
      console.log("Token speichern...");
      await AsyncStorage.setItem("userToken", token);

      setAuthState({
        token,
        isAuthenticated: true,
        isLoading: false,
      });
      console.log("Anmeldung erfolgreich");
    } catch (error) {
      console.error("Fehler bei der Anmeldung:", error);
      throw error;
    }
  };

  // Implement a proper signOut function
  const signOut = async () => {
    try {
      console.log("Beginne Abmeldeprozess...");
      // Clear the token
      await AsyncStorage.removeItem("userToken");
      console.log("Token entfernt");

      // Reset user data
      setUser(null);
      console.log("Benutzerdaten zurückgesetzt");

      // Update auth state last
      setAuthState({
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log("Authentifizierungsstatus zurückgesetzt");

      return Promise.resolve();
    } catch (error) {
      console.error("Fehler beim Abmelden:", error);
      return Promise.reject(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
