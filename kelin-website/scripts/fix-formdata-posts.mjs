import fs from 'fs';
import path from 'path';

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('Client.js')) files.push(full);
  }
  return files;
}

const patternA = /const res = await fetch\('\/api\/inquiries\/',\s*\{\s*method:\s*'POST',\s*body:\s*formData,\s*headers:\s*\{\s*'Accept':\s*'application\/json',\s*\},?\s*\}\s*\);\s*const data = await res\.json\(\);\s*if \(res\.ok\) \{/g;

const replacementA = `await submitInquiry(buildInquiryPayload(Object.fromEntries(formData.entries())));
            if (true) {`;

const patternB = /const response = await fetch\('\/api\/inquiries\/',\s*\{\s*method:\s*'POST',\s*body:\s*data,\s*headers:\s*\{\s*'Accept':\s*'application\/json',\s*\},?\s*\}\s*\);\s*if \(response\.ok\) \{/g;

const replacementB = `await submitInquiry(buildInquiryPayload(Object.fromEntries(data.entries())));
            if (true) {`;

let fixed = 0;
for (const file of walk('src/app')) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes("fetch('/api/inquiries/'")) continue;

  let next = content
    .replace(patternA, replacementA)
    .replace(patternB, replacementB);

  // Inks-style: after Object.fromEntries conversion, also map common FormData extras
  if (next.includes('Object.fromEntries(formData.entries())')) {
    next = next.replace(
      'await submitInquiry(buildInquiryPayload(Object.fromEntries(formData.entries())));',
      `await submitInquiry(buildInquiryPayload({
              ...Object.fromEntries(formData.entries()),
              pageSource: formData.get('Page Source') || formData.get('pageSource') || '',
              pageUrl: formData.get('Page URL') || formData.get('pageUrl') || '',
              subject: formData.get('_subject') || formData.get('subject') || 'Website Inquiry',
              inquiryType: formData.get('inquiryType') || 'product-inquiry',
              productName: formData.get('productName') || formData.get('Machine Model') || formData.get('machine') || '',
            }));`
    );
  }

  if (next.includes('Object.fromEntries(data.entries())')) {
    next = next.replace(
      'await submitInquiry(buildInquiryPayload(Object.fromEntries(data.entries())));',
      `await submitInquiry(buildInquiryPayload({
              ...Object.fromEntries(data.entries()),
              pageSource: data.get('Page Source') || data.get('pageSource') || '',
              pageUrl: data.get('Page URL') || data.get('pageUrl') || '',
              subject: data.get('_subject') || data.get('subject') || 'Website Inquiry',
              inquiryType: data.get('inquiryType') || 'product-inquiry',
              productName: data.get('productName') || data.get('Machine Model') || data.get('machine') || '',
            }));`
    );
  }

  if (next !== content) {
    fs.writeFileSync(file, next);
    fixed += 1;
    console.log('FIXED', file);
  } else {
    console.log('SKIP', file);
  }
}

console.log(`Done. Fixed ${fixed} files.`);
