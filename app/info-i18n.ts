import type { Locale } from "./i18n";

export type InfoCopy = {
  home: string;
  privacy: string;
  support: string;
  language: string;
  lastUpdated: string;
  backHome: string;
  privacyKicker: string;
  privacyTitle: string;
  privacyIntro: string;
  localTitle: string;
  localBody: string;
  sensitiveTitle: string;
  sensitiveBody: string;
  websiteTitle: string;
  websiteBody: string;
  contactTitle: string;
  contactBody: string;
  githubPrivacy: string;
  supportKicker: string;
  supportTitle: string;
  supportIntro: string;
  emailSupport: string;
  mailHint: string;
  includeTitle: string;
  includeBody: string;
  safeTitle: string;
  safeBody: string;
  githubIssues: string;
};

export const infoTranslations: Record<Locale, InfoCopy> = {
  en: {
    home: "Home",
    privacy: "Privacy",
    support: "Support",
    language: "Language",
    lastUpdated: "Last updated",
    backHome: "Back to CopyKat",
    privacyKicker: "PRIVACY, IN PLAIN LANGUAGE",
    privacyTitle: "Privacy policy.",
    privacyIntro:
      "CopyKat is designed to keep clipboard history on your Mac. This policy explains what the app and this website handle.",
    localTitle: "Clipboard data stays local",
    localBody:
      "CopyKat stores your clipboard history and settings on your Mac. Text, images, files, and pins are not uploaded by CopyKat. You control how much history is retained and can remove the app’s data from your Mac.",
    sensitiveTitle: "Sensitive items and permissions",
    sensitiveBody:
      "Items marked as concealed by a password manager are not stored, and you can exclude other apps. CopyKat reads the macOS pasteboard to detect copies. Optional Accessibility permission is used only to paste into the active app; without it, CopyKat falls back to copying the item.",
    websiteTitle: "This website",
    websiteBody:
      "This site uses no analytics, advertising trackers, or non-essential cookies. It is hosted on GitHub Pages. GitHub logs visitors’ IP addresses for security and handles that data under its own privacy statement.",
    contactTitle: "Support and policy changes",
    contactBody:
      "If you email support, your email address, message, and attachments are used to answer you. Do not send passwords or sensitive clipboard contents. We may update this policy when CopyKat or its hosting changes.",
    githubPrivacy: "Read GitHub’s privacy statement",
    supportKicker: "HUMAN SUPPORT",
    supportTitle: "How can we help?",
    supportIntro:
      "Questions about installing CopyKat, permissions, the shortcut, or unexpected behaviour? Email mixxamm directly.",
    emailSupport: "Email support",
    mailHint:
      "Opens your default mail app and writes to contact@mixxamm.com.",
    includeTitle: "Useful details to include",
    includeBody:
      "Tell us your macOS version, CopyKat version, what you expected, and what happened. A short list of steps or a screenshot is usually enough.",
    safeTitle: "Keep sensitive data out",
    safeBody:
      "Never include passwords, payment details, or private clipboard contents in a support email or screenshot.",
    githubIssues: "View issues on GitHub",
  },
  nl: {
    home: "Home",
    privacy: "Privacy",
    support: "Support",
    language: "Taal",
    lastUpdated: "Laatst bijgewerkt",
    backHome: "Terug naar CopyKat",
    privacyKicker: "PRIVACY, IN GEWONE TAAL",
    privacyTitle: "Privacybeleid.",
    privacyIntro:
      "CopyKat is ontworpen om je klembordgeschiedenis op je Mac te houden. Dit beleid legt uit welke gegevens de app en deze website verwerken.",
    localTitle: "Klembordgegevens blijven lokaal",
    localBody:
      "CopyKat bewaart je klembordgeschiedenis en instellingen op je Mac. Tekst, afbeeldingen, bestanden en pins worden niet door CopyKat geüpload. Je bepaalt zelf hoeveel geschiedenis wordt bewaard en kunt de appgegevens van je Mac verwijderen.",
    sensitiveTitle: "Gevoelige items en toestemmingen",
    sensitiveBody:
      "Items die een wachtwoordmanager als verborgen markeert, worden niet opgeslagen. Andere apps kun je zelf uitsluiten. CopyKat leest het macOS-klembord om kopieën te detecteren. De optionele toegankelijkheidstoestemming wordt alleen gebruikt om in de actieve app te plakken; zonder die toestemming kopieert CopyKat het item.",
    websiteTitle: "Deze website",
    websiteBody:
      "Deze site gebruikt geen analytics, advertentietrackers of niet-essentiële cookies. De site wordt gehost op GitHub Pages. GitHub registreert IP-adressen van bezoekers voor beveiliging en verwerkt die gegevens volgens het eigen privacybeleid.",
    contactTitle: "Support en wijzigingen",
    contactBody:
      "Als je support mailt, gebruiken we je e-mailadres, bericht en bijlagen om je te antwoorden. Stuur geen wachtwoorden of gevoelige klembordinhoud. We kunnen dit beleid bijwerken wanneer CopyKat of de hosting verandert.",
    githubPrivacy: "Lees het privacybeleid van GitHub",
    supportKicker: "MENSELIJKE SUPPORT",
    supportTitle: "Hoe kunnen we helpen?",
    supportIntro:
      "Vragen over de installatie, toestemmingen, sneltoets of onverwacht gedrag van CopyKat? Mail mixxamm rechtstreeks.",
    emailSupport: "Mail support",
    mailHint:
      "Opent je standaard mailapp en stuurt naar contact@mixxamm.com.",
    includeTitle: "Handige gegevens om mee te sturen",
    includeBody:
      "Vermeld je macOS-versie, CopyKat-versie, wat je verwachtte en wat er gebeurde. Een korte lijst met stappen of een screenshot is meestal voldoende.",
    safeTitle: "Laat gevoelige gegevens weg",
    safeBody:
      "Zet nooit wachtwoorden, betaalgegevens of privé-inhoud van je klembord in een supportmail of screenshot.",
    githubIssues: "Bekijk issues op GitHub",
  },
  de: {
    home: "Start",
    privacy: "Datenschutz",
    support: "Support",
    language: "Sprache",
    lastUpdated: "Zuletzt aktualisiert",
    backHome: "Zurück zu CopyKat",
    privacyKicker: "DATENSCHUTZ, KLAR ERKLÄRT",
    privacyTitle: "Datenschutzerklärung.",
    privacyIntro:
      "CopyKat ist darauf ausgelegt, deinen Zwischenablageverlauf auf deinem Mac zu behalten. Diese Erklärung beschreibt, welche Daten die App und diese Website verarbeiten.",
    localTitle: "Zwischenablagedaten bleiben lokal",
    localBody:
      "CopyKat speichert deinen Zwischenablageverlauf und deine Einstellungen auf deinem Mac. Texte, Bilder, Dateien und Pins werden von CopyKat nicht hochgeladen. Du bestimmst, wie viel Verlauf aufbewahrt wird, und kannst die App-Daten vom Mac löschen.",
    sensitiveTitle: "Sensible Einträge und Berechtigungen",
    sensitiveBody:
      "Von einem Passwortmanager als verborgen markierte Einträge werden nicht gespeichert. Weitere Apps kannst du ausschließen. CopyKat liest die macOS-Zwischenablage, um Kopiervorgänge zu erkennen. Die optionale Bedienungshilfen-Berechtigung wird nur zum Einfügen in die aktive App verwendet; ohne sie kopiert CopyKat den Eintrag.",
    websiteTitle: "Diese Website",
    websiteBody:
      "Diese Website verwendet keine Analysen, Werbetracker oder nicht notwendigen Cookies. Sie wird über GitHub Pages gehostet. GitHub protokolliert IP-Adressen von Besuchern zu Sicherheitszwecken und verarbeitet sie gemäß der eigenen Datenschutzerklärung.",
    contactTitle: "Support und Änderungen",
    contactBody:
      "Wenn du den Support per E-Mail kontaktierst, verwenden wir Adresse, Nachricht und Anhänge, um dir zu antworten. Sende keine Passwörter oder sensiblen Zwischenablageinhalte. Diese Erklärung kann bei Änderungen an CopyKat oder dem Hosting aktualisiert werden.",
    githubPrivacy: "GitHubs Datenschutzerklärung lesen",
    supportKicker: "PERSÖNLICHER SUPPORT",
    supportTitle: "Wie können wir helfen?",
    supportIntro:
      "Fragen zur Installation, zu Berechtigungen, zum Kurzbefehl oder zu unerwartetem Verhalten? Schreib mixxamm direkt.",
    emailSupport: "Support kontaktieren",
    mailHint:
      "Öffnet deine Standard-Mail-App mit contact@mixxamm.com.",
    includeTitle: "Hilfreiche Angaben",
    includeBody:
      "Nenne deine macOS-Version, CopyKat-Version, was du erwartet hast und was passiert ist. Eine kurze Schrittfolge oder ein Screenshot reicht meist aus.",
    safeTitle: "Keine sensiblen Daten mitsenden",
    safeBody:
      "Sende niemals Passwörter, Zahlungsdaten oder private Zwischenablageinhalte in einer Support-Mail oder einem Screenshot.",
    githubIssues: "Issues auf GitHub ansehen",
  },
  fr: {
    home: "Accueil",
    privacy: "Confidentialité",
    support: "Assistance",
    language: "Langue",
    lastUpdated: "Dernière mise à jour",
    backHome: "Retour à CopyKat",
    privacyKicker: "LA CONFIDENTIALITÉ, EN CLAIR",
    privacyTitle: "Politique de confidentialité.",
    privacyIntro:
      "CopyKat est conçu pour conserver l’historique du presse-papiers sur votre Mac. Cette politique explique les données traitées par l’app et ce site.",
    localTitle: "Les données restent en local",
    localBody:
      "CopyKat stocke l’historique du presse-papiers et les réglages sur votre Mac. Textes, images, fichiers et éléments épinglés ne sont pas téléversés par CopyKat. Vous contrôlez la durée de conservation et pouvez supprimer les données de l’app du Mac.",
    sensitiveTitle: "Éléments sensibles et autorisations",
    sensitiveBody:
      "Les éléments signalés comme masqués par un gestionnaire de mots de passe ne sont pas stockés, et vous pouvez exclure d’autres apps. CopyKat lit le presse-papiers macOS pour détecter les copies. L’autorisation d’accessibilité facultative sert uniquement à coller dans l’app active ; sans elle, CopyKat recopie l’élément.",
    websiteTitle: "Ce site web",
    websiteBody:
      "Ce site n’utilise ni outil d’analyse, ni traceur publicitaire, ni cookie non essentiel. Il est hébergé sur GitHub Pages. GitHub journalise les adresses IP des visiteurs à des fins de sécurité et traite ces données selon sa propre politique.",
    contactTitle: "Assistance et modifications",
    contactBody:
      "Si vous contactez l’assistance, votre adresse e-mail, votre message et vos pièces jointes servent à vous répondre. N’envoyez jamais de mots de passe ni de contenu sensible du presse-papiers. Cette politique peut évoluer avec CopyKat ou son hébergement.",
    githubPrivacy: "Lire la politique de confidentialité de GitHub",
    supportKicker: "UNE ASSISTANCE HUMAINE",
    supportTitle: "Comment pouvons-nous vous aider ?",
    supportIntro:
      "Une question sur l’installation, les autorisations, le raccourci ou un comportement inattendu ? Écrivez directement à mixxamm.",
    emailSupport: "Contacter l’assistance",
    mailHint:
      "Ouvre votre app de messagerie avec contact@mixxamm.com.",
    includeTitle: "Informations utiles",
    includeBody:
      "Indiquez vos versions de macOS et de CopyKat, le résultat attendu et ce qui s’est produit. Quelques étapes ou une capture d’écran suffisent généralement.",
    safeTitle: "Évitez les données sensibles",
    safeBody:
      "N’incluez jamais de mots de passe, de données de paiement ou de contenu privé du presse-papiers dans un e-mail ou une capture.",
    githubIssues: "Voir les issues sur GitHub",
  },
  es: {
    home: "Inicio",
    privacy: "Privacidad",
    support: "Soporte",
    language: "Idioma",
    lastUpdated: "Última actualización",
    backHome: "Volver a CopyKat",
    privacyKicker: "PRIVACIDAD, SIN RODEOS",
    privacyTitle: "Política de privacidad.",
    privacyIntro:
      "CopyKat está diseñado para mantener el historial del portapapeles en tu Mac. Esta política explica qué datos gestionan la app y este sitio.",
    localTitle: "Los datos permanecen en local",
    localBody:
      "CopyKat guarda el historial y los ajustes del portapapeles en tu Mac. CopyKat no sube textos, imágenes, archivos ni elementos fijados. Tú decides cuánto historial conservar y puedes eliminar los datos de la app del Mac.",
    sensitiveTitle: "Elementos sensibles y permisos",
    sensitiveBody:
      "Los elementos que un gestor de contraseñas marca como ocultos no se guardan, y puedes excluir otras apps. CopyKat lee el portapapeles de macOS para detectar copias. El permiso de Accesibilidad opcional solo se usa para pegar en la app activa; sin él, CopyKat copia el elemento.",
    websiteTitle: "Este sitio web",
    websiteBody:
      "Este sitio no usa analítica, rastreadores publicitarios ni cookies no esenciales. Está alojado en GitHub Pages. GitHub registra las direcciones IP de los visitantes por seguridad y trata esos datos según su propia política.",
    contactTitle: "Soporte y cambios",
    contactBody:
      "Si escribes al soporte, usamos tu dirección, mensaje y archivos adjuntos para responderte. No envíes contraseñas ni contenido sensible del portapapeles. Podemos actualizar esta política cuando cambien CopyKat o su alojamiento.",
    githubPrivacy: "Leer la política de privacidad de GitHub",
    supportKicker: "SOPORTE HUMANO",
    supportTitle: "¿Cómo podemos ayudarte?",
    supportIntro:
      "¿Dudas sobre la instalación, los permisos, el atajo o un comportamiento inesperado? Escribe directamente a mixxamm.",
    emailSupport: "Enviar un correo",
    mailHint:
      "Abre tu app de correo predeterminada con contact@mixxamm.com.",
    includeTitle: "Datos útiles que puedes incluir",
    includeBody:
      "Indica tu versión de macOS y CopyKat, qué esperabas y qué ocurrió. Una breve lista de pasos o una captura suele bastar.",
    safeTitle: "No compartas datos sensibles",
    safeBody:
      "Nunca incluyas contraseñas, datos de pago ni contenido privado del portapapeles en un correo o captura.",
    githubIssues: "Ver incidencias en GitHub",
  },
  it: {
    home: "Home",
    privacy: "Privacy",
    support: "Supporto",
    language: "Lingua",
    lastUpdated: "Ultimo aggiornamento",
    backHome: "Torna a CopyKat",
    privacyKicker: "PRIVACY, IN PAROLE SEMPLICI",
    privacyTitle: "Informativa sulla privacy.",
    privacyIntro:
      "CopyKat è progettato per conservare la cronologia degli appunti sul Mac. Questa informativa spiega quali dati gestiscono l’app e questo sito.",
    localTitle: "I dati restano in locale",
    localBody:
      "CopyKat salva la cronologia degli appunti e le impostazioni sul Mac. Testi, immagini, file ed elementi fissati non vengono caricati da CopyKat. Decidi tu quanta cronologia conservare e puoi eliminare i dati dell’app dal Mac.",
    sensitiveTitle: "Elementi sensibili e autorizzazioni",
    sensitiveBody:
      "Gli elementi contrassegnati come nascosti da un gestore di password non vengono salvati e puoi escludere altre app. CopyKat legge gli appunti di macOS per rilevare le copie. L’autorizzazione Accessibilità facoltativa serve solo a incollare nell’app attiva; senza, CopyKat copia l’elemento.",
    websiteTitle: "Questo sito",
    websiteBody:
      "Questo sito non usa strumenti di analisi, tracker pubblicitari o cookie non essenziali. È ospitato su GitHub Pages. GitHub registra gli indirizzi IP dei visitatori per sicurezza e li tratta secondo la propria informativa.",
    contactTitle: "Supporto e modifiche",
    contactBody:
      "Se scrivi al supporto, usiamo indirizzo e-mail, messaggio e allegati per risponderti. Non inviare password o contenuti sensibili degli appunti. Potremo aggiornare l’informativa quando cambiano CopyKat o l’hosting.",
    githubPrivacy: "Leggi l’informativa privacy di GitHub",
    supportKicker: "SUPPORTO UMANO",
    supportTitle: "Come possiamo aiutarti?",
    supportIntro:
      "Domande su installazione, autorizzazioni, scorciatoia o comportamenti inattesi? Scrivi direttamente a mixxamm.",
    emailSupport: "Scrivi al supporto",
    mailHint:
      "Apre l’app e-mail predefinita con contact@mixxamm.com.",
    includeTitle: "Dettagli utili da includere",
    includeBody:
      "Indica le versioni di macOS e CopyKat, cosa ti aspettavi e cosa è successo. Un breve elenco di passaggi o uno screenshot di solito basta.",
    safeTitle: "Non inviare dati sensibili",
    safeBody:
      "Non includere mai password, dati di pagamento o contenuti privati degli appunti in un’e-mail o uno screenshot.",
    githubIssues: "Vedi le issue su GitHub",
  },
  "pt-PT": {
    home: "Início",
    privacy: "Privacidade",
    support: "Suporte",
    language: "Idioma",
    lastUpdated: "Última atualização",
    backHome: "Voltar ao CopyKat",
    privacyKicker: "PRIVACIDADE, SEM COMPLICAÇÕES",
    privacyTitle: "Política de privacidade.",
    privacyIntro:
      "O CopyKat foi criado para manter o histórico da área de transferência no Mac. Esta política explica os dados tratados pela app e por este site.",
    localTitle: "Os dados ficam no dispositivo",
    localBody:
      "O CopyKat guarda o histórico e as definições no Mac. Textos, imagens, ficheiros e itens afixados não são enviados pelo CopyKat. Decide quanto histórico conservar e pode remover os dados da app do Mac.",
    sensitiveTitle: "Itens sensíveis e permissões",
    sensitiveBody:
      "Itens marcados como ocultos por um gestor de palavras-passe não são guardados, e pode excluir outras apps. O CopyKat lê a área de transferência do macOS para detetar cópias. A permissão de Acessibilidade opcional serve apenas para colar na app ativa; sem ela, o CopyKat copia o item.",
    websiteTitle: "Este site",
    websiteBody:
      "Este site não usa análise, rastreadores de publicidade ou cookies não essenciais. É alojado no GitHub Pages. O GitHub regista os endereços IP dos visitantes por motivos de segurança e trata-os segundo a sua própria política.",
    contactTitle: "Suporte e alterações",
    contactBody:
      "Se contactar o suporte, usamos o seu endereço, mensagem e anexos para responder. Não envie palavras-passe nem conteúdo sensível da área de transferência. Podemos atualizar esta política quando o CopyKat ou o alojamento mudar.",
    githubPrivacy: "Ler a política de privacidade do GitHub",
    supportKicker: "SUPORTE HUMANO",
    supportTitle: "Como podemos ajudar?",
    supportIntro:
      "Dúvidas sobre instalação, permissões, atalho ou comportamento inesperado? Envie um e-mail diretamente à mixxamm.",
    emailSupport: "Enviar e-mail ao suporte",
    mailHint:
      "Abre a app de e-mail predefinida com contact@mixxamm.com.",
    includeTitle: "Informações úteis",
    includeBody:
      "Indique as versões do macOS e do CopyKat, o que esperava e o que aconteceu. Uma breve lista de passos ou uma captura costuma bastar.",
    safeTitle: "Não envie dados sensíveis",
    safeBody:
      "Nunca inclua palavras-passe, dados de pagamento ou conteúdo privado da área de transferência num e-mail ou captura.",
    githubIssues: "Ver problemas no GitHub",
  },
  pl: {
    home: "Strona główna",
    privacy: "Prywatność",
    support: "Pomoc",
    language: "Język",
    lastUpdated: "Ostatnia aktualizacja",
    backHome: "Wróć do CopyKat",
    privacyKicker: "PRYWATNOŚĆ, PROSTYM JĘZYKIEM",
    privacyTitle: "Polityka prywatności.",
    privacyIntro:
      "CopyKat przechowuje historię schowka na Twoim Macu. Ta polityka wyjaśnia, jakie dane obsługuje aplikacja i ta strona.",
    localTitle: "Dane schowka pozostają lokalnie",
    localBody:
      "CopyKat zapisuje historię schowka i ustawienia na Macu. Teksty, obrazy, pliki i przypięte elementy nie są przesyłane przez CopyKat. Ty wybierasz zakres historii i możesz usunąć dane aplikacji z Maca.",
    sensitiveTitle: "Dane wrażliwe i uprawnienia",
    sensitiveBody:
      "Elementy oznaczone przez menedżer haseł jako ukryte nie są zapisywane, a inne aplikacje możesz wykluczyć. CopyKat odczytuje schowek macOS, aby wykrywać kopiowanie. Opcjonalne uprawnienie Dostępność służy wyłącznie do wklejania w aktywnej aplikacji; bez niego CopyKat kopiuje element.",
    websiteTitle: "Ta strona",
    websiteBody:
      "Ta strona nie używa analityki, trackerów reklamowych ani zbędnych plików cookie. Jest hostowana w GitHub Pages. GitHub zapisuje adresy IP odwiedzających w celach bezpieczeństwa i przetwarza je według własnej polityki.",
    contactTitle: "Pomoc i zmiany",
    contactBody:
      "Gdy piszesz do pomocy, używamy adresu, wiadomości i załączników, aby odpowiedzieć. Nie wysyłaj haseł ani wrażliwej zawartości schowka. Polityka może zostać zaktualizowana, gdy zmieni się CopyKat lub hosting.",
    githubPrivacy: "Przeczytaj politykę prywatności GitHub",
    supportKicker: "POMOC OD CZŁOWIEKA",
    supportTitle: "Jak możemy pomóc?",
    supportIntro:
      "Pytania o instalację, uprawnienia, skrót lub nieoczekiwane zachowanie? Napisz bezpośrednio do mixxamm.",
    emailSupport: "Napisz do pomocy",
    mailHint:
      "Otwiera domyślną aplikację pocztową z adresem contact@mixxamm.com.",
    includeTitle: "Co warto podać",
    includeBody:
      "Podaj wersje macOS i CopyKat, oczekiwany rezultat oraz to, co się wydarzyło. Krótka lista kroków lub zrzut ekranu zwykle wystarczy.",
    safeTitle: "Nie wysyłaj danych wrażliwych",
    safeBody:
      "Nigdy nie umieszczaj haseł, danych płatniczych ani prywatnej zawartości schowka w wiadomości lub zrzucie.",
    githubIssues: "Zobacz zgłoszenia na GitHubie",
  },
  uk: {
    home: "Головна",
    privacy: "Приватність",
    support: "Підтримка",
    language: "Мова",
    lastUpdated: "Останнє оновлення",
    backHome: "Назад до CopyKat",
    privacyKicker: "ПРО ПРИВАТНІСТЬ ПРОСТО",
    privacyTitle: "Політика приватності.",
    privacyIntro:
      "CopyKat створено так, щоб історія буфера обміну залишалася на вашому Mac. Тут пояснено, які дані обробляють застосунок і сайт.",
    localTitle: "Дані залишаються локально",
    localBody:
      "CopyKat зберігає історію буфера й налаштування на Mac. Текст, зображення, файли та закріплені елементи не завантажуються CopyKat. Ви визначаєте обсяг історії та можете видалити дані застосунку з Mac.",
    sensitiveTitle: "Чутливі дані та дозволи",
    sensitiveBody:
      "Елементи, позначені менеджером паролів як приховані, не зберігаються; інші застосунки можна виключити. CopyKat читає буфер macOS, щоб виявляти копіювання. Необов’язковий дозвіл Accessibility використовується лише для вставлення в активний застосунок; без нього CopyKat копіює елемент.",
    websiteTitle: "Цей сайт",
    websiteBody:
      "Сайт не використовує аналітику, рекламні трекери чи необов’язкові cookie. Він розміщений на GitHub Pages. GitHub реєструє IP-адреси відвідувачів задля безпеки й обробляє їх за власною політикою.",
    contactTitle: "Підтримка та зміни",
    contactBody:
      "Якщо ви пишете в підтримку, адреса, повідомлення й вкладення використовуються для відповіді. Не надсилайте паролі чи чутливий вміст буфера. Політика може оновлюватися зі змінами CopyKat або хостингу.",
    githubPrivacy: "Прочитати політику приватності GitHub",
    supportKicker: "ЛЮДСЬКА ПІДТРИМКА",
    supportTitle: "Як ми можемо допомогти?",
    supportIntro:
      "Питання щодо встановлення, дозволів, скорочення чи неочікуваної поведінки? Напишіть безпосередньо mixxamm.",
    emailSupport: "Написати в підтримку",
    mailHint:
      "Відкриває стандартну поштову програму з адресою contact@mixxamm.com.",
    includeTitle: "Що корисно вказати",
    includeBody:
      "Вкажіть версії macOS і CopyKat, очікуваний результат і те, що сталося. Зазвичай достатньо коротких кроків або знімка екрана.",
    safeTitle: "Не надсилайте чутливі дані",
    safeBody:
      "Ніколи не додавайте паролі, платіжні дані чи приватний вміст буфера в лист або знімок.",
    githubIssues: "Переглянути проблеми на GitHub",
  },
  ro: {
    home: "Acasă",
    privacy: "Confidențialitate",
    support: "Asistență",
    language: "Limbă",
    lastUpdated: "Ultima actualizare",
    backHome: "Înapoi la CopyKat",
    privacyKicker: "CONFIDENȚIALITATE, PE ÎNȚELES",
    privacyTitle: "Politica de confidențialitate.",
    privacyIntro:
      "CopyKat este conceput să păstreze istoricul clipboardului pe Mac. Această politică explică datele gestionate de aplicație și de site.",
    localTitle: "Datele rămân local",
    localBody:
      "CopyKat păstrează istoricul clipboardului și setările pe Mac. Textele, imaginile, fișierele și elementele fixate nu sunt încărcate de CopyKat. Tu controlezi cât istoric se păstrează și poți șterge datele aplicației de pe Mac.",
    sensitiveTitle: "Elemente sensibile și permisiuni",
    sensitiveBody:
      "Elementele marcate ca ascunse de un manager de parole nu sunt salvate, iar alte aplicații pot fi excluse. CopyKat citește clipboardul macOS pentru a detecta copierile. Permisiunea opțională Accesibilitate este folosită doar pentru lipire în aplicația activă; fără ea, CopyKat copiază elementul.",
    websiteTitle: "Acest site",
    websiteBody:
      "Site-ul nu folosește analize, trackere publicitare sau cookie-uri neesențiale. Este găzduit pe GitHub Pages. GitHub înregistrează adresele IP ale vizitatorilor pentru securitate și le tratează conform propriei politici.",
    contactTitle: "Asistență și modificări",
    contactBody:
      "Dacă trimiți un e-mail, adresa, mesajul și atașamentele sunt folosite pentru răspuns. Nu trimite parole sau conținut sensibil din clipboard. Politica poate fi actualizată când se schimbă CopyKat sau găzduirea.",
    githubPrivacy: "Citește politica de confidențialitate GitHub",
    supportKicker: "ASISTENȚĂ UMANĂ",
    supportTitle: "Cum te putem ajuta?",
    supportIntro:
      "Întrebări despre instalare, permisiuni, scurtătură sau comportament neașteptat? Scrie direct către mixxamm.",
    emailSupport: "Trimite un e-mail",
    mailHint:
      "Deschide aplicația de e-mail implicită cu contact@mixxamm.com.",
    includeTitle: "Detalii utile",
    includeBody:
      "Menționează versiunile macOS și CopyKat, ce te așteptai și ce s-a întâmplat. O listă scurtă de pași sau o captură este de obicei suficientă.",
    safeTitle: "Nu trimite date sensibile",
    safeBody:
      "Nu include niciodată parole, date de plată sau conținut privat din clipboard într-un e-mail sau o captură.",
    githubIssues: "Vezi problemele pe GitHub",
  },
  sv: {
    home: "Hem",
    privacy: "Integritet",
    support: "Support",
    language: "Språk",
    lastUpdated: "Senast uppdaterad",
    backHome: "Tillbaka till CopyKat",
    privacyKicker: "INTEGRITET, UTAN KRÅNGEL",
    privacyTitle: "Integritetspolicy.",
    privacyIntro:
      "CopyKat är byggt för att behålla urklippshistoriken på din Mac. Policyn förklarar vilka data appen och webbplatsen hanterar.",
    localTitle: "Urklippsdata stannar lokalt",
    localBody:
      "CopyKat lagrar urklippshistorik och inställningar på din Mac. Text, bilder, filer och fästa objekt laddas inte upp av CopyKat. Du styr hur mycket historik som sparas och kan ta bort appens data från din Mac.",
    sensitiveTitle: "Känsliga objekt och behörigheter",
    sensitiveBody:
      "Objekt som en lösenordshanterare markerar som dolda sparas inte, och du kan undanta andra appar. CopyKat läser macOS urklipp för att upptäcka kopieringar. Den valfria hjälpmedelsbehörigheten används bara för att klistra in i den aktiva appen; utan den kopierar CopyKat objektet.",
    websiteTitle: "Webbplatsen",
    websiteBody:
      "Webbplatsen använder ingen analys, reklamspårning eller icke-nödvändiga cookies. Den finns på GitHub Pages. GitHub loggar besökares IP-adresser av säkerhetsskäl och hanterar dem enligt sin egen policy.",
    contactTitle: "Support och ändringar",
    contactBody:
      "Om du mejlar supporten används adress, meddelande och bilagor för att svara. Skicka inte lösenord eller känsligt urklippsinnehåll. Policyn kan uppdateras när CopyKat eller webbhotellet ändras.",
    githubPrivacy: "Läs GitHubs integritetspolicy",
    supportKicker: "MÄNSKLIG SUPPORT",
    supportTitle: "Hur kan vi hjälpa?",
    supportIntro:
      "Frågor om installation, behörigheter, kortkommandot eller oväntat beteende? Mejla mixxamm direkt.",
    emailSupport: "Mejla supporten",
    mailHint:
      "Öppnar din vanliga e-postapp med contact@mixxamm.com.",
    includeTitle: "Bra information att ta med",
    includeBody:
      "Ange macOS-version, CopyKat-version, vad du förväntade dig och vad som hände. Några korta steg eller en skärmbild räcker oftast.",
    safeTitle: "Utelämna känsliga data",
    safeBody:
      "Ta aldrig med lösenord, betalningsuppgifter eller privat urklippsinnehåll i ett supportmejl eller en skärmbild.",
    githubIssues: "Visa ärenden på GitHub",
  },
  ru: {
    home: "Главная",
    privacy: "Конфиденциальность",
    support: "Поддержка",
    language: "Язык",
    lastUpdated: "Последнее обновление",
    backHome: "Назад к CopyKat",
    privacyKicker: "О КОНФИДЕНЦИАЛЬНОСТИ ПРОСТО",
    privacyTitle: "Политика конфиденциальности.",
    privacyIntro:
      "CopyKat создан так, чтобы история буфера обмена оставалась на вашем Mac. Здесь объясняется, какие данные обрабатывают приложение и сайт.",
    localTitle: "Данные остаются локально",
    localBody:
      "CopyKat хранит историю буфера и настройки на Mac. Текст, изображения, файлы и закреплённые элементы не загружаются CopyKat. Вы управляете объёмом истории и можете удалить данные приложения с Mac.",
    sensitiveTitle: "Конфиденциальные данные и разрешения",
    sensitiveBody:
      "Элементы, помеченные менеджером паролей как скрытые, не сохраняются; другие приложения можно исключить. CopyKat читает буфер macOS для обнаружения копирования. Необязательное разрешение универсального доступа используется только для вставки в активное приложение; без него CopyKat копирует элемент.",
    websiteTitle: "Этот сайт",
    websiteBody:
      "Сайт не использует аналитику, рекламные трекеры или необязательные cookie. Он размещён на GitHub Pages. GitHub регистрирует IP-адреса посетителей в целях безопасности и обрабатывает их по своей политике.",
    contactTitle: "Поддержка и изменения",
    contactBody:
      "При обращении в поддержку адрес, сообщение и вложения используются для ответа. Не отправляйте пароли или конфиденциальное содержимое буфера. Политика может обновляться при изменениях CopyKat или хостинга.",
    githubPrivacy: "Прочитать политику конфиденциальности GitHub",
    supportKicker: "ПОДДЕРЖКА ОТ ЛЮДЕЙ",
    supportTitle: "Как мы можем помочь?",
    supportIntro:
      "Вопросы об установке, разрешениях, сочетании клавиш или неожиданном поведении? Напишите напрямую mixxamm.",
    emailSupport: "Написать в поддержку",
    mailHint:
      "Открывает почтовое приложение с адресом contact@mixxamm.com.",
    includeTitle: "Что полезно указать",
    includeBody:
      "Укажите версии macOS и CopyKat, ожидаемый результат и то, что произошло. Обычно достаточно короткого списка шагов или снимка экрана.",
    safeTitle: "Не отправляйте чувствительные данные",
    safeBody:
      "Никогда не включайте пароли, платёжные данные или приватное содержимое буфера в письмо или снимок.",
    githubIssues: "Посмотреть проблемы на GitHub",
  },
  "zh-Hans": {
    home: "首页",
    privacy: "隐私",
    support: "支持",
    language: "语言",
    lastUpdated: "最后更新",
    backHome: "返回 CopyKat",
    privacyKicker: "简单明了的隐私说明",
    privacyTitle: "隐私政策。",
    privacyIntro:
      "CopyKat 的设计目标是让剪贴板历史留在你的 Mac 上。本政策说明应用和本网站会处理哪些数据。",
    localTitle: "剪贴板数据保留在本地",
    localBody:
      "CopyKat 将剪贴板历史和设置存储在你的 Mac 上。文本、图片、文件和固定项目不会由 CopyKat 上传。你可以控制保留多少历史，也可以从 Mac 删除应用数据。",
    sensitiveTitle: "敏感项目与权限",
    sensitiveBody:
      "密码管理器标记为隐藏的项目不会被保存，你也可以排除其他应用。CopyKat 读取 macOS 剪贴板以检测复制操作。可选的辅助功能权限仅用于向当前应用粘贴；若未授权，CopyKat 会改为复制该项目。",
    websiteTitle: "本网站",
    websiteBody:
      "本网站不使用分析工具、广告跟踪器或非必要 Cookie。网站托管于 GitHub Pages。GitHub 会出于安全目的记录访问者的 IP 地址，并依照其隐私声明处理。",
    contactTitle: "支持与政策更新",
    contactBody:
      "如果你向支持邮箱发送邮件，我们会使用你的邮箱地址、信息和附件进行回复。请勿发送密码或敏感的剪贴板内容。当 CopyKat 或托管方式变化时，我们可能更新本政策。",
    githubPrivacy: "阅读 GitHub 隐私声明",
    supportKicker: "真人支持",
    supportTitle: "需要什么帮助？",
    supportIntro:
      "对安装、权限、快捷键或异常行为有疑问？请直接给 mixxamm 发邮件。",
    emailSupport: "发送支持邮件",
    mailHint: "打开默认邮件应用并写信至 contact@mixxamm.com。",
    includeTitle: "建议提供的信息",
    includeBody:
      "请说明 macOS 版本、CopyKat 版本、预期结果和实际情况。简短的操作步骤或截图通常就足够。",
    safeTitle: "不要发送敏感数据",
    safeBody:
      "请勿在支持邮件或截图中包含密码、支付信息或私密的剪贴板内容。",
    githubIssues: "在 GitHub 查看问题",
  },
  "zh-Hant": {
    home: "首頁",
    privacy: "隱私權",
    support: "支援",
    language: "語言",
    lastUpdated: "最後更新",
    backHome: "返回 CopyKat",
    privacyKicker: "簡單明瞭的隱私說明",
    privacyTitle: "隱私權政策。",
    privacyIntro:
      "CopyKat 的設計目標是讓剪貼簿記錄留在你的 Mac。本政策說明 App 和本網站會處理哪些資料。",
    localTitle: "剪貼簿資料留在本機",
    localBody:
      "CopyKat 將剪貼簿記錄與設定儲存在你的 Mac。文字、圖片、檔案和釘選項目不會由 CopyKat 上傳。你可以控制保留多少記錄，也能從 Mac 刪除 App 資料。",
    sensitiveTitle: "敏感項目與權限",
    sensitiveBody:
      "密碼管理器標記為隱藏的項目不會儲存，你也可以排除其他 App。CopyKat 讀取 macOS 剪貼簿以偵測複製操作。選用的輔助使用權限只用於貼到目前的 App；若未授權，CopyKat 會改為複製該項目。",
    websiteTitle: "本網站",
    websiteBody:
      "本網站不使用分析工具、廣告追蹤器或非必要 Cookie。網站託管於 GitHub Pages。GitHub 會基於安全理由記錄訪客的 IP 位址，並依其隱私權聲明處理。",
    contactTitle: "支援與政策更新",
    contactBody:
      "若你寄信給支援，我們會使用你的電子郵件地址、訊息和附件來回覆。請勿傳送密碼或敏感的剪貼簿內容。當 CopyKat 或託管方式改變時，我們可能更新本政策。",
    githubPrivacy: "閱讀 GitHub 隱私權聲明",
    supportKicker: "真人支援",
    supportTitle: "需要什麼協助？",
    supportIntro:
      "對安裝、權限、快捷鍵或異常行為有疑問？請直接寄信給 mixxamm。",
    emailSupport: "寄信給支援",
    mailHint: "開啟預設郵件 App，收件人為 contact@mixxamm.com。",
    includeTitle: "建議提供的資訊",
    includeBody:
      "請說明 macOS 版本、CopyKat 版本、預期結果與實際情況。簡短的操作步驟或截圖通常就足夠。",
    safeTitle: "不要傳送敏感資料",
    safeBody:
      "請勿在支援郵件或截圖中包含密碼、付款資料或私密的剪貼簿內容。",
    githubIssues: "在 GitHub 查看問題",
  },
  ja: {
    home: "ホーム",
    privacy: "プライバシー",
    support: "サポート",
    language: "言語",
    lastUpdated: "最終更新",
    backHome: "CopyKat に戻る",
    privacyKicker: "わかりやすいプライバシー",
    privacyTitle: "プライバシーポリシー。",
    privacyIntro:
      "CopyKat はクリップボード履歴をMac内に保つために設計されています。本ポリシーでは、アプリとこのサイトが扱うデータを説明します。",
    localTitle: "データはMac内に保存",
    localBody:
      "CopyKat はクリップボード履歴と設定をMacに保存します。テキスト、画像、ファイル、ピン留め項目をCopyKatがアップロードすることはありません。履歴の保持量を管理し、Macからアプリデータを削除できます。",
    sensitiveTitle: "機密項目と権限",
    sensitiveBody:
      "パスワードマネージャーが非表示として示す項目は保存されず、ほかのアプリも除外できます。CopyKatはコピーを検出するためmacOSのペーストボードを読み取ります。任意のアクセシビリティ権限はアクティブなアプリへの貼り付けにだけ使われ、未許可の場合は項目をコピーします。",
    websiteTitle: "このウェブサイト",
    websiteBody:
      "本サイトはアクセス解析、広告トラッカー、不要なCookieを使用しません。GitHub Pagesでホストされています。GitHubはセキュリティ目的で訪問者のIPアドレスを記録し、独自のポリシーに従って処理します。",
    contactTitle: "サポートと変更",
    contactBody:
      "サポートへのメールでは、アドレス、本文、添付ファイルを返信のために使用します。パスワードや機密性の高いクリップボード内容は送らないでください。CopyKatやホスティングの変更時に本ポリシーを更新する場合があります。",
    githubPrivacy: "GitHubのプライバシー声明を読む",
    supportKicker: "人によるサポート",
    supportTitle: "どのようにお手伝いできますか？",
    supportIntro:
      "インストール、権限、ショートカット、予期しない動作についての質問は、mixxammへ直接メールしてください。",
    emailSupport: "サポートにメール",
    mailHint:
      "標準のメールアプリを開き、contact@mixxamm.com 宛てに作成します。",
    includeTitle: "記載すると役立つ情報",
    includeBody:
      "macOSとCopyKatのバージョン、期待した結果、実際に起きたことをお知らせください。短い手順やスクリーンショットがあれば十分です。",
    safeTitle: "機密データを含めないでください",
    safeBody:
      "サポートメールやスクリーンショットにパスワード、支払い情報、非公開のクリップボード内容を含めないでください。",
    githubIssues: "GitHubでIssueを見る",
  },
  ko: {
    home: "홈",
    privacy: "개인정보 보호",
    support: "지원",
    language: "언어",
    lastUpdated: "최종 업데이트",
    backHome: "CopyKat으로 돌아가기",
    privacyKicker: "알기 쉬운 개인정보 안내",
    privacyTitle: "개인정보 처리방침.",
    privacyIntro:
      "CopyKat은 클립보드 기록을 Mac에 보관하도록 설계되었습니다. 이 방침은 앱과 웹사이트가 처리하는 데이터를 설명합니다.",
    localTitle: "데이터는 Mac에만 보관됩니다",
    localBody:
      "CopyKat은 클립보드 기록과 설정을 Mac에 저장합니다. 텍스트, 이미지, 파일, 고정 항목을 CopyKat이 업로드하지 않습니다. 기록 보관량을 직접 정하고 Mac에서 앱 데이터를 삭제할 수 있습니다.",
    sensitiveTitle: "민감한 항목과 권한",
    sensitiveBody:
      "암호 관리자가 숨김으로 표시한 항목은 저장되지 않으며 다른 앱도 제외할 수 있습니다. CopyKat은 복사를 감지하기 위해 macOS 클립보드를 읽습니다. 선택적 손쉬운 사용 권한은 활성 앱에 붙여넣을 때만 사용되며, 허용하지 않으면 항목을 복사합니다.",
    websiteTitle: "이 웹사이트",
    websiteBody:
      "이 사이트는 분석 도구, 광고 추적기 또는 불필요한 쿠키를 사용하지 않습니다. GitHub Pages에서 호스팅되며, GitHub는 보안을 위해 방문자의 IP 주소를 기록하고 자체 방침에 따라 처리합니다.",
    contactTitle: "지원 및 방침 변경",
    contactBody:
      "지원 메일을 보내면 이메일 주소, 메시지와 첨부파일을 답변에 사용합니다. 암호나 민감한 클립보드 내용은 보내지 마세요. CopyKat 또는 호스팅이 변경되면 이 방침을 업데이트할 수 있습니다.",
    githubPrivacy: "GitHub 개인정보 보호정책 읽기",
    supportKicker: "사람이 직접 돕습니다",
    supportTitle: "무엇을 도와드릴까요?",
    supportIntro:
      "설치, 권한, 단축키 또는 예상치 못한 동작에 관한 질문은 mixxamm에 직접 이메일을 보내 주세요.",
    emailSupport: "지원 메일 보내기",
    mailHint:
      "기본 메일 앱을 열어 contact@mixxamm.com 앞으로 작성합니다.",
    includeTitle: "함께 보내면 좋은 정보",
    includeBody:
      "macOS와 CopyKat 버전, 예상한 결과와 실제 상황을 알려 주세요. 간단한 단계나 스크린샷이면 보통 충분합니다.",
    safeTitle: "민감한 데이터는 제외하세요",
    safeBody:
      "지원 이메일이나 스크린샷에 암호, 결제 정보 또는 비공개 클립보드 내용을 포함하지 마세요.",
    githubIssues: "GitHub 이슈 보기",
  },
  tr: {
    home: "Ana sayfa",
    privacy: "Gizlilik",
    support: "Destek",
    language: "Dil",
    lastUpdated: "Son güncelleme",
    backHome: "CopyKat’e dön",
    privacyKicker: "SADE BİR GİZLİLİK AÇIKLAMASI",
    privacyTitle: "Gizlilik politikası.",
    privacyIntro:
      "CopyKat, pano geçmişinizi Mac’inizde tutmak için tasarlanmıştır. Bu politika uygulamanın ve sitenin hangi verileri işlediğini açıklar.",
    localTitle: "Pano verileri yerel kalır",
    localBody:
      "CopyKat pano geçmişinizi ve ayarlarınızı Mac’inizde saklar. Metinler, görseller, dosyalar ve sabitlenen öğeler CopyKat tarafından yüklenmez. Ne kadar geçmiş tutulacağını siz belirlersiniz ve uygulama verilerini Mac’ten silebilirsiniz.",
    sensitiveTitle: "Hassas öğeler ve izinler",
    sensitiveBody:
      "Parola yöneticisinin gizli olarak işaretlediği öğeler saklanmaz; diğer uygulamaları da hariç tutabilirsiniz. CopyKat, kopyalamaları algılamak için macOS panosunu okur. İsteğe bağlı Erişilebilirlik izni yalnızca etkin uygulamaya yapıştırmak için kullanılır; izin olmadan CopyKat öğeyi kopyalar.",
    websiteTitle: "Bu web sitesi",
    websiteBody:
      "Site analiz, reklam izleyicisi veya zorunlu olmayan çerez kullanmaz. GitHub Pages üzerinde barındırılır. GitHub, güvenlik amacıyla ziyaretçilerin IP adreslerini kaydeder ve kendi politikası uyarınca işler.",
    contactTitle: "Destek ve değişiklikler",
    contactBody:
      "Desteğe e-posta gönderirseniz adresiniz, mesajınız ve ekleriniz yanıt vermek için kullanılır. Parola veya hassas pano içeriği göndermeyin. CopyKat ya da barındırma değiştiğinde bu politika güncellenebilir.",
    githubPrivacy: "GitHub gizlilik bildirimini okuyun",
    supportKicker: "GERÇEK İNSAN DESTEĞİ",
    supportTitle: "Nasıl yardımcı olabiliriz?",
    supportIntro:
      "Kurulum, izinler, kısayol veya beklenmedik davranış hakkında sorunuz mu var? Doğrudan mixxamm’e e-posta gönderin.",
    emailSupport: "Desteğe e-posta gönder",
    mailHint:
      "Varsayılan e-posta uygulamanızı contact@mixxamm.com adresiyle açar.",
    includeTitle: "Eklenmesi yararlı bilgiler",
    includeBody:
      "macOS ve CopyKat sürümünüzü, beklediğiniz sonucu ve ne olduğunu belirtin. Kısa adımlar veya ekran görüntüsü genellikle yeterlidir.",
    safeTitle: "Hassas verileri göndermeyin",
    safeBody:
      "Destek e-postasına veya ekran görüntüsüne parola, ödeme bilgisi ya da özel pano içeriği eklemeyin.",
    githubIssues: "GitHub sorunlarını görüntüle",
  },
  ar: {
    home: "الرئيسية",
    privacy: "الخصوصية",
    support: "الدعم",
    language: "اللغة",
    lastUpdated: "آخر تحديث",
    backHome: "العودة إلى CopyKat",
    privacyKicker: "الخصوصية بلغة واضحة",
    privacyTitle: "سياسة الخصوصية.",
    privacyIntro:
      "صُمم CopyKat ليُبقي سجل الحافظة على جهاز Mac. توضح هذه السياسة البيانات التي يتعامل معها التطبيق وهذا الموقع.",
    localTitle: "تبقى بيانات الحافظة محليًا",
    localBody:
      "يحفظ CopyKat سجل الحافظة والإعدادات على جهاز Mac. لا يرفع CopyKat النصوص أو الصور أو الملفات أو العناصر المثبتة. أنت تتحكم في مقدار السجل المحتفظ به ويمكنك حذف بيانات التطبيق من جهازك.",
    sensitiveTitle: "العناصر الحساسة والأذونات",
    sensitiveBody:
      "لا تُحفظ العناصر التي يحددها مدير كلمات المرور كمخفية، ويمكنك استبعاد تطبيقات أخرى. يقرأ CopyKat حافظة macOS لاكتشاف النسخ. يُستخدم إذن تسهيلات الاستخدام الاختياري فقط للصق في التطبيق النشط؛ وبدونه ينسخ CopyKat العنصر.",
    websiteTitle: "هذا الموقع",
    websiteBody:
      "لا يستخدم الموقع التحليلات أو أدوات تتبع الإعلانات أو ملفات تعريف الارتباط غير الضرورية. تتم استضافته على GitHub Pages. يسجل GitHub عناوين IP للزوار لأغراض الأمان ويعالجها وفق سياسة الخصوصية الخاصة به.",
    contactTitle: "الدعم وتغييرات السياسة",
    contactBody:
      "عند مراسلة الدعم، نستخدم عنوان بريدك ورسالتك ومرفقاتك للرد. لا ترسل كلمات مرور أو محتوى حساسًا من الحافظة. قد نحدث هذه السياسة عند تغيير CopyKat أو الاستضافة.",
    githubPrivacy: "قراءة بيان الخصوصية من GitHub",
    supportKicker: "دعم بشري مباشر",
    supportTitle: "كيف يمكننا مساعدتك؟",
    supportIntro:
      "هل لديك أسئلة عن التثبيت أو الأذونات أو الاختصار أو سلوك غير متوقع؟ راسل mixxamm مباشرة.",
    emailSupport: "مراسلة الدعم",
    mailHint:
      "يفتح تطبيق البريد الافتراضي للكتابة إلى contact@mixxamm.com.",
    includeTitle: "تفاصيل مفيدة لإضافتها",
    includeBody:
      "اذكر إصدار macOS وإصدار CopyKat وما توقعته وما حدث. عادة تكفي خطوات قصيرة أو لقطة شاشة.",
    safeTitle: "لا ترسل بيانات حساسة",
    safeBody:
      "لا تضع كلمات مرور أو بيانات دفع أو محتوى خاصًا من الحافظة في رسالة دعم أو لقطة شاشة.",
    githubIssues: "عرض المشكلات على GitHub",
  },
  hi: {
    home: "होम",
    privacy: "गोपनीयता",
    support: "सहायता",
    language: "भाषा",
    lastUpdated: "पिछला अपडेट",
    backHome: "CopyKat पर वापस जाएँ",
    privacyKicker: "सरल भाषा में गोपनीयता",
    privacyTitle: "गोपनीयता नीति।",
    privacyIntro:
      "CopyKat को क्लिपबोर्ड इतिहास आपके Mac पर रखने के लिए बनाया गया है। यह नीति बताती है कि ऐप और वेबसाइट कौन-सा डेटा संभालते हैं।",
    localTitle: "क्लिपबोर्ड डेटा स्थानीय रहता है",
    localBody:
      "CopyKat आपका क्लिपबोर्ड इतिहास और सेटिंग्स Mac पर रखता है। टेक्स्ट, इमेज, फ़ाइलें और पिन किए गए आइटम CopyKat द्वारा अपलोड नहीं किए जाते। आप इतिहास की मात्रा नियंत्रित कर सकते हैं और Mac से ऐप डेटा हटा सकते हैं।",
    sensitiveTitle: "संवेदनशील आइटम और अनुमतियाँ",
    sensitiveBody:
      "पासवर्ड मैनेजर द्वारा छिपे बताए गए आइटम सेव नहीं होते और आप अन्य ऐप बाहर रख सकते हैं। CopyKat कॉपी पहचानने के लिए macOS क्लिपबोर्ड पढ़ता है। वैकल्पिक Accessibility अनुमति केवल सक्रिय ऐप में पेस्ट करने के लिए उपयोग होती है; बिना अनुमति CopyKat आइटम कॉपी करता है।",
    websiteTitle: "यह वेबसाइट",
    websiteBody:
      "यह साइट एनालिटिक्स, विज्ञापन ट्रैकर या गैर-ज़रूरी कुकी का उपयोग नहीं करती। इसे GitHub Pages पर होस्ट किया गया है। GitHub सुरक्षा के लिए आगंतुकों के IP पते लॉग करता है और अपनी नीति के अनुसार संभालता है।",
    contactTitle: "सहायता और नीति में बदलाव",
    contactBody:
      "सहायता ईमेल में आपका पता, संदेश और अटैचमेंट जवाब देने के लिए उपयोग होते हैं। पासवर्ड या संवेदनशील क्लिपबोर्ड सामग्री न भेजें। CopyKat या होस्टिंग बदलने पर यह नीति अपडेट हो सकती है।",
    githubPrivacy: "GitHub की गोपनीयता नीति पढ़ें",
    supportKicker: "इंसानी सहायता",
    supportTitle: "हम कैसे मदद कर सकते हैं?",
    supportIntro:
      "इंस्टॉलेशन, अनुमतियों, शॉर्टकट या अप्रत्याशित व्यवहार पर सवाल है? सीधे mixxamm को ईमेल करें।",
    emailSupport: "सहायता को ईमेल करें",
    mailHint:
      "आपका डिफ़ॉल्ट मेल ऐप contact@mixxamm.com के साथ खुलता है।",
    includeTitle: "काम की जानकारी शामिल करें",
    includeBody:
      "अपना macOS संस्करण, CopyKat संस्करण, अपेक्षित परिणाम और जो हुआ वह बताएँ। छोटे चरण या स्क्रीनशॉट आम तौर पर पर्याप्त हैं।",
    safeTitle: "संवेदनशील डेटा न भेजें",
    safeBody:
      "सहायता ईमेल या स्क्रीनशॉट में पासवर्ड, भुगतान जानकारी या निजी क्लिपबोर्ड सामग्री कभी शामिल न करें।",
    githubIssues: "GitHub पर समस्याएँ देखें",
  },
};
