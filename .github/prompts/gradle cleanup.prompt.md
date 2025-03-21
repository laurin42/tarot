"Ich gebe dir eine ältere Version meiner `android/build.gradle`, `android/app/build.gradle` und `android/gradle/wrapper/gradle-wrapper.properties` **VOR der Crashlytics-Integration**.

### Aufgabe:

✅ **Vergleiche die alte Version mit der aktuellen Version.**  
✅ **Entferne ALLE Änderungen, die durch Firebase Crashlytics oder andere problematische Firebase-Abhängigkeiten hinzugekommen sind.**  
✅ **Stelle sicher, dass ALLE anderen Änderungen erhalten bleiben, die nicht mit Crashlytics zu tun haben.**  
✅ **Falls Firebase für andere Dinge genutzt wird (z. B. Auth, Firestore, Messaging), dann behalte NUR die relevanten Abhängigkeiten bei.**

### Schritte:

1️⃣ **Vergleich der Dateien:**

- Identifiziere alle Unterschiede zwischen der alten und der aktuellen Version.
- Entferne nur Crashlytics-bezogene Änderungen.

2️⃣ **Korrigiere `android/app/build.gradle`:**

- Entferne `apply plugin: 'com.google.firebase.crashlytics'` (falls vorhanden).
- Falls `com.google.firebase:firebase-crashlytics` als Dependency hinzugefügt wurde, entferne es.
- Setze andere Firebase-Abhängigkeiten auf die Versionen aus der alten Datei.

3️⃣ **Korrigiere `android/build.gradle`:**

- Falls der `classpath` für Crashlytics (`com.google.firebase:firebase-crashlytics-gradle`) hinzugefügt wurde, entferne ihn.
- Falls `com.google.gms:google-services` aktualisiert wurde, setze die alte Version zurück.

4️⃣ **Korrigiere `gradle-wrapper.properties`:**

- Falls die Datei verändert wurde, stelle die alte `distributionUrl` für Gradle wieder her.

5️⃣ **Bereinige das Projekt und installiere alle Dependencies neu:**

```sh
cd android && ./gradlew clean
cd ..
npm install  # oder yarn install
```
