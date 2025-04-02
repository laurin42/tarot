1️⃣ Best Practices für die Ordnerstruktur
components/ → Enthält wiederverwendbare UI-Komponenten mit klar definierten Props.
screens/ → Enthält Screen-Komponenten, die mit der Navigation verknüpft sind.
hooks/ → Enthält Custom Hooks für wiederverwendbare Logik.
utils/ → Enthält Hilfsfunktionen (z. B. Formatierungen, API-Helper).
context/ → Enthält Context-Provider für globalen Zustand.
navigation/ → Enthält Navigation-Setup für React Navigation.
types/ → Enthält globale TypeScript-Typen für Props, API-Responses etc.
assets/ → Enthält Bilder, Icons, Fonts und andere statische Assets.
💡 Erwartung: Alle Dateien sollten in den richtigen Ordnern sein. Falls eine Datei an einem falschen Ort liegt, sollte eine bessere Platzierung empfohlen werden.

2️⃣ Typensicherheit & Best Practices für Dateien
TypeScript nutzen (.tsx für Komponenten, .ts für Hooks & Utils).
Klare Prop-Typisierung (interface oder type in types/ oder direkt in der Komponente).
API-Datenstrukturen mit Zod oder types/ absichern, anstatt any zu verwenden.
Keine Geschäftslogik in UI-Komponenten → Falls vorhanden, sollte sie in hooks/ oder utils/ ausgelagert werden.
💡 Erwartung: Code sollte sauber typisiert sein, mit keinem oder minimalem any-Typ.

3️⃣ Identifikation von Inkonsistenzen oder Problemfällen
Gibt es redundante oder doppelte Dateien?
Sind einige Komponenten zu spezifisch und gehören in screens/ statt components/?
Gibt es Geschäftslogik in UI-Komponenten, die in hooks/ oder utils/ verschoben werden sollte?
Sind Dateinamen konsistent (PascalCase.tsx für Komponenten, camelCase.ts für Hooks und Utils)?
💡 Erwartung: Falls es Abweichungen gibt, sollten konkrete Verbesserungsvorschläge gemacht werden.

4️⃣ Erwartete Ausgabe von Copilot
✅ Falls alles optimal organisiert ist:
"Die Dateistruktur folgt den Best Practices. Keine Änderungen notwendig."

❌ Falls Optimierungen nötig sind:

Liste mit Dateien, die in einen anderen Ordner verschoben werden sollten.
Begründung, warum eine Datei nicht optimal platziert ist.
Falls eine Datei umbenannt oder umstrukturiert werden sollte, konkrete Vorschläge.

gib IMMER (!) die betreffende Datei an!
