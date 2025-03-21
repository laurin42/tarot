"Optimiere meinen gesamten React Native (Expo) Code so, dass möglichst alle Fehler von Bugsnag erfasst werden. Verwende Best Practices für Fehlerhandling und TypeScript-Typensicherheit(Kleine, spezifische Typen → Direkt in der Datei.
Längere, wiederverwendbare Typen → In eine eigene types/ Datei auslagern.
API-Response-Typen & Modelle → Immer separat halten.
). Achte darauf, dass:

✅ Jede Komponente Fehler innerhalb eines ErrorBoundary von Bugsnag abfängt.
✅ Asynchrone Funktionen mit try/catch-Blöcken gesichert sind und Bugsnag benachrichtigt wird.
✅ Uncaught Exceptions und Promise-Rejections global mit Bugsnag registriert werden.
✅ Wichtige API-Calls mit Logging versehen werden, um Fehlerquellen zu identifizieren.
✅ Crashs innerhalb von useEffect und useCallback ebenfalls behandelt werden.
✅ Sämtliche Bugsnag-Funktionen korrekt initialisiert und im gesamten Projekt eingebunden sind.

Korrigiere zudem alle TypeScript-Typen, um Laufzeitfehler durch bessere Typensicherheit zu vermeiden. Falls eine Fehlerquelle nicht direkt behandelbar ist, soll sie sauber an Bugsnag weitergeleitet werden."
Add prompt contents..

gib IMMER(!!!!) die betreffende datei an!
