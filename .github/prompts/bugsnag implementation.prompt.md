"Implementiere Bugsnag in meinem **Expo-React-Native-Projekt** mit **Clean Code**, **Best Practices** und **voller TypeScript-Typensicherheit**.

### 1️⃣ Installation:

- Installiere `@bugsnag/react-native`.
- Falls Expo Bare Workflow genutzt wird, stelle sicher, dass alle nativen Konfigurationen korrekt sind.
- Falls Expo Managed Workflow genutzt wird, prüfe, ob Bugsnag ohne `expo prebuild` funktioniert.

### 2️⃣ Bugsnag initialisieren (Best Practices):

- Erstelle eine **dedizierte Datei** `src/utils/bugsnag.ts` für die Initialisierung.
- Nutze eine **funktionale Initialisierung** mit TypeScript-Typen.
- Lade den API-Key sicher aus einer `.env` Datei.

### 3️⃣ Globale Fehlerbehandlung implementieren:

- Nutze einen **globalen Fehlerhandler** für nicht abgefangene Fehler.
- Integriere `Bugsnag.ErrorBoundary`, um Fehler abzufangen.
- Falls React Navigation genutzt wird, tracke Navigationsfehler mit Bugsnag.

### 4️⃣ Typensichere Fehlerprotokollierung:

- Erstelle eine Utility-Funktion `logError(error: unknown): void`, die **nur valide Fehler** an Bugsnag sendet.
- Nutze TypeScript-Guards, um sicherzustellen, dass nur `Error`-Objekte übergeben werden.

### 5️⃣ Fehlerhandling in Komponenten verbessern:

- Verwende `Bugsnag.ErrorBoundary` als Wrapper für kritische Komponenten.
- Füge ein **Fallback UI für unerwartete Fehler** hinzu.

### 6️⃣ Testing & Validierung:

- Erstelle eine Testmethode `triggerTestError()`, um die Integration zu testen.
- Überprüfe, ob Bugsnag Fehler meldet und im Dashboard anzeigt.

Gib mir den **vollständigen TypeScript-Code** für alle Änderungen zurück."
