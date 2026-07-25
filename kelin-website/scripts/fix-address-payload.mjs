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

let fixed = 0;
for (const file of walk('src/app')) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('submitInquiry')) continue;
  if (content.includes('address: form.address')) continue;
  if (!content.includes('company: form.company')) continue;

  const next = content.replace(
    /company: form\.company \? form\.company\.value : '',/g,
    `company: form.company ? form.company.value : '',\n            address: form.address ? form.address.value : '',`
  );

  if (next !== content) {
    fs.writeFileSync(file, next);
    fixed += 1;
    console.log('FIXED', file);
  }
}

console.log(`Done. Fixed ${fixed} files.`);
