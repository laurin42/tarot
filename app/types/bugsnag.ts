export type BugsnagMetadata = Record<string, Record<string, unknown>>;

export interface BugsnagService {
  /** Sendet einen Fehler an Bugsnag */
  notify: (error: Error | string, metadata?: BugsnagMetadata) => unknown;
  /** Erstellt einen Breadcrumb für den aktuellen Fehlerkontext */
  leaveBreadcrumb: (message: string, metadata?: BugsnagMetadata) => void;
  /** Setzt Benutzerinformationen für Bugsnag-Fehlerberichte */
  setUser: (id?: string, name?: string, email?: string) => void;
  /** Prüft, ob Bugsnag erfolgreich initialisiert wurde */
  isStarted: () => boolean;
}