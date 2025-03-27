"Analysiere die Codebase meiner React Native Expo App (Tarot-App), die für den Play Store (Android) bereitgestellt werden soll. Beachte dabei folgende Aspekte:

Deployment-Vorbereitung für den Play Store:

Überprüfung der app.json / eas.json Konfiguration für den Build-Prozess mit EAS (Expo Application Services).

Sicherstellen, dass alle Berechtigungen (android.permissions) korrekt gesetzt sind.

Prüfen, ob expo-updates für Over-the-Air (OTA) Updates korrekt konfiguriert ist.

Sicherstellen, dass das Splash-Screen und App-Icons für verschiedene Android-Geräteformate vorhanden sind.

Backend-Anbindung (Server auf Hetzner)

Prüfen, ob die API-Calls effizient gestaltet sind und asynchron verarbeitet werden (useQuery mit React Query oder useEffect).

Sicherstellen, dass Umgebungsvariablen (.env) für API-URLs sicher verwaltet werden.

Vorschläge für Monitoring-Tools zur Fehlerverfolgung (z. B. Sentry für Frontend + Backend).

Best Practices & Code-Qualität:

Typensicherheit mit TypeScript sicherstellen (types.ts für konsistente Modelle).

DRY-Prinzip umsetzen: Überprüfung, ob Code-Duplikate in UI-Komponenten (<Card />, <Button />) vermieden werden.

Performance-Optimierung:

FlatList vs. ScrollView für das Rendering der Karten prüfen.

useMemo und useCallback für unnötige Re-Render verhindern.

Lazy Loading für schwere Ressourcen.

UI & UX Verbesserungen:

Prüfen, ob alle Tarotkarten-Illustrationen eingebunden sind und in hoher Qualität vorliegen.

Icons (z. B. Material Icons oder custom SVGs) für ein konsistentes UI überprüfen.

Play Store-Anforderungen für Screenshots, Banner und Feature-Graphics beachten.

Fehlende Tools & Features:

Vorschläge für bessere Error-Logs (react-native-exception-handler, expo-error-recovery).

Integration von In-App-Logging (Reactotron, Flipper) für das Debugging.

Falls noch nicht vorhanden: Dark Mode-Unterstützung mit react-native-appearance oder useColorScheme.

Realistische Priorisierung & Machbarkeit:

Es ist nicht möglich, 100 % aller Best Practices und Optimierungen umzusetzen. Setze daher Prioritäten dort, wo sie den größten Nutzen bringen.

Prüfe insbesondere, welche bestehenden Code-Strukturen sich bereits bewährt haben und nur optimiert werden sollten, anstatt sie komplett neu aufzubauen.

Gib Empfehlungen, die mit vertretbarem Aufwand umgesetzt werden können, um die Stabilität und Performance für das geplante Deployment zu maximieren.

Gib mir konkrete Empfehlungen für Verbesserungen mit Beispielcode, wo nötig."\*
