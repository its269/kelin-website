const fs = require('fs');
const path = require('path');
const appDir = path.join(__dirname, 'src/app');
const dirs = fs.readdirSync(appDir).filter(d => d.startsWith('blogs-') && d !== 'blogs-smart-eco-solvent-printer');
dirs.sort().forEach(d => {
    const f = path.join(appDir, d, 'page.js');
    if (fs.existsSync(f)) {
        const c = fs.readFileSync(f, 'utf8');
        const t = (c.match(/title:\s*['"]([^'"]{10,120})['"]/) || [])[1] || 'NO_TITLE';
        const img = (c.match(/src=['"](\/(eco-solvent|uv|sublimation|laser|cutting|heat|lamin|promotional|assets|inks|accessories)[^'"]+\.(webp|png|jpg|jpeg))['"]/) || [])[1] || 'NO_IMG';
        console.log(d + '\n  title: ' + t.substring(0, 80) + '\n  img: ' + img);
    }
});
