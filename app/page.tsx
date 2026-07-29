/*
THESIS: CopyKat turns clipboard history into a physical, commandable record and refuses the centered screenshot-plus-feature-card utility template.
OWN-WORLD: Saturated Kat Orange, cold paper white, graphite ink, a Universal Clipboard handoff from iPhone to Mac, giant key legends, and one native macOS panel.
STORY: A developer sees the shortcut, watches mixed clipboard content resolve into one selection, trusts the privacy model, and downloads the latest GitHub release.
FIRST VIEWPORT: Copy and download actions sit left on orange; giant ⇧⌘V keys anchor the lower left; an iPhone handoff sits behind a dark editor and the interactive CopyKat panel on the right.
FORM: Clipboard Flight Recorder, grounded direction five, composition C with composition B copy; seed d9082504.
*/

"use client";

import { DeviceMobile } from "@phosphor-icons/react/DeviceMobile";
import { File } from "@phosphor-icons/react/File";
import { MagnifyingGlass } from "@phosphor-icons/react/MagnifyingGlass";
import { TextAlignLeft } from "@phosphor-icons/react/TextAlignLeft";
import Image from "next/image";
import {
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from "react";
import {
  localeDirection,
  resolveLocale,
  translations,
  type Locale,
  type SiteCopy,
} from "./i18n";

const DOWNLOAD_URL =
  "https://github.com/mixxamm/CopyKat/releases/latest/download/CopyKat.zip";
const REPOSITORY_URL = "https://github.com/mixxamm/CopyKat";
const COPYKAT_ICON_URL =
  "https://raw.githubusercontent.com/mixxamm/CopyKat/main/CopyKat/Assets.xcassets/AppIcon.appiconset/icon_512x512.png";
const FIREFOX_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  return `${BASE_PATH}${path}`;
}

function subscribeToBrowserLocale() {
  return () => {};
}

function getBrowserLocale(): Locale {
  const browserLanguages =
    navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  return resolveLocale(browserLanguages);
}

type ClipboardItem = {
  id: string;
  kind: "remote" | "text" | "image" | "file";
  title: string;
  meta: string;
  source: string;
  group?: string;
  time: string;
  badge: string;
};

function createClipboardItems(
  copy: SiteCopy,
  locale: Locale,
): ClipboardItem[] {
  const relativeTime = new Intl.RelativeTimeFormat(locale, {
    numeric: "auto",
  });

  return [
    {
      id: "remote",
      kind: "remote",
      title: "BE43 6793 5128 4067",
      meta: copy.copiedOnIPhone,
      source: "Universal Clipboard",
      time: relativeTime.format(0, "second"),
      badge: "⌘1",
    },
    {
      id: "youtube",
      kind: "text",
      title: "https://www.youtube.com/watch?v=Sl1Ul5-Ldb4",
      meta: "",
      source: "Firefox",
      group: "Firefox",
      time: relativeTime.format(-48, "second"),
      badge: "⌘2",
    },
    {
      id: "roborock-link",
      kind: "text",
      title: "https://nl.roborock.com/pages/roborock-saros-z70",
      meta: "",
      source: "Firefox",
      group: "Firefox",
      time: relativeTime.format(-58, "minute"),
      badge: "⌘3",
    },
    {
      id: "roborock-title",
      kind: "text",
      title: "Roborock Saros Z70",
      meta: "",
      source: "Firefox",
      group: "Firefox",
      time: relativeTime.format(-1, "hour"),
      badge: "⌘4",
    },
    {
      id: "image",
      kind: "image",
      title: copy.image,
      meta: "512 × 512",
      source: "Firefox",
      group: "Firefox",
      time: relativeTime.format(-1, "hour"),
      badge: "⌘5",
    },
    {
      id: "release",
      kind: "text",
      title: "https://github.com/mixxamm/CopyKat/releases/latest",
      meta: "",
      source: "Firefox",
      group: "Firefox",
      time: relativeTime.format(0, "second"),
      badge: "⌘6",
    },
  ];
}

function filterClipboardItems(items: ClipboardItem[], query: string) {
  const normalized = query.trim().toLowerCase();
  const kindSearchTerms: Record<string, string> = {
    remote: "device iphone universal clipboard",
    text: "text link url",
    image: "image images screenshot",
  };

  return items.filter((item) => {
    return (
      !normalized ||
      `${item.title} ${item.meta} ${item.source} ${item.kind} ${
        kindSearchTerms[item.kind]
      }`
        .toLowerCase()
        .includes(normalized)
    );
  });
}

