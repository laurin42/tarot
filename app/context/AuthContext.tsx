import React, { createContext, useContext, useState, useEffect } from "react";
import { router } from "expo-router";
import { storage } from "../utils/storage";

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
  const [state, setState] = useState<AuthState>({
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    loadToken();
  }, []);

  const loadToken = async () => {
    try {
      const token = await storage.getItem("userToken");
      setState({
        token,
        isAuthenticated: !!token,
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to load token:", error);
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const signIn = async (token: string) => {
    try {
      await storage.setItem("userToken", token);
      setState({
        token,
        isAuthenticated: true,
        isLoading: false,
      });
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  const signOut = async () => {
    try {
      await storage.removeItem("userToken");
      setState({
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
      router.replace("/(auth)");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
