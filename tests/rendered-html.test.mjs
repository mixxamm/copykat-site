import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function renderedHtml(path = "index.html") {
  return readFile(new URL(`../out/${path}`, import.meta.url), "utf8");
}

test("exports the CopyKat marketing page as static HTML", async () => {
  const html = await renderedHtml();
  assert.match(
    html,
    /<title>CopyKat: Everything you copied, one shortcut away<\/title>/i,
  );
  assert.match(html, /Everything you copied\. One shortcut away\./);
  assert.match(html, /Universal Clipboard/);
  assert.match(
    html,
    /github\.com\/mixxamm\/CopyKat\/releases\/latest\/download\/CopyKat\.zip/,
  );
  assert.match(html, /class="handoff-phone"/);
  assert.doesNotMatch(html, /class="clipboard-tape"/);
});

test("keeps locale detection aligned with the macOS app", async () => {
  const [siteLocale, infoI18n, i18n, css] = await Promise.all([
    readFile(new URL("../app/site-locale.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/info-i18n.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/i18n.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  const expectedLocales = [
    "en",
    "nl",
    "de",
    "fr",
    "es",
    "it",
    "pt-PT",
    "pl",
    "uk",
    "ro",
    "sv",
    "ru",
    "zh-Hans",
    "zh-Hant",
    "ja",
    "ko",
    "tr",
    "ar",
    "hi",
  ];

  for (const locale of expectedLocales) {
    assert.match(i18n, new RegExp(`["']${locale}["']`));
    assert.match(infoI18n, new RegExp(`^\\s*["']?${locale}["']?:`, "m"));
  }

  assert.match(siteLocale, /navigator\.languages/);
  assert.match(siteLocale, /useSyncExternalStore/);
  assert.match(siteLocale, /localStorage/);
  assert.match(i18n, /normalized\.startsWith\("zh-tw"\)/);
  assert.match(i18n, /return "pt-PT"/);
  assert.match(i18n, /locale === "ar" \? "rtl" : "ltr"/);
  assert.match(css, /html\[dir="rtl"\]/);
});

test("exports dedicated privacy and support routes", async () => {
  const [privacy, support] = await Promise.all([
    renderedHtml("privacy/index.html"),
    renderedHtml("support/index.html"),
  ]);

  assert.match(privacy, /Privacy policy\./);
  assert.match(
    privacy,
    /docs\.github\.com\/en\/site-policy\/privacy-policies\/github-general-privacy-statement/,
  );
  assert.match(privacy, /\/support\//);

  assert.match(support, /How can we help\?/);
  assert.match(
    support,
    /mailto:contact@mixxamm\.com\?subject=CopyKat%20Support/,
  );
  assert.match(support, /github\.com\/mixxamm\/CopyKat\/issues/);
  assert.match(support, /\/privacy\//);
});

test("all exported site assets resolve under the configured base path", async () => {
  const html = await renderedHtml();
  const outputDirectory = new URL("../out/", import.meta.url);
  const basePath = html.includes("/copykat-site/") ? "/copykat-site/" : "/";
  const assetReferences = [
    ...html.matchAll(/(?:href|src)="(\/[^"#?]+)"/g),
  ]
    .map((match) => match[1])
    .filter((path) => path.startsWith(basePath))
    .filter((path) => !path.startsWith("/#"));

  assert.ok(assetReferences.length > 0);

  for (const reference of new Set(assetReferences)) {
    const relativePath = reference.slice(basePath.length);
    await access(new URL(relativePath, outputDirectory));
  }

  await access(new URL(".nojekyll", outputDirectory));
});
