import React from "react";
import { bugsnagService } from "../services/bugsnag";
import { ErrorFallback } from "../components/development/ErrorFallback";

/**
 * Importiert eine Komponente dynamisch und liefert einen Fallback bei Fehlern
 * @param modulePath Pfad zum Modul
 * @param exportName Name des Exports (default = 'default')
 * @param errorMessage Fehlermeldung bei Misserfolg
 */
export function importComponentDynamically(
  modulePath: string,
  exportName: string = "default",
  errorMessage: string = "Fehler beim Laden der Komponente"
): React.ComponentType<Record<string, unknown>> {
  try {
    const Component = require(modulePath)[exportName];

    if (!Component) {
      throw new Error(
        `Komponente ${exportName} nicht in ${modulePath} gefunden`
      );
    }

    return Component;
  } catch (error: unknown) {
    bugsnagService.notify(
      error instanceof Error ? error : new Error(String(error))
    );

    console.error(
      `Fehler beim Laden von ${modulePath}:`,
      error instanceof Error ? error.message : String(error)
    );

    return () => <ErrorFallback message={errorMessage} />;
  }
}
