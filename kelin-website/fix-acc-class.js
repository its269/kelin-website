const fs = require('fs'), path = require('path');

const accPages = [
    'blogs-acc-acrylic-bender', 'blogs-acc-banner-tape', 'blogs-acc-cutting-mat',
    'blogs-acc-cyano-adhesive', 'blogs-acc-electric-scissors', 'blogs-acc-eyelet-puncher',
    'blogs-acc-foam-tape', 'blogs-acc-glass-wiper', 'blogs-acc-pet-tape',
    'blogs-acc-printhead-swab', 'blogs-acc-reflective-tape', 'blogs-acc-squeegees',
    'blogs-acc-wiper-polyester'
];

let fixed = 0;
accPages.forEach(function (slug) {
    const filePath = path.join('src/app', slug, 'page.js');
    if (!fs.existsSync(filePath)) { console.log('MISSING: ' + slug); return; }
    let content = fs.readFileSync(filePath, 'utf8');
    // Add acc-blog-page class to the outer div
    if (content.includes('acc-blog-page')) {
        console.log('ALREADY HAS: ' + slug); return;
    }
    const updated = content.replace(
        '<div className="blog-page-layout">',
        '<div className="blog-page-layout acc-blog-page">'
    );
    if (updated !== content) {
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log('FIXED: ' + slug);
        fixed++;
    } else {
        console.log('NO MATCH: ' + slug);
    }
});
console.log('\nDone. Fixed: ' + fixed);
