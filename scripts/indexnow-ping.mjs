#!/usr/bin/env node
/**
 * IndexNow Ping Script — ChineseAttractions
 * Usage: node scripts/indexnow-ping.mjs [urls...]
 */

const SITE_URL = 'https://chineseattractions.com';
const INDEXNOW_KEY = 'chineseattractionsindexnow2026';
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/indexnow-key.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

const STATIC_URLS = ['/', '/blog/', '/attractions/', '/cities/'];

const NEW_ARTICLE_SLUGS = [
  '/blog/china-payment-apps-guide-2026/',
  '/blog/china-esim-vpn-guide-2026/',
  '/blog/china-high-speed-rail-guide-2026/',
  '/blog/china-itinerary-2-weeks-2026/',
  '/blog/china-travel-cost-2026/',
  '/blog/china-safety-tips-2026/',
];

async function pingIndexNow(urls) {
  const fullUrls = urls.map((u) =>
    u.startsWith('http') ? u : `${SITE_URL}${u.startsWith('/') ? '' : '/'}${u}`
  );

  const body = {
    host: 'chineseattractions.com',
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: fullUrls,
  };

  console.log(`\nPinging IndexNow with ${fullUrls.length} URLs...`);

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`Success (${response.status})! URLs submitted for indexing.`);
    } else if (response.status === 422) {
      console.error(`Error 422: Check key file is live at ${INDEXNOW_KEY_LOCATION}`);
    } else {
      console.error(`Unexpected status: ${response.status}`);
    }
    fullUrls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
  } catch (error) {
    console.error(`Failed: ${error.message}`);
  }
}

const argUrls = process.argv.slice(2);
pingIndexNow(argUrls.length > 0 ? argUrls : [...STATIC_URLS, ...NEW_ARTICLE_SLUGS]);
