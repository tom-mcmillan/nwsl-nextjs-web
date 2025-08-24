const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function generateLogo() {
  // Create canvas
  const canvas = createCanvas(200, 60);
  const ctx = canvas.getContext('2d');

  // Set background to white
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 200, 60);

  // Set font properties
  ctx.font = '600 32px system-ui, -apple-system, sans-serif';
  ctx.textBaseline = 'middle';

  // Draw "NWSL" in blue
  ctx.fillStyle = '#3b82f6';
  ctx.fillText('NWSL', 10, 30);

  // Measure NWSL text to position "Data" correctly
  const nwslWidth = ctx.measureText('NWSL').width;

  // Draw "Data" in black
  ctx.fillStyle = '#000000';
  ctx.fillText('Data', 10 + nwslWidth + 10, 30);

  return canvas;
}

// Generate PNG
const canvas = generateLogo();
const pngBuffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(__dirname, '../public/nwsl-data-logo.png'), pngBuffer);
console.log('Created: public/nwsl-data-logo.png');

// Generate JPEG
const jpegBuffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
fs.writeFileSync(path.join(__dirname, '../public/nwsl-data-logo.jpg'), jpegBuffer);
console.log('Created: public/nwsl-data-logo.jpg');