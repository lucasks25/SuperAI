const fs = require('fs');

let svg = `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#000000" stroke-width="1.5" stroke-opacity="0.06" stroke-linejoin="round">`;

const centers = [
  {x: 100, y: 150, p1: 1.2, p2: 0.5, freq1: 3, freq2: 2},
  {x: 700, y: 650, p1: 0.5, p2: 1.8, freq1: 2, freq2: 4},
  {x: -200, y: 800, p1: 2.1, p2: 0.9, freq1: 4, freq2: 3}
];

for(let r = 40; r < 1200; r += 40) {
  for(let c of centers) {
    if (r > 1000) continue;
    let path = "M ";
    let steps = 120;
    for (let i = 0; i <= steps; i++) {
      let a = (i / steps) * Math.PI * 2;
      // Organic deformation
      let deformation = Math.sin(a * c.freq1 + c.p1) * 0.15 + Math.cos(a * c.freq2 + c.p2) * 0.1;
      let actualR = r * (1 + deformation);
      let px = c.x + Math.cos(a) * actualR;
      let py = c.y + Math.sin(a) * actualR;
      
      if (i === 0) {
        path += `${px.toFixed(1)},${py.toFixed(1)} L `;
      } else {
        path += `${px.toFixed(1)},${py.toFixed(1)} `;
      }
    }
    svg += `\n    <path d="${path} Z" />`;
  }
}

svg += `\n  </g>\n</svg>`;

fs.writeFileSync('public/topography.svg', svg);
