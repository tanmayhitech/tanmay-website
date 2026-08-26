const fs = require('fs');
const path = require('path');
const siteConfig = require('../site.config.js');

const newUrlInput = process.argv[2];

if (!newUrlInput) {
  console.log(`Current SITE_URL configured: ${siteConfig.SITE_URL}`);
  console.log(`\nUsage: node scripts/update-domain.js <NEW_URL>`);
  console.log(`Example: node scripts/update-domain.js https://my-portfolio.netlify.app`);
  process.exit(0);
}

// Clean trailing slash
const newUrl = newUrlInput.replace(/\/+$/, '');
const oldUrl = siteConfig.SITE_URL.replace(/\/+$/, '');

console.log(`Updating domain configuration from ${oldUrl} to ${newUrl}...`);

// 1. Update site.config.js
const configPath = path.join(__dirname, '../site.config.js');
let configContent = fs.readFileSync(configPath, 'utf8');
configContent = configContent.replaceAll(oldUrl, newUrl);
fs.writeFileSync(configPath, configContent, 'utf8');

// 2. HTML Files to update
const htmlFiles = [
  'index.html',
  'about.html',
  'cubo-the-robo.html',
  'loozars.html',
  'lpg.html',
  'media.html'
];

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replaceAll(oldUrl, newUrl);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

// 3. sitemap.xml
const sitemapPath = path.join(__dirname, '../sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  sitemap = sitemap.replaceAll(oldUrl, newUrl);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`Updated sitemap.xml`);
}

// 4. robots.txt
const robotsPath = path.join(__dirname, '../robots.txt');
if (fs.existsSync(robotsPath)) {
  let robots = fs.readFileSync(robotsPath, 'utf8');
  robots = robots.replaceAll(oldUrl, newUrl);
  fs.writeFileSync(robotsPath, robots, 'utf8');
  console.log(`Updated robots.txt`);
}

console.log(`\n✅ Domain configuration successfully updated to: ${newUrl}`);
