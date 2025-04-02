Analysiere den gegebenen Code einer React- oder React Native-Komponente und prüfe, ob Teile davon sinnvoll ausgelagert werden können. Berücksichtige dabei folgende Best Practices:"

1️⃣ Allgemeine Best Practices
Wiederholter Code sollte in eine separate Datei ausgelagert werden.
Komponenten mit einer klaren, eigenständigen Logik sollten extrahiert werden.
Hooks oder Utility-Funktionen sollten in eigene Hooks oder Utility-Dateien verschoben werden.
2️⃣ Identifikation von Auslagerungskandidaten
Sind UI-Elemente vorhanden, die mehrfach verwendet werden? → In eine eigene components/ Datei verschieben.
Gibt es Geschäftslogik, die mehrere Komponenten betrifft? → In utils/ oder hooks/ auslagern.
Wird eine lange, unübersichtliche Funktion verwendet? → Prüfen, ob sie in eine Helper-Funktion ausgelagert werden kann.
Enthält der Code viele useEffect- oder useState-Hooks mit komplexer Logik? → In einen Custom Hook (useSomething.ts) verschieben.
3️⃣ Typensicherheit
Falls Props übergeben werden, prüfe, ob ein dedizierter Type oder Interface (types/) für diese existiert.
Falls eine API-Abfrage erfolgt, stelle sicher, dass der Response-Typ explizit definiert ist.
Nutze React.FC<Props> nur, wenn wirklich notwendig. Falls Props nicht optional sind, bevorzuge explizite Typdefinitionen.
4️⃣ Dateistruktur & Organisation
Falls eine Komponente nur in einer Datei genutzt wird, sollte sie nicht unnötig ausgelagert werden.
Falls eine komplexe Komponente mehrere Hundert Zeilen hat, analysiere, welche Teile in Sub-Komponenten (Component.Part.tsx) zerlegt werden können.
Erwartete Ausgabe von Copilot:

Liste der auslagerbaren Abschnitte mit Begründung
Vorschlag für die neue Dateistruktur (z. B. components/Button.tsx, hooks/useAuth.ts)
Falls keine Auslagerung notwendig ist, eine kurze Erklärung, warum der Code besser in einer Datei bleibt.
