import { NextResponse } from 'next/server';
import { createCanvas } from 'canvas';

export async function GET() {
  try {
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

    // Convert to PNG buffer
    const buffer = canvas.toBuffer('image/png');

    // Return PNG response
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error('Error generating logo:', error);
    return NextResponse.json({ error: 'Failed to generate logo' }, { status: 500 });
  }
}