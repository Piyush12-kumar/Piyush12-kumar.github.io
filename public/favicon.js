const canvas = document.createElement('canvas');
canvas.width = 32;
canvas.height = 32;
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#0ea5e9'; // Primary color (tailwind blue-500)
ctx.fillRect(0, 0, 32, 32);

// Text
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 24px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('P', 16, 16);

// Convert to favicon
const link = document.createElement('link');
link.rel = 'icon';
link.href = canvas.toDataURL();
document.head.appendChild(link);