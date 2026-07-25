import fs from 'fs';
import path from 'path';

const root = path.resolve('src/app');
const FORMSPREE = 'https://formspree.io/f/mvzwzkkd';

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile() && entry.name.endsWith('.js')) files.push(full);
  }
  return files;
}

const files = walk(root).filter((file) => {
  const content = fs.readFileSync(file, 'utf8');
  return content.includes(FORMSPREE);
});

let updated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes(FORMSPREE)) continue;

  // Add shared helper import if missing
  if (!content.includes("from '../../lib/submitInquiry'") && !content.includes('from "../../../lib/submitInquiry"') && !content.includes("from '../lib/submitInquiry'")) {
    // Depth from src/app/<folder>/File.js -> ../../lib
    // Depth from src/app/contact/File.js -> ../../lib
    const rel = path.relative(path.dirname(file), path.resolve('src/lib/submitInquiry.js')).replace(/\\/g, '/').replace(/\.js$/, '');
    const importLine = `import { buildInquiryPayload, submitInquiry } from '${rel.startsWith('.') ? rel : './' + rel}';\n`;

    if (content.includes('"use client";')) {
      content = content.replace('"use client";', `"use client";\n${importLine}`);
    } else if (content.includes("'use client';")) {
      content = content.replace("'use client';", `'use client';\n${importLine}`);
    } else {
      content = importLine + content;
    }
  }

  // Replace Formspree JSON fetch blocks with submitInquiry helper usage patterns.
  // Pattern A: const response = await fetch('https://formspree...
  content = content.replace(
    /const response = await fetch\('https:\/\/formspree\.io\/f\/mvzwzkkd',\s*\{[\s\S]*?body:\s*JSON\.stringify\(([\s\S]*?)\)\s*\}\s*\);\s*if \(response\.ok\) \{/g,
    (match, payloadExpr) => {
      return `await submitInquiry(buildInquiryPayload(${payloadExpr.trim()}));\n            if (true) {`;
    }
  );

  // Pattern B: FormData posts
  content = content.replace(
    /const response = await fetch\('https:\/\/formspree\.io\/f\/mvzwzkkd',\s*\{[\s\S]*?body:\s*formData\s*\}\s*\);\s*if \(response\.ok\) \{/g,
    `await submitInquiry(buildInquiryPayload(Object.fromEntries(formData.entries())));\n            if (true) {`
  );

  // Catch remaining direct URL references
  content = content.replaceAll(FORMSPREE, '/api/inquiries/');

  // Make common optional fields required in product inquiry forms
  content = content
    .replace(/<label htmlFor="company">Company Name<\/label>/g, '<label htmlFor="company">Company Name *</label>')
    .replace(/<label htmlFor="address">Complete Address<\/label>/g, '<label htmlFor="address">Complete Address *</label>')
    .replace(/<label htmlFor="phone">Phone Number<\/label>/g, '<label htmlFor="phone">Phone Number *</label>')
    .replace(/<input type="text" id="company" name="company" \/>/g, '<input type="text" id="company" name="company" required />')
    .replace(/<input type="text" id="address" name="address" placeholder="Street, City, State\/Province, Country" \/>/g, '<input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" required />');

  // Phone inputs without required near name="phone"
  content = content.replace(
    /(<input[\s\S]*?id="phone"[\s\S]*?name="phone"[\s\S]*?)(\/>)/g,
    (m, start, end) => (start.includes('required') ? m : `${start} required ${end}`)
  );

  // Country code select required
  content = content.replace(
    /(<select[^>]*name="countryCode"[^>]*)(>)/g,
    (m, start, end) => (start.includes('required') ? m : `${start} required${end}`)
  );

  fs.writeFileSync(file, content);
  updated += 1;
  console.log('UPDATED', path.relative(process.cwd(), file));
}

console.log(`Done. Updated ${updated} files.`);
