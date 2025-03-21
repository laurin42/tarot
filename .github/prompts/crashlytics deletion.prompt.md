"Finde und entferne alle Spuren von Firebase Crashlytics aus meinem React Native (Expo) Projekt.

### Schritte:

1️⃣ **Überprüfe, ob Firebase noch für andere Dinge genutzt wird (z. B. Auth, Firestore, Messaging, etc.).**

- Falls `import firebase from '@react-native-firebase/app'` oder `firebase.initializeApp()` genutzt wird, prüfe, ob auch andere Firebase-Dienste (`auth`, `firestore`, `messaging`, etc.) importiert sind.
- Falls Firebase **noch benötigt wird**, lasse `@react-native-firebase/app` unangetastet.
- Falls Firebase **nur für Crashlytics genutzt wurde**, entferne es vollständig.

2️⃣ **Entferne Crashlytics-Pakete aus package.json und node_modules:**

- `@react-native-firebase/crashlytics`
- Falls `@react-native-firebase/app` nur für Crashlytics genutzt wurde, ebenfalls entfernen.

3️⃣ **Entferne Crashlytics aus allen JavaScript/TypeScript-Dateien:**

- Lösche alle `import crashlytics from '@react-native-firebase/crashlytics';`
- Entferne alle `crashlytics().log()`, `crashlytics().recordError()`, `crashlytics().setUserId()`.

4️⃣ **Falls ein natives Android-Projekt existiert:**

- Entferne `apply plugin: 'com.google.firebase.crashlytics'` aus `android/app/build.gradle`.
- Lösche `implementation 'com.google.firebase:firebase-crashlytics'` aus `android/app/build.gradle`.
- Entferne alle Crashlytics-Referenzen aus `android/app/src/main/java/.../MainApplication.java`.

5️⃣ **Falls ein natives iOS-Projekt existiert:**

- Lösche alle Crashlytics-Einträge aus `ios/Podfile`.
- Führe `pod deintegrate && pod install` aus.

6️⃣ **Bereinige das Projekt und stelle sicher, dass keine Crashlytics-Abhängigkeiten mehr existieren:**

- Lösche `node_modules`, `package-lock.json` oder `yarn.lock`.
- Führe `npm install` oder `yarn install` neu aus.
- Falls Expo Bare Workflow: `expo prebuild` ausführen.

Gib mir den Code für alle Änderungen zurück."
