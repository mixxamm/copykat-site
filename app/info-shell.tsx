"use client";

import { GlobeSimple } from "@phosphor-icons/react/GlobeSimple";
import Image from "next/image";
import { useEffect, type ReactNode } from "react";
import { localeDirection, supportedLocales, type Locale } from "./i18n";
import { type InfoCopy } from "./info-i18n";
import { localeNames, setSiteLocale } from "./site-locale";

const COPYKAT_ICON_URL =
  "https://raw.githubusercontent.com/mixxamm/CopyKat/main/CopyKat/Assets.xcassets/AppIcon.appiconset/icon_512x512.png";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function sitePath(path: string) {
  return `${BASE_PATH}${path}`;
}

type InfoShellProps = {
  activePage: "privacy" | "support";
  children: ReactNode;
  copy: InfoCopy;
  heroTone: "dark" | "orange";
  intro: string;
  kicker: string;
  locale: Locale;
  title: string;
};

export function InfoShell({
  activePage,
  children,
  copy,
  heroTone,
  intro,
  kicker,
  locale,
  title,
}: InfoShellProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection(locale);
    document.title = `${title} · CopyKat`;
  }, [locale, title]);

  return (
    <main className="info-page">
      <header className="info-header">
        <a
          className="brand info-brand"
          href={sitePath("/")}
          aria-label={copy.backHome}
        >
          <Image
            src={COPYKAT_ICON_URL}
            alt=""
            width="44"
            height="44"
          />
          <span>CopyKat</span>
        </a>

        <nav className="info-nav" aria-label="CopyKat">
          <a href={sitePath("/")}>{copy.home}</a>
          <a
            href={sitePath("/privacy/")}
            aria-current={activePage === "privacy" ? "page" : undefined}
          >
            {copy.privacy}
          </a>
          <a
            href={sitePath("/support/")}
            aria-current={activePage === "support" ? "page" : undefined}
          >
            {copy.support}
          </a>
        </nav>

        <label className="language-switcher">
          <GlobeSimple aria-hidden="true" size={19} weight="bold" />
          <span>{copy.language}</span>
          <select
            aria-label={copy.language}
            value={locale}
            onChange={(event) => setSiteLocale(event.target.value as Locale)}
          >
            {supportedLocales.map((supportedLocale) => (
              <option key={supportedLocale} value={supportedLocale}>
                {localeNames[supportedLocale]}
              </option>
            ))}
          </select>
        </label>
      </header>

      <section className={`info-hero info-hero-${heroTone}`}>
        <p className="info-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>

      {children}

      <footer className="info-footer">
        <a
          className="brand brand-footer"
          href="https://mixxamm.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={sitePath("/mixxamm-logo.svg")}
            alt=""
            width="38"
            height="38"
          />
          <span>mixxamm</span>
        </a>
        <div>
          <a href={sitePath("/privacy/")}>{copy.privacy}</a>
          <a href={sitePath("/support/")}>{copy.support}</a>
        </div>
      </footer>
    </main>
  );
}
