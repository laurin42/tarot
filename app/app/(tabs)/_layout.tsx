import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import DailyCardIcon from "../../components/icons/DailyCardIcon";
import ThreeCardsIcon from "../../components/icons/ThreeCardsIcon";
import ProfileIcon from "../../components/icons/ProfileIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#A78BFA", // Heller lila Farbton
        tabBarInactiveTintColor: "#9CA3AF", // Hellgrau für inaktive Tabs
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
      initialRouteName="threecards" // Setze explizit die Starttab
    >
      <Tabs.Screen
        name="threecards"
        options={{
          title: "Dreikartenziehung",
          tabBarIcon: ({ color }) => (
            <ThreeCardsIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dailycard"
        options={{
          title: "Tageskarte",
          tabBarIcon: ({ color }) => (
            <DailyCardIcon width={28} height={28} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <ProfileIcon width={28} height={28} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
