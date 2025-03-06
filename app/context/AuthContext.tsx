import React, { createContext, useContext, useState, useEffect } from "react";
import { router } from "expo-router";
import { storage } from "../utils/storage";
import { useUser } from "./UserContext"; // Import useUser to access user context

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

  // Use UserContext to manage user data
  const { setUser } = useUser();

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

      // If we have a token, also try to load user data
      if (token) {
        try {
          const userData = await storage.getItem("userData");
          if (userData) {
            setUser(JSON.parse(userData));
          }
        } catch (error) {
          console.error("Failed to load user data:", error);
        }
      }
    } catch (error) {
      console.error("Failed to load token:", error);
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  // Update the signIn function to properly navigate after setting auth state
  const signIn = async (token: string) => {
    try {
      console.log("🔑 Signing in with token:", token.substring(0, 10) + "...");
      // Save token
      await storage.setItem("userToken", token);

      // Update auth state FIRST so navigation works properly
      setState({
        token,
        isAuthenticated: true,
        isLoading: false,
      });

      // Navigate to the main app IMMEDIATELY after updating state
      console.log("📱 Navigating to main app...");
      router.replace("/(tabs)");

      // Try to fetch profile in the background after navigation
      try {
        console.log("🔍 Fetching user profile...");
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}/auth/me`,
          {
            headers: {
              // Make sure header format is exactly: Bearer <token>
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Profile fetch status:", response.status);

        if (!response.ok) {
          console.error("Profile fetch failed with status:", response.status);
          return; // Continue anyway
        }

        const userData = await response.json();
        // Update user data in the background
        if (userData) {
          setUser(userData);
          await storage.setItem("userData", JSON.stringify(userData));
        }
      } catch (profileError) {
        console.error("Profile fetch error:", profileError);
        // Don't block auth flow on profile fetch errors
      }
    } catch (error) {
      console.error("Auth critical error:", error);
      // Only reset on critical errors
      await storage.removeItem("userToken");
      setState({
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  };

  const signOut = async () => {
    try {
      console.log("🚪 Signing out...");

      // Clear ALL storage items related to authentication
      await storage.removeItem("userToken");
      await storage.removeItem("userData");

      // Clear any other auth-related items you might have
      try {
        await storage.removeItem("authSession");
        await storage.removeItem("userProfile");
      } catch (e) {
        console.log("Some items couldn't be removed", e);
      }

      // Reset auth state
      setState({
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });

      // Clear user data in context if you're using that
      if (typeof setUser === "function") {
        setUser(null);
      }

      console.log("✅ Sign out complete");

      // Navigate back to auth screen
      router.replace("/(auth)");
    } catch (error) {
      console.error("❌ Sign out failed:", error);
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
