const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const out = path.join(root, 'www');
fs.mkdirSync(out, { recursive: true });

for (const file of ['index.html', 'manifest.webmanifest', 'sw.js']) {
  fs.copyFileSync(path.join(root, file), path.join(out, file));
}
console.log('CarrelloSmart web files copied to www/.');
