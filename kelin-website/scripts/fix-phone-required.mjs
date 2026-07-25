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
  if (!content.includes('/api/inquiries/') && !content.includes('submitInquiry')) continue;

  const next = content.replace(
    /(<input\s+type="tel"\s+id="phone"\s+name="phone"\s+placeholder="123 456 7890"\s+pattern="[^"]+"\s+title="Please enter a valid phone number"\s*)(\/>)/g,
    (match, start, end) => (start.includes('required') ? match : `${start}required ${end}`)
  );

  if (next !== content) {
    fs.writeFileSync(file, next);
    fixed += 1;
    console.log('FIXED', file);
  }
}

console.log(`Done. Fixed ${fixed} files.`);
