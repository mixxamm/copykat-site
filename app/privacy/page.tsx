"use client";

import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { useMemo } from "react";
import { InfoShell } from "../info-shell";
import { infoTranslations } from "../info-i18n";
import { useSiteLocale } from "../site-locale";

const GITHUB_PRIVACY_URL =
  "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement";
const LAST_UPDATED = new Date(Date.UTC(2026, 6, 30));

export default function PrivacyPage() {
  const locale = useSiteLocale();
  const copy = infoTranslations[locale];
  const formattedDate = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(LAST_UPDATED),
    [locale],
  );

  const sections = [
    [copy.localTitle, copy.localBody],
    [copy.sensitiveTitle, copy.sensitiveBody],
    [copy.websiteTitle, copy.websiteBody],
    [copy.contactTitle, copy.contactBody],
  ] as const;

  return (
    <InfoShell
      activePage="privacy"
      copy={copy}
      heroTone="dark"
      intro={copy.privacyIntro}
      kicker={copy.privacyKicker}
      locale={locale}
      title={copy.privacyTitle}
    >
      <section className="policy-layout">
        <aside className="policy-meta">
          <span>{copy.lastUpdated}</span>
          <time dateTime="2026-07-30">{formattedDate}</time>
        </aside>

        <article className="policy-article">
          {sections.map(([sectionTitle, sectionBody]) => (
            <section key={sectionTitle}>
              <h2>{sectionTitle}</h2>
              <p>{sectionBody}</p>
              {sectionTitle === copy.websiteTitle ? (
                <a
                  className="text-link policy-external-link"
                  href={GITHUB_PRIVACY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.githubPrivacy}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    weight="bold"
                  />
                </a>
              ) : null}
            </section>
          ))}
        </article>
      </section>
    </InfoShell>
  );
}
