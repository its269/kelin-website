const fs = require('fs'), path = require('path');
const noImgPages = [
    'blogs-acc-acrylic-bender', 'blogs-acc-banner-tape', 'blogs-acc-cutting-mat',
    'blogs-acc-cyano-adhesive', 'blogs-acc-electric-scissors', 'blogs-acc-eyelet-puncher',
    'blogs-acc-foam-tape', 'blogs-acc-glass-wiper', 'blogs-acc-pet-tape',
    'blogs-acc-printhead-swab', 'blogs-acc-reflective-tape', 'blogs-acc-squeegees',
    'blogs-acc-wiper-polyester',
    'blogs-material-alpha-tarpaulin-flex', 'blogs-material-backlit-film-lightbox',
    'blogs-material-bacut-translucent-sticker', 'blogs-material-beta-tarpaulin',
    'blogs-material-foam-board-high-impact', 'blogs-material-just-aluminum-composite',
    'blogs-material-just-cast-acrylic', 'blogs-material-just-sintra-board',
    'blogs-material-luminao-extruded-acrylic', 'blogs-material-omega-blackout-tarpaulin',
    'blogs-material-omega-tarpaulin', 'blogs-material-sofie-clear-sticker',
    'blogs-material-sofie-pp-film', 'blogs-material-sofie-vinyl-stickers',
    'blogs-material-specialty-architectural-films', 'blogs-material-tickee-cold-laminating-film',
    'blogs-material-tickee-vinyl-sticker'
];
noImgPages.forEach(function (d) {
    const f = path.join('src/app', d, 'page.js');
    if (fs.existsSync(f)) {
        const c = fs.readFileSync(f, 'utf8');
        // find all src= values starting with /
        const re = /src=["']([^"']+)["']/g;
        const imgs = [];
        let m;
        while ((m = re.exec(c)) !== null) {
            if (m[1].startsWith('/')) imgs.push(m[1]);
        }
        console.log(d + ': ' + (imgs.length ? imgs.join(' | ') : 'NO SRC FOUND'));
    }
});
