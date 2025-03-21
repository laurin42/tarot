Ich möchte, dass du die gesamte Codebase auf TypeScript-Best-Practices und Typsicherheit überprüfst. Achte auf die folgenden Punkte:

1️⃣ **Allgemeine Typensicherheit:**

- Überprüfe, ob alle Props, API-Responses und Funktionen korrekt typisiert sind.
- Verwende `unknown` statt `any`, um Unsicherheiten explizit zu machen.
- Nutze `as const`, wenn möglich, um Literals unveränderlich zu machen.

2️⃣ **Best Practices für Typenorganisation:**

- Sind kleine, komponentenspezifische Typen innerhalb der Datei definiert?
- Sind größere, wiederverwendbare Typen in separaten `types/` Dateien organisiert?
- Sind API-Response-Typen in einer dedizierten Datei wie `types/api.ts` ausgelagert?
- Gibt es eine übergroße `types.ts` Datei, die besser aufgeteilt werden sollte?

3️⃣ **Union Types vs. Enums:**

- Verwende **string unions** (`type Mode = "dark" | "light"`) anstelle von Enums, wenn sinnvoll.
- Nutze Enums nur, wenn wirklich ein **zusätzlicher Nutzen** durch numerische Werte entsteht.

4️⃣ **Explizite vs. Implizite Typisierung:**

- Sind alle Rückgabewerte von Funktionen explizit getypt?
- Ist Autotypisierung durch TypeScript (`let someVar = …`) an den richtigen Stellen genutzt?

5️⃣ **Fehlertoleranz & Exception Handling:**

- Sind mögliche Fehler durch `try/catch` oder `Result<T, E>`-Patterns abgefangen?
- Falls Bugsnag verwendet wird: Werden Fehler an Bugsnag oder eine andere Error-Logging-Lösung gesendet?

6️⃣ **React & Props-Typisierung:**

- Verwende `React.FC<Props>` oder `({ children }: Props) => {}` für funktionale Komponenten.
- Ist `children` korrekt typisiert (`ReactNode`)?
- Vermeide `any` bei Props und setze Default-Values über `defaultProps` oder `??`.

7️⃣ **Zod oder io-ts für API-Typen?**

- Falls API-Responses validiert werden: Sind `zod`-Schemas (`z.infer<typeof schema>`) korrekt genutzt?
- Falls kein Validation Layer existiert: Gibt es einen Plan, um API-Daten sicher zu verarbeiten?

8️⃣ **Konflikte & Redundanzen in Typdefinitionen:**

- Gibt es doppelte oder überflüssige Typen, die zusammengeführt werden sollten?
- Sind generische Typen (`<T>`) sinnvoll eingesetzt, um Wiederverwendbarkeit zu verbessern?

🔍 **Aufgabe:**  
Bitte überprüfe den Code anhand dieser Punkte und markiere problematische Stellen. Falls Verbesserungen möglich sind, gib direkte Vorschläge für bessere Implementierungen.

gib IMMER(!!!!) die betreffende datei an!
