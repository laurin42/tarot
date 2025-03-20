Optimierter Prompt:
Aufgabe:

Entferne sämtliche Sentry-Einträge aus dem Frontend (React Native App).
Implementiere Firebase Crashlytics gemäß der offiziellen Dokumentation.
Stelle sicher, dass alle TypeScript-Typen explizit definiert sind, um maximale Typensicherheit zu gewährleisten.
Halte dich strikt an Clean Code Best Practices.
Setze NUR die geforderten Anpassungen um – keine zusätzlichen Änderungen.
Vorgehensweise:

Sentry entfernen:
Deinstalliere @sentry/react-native und entferne alle zugehörigen Konfigurationen und Imports.
Bereinige eventuelle Sentry-spezifische Hooks oder Error-Boundaries.
Crashlytics hinzufügen:
Füge die Firebase-Abhängigkeiten hinzu (firebase-bom, firebase-crashlytics, firebase-analytics).
Integriere das Crashlytics Gradle-Plug-in und stelle sicher, dass die Versionen kompatibel sind.
Falls Google Analytics nicht aktiviert ist, stelle sicher, dass es korrekt konfiguriert wird.
Testabsturz einbauen:
Erstelle eine Schaltfläche oder eine andere Möglichkeit, um gezielt einen Crash zu provozieren.
Stelle sicher, dass der Absturzbericht korrekt in der Firebase-Konsole erscheint.
TypeScript & Clean Code:
Definiere alle Schnittstellen und Typen explizit.
Verwende keine any-Typen.
Halte den Code modular und trenne UI- und Logik-Komponenten.
Erwartetes Ergebnis:

Sentry ist restlos entfernt.
Crashlytics ist vollständig integriert und getestet.
Die App bleibt lauffähig und sauber strukturiert.
