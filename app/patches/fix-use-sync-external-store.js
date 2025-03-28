const fs = require('fs');
const path = require('path');

// Pfad zur problematischen Datei
const filePath = path.join(__dirname, '..', 'node_modules', 'use-sync-external-store', 'with-selector.js');

// Neuer Inhalt für die Datei
const newContent = `'use strict';

// Patched by fix script
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/use-sync-external-store-shim/with-selector.production.min.js');
} else {
  module.exports = require('./cjs/use-sync-external-store-shim/with-selector.development.js');
}`;

console.log('Patching file:', filePath);

try {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('✅ Successfully patched use-sync-external-store!');
} catch (err) {
    console.error('Error patching file:', err);
    process.exit(1);
}