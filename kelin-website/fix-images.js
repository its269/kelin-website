const fs = require('fs'), path = require('path');

// Mapping: slug -> correct image path
const imageMap = {
    // Accessories
    'blogs-acc-acrylic-bender': '/assets/Accessories/Acrylic bender 1.webp',
    'blogs-acc-banner-tape': '/assets/Accessories/Red Banner Tape.webp',
    'blogs-acc-cutting-mat': '/assets/Accessories/Cutting Mat.webp',
    'blogs-acc-cyano-adhesive': '/assets/Accessories/Arki.webp',
    'blogs-acc-electric-scissors': '/assets/Accessories/Electric Scissor.webp',
    'blogs-acc-eyelet-puncher': '/cat_accessories.webp',
    'blogs-acc-foam-tape': '/assets/Accessories/Foam tape.webp',
    'blogs-acc-glass-wiper': '/cat_accessories.webp',
    'blogs-acc-pet-tape': '/assets/Accessories/Yellow tape.webp',
    'blogs-acc-printhead-swab': '/cat_accessories.webp',
    'blogs-acc-reflective-tape': '/assets/Accessories/Reflective tape.webp',
    'blogs-acc-squeegees': '/cat_accessories.webp',
    'blogs-acc-wiper-polyester': '/cat_accessories.webp',

    // Materials
    'blogs-material-alpha-tarpaulin-flex': '/assets/Materials/ALPHA.webp',
    'blogs-material-backlit-film-lightbox': '/assets/Materials/Backlit Film.webp',
    'blogs-material-bacut-translucent-sticker': '/assets/Materials/BACUT.webp',
    'blogs-material-beta-tarpaulin': '/assets/Materials/ALPHA.webp',
    'blogs-material-foam-board-high-impact': '/assets/Materials/Foam Board.webp',
    'blogs-material-just-aluminum-composite': '/assets/Materials/ACP.webp',
    'blogs-material-just-cast-acrylic': '/assets/Materials/Colored Acrylic.webp',
    'blogs-material-just-sintra-board': '/assets/Materials/Black and White Sintra.webp',
    'blogs-material-luminao-extruded-acrylic': '/assets/Materials/Rigid PVC Clear.webp',
    'blogs-material-omega-blackout-tarpaulin': '/assets/Materials/OMEGA.webp',
    'blogs-material-omega-tarpaulin': '/assets/Materials/OMEGA.webp',
    'blogs-material-sofie-clear-sticker': '/assets/Materials/Clear Sticker.webp',
    'blogs-material-sofie-pp-film': '/assets/Materials/PP Film (Transparent).webp',
    'blogs-material-sofie-vinyl-stickers': '/assets/Materials/SK4100 Vinyl Sticker _Glossy (Transparent).webp',
    'blogs-material-specialty-architectural-films': '/assets/Materials/Clear Frosted Sticker.webp',
    'blogs-material-tickee-cold-laminating-film': '/assets/Materials/TK Laminating film.webp',
    'blogs-material-tickee-vinyl-sticker': '/assets/Materials/TK50.webp',

    // Wrong images on machine pages
    'blogs-sapphire-heat-press': '/heatpress/Sapphire Heatpress (2).webp',
    'blogs-promaker-embroidery-series': '/sublimation_dtf/Promaker Embroidery 1201.webp',
    'blogs-smartex-knitting-machine-GS-CE152': '/sublimation_dtf/Smartex Knitting Machine GSCE-1-52.webp',
    'blogs-liyu-x-line-DQS-UV-hybrid-printer': '/liyuxline.png',
    'blogs-k-sign-letter-shell-3D-printer': '/K-Sign Letter Shell 3D Printer.png',
};

// For each page, what placeholder to replace
const placeholderMap = {
    'acc': '/dummy-image-square.jpg',
    'material': '/cat_materials.webp',
    'machine': null, // use old image from actual current src
};

let fixed = 0, skipped = 0;

Object.entries(imageMap).forEach(function ([slug, newImg]) {
    const filePath = path.join('src/app', slug, 'page.js');
    if (!fs.existsSync(filePath)) {
        console.log('MISSING: ' + filePath);
        skipped++;
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const origContent = content;

    // Determine what old image to replace
    let oldImg = null;
    if (slug.startsWith('blogs-acc-')) {
        oldImg = '/dummy-image-square.jpg';
    } else if (slug.startsWith('blogs-material-')) {
        oldImg = '/cat_materials.webp';
    } else {
        // For machine pages with wrong images - extract from current content
        // Find all src= values
        const re2 = /src=['"]([^'"]+)['"]/g;
        const imgs2 = [];
        let m2;
        while ((m2 = re2.exec(content)) !== null) {
            if (m2[1].startsWith('/') && m2[1] !== newImg) imgs2.push(m2[1]);
        }
        // Take the most common one that isn't the correct image
        const freq = {};
        imgs2.forEach(function (i) { freq[i] = (freq[i] || 0) + 1; });
        const sorted = Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; });
        oldImg = sorted[0] || null;
    }

    if (!oldImg) {
        console.log('SKIP (no old img): ' + slug);
        skipped++;
        return;
    }

    // Replace openGraph url
    content = content.replace(
        "images: [{ url: '" + oldImg + "'",
        "images: [{ url: '" + newImg + "'"
    );
    // Replace jsonLd image (full URL)
    const oldFull = 'https://kelinph.com' + oldImg;
    const newFull = 'https://kelinph.com' + newImg;
    content = content.split('"image": "' + oldFull + '"').join('"image": "' + newFull + '"');

    // Replace first <img src="..." in blog-featured-image context
    // Find the featured image img tag and replace only that one
    const featuredRe = /(className="blog-featured-image"[\s\S]{0,200}?<img\s+src=["'])(\/[^"']+)(["'])/;
    const featMatch = content.match(featuredRe);
    if (featMatch) {
        content = content.replace(featuredRe, featMatch[1] + newImg + featMatch[3]);
    }

    // Replace product-widget img
    const widgetRe = /(className="product-widget-img"[\s\S]{0,5}$|<img src=["'])(\/[^"']+)(["'][^>]*className="product-widget-img")/;
    // Try both patterns
    const pwRe1 = /(<img src=["'])(\/[^"']+)(["'][^>]*className="product-widget-img")/;
    const pwRe2 = /(className="product-widget-img")/;
    const pwMatch = content.match(pwRe1);
    if (pwMatch) {
        content = content.replace(pwRe1, pwMatch[1] + newImg + pwMatch[3]);
    }

    if (content !== origContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('FIXED: ' + slug + ' -> ' + newImg);
        fixed++;
    } else {
        console.log('NO CHANGE: ' + slug + ' (old: ' + oldImg + ')');
        skipped++;
    }
});

console.log('\nDone. Fixed: ' + fixed + ', Skipped: ' + skipped);
