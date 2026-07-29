import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function renderedHtml() {
  return readFile(new URL("../out/index.html", import.meta.url), "utf8");
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
  const [page, i18n, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
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
  }

  assert.match(page, /navigator\.languages/);
  assert.match(page, /useSyncExternalStore/);
  assert.match(page, /document\.documentElement\.lang = locale/);
  assert.match(page, /document\.documentElement\.dir = localeDirection\(locale\)/);
  assert.match(i18n, /normalized\.startsWith\("zh-tw"\)/);
  assert.match(i18n, /return "pt-PT"/);
  assert.match(i18n, /locale === "ar" \? "rtl" : "ltr"/);
  assert.match(css, /html\[dir="rtl"\]/);
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
