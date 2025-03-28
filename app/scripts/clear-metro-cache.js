const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Metro-Cache-Verzeichnis finden
const metroDir = path.resolve(__dirname, '../node_modules/.cache/metro');
const reactNativeDir = path.resolve(__dirname, '../node_modules/.cache/react-native');
const babelDir = path.resolve(__dirname, '../node_modules/.cache/babel-loader');

console.log('Clearing Metro cache...');
if (fs.existsSync(metroDir)) {
    rimraf.sync(metroDir);
    console.log('Metro cache cleared!');
} else {
    console.log('No Metro cache found.');
}

console.log('Clearing React Native cache...');
if (fs.existsSync(reactNativeDir)) {
    rimraf.sync(reactNativeDir);
    console.log('React Native cache cleared!');
} else {
    console.log('No React Native cache found.');
}

console.log('Clearing Babel cache...');
if (fs.existsSync(babelDir)) {
    rimraf.sync(babelDir);
    console.log('Babel cache cleared!');
} else {
    console.log('No Babel cache found.');
}

console.log('✅ All caches cleared!');