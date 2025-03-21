// Optimiere die Größe des Projekts, indem du unnötige Dateien entfernst und die Größe der Abhängigkeiten und Assets reduzierst

// 1. Überprüfung der Bundle-Größe und Abhängigkeiten mit Webpack oder Expo-Analyzer
// Verwende den webpack-bundle-analyzer, um die Größe von Bundles zu visualisieren
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Füge diesen Code in deine Webpack-Konfiguration ein, um eine Analyse der Bundle-Größe durchzuführen
// npm install --save-dev webpack-bundle-analyzer
const webpackConfig = {
plugins: [
new BundleAnalyzerPlugin({
analyzerMode: 'static',
reportFilename: 'bundle-report.html',
openAnalyzer: true,
}),
],
};

// 2. Entfernen von redundanten oder ungenutzten Dateien
// Prüfe auf nicht verwendete oder temporäre Dateien in deinem Projekt
// Verwende die depcheck Bibliothek, um nicht genutzte Abhängigkeiten zu finden
import \* as depcheck from 'depcheck';

const options = {
skipMissing: true,
ignoreBinPackage: false,
};

depcheck(process.cwd(), options).then((unusedDeps) => {
console.log('Nicht genutzte Abhängigkeiten:', unusedDeps.dependencies);
// Entferne nicht genutzte Abhängigkeiten aus package.json
unusedDeps.dependencies.forEach((dep) => {
execSync(`npm uninstall ${dep}`);
});
});

// 3. Optimierung der Bilder im Projekt
// Verwende Tools, um die Bildgrößen zu reduzieren, ohne die Qualität zu verlieren (z. B. ImageOptim oder TinyPNG)
// Wenn du WebP-Bilder verwendest, kannst du sie mit einem Build-Tool automatisch komprimieren
import sharp from 'sharp';

const compressImage = async (inputPath: string, outputPath: string) => {
await sharp(inputPath)
.resize(800) // Resize für mobile Ansicht
.webp({ quality: 80 }) // Konvertiere zu WebP mit 80% Qualität
.toFile(outputPath);
};

compressImage('src/assets/image.jpg', 'dist/assets/image.webp');

// 4. Bereinige ungenutzte npm-Pakete und ersetze große Abhängigkeiten durch kleinere Alternativen
// Verwende die "npm prune" Methode, um nicht verwendete Pakete zu entfernen
import { execSync } from 'child_process';

const removeUnusedPackages = () => {
execSync('npm prune --production'); // Entferne ungenutzte Entwicklungspakete
};

// 5. Verbesserung der Code-Struktur durch Aufteilung in kleinere, wiederverwendbare Komponenten
// Überprüfe alle großen Dateien und ziehe in Betracht, sie in kleinere Komponenten zu unterteilen
// Verwende stattdessen Lazy Loading für selten genutzte Komponenten

// Beispiel: Dynamisches Importieren von großen Komponenten mit React Lazy
import React, { Suspense, lazy } from 'react';

const LargeComponent = lazy(() => import('./components/LargeComponent'));

const App = () => (
<Suspense fallback={<div>Loading...</div>}>
<LargeComponent />
</Suspense>
);

export default App;

Zusammenfassung des Prompts für GitHub Copilot:

Verwende den webpack-bundle-analyzer oder expo-analyzer, um die Projektgröße und die verwendeten Abhängigkeiten zu visualisieren.
Bereinige unnötige Abhängigkeiten mit depcheck, um ungenutzte Pakete zu identifizieren und zu entfernen.
Optimiere Bilder durch Konvertierung in WebP und Reduzierung der Auflösung.
Verwende Lazy Loading für selten genutzte Komponenten, um die anfängliche Bundle-Größe zu reduzieren.
Entferne temporäre Dateien und führe npm prune aus, um ungenutzte Entwicklungspakete zu löschen.
Hinweise:

Achte darauf, dass das Ausführen dieser Optimierungen die Projektgröße und Ladezeiten verringern kann, aber auch sicherstellen muss, dass keine wichtigen Dateien entfernt werden.
Der Prompt ist auf die Optimierung von Bundle-Größe und Assets fokussiert, aber auch für größere Refaktorisierungen von Komponenten geeignet.
