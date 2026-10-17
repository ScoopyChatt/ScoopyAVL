// Shared HTML rewriting for the post-build scripts (inject-seo.cjs, create-static-pages.cjs,
// prerender.mjs). Each script writes into dist/<route>/index.html in turn, so every helper
// here is idempotent: running a step twice replaces its own output instead of stacking it.

const path = require('path');
const { pathToFileURL } = require('url');

const ROOT_END = '<!--/root-->';

// Put crawlable content inside <div id="root">. React replaces (or hydrates) it on load,
// so visitors never see it twice, and crawlers that do not run JavaScript read it as the
// page body. `attrs` is extra attribute text for the root div, e.g. ' data-prerendered'.
function setRoot(html, content, attrs) {
  const div = '<div id="root"' + (attrs || '') + '>' + content + '</div>' + ROOT_END;
  if (html.includes(ROOT_END)) {
    return html.replace(/<div id="root"[^>]*>[\s\S]*?<\/div><!--\/root-->/, () => div);
  }
  return html.replace('<div id="root"></div>', () => div);
}

function escapeAttr(s) {
  return String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/"/g, '&quot;');
}

function setHead(html, { title, desc, canonical }) {
  let out = html;
  if (title) {
    const t = escapeAttr(title);
    out = out
      .replace(/<title>[^<]*<\/title>/, () => '<title>' + t + '</title>')
      .replace(/(<meta property="og:title" content=")[^"]*(")/, (m, a, b) => a + t + b)
      .replace(/(<meta name="twitter:title" content=")[^"]*(")/, (m, a, b) => a + t + b);
  }
  if (desc) {
    const d = escapeAttr(desc);
    out = out
      .replace(/(<meta name="description" content=")[^"]*(")/, (m, a, b) => a + d + b)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, (m, a, b) => a + d + b)
      .replace(/(<meta name="twitter:description" content=")[^"]*(")/, (m, a, b) => a + d + b);
  }
  if (canonical) {
    out = out
      .replace(/(<link rel="canonical" href=")[^"]*(")/, (m, a, b) => a + canonical + b)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, (m, a, b) => a + canonical + b);
  }
  return out;
}

// JSON-LD blocks tagged with a key, so a later step can replace its own block.
function setJsonLd(html, key, data) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  const tag = '<script type="application/ld+json" data-ld="' + key + '">' + json + '</script>';
  const re = new RegExp('<script type="application/ld\\+json" data-ld="' + key + '">[\\s\\S]*?</script>');
  if (re.test(html)) return html.replace(re, () => tag);
  return html.replace('</head>', () => tag + '</head>');
}

function removeJsonLd(html, key) {
  const re = new RegExp('<script type="application/ld\\+json" data-ld="' + key + '">[\\s\\S]*?</script>', 'g');
  return html.replace(re, '');
}

// src/data/*.js are ES modules; the .cjs tools load them with dynamic import.
function importSrc(rel) {
  return import(pathToFileURL(path.join(__dirname, '..', 'src', rel)).href);
}

module.exports = { setRoot, setHead, setJsonLd, removeJsonLd, importSrc, escapeAttr };
