import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distHtmlPath = path.join(__dirname, 'dist', 'one-line-game.html');
const distUriPath = path.join(__dirname, 'dist', 'data_uri.txt');

if (!fs.existsSync(distHtmlPath)) {
  console.error(`Error: File not found: ${distHtmlPath}`);
  process.exit(1);
}

const htmlCode = fs.readFileSync(distHtmlPath, 'utf8').trim();
const rawBytes = Buffer.byteLength(htmlCode, 'utf8');

// Build Data URI: only % needs encoding in modern address bars
const dataUri = 'data:text/html,' + htmlCode.replace(/%/g, '%25');
const uriBytes = Buffer.byteLength(dataUri, 'utf8');

// Write out data_uri.txt
fs.writeFileSync(distUriPath, dataUri, 'utf8');

// Verify JS Syntax
let isSyntaxValid = false;
let syntaxError = null;
try {
  const jsMatch = htmlCode.match(/<script>([\s\S]*?)<\/script>/);
  if (!jsMatch) {
    throw new Error('No <script> tag found in HTML');
  }
  new Function(jsMatch[1]);
  isSyntaxValid = true;
} catch (e) {
  syntaxError = e.message;
}

const BUDGET = 3072;
const isRawUnder = rawBytes <= BUDGET;
const isUriUnder = uriBytes <= BUDGET;
const passed = isSyntaxValid && isRawUnder && isUriUnder;

console.log('='.repeat(56));
console.log('            INSTEP 3D - BUILD & SIZE REPORT         ');
console.log('='.repeat(56));
console.log(` Budget Limit:           ${BUDGET} bytes`);
console.log(` Raw HTML Size:          ${rawBytes} bytes (${BUDGET - rawBytes} bytes remaining)`);
console.log(` Data URI Size:          ${uriBytes} bytes (${BUDGET - uriBytes} bytes remaining)`);
console.log(` JavaScript Syntax:      ${isSyntaxValid ? 'VALID [PASS]' : 'INVALID: ' + syntaxError}`);
console.log(` Raw Under Budget:       ${isRawUnder ? '[PASS]' : '[FAIL]'}`);
console.log(` URI Under Budget:       ${isUriUnder ? '[PASS]' : '[FAIL]'}`);
console.log('-'.repeat(56));
console.log(` OVERALL RESULT:         ${passed ? 'SUCCESS - READY FOR BITES (+22 BITES)' : 'FAILURE'}`);
console.log('='.repeat(56));

if (!passed) {
  process.exit(1);
}
