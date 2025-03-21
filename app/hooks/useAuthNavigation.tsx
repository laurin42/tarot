import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { bugsnagService } from "../services/bugsnag";
import { APP_ROUTES } from "../constants/routes";
import { useAuth } from "../context/AuthContext";
import { toValidRoute } from "../types/navigation";

/**
 * Hook für die authentifizierungsbasierte Navigation
 * Leitet den Benutzer automatisch zur richtigen Route weiter
 */
export function useAuthNavigation(): void {
  const { isAuthenticated, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    try {
      if (isLoading) return;

      const inAuthGroup = segments[0] === "(auth)";

      // Typsichere Prüfung auf dynamische Routen
      const isDynamicRoute =
        typeof segments[0] === "string" && segments[0].startsWith("/");

      if (isDynamicRoute) {
        // Bei dynamischen Routen keine Umleitung
        return;
      }

      if (isAuthenticated && inAuthGroup) {
        router.replace(toValidRoute(APP_ROUTES.TABS.THREECARDS));
        bugsnagService.leaveBreadcrumb("Redirected authenticated user", {
          navigation: {
            from: "(auth)",
            to: APP_ROUTES.TABS.THREECARDS,
          },
        });
      } else if (
        !isAuthenticated &&
        !inAuthGroup &&
        segments[0] !== undefined
      ) {
        router.replace(toValidRoute(APP_ROUTES.AUTH));
        bugsnagService.leaveBreadcrumb("Redirected unauthenticated user", {
          navigation: {
            from: segments[0],
            to: APP_ROUTES.AUTH,
          },
        });
      }
    } catch (error: unknown) {
      bugsnagService.notify(
        error instanceof Error
          ? error
          : new Error("Navigation error in auth routing")
      );
    }
  }, [isAuthenticated, segments, isLoading, router]);
}
