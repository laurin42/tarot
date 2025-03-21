import type { Href } from "expo-router"; // Importiere von der Hauptbibliothek
import type { ExternalPathString, RelativePathString } from 'expo-router';

// Union-Typ für alle möglichen Route-Typen in expo-router
export type Route = string;

/**
 * Wandelt einen beliebigen Route-String in einen gültigen Navigationstyp für expo-router um.
 * 
 * Dies löst Typenprobleme bei router.replace() und router.push() durch Type-Casting.
 * 
 * @param route Ein Route-String, normalerweise aus APP_ROUTES-Konstanten
 * @returns Ein Typ, der von expo-router-Navigationsmethoden akzeptiert wird
 */
export function toValidRoute(route: Route): Href {
  return route as Href;
}

/**
 * Konstanten für alle App-Routen mit korrekter Typisierung
 */
export const APP_ROUTES = {
  TABS: {
    THREECARDS: "/(tabs)/threecards" as Route,
    DAILYCARD: "/(tabs)/dailycard" as Route,
    PROFILE: "/(tabs)/profile" as Route,
  },
  AUTH: "/(auth)" as Route,
  HOME: "/" as Route,
};