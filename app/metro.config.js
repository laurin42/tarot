const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');
const fs = require('fs');

const config = getDefaultConfig(__dirname);
const { transformer, resolver } = config;

// Pfad zu den problematischen Modulen
const useSyncExternalStoreDir = path.resolve(__dirname, 'node_modules/use-sync-external-store');
const shimDir = path.join(useSyncExternalStoreDir, 'cjs/use-sync-external-store-shim');

// Cache-Optimierungen hinzufügen
config.cacheStores = [
    // Asynchronen Disk-Cache aktivieren
    require('metro-cache').FileStore,
];

// Server-Konfiguration für bessere Performance
config.server = {
    ...config.server,
    port: 8081,
    enhanceMiddleware: (middleware) => middleware,
};

// Cache-Size erhöhen
config.maxWorkers = Math.max(2, require('os').cpus().length - 1);

// Transformer mit schnelleren Einstellungen  
config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    unstable_transformProfile: 'hermes-stable',
    minifierPath: 'metro-minify-terser',
    experimentalImportSupport: false, // Für bessere Performance
    unstable_disableModuleWrapping: true, // Wrapper-Code reduzieren
    // Minifier-Optimierungen
    minifierConfig: {
        keep_classnames: true,
        keep_fnames: true,
        compress: {
            drop_console: process.env.NODE_ENV === 'production', // Nur in Production entfernen
            global_defs: {
                __DEV__: process.env.NODE_ENV !== 'production',
            },
            passes: 1, // Für schnellere Builds
        },
        mangle: {
            keep_fnames: true,
            toplevel: false,
        },
        output: {
            comments: false,
            ascii_only: true,
        },
    },
};

// Module-Resolution optimieren
config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
    // use-sync-external-store Problem beheben
    extraNodeModules: {
        './cjs/use-sync-external-store-with-selector.production.js':
            path.join(useSyncExternalStoreDir, 'cjs/use-sync-external-store-shim/with-selector.production.min.js'),
        './cjs/use-sync-external-store-with-selector.development.js':
            path.join(useSyncExternalStoreDir, 'cjs/use-sync-external-store-shim/with-selector.development.js'),
    },
    // Nur nötige Schwarze Liste behalten
    blacklistRE: [
        /.*\/__tests__\/.*/,
        process.env.NODE_ENV === 'production' ? /.*\.development\.js$/ : /.*\.production\.js$/,
    ],
    // Wichtig: Unnötige Node-Module ausschließen
    blockList: [/\/dev-tools\/.*/],
    // Caching-Strategien verbessern
    useWatchman: true,
};

// Das use-sync-external-store-Modul patchen
const selectorFilePath = path.join(useSyncExternalStoreDir, 'with-selector.js');
if (fs.existsSync(selectorFilePath)) {
    console.log('Patching problematic file:', selectorFilePath);
    const patchedContent = `'use strict';

// Patched by Metro config
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/use-sync-external-store-shim/with-selector.production.min.js');
} else {
  module.exports = require('./cjs/use-sync-external-store-shim/with-selector.development.js');
}`;

    try {
        fs.writeFileSync(selectorFilePath, patchedContent, 'utf8');
        console.log('✅ Successfully patched use-sync-external-store/with-selector.js');
    } catch (err) {
        console.error('Failed to patch file:', err);
    }
}

module.exports = withNativeWind(config, { input: './global.css' });