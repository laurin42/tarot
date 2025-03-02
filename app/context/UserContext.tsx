import React, { createContext, useContext, useState, useEffect } from "react";
import { UserProfile } from "../types/user";

interface UserContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  updateGoals: (goals: string) => Promise<void>;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth session on load
    checkAuthSession();
  }, []);

  const checkAuthSession = async () => {
    try {
      // Check for existing auth tokens/session
      setLoading(false);
    } catch (error) {
      console.error("Auth session check failed:", error);
      setLoading(false);
    }
  };

  const updateGoals = async (goals: string) => {
    if (!user?.id) return;

    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/users/${user.id}/goals`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ goals }),
        }
      );

      if (!response.ok) throw new Error("Failed to update goals");

      const updatedUser = await response.json();
      setUser(updatedUser);
    } catch (error) {
      console.error("Failed to update goals:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateGoals, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
