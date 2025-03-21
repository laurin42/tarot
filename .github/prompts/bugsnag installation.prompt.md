"Installiere und implementiere Bugsnag in meinem Expo-React-Native-Projekt(Frontend -> Tarot/app) und erstelle einen einfachen Testfall, um sicherzustellen, dass die Integration funktioniert.

### 1️⃣ Installation:

- Füge `@bugsnag/react-native` zu den Abhängigkeiten hinzu.
- Falls `expo` verwendet wird, stelle sicher, dass Expo-Builds kompatibel sind.

### 2️⃣ Initialisierung:

- Erstelle eine neue Datei `bugsnag.js` im Hauptverzeichnis und initialisiere Bugsnag dort.
- Importiere Bugsnag in die `index.js` oder `App.tsx` Datei.

### 3️⃣ Fehler-Tracking einbauen:

- Füge einen globalen Fehlerhandler hinzu, der nicht abgefangene Fehler an Bugsnag sendet.
- Implementiere `Bugsnag.notify(new Error("Test-Fehler"))` in einer Komponente, um die Integration zu testen.

### 4️⃣ Konfiguration & Bereinigung:

- Falls Bugsnag eine API-Key-Konfiguration benötigt, stelle sicher, dass dieser sicher aus einer `.env` Datei geladen wird.
- Überprüfe, ob Bugsnag mit React Navigation kompatibel ist und tracke Navigation-Fehler.

### 5️⃣ Testlauf & Validierung:

- Starte die App und löse absichtlich einen Fehler aus (`Bugsnag.notify`).
- Überprüfe, ob der Fehler in Bugsnag auftaucht.
- Falls Expo Managed Workflow genutzt wird, prüfe, ob `expo prebuild` nötig ist.

Gib mir den vollständigen Code für die geänderten Dateien zurück."