export default function Home() {
  const locale = useSyncExternalStore<Locale>(
    subscribeToBrowserLocale,
    getBrowserLocale,
    () => "en",
  );
  const copy = translations[locale];
  const clipboardItems = useMemo(
    () => createClipboardItems(copy, locale),
    [copy, locale],
  );
  const currentTimeLabel = useMemo(
    () =>
      new Intl.RelativeTimeFormat(locale, {
        numeric: "auto",
      }).format(0, "second"),
    [locale],
  );
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("remote");
  const [demoStatus, setDemoStatus] = useState(
    "Use ↑↓ and Enter, just like CopyKat.",
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection(locale);
    document.title = `CopyKat: ${copy.heroTitle}`;
  }, [copy.heroTitle, locale]);

  const filteredItems = useMemo(
    () => filterClipboardItems(clipboardItems, query),
    [clipboardItems, query],
  );
  const selectedItem =
    filteredItems.find((item) => item.id === selectedId) ?? filteredItems[0];

  function handleDemoKey(event: KeyboardEvent<HTMLInputElement>) {
    if (!filteredItems.length) return;
    const currentIndex = Math.max(
      0,
      filteredItems.findIndex((item) => item.id === selectedId),
    );

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (currentIndex + delta + filteredItems.length) % filteredItems.length;
      setSelectedId(filteredItems[nextIndex].id);
      setDemoStatus("Selection moved. Press Enter to complete the preview.");
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const selected =
        filteredItems.find((item) => item.id === selectedId) ?? filteredItems[0];
      setSelectedId(selected.id);
      setDemoStatus(`Ready to paste “${selected.title}” into the active app.`);
    }
  }

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="CopyKat home">
            <Image
              src={COPYKAT_ICON_URL}
              alt=""
              width="46"
              height="46"
            />
            <span>CopyKat</span>
          </a>
          <div className="nav-links">
            <a href="#features">{copy.navFeatures}</a>
            <a href="#privacy">{copy.privacy}</a>
            <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <a className="nav-download" href={DOWNLOAD_URL}>
            {copy.download}
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>{copy.heroTitle}</h1>
            <p className="hero-lede">{copy.heroLede}</p>
            <div className="hero-actions">
              <a className="button button-dark" href={DOWNLOAD_URL}>
                <span aria-hidden="true">↓</span>
                {copy.downloadMac}
              </a>
              <a
                className="button button-outline"
                href={REPOSITORY_URL}
                target="_blank"
                rel="noreferrer"
              >
                {copy.viewGitHub}
              </a>
            </div>
            <p className="trust-line">{copy.trust}</p>

            <div className="key-sequence" aria-label="Shift Command V">
              <div className="keycap keycap-shift" aria-hidden="true">
                ⇧
              </div>
              <div className="keycap keycap-command" aria-hidden="true">
                ⌘
              </div>
              <div className="keycap keycap-v" aria-hidden="true">
                V
              </div>
            </div>
          </div>

          <div
            className="product-stage"
            id="demo"
            aria-label="Interactive CopyKat demo"
          >
            <div className="code-window" aria-hidden="true">
              <div className="window-bar">
                <i />
                <i />
                <i />
                <span>ClipboardMonitor.swift</span>
              </div>
              <pre>
                <code>{`final class ClipboardMonitor {
  private let pasteboard = NSPasteboard.general

  func capture() {
    guard pasteboard.changeCount != lastChange else {
      return
    }

    history.insert(classify(pasteboard))
  }
}`}</code>
              </pre>
            </div>

            <div className="handoff-phone" aria-hidden="true">
              <div className="phone-screen">
                <span className="phone-island" />
                <div className="phone-status">
                  <span>9:41</span>
                  <span className="phone-status-icons">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <div className="bank-app">
                  <header className="bank-header">
                    <span className="bank-mark">N</span>
                    <strong>Northbank</strong>
                    <span className="bank-avatar">M</span>
                  </header>
                  <div className="bank-detail">
                    <span>IBAN</span>
                    <code>{clipboardItems[0].title}</code>
                  </div>
                  <div className="bank-copy-state">
                    <span>✓</span>
                    <small>{copy.copiedOnIPhone}</small>
                  </div>
                  <div className="bank-account">
                    <span>•• 4067</span>
                    <strong>€ 3.840,26</strong>
                    <small>+ € 1.240,00</small>
                  </div>
                  <div className="bank-nav">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="phone-handoff">
                  <DeviceMobile size={20} weight="regular" />
                  <span>
                    <b>Universal Clipboard</b>
                    <small>iPhone → Mac</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="copykat-panel">
              <label className="search-field">
                <MagnifyingGlass aria-hidden="true" size={24} weight="regular" />
                <span className="sr-only">{copy.search}</span>
                <input
                  value={query}
                  onChange={(event) => {
                    const nextQuery = event.target.value;
                    const nextItems = filterClipboardItems(
                      clipboardItems,
                      nextQuery,
                    );
                    setQuery(nextQuery);
                    if (nextItems.length) setSelectedId(nextItems[0].id);
                    setDemoStatus("Filtering clipboard history…");
                  }}
                  onKeyDown={handleDemoKey}
                  placeholder={copy.search}
                />
              </label>

              <div className="panel-body">
                <div className="history-list" aria-live="polite">
                  {filteredItems.length ? (
                    filteredItems.map((item, index) => (
                      <div className="history-cluster" key={item.id}>
                        {item.group &&
                        filteredItems[index - 1]?.group !== item.group ? (
                          <div className="source-heading">
                            <Image
                              src={FIREFOX_ICON_URL}
                              alt=""
                              width="18"
                              height="18"
                            />
                            <span>{item.group}</span>
                          </div>
                        ) : null}
                        <button
                          className={`history-row ${
                            selectedId === item.id
                              ? "history-row-selected"
                              : ""
                          } ${item.group ? "history-row-grouped" : ""}`}
                          onClick={() => {
                            setSelectedId(item.id);
                            setDemoStatus(
                              `Selected “${item.title}”. Press Enter to paste.`,
                            );
                          }}
                          type="button"
                        >
                          <span className="item-kind" aria-hidden="true">
                            {item.kind === "remote" ? (
                              <DeviceMobile size={23} weight="regular" />
                            ) : item.kind === "image" ? (
                              <Image
                                src={COPYKAT_ICON_URL}
                                alt=""
                                width="36"
                                height="36"
                              />
                            ) : item.kind === "file" ? (
                              <File size={23} weight="regular" />
                            ) : (
                              <TextAlignLeft size={23} weight="regular" />
                            )}
                          </span>
                          <span className="item-copy">
                            <strong>{item.title}</strong>
                            <small>
                              {[item.meta, item.kind === "remote"
                                ? item.source
                                : "", item.time]
                                .filter(Boolean)
                                .join(" · ")}
                            </small>
                          </span>
                          <kbd>{item.badge}</kbd>
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="empty-history">
                      <strong>{copy.noMatches}</strong>
                      <span>{copy.trySearch}</span>
                    </div>
                  )}
                </div>

                <div className="preview-pane" aria-live="polite">
                  {selectedItem ? (
                    selectedItem.kind === "image" ? (
                      <div className="image-preview">
                        <Image
                          src={COPYKAT_ICON_URL}
                          alt={`CopyKat ${copy.image}`}
                          width="240"
                          height="240"
                        />
                      </div>
                    ) : (
                      <p>{selectedItem.title}</p>
                    )
                  ) : (
                    <div className="empty-preview">
                      <File aria-hidden="true" size={30} weight="thin" />
                      <span>{copy.noSelection}</span>
                    </div>
                  )}
                </div>
              </div>

              <span className="sr-only" aria-live="polite">
                {demoStatus}
              </span>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#features">
          {copy.scroll} <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="history-tape-section" id="features">
        <div className="tape-intro">
          <h2>{copy.featureTitle}</h2>
          <p>{copy.featureBody}</p>
        </div>
        <div className="wide-tape" aria-label="Supported clipboard examples">
          <article>
            <span className="tape-number">⌘1</span>
            <strong>struct ClipboardItem</strong>
            <small>Xcode · Swift code</small>
          </article>
          <article>
            <span className="tape-number">⌘2</span>
            <strong>{copy.copiedOnIPhone}</strong>
            <small>Universal Clipboard · {currentTimeLabel}</small>
          </article>
          <article className="wide-tape-image">
            <span className="mini-shot" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>
              <strong>copykat-panel.png</strong>
              <small>CleanShot · 1440 × 900</small>
            </span>
          </article>
          <article>
            <span className="tape-number">⌘4</span>
            <strong>~/Developer/CopyCat/README.md</strong>
            <small>Finder · File</small>
          </article>
          <article>
            <span className="tape-number">PIN</span>
            <strong>{copy.releaseChecklist}</strong>
            <small>{copy.keptForever}</small>
          </article>
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-copy">
          <span className="privacy-stamp">{copy.privacyStamp}</span>
          <h2>{copy.privacyTitle}</h2>
          <p>{copy.privacyBody}</p>
          <ul>
            <li>
              <span aria-hidden="true">✓</span>
              {copy.privacyBulletOne}
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              {copy.privacyBulletTwo}
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              {copy.privacyBulletThree}
            </li>
          </ul>
        </div>
      </section>

      <section className="open-source-section">
        <Image
          src={COPYKAT_ICON_URL}
          alt=""
          width="112"
          height="112"
        />
        <div className="open-source-copy">
          <p className="section-kicker">{copy.sourceKicker}</p>
          <h2>{copy.sourceTitle}</h2>
          <p>{copy.sourceBody}</p>
        </div>
        <div className="source-actions">
          <a className="button button-orange" href={DOWNLOAD_URL}>
            {copy.downloadCopyKat}
          </a>
          <a
            className="text-link"
            href={REPOSITORY_URL}
            target="_blank"
            rel="noreferrer"
          >
            {copy.readSource} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a
          className="brand brand-footer"
          href="https://mixxamm.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={asset("/mixxamm-logo.svg")}
            alt=""
            width="38"
            height="38"
          />
          <span>mixxamm</span>
        </a>
        <div>
          <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#privacy">{copy.privacy}</a>
        </div>
      </footer>
    </main>
  );
}
