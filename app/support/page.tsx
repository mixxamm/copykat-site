"use client";

import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { EnvelopeSimple } from "@phosphor-icons/react/EnvelopeSimple";
import { InfoShell } from "../info-shell";
import { infoTranslations } from "../info-i18n";
import { useSiteLocale } from "../site-locale";

const EMAIL_URL = "mailto:contact@mixxamm.com?subject=CopyKat%20Support";
const ISSUES_URL = "https://github.com/mixxamm/CopyKat/issues";

export default function SupportPage() {
  const locale = useSiteLocale();
  const copy = infoTranslations[locale];

  return (
    <InfoShell
      activePage="support"
      copy={copy}
      heroTone="orange"
      intro={copy.supportIntro}
      kicker={copy.supportKicker}
      locale={locale}
      title={copy.supportTitle}
    >
      <section className="support-layout">
        <div className="support-action">
          <EnvelopeSimple aria-hidden="true" size={44} weight="regular" />
          <a className="button button-orange" href={EMAIL_URL}>
            {copy.emailSupport}
          </a>
          <a className="support-email" href="mailto:contact@mixxamm.com">
            contact@mixxamm.com
          </a>
          <p>{copy.mailHint}</p>
        </div>

        <div className="support-guidance">
          <section>
            <h2>{copy.includeTitle}</h2>
            <p>{copy.includeBody}</p>
          </section>
          <section>
            <h2>{copy.safeTitle}</h2>
            <p>{copy.safeBody}</p>
          </section>
          <a
            className="text-link support-issues"
            href={ISSUES_URL}
            target="_blank"
            rel="noreferrer"
          >
            {copy.githubIssues}
            <ArrowUpRight aria-hidden="true" size={18} weight="bold" />
          </a>
        </div>
      </section>
    </InfoShell>
  );
}
