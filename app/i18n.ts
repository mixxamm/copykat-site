export const supportedLocales = [
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
] as const;

export type Locale = (typeof supportedLocales)[number];

export type SiteCopy = {
  navFeatures: string;
  privacy: string;
  download: string;
  heroTitle: string;
  heroLede: string;
  downloadMac: string;
  viewGitHub: string;
  trust: string;
  search: string;
  copiedOnIPhone: string;
  scroll: string;
  featureTitle: string;
  featureBody: string;
  releaseChecklist: string;
  keptForever: string;
  privacyStamp: string;
  privacyTitle: string;
  privacyBody: string;
  privacyBulletOne: string;
  privacyBulletTwo: string;
  privacyBulletThree: string;
  sourceKicker: string;
  sourceTitle: string;
  sourceBody: string;
  downloadCopyKat: string;
  readSource: string;
  noMatches: string;
  trySearch: string;
  noSelection: string;
  image: string;
};

export const translations: Record<Locale, SiteCopy> = {
  en: {
    navFeatures: "What it keeps",
    privacy: "Privacy",
    download: "Download",
    heroTitle: "Everything you copied. One shortcut away.",
    heroLede:
      "Text, images, files, and anything you copy on your iPhone through Universal Clipboard.",
    downloadMac: "Download for macOS",
    viewGitHub: "View on GitHub",
    trust: "macOS 14+ · Free & open source",
    search: "Search clipboard history",
    copiedOnIPhone: "Copied on iPhone",
    scroll: "See what it keeps",
    featureTitle: "Not just text.",
    featureBody:
      "Screenshots, links, files, code, pinned fragments, and clips from your iPhone all live in the same searchable history.",
    releaseChecklist: "Release checklist",
    keptForever: "Kept forever",
    privacyStamp: "PRIVATE BY DEFAULT",
    privacyTitle: "Your clipboard stays on your Mac.",
    privacyBody:
      "Password-manager entries marked as concealed are ignored automatically. Exclude any other app yourself. Your history lives locally and survives restarts.",
    privacyBulletOne:
      "Items hidden by your password manager are not stored",
    privacyBulletTwo: "You choose which apps CopyKat ignores",
    privacyBulletThree: "No cloud. No accounts. Everything stays local.",
    sourceKicker: "MIT licensed · built in Swift",
    sourceTitle: "Native.\nOpen source.",
    sourceBody: "Built for macOS with SwiftUI and SwiftData.",
    downloadCopyKat: "Download CopyKat",
    readSource: "Read the source",
    noMatches: "No matches.",
    trySearch: "Try “GitHub”, “image”, or “device”.",
    noSelection: "No selection",
    image: "Image",
  },
  nl: {
    navFeatures: "Wat het bewaart",
    privacy: "Privacy",
    download: "Download",
    heroTitle: "Alles wat je kopieert. Eén sneltoets verwijderd.",
    heroLede:
      "Tekst, afbeeldingen, bestanden en alles wat je op je iPhone kopieert via Universal Clipboard.",
    downloadMac: "Download voor macOS",
    viewGitHub: "Bekijk op GitHub",
    trust: "macOS 14+ · Gratis & open source",
    search: "Zoek klembordgeschiedenis",
    copiedOnIPhone: "Gekopieerd op iPhone",
    scroll: "Bekijk wat het bewaart",
    featureTitle: "Meer dan tekst.",
    featureBody:
      "Schermafbeeldingen, links, bestanden, code, vastgezette fragmenten en clips van je iPhone staan samen in één doorzoekbare geschiedenis.",
    releaseChecklist: "Releasechecklist",
    keptForever: "Blijvend bewaard",
    privacyStamp: "STANDAARD PRIVÉ",
    privacyTitle: "Je klembord blijft op je Mac.",
    privacyBody:
      "Vermeldingen die een wachtwoordmanager als verborgen markeert, worden automatisch genegeerd. Andere apps kun je zelf uitsluiten. Je geschiedenis blijft lokaal en overleeft herstarts.",
    privacyBulletOne:
      "Items die je wachtwoordmanager verbergt, worden niet opgeslagen",
    privacyBulletTwo: "Jij kiest welke apps CopyKat negeert",
    privacyBulletThree: "Geen cloud. Geen accounts. Alles blijft lokaal.",
    sourceKicker: "MIT-licentie · gebouwd in Swift",
    sourceTitle: "Native.\nOpen source.",
    sourceBody: "Gebouwd voor macOS met SwiftUI en SwiftData.",
    downloadCopyKat: "Download CopyKat",
    readSource: "Bekijk de broncode",
    noMatches: "Geen resultaten.",
    trySearch: "Probeer ‘GitHub’, ‘afbeelding’ of ‘apparaat’.",
    noSelection: "Geen selectie",
    image: "Afbeelding",
  },
  de: {
    navFeatures: "Was es speichert",
    privacy: "Datenschutz",
    download: "Laden",
    heroTitle: "Alles Kopierte. Nur einen Kurzbefehl entfernt.",
    heroLede:
      "Text, Bilder, Dateien und alles, was du auf dem iPhone über Universal Clipboard kopierst.",
    downloadMac: "Für macOS laden",
    viewGitHub: "Auf GitHub ansehen",
    trust: "macOS 14+ · Kostenlos & Open Source",
    search: "Zwischenablageverlauf durchsuchen",
    copiedOnIPhone: "Auf dem iPhone kopiert",
    scroll: "Gespeicherte Inhalte ansehen",
    featureTitle: "Mehr als nur Text.",
    featureBody:
      "Screenshots, Links, Dateien, Code, angeheftete Fragmente und Inhalte vom iPhone landen im selben durchsuchbaren Verlauf.",
    releaseChecklist: "Release-Checkliste",
    keptForever: "Dauerhaft gespeichert",
    privacyStamp: "STANDARDMÄSSIG PRIVAT",
    privacyTitle: "Deine Zwischenablage bleibt auf deinem Mac.",
    privacyBody:
      "Als verborgen markierte Passwortmanager-Einträge werden automatisch ignoriert. Weitere Apps kannst du selbst ausschließen. Dein Verlauf bleibt lokal und übersteht Neustarts.",
    privacyBulletOne:
      "Von deinem Passwortmanager verborgene Einträge werden nicht gespeichert",
    privacyBulletTwo: "Du bestimmst, welche Apps CopyKat ignoriert",
    privacyBulletThree: "Keine Cloud. Keine Konten. Alles bleibt lokal.",
    sourceKicker: "MIT-lizenziert · in Swift entwickelt",
    sourceTitle: "Nativ.\nOpen Source.",
    sourceBody: "Für macOS mit SwiftUI und SwiftData entwickelt.",
    downloadCopyKat: "CopyKat laden",
    readSource: "Quellcode ansehen",
    noMatches: "Keine Treffer.",
    trySearch: "Versuche „GitHub“, „Bild“ oder „Gerät“.",
    noSelection: "Keine Auswahl",
    image: "Bild",
  },
  fr: {
    navFeatures: "Ce qu’il conserve",
    privacy: "Confidentialité",
    download: "Télécharger",
    heroTitle: "Tout ce que vous copiez. À un raccourci.",
    heroLede:
      "Textes, images, fichiers et tout ce que vous copiez sur votre iPhone via Universal Clipboard.",
    downloadMac: "Télécharger pour macOS",
    viewGitHub: "Voir sur GitHub",
    trust: "macOS 14+ · Gratuit et open source",
    search: "Rechercher dans l'historique du presse-papiers",
    copiedOnIPhone: "Copié sur l’iPhone",
    scroll: "Voir ce qu’il conserve",
    featureTitle: "Bien plus que du texte.",
    featureBody:
      "Captures d’écran, liens, fichiers, code, extraits épinglés et éléments de votre iPhone partagent le même historique consultable.",
    releaseChecklist: "Liste de contrôle de version",
    keptForever: "Conservé sans limite",
    privacyStamp: "PRIVÉ PAR DÉFAUT",
    privacyTitle: "Votre presse-papiers reste sur votre Mac.",
    privacyBody:
      "Les entrées signalées comme masquées par les gestionnaires de mots de passe sont ignorées automatiquement. Vous pouvez exclure toute autre app. Votre historique reste local et résiste aux redémarrages.",
    privacyBulletOne:
      "Les éléments masqués par votre gestionnaire de mots de passe ne sont pas enregistrés",
    privacyBulletTwo: "Vous choisissez les apps que CopyKat ignore",
    privacyBulletThree:
      "Pas de cloud. Pas de compte. Tout reste en local.",
    sourceKicker: "Licence MIT · développé en Swift",
    sourceTitle: "Native.\nOpen source.",
    sourceBody: "Développé pour macOS avec SwiftUI et SwiftData.",
    downloadCopyKat: "Télécharger CopyKat",
    readSource: "Voir le code source",
    noMatches: "Aucun résultat.",
    trySearch: "Essayez « GitHub », « image » ou « appareil ».",
    noSelection: "Aucune sélection",
    image: "Image",
  },
  es: {
    navFeatures: "Lo que guarda",
    privacy: "Privacidad",
    download: "Descargar",
    heroTitle: "Todo lo que copias. A un atajo de distancia.",
    heroLede:
      "Texto, imágenes, archivos y todo lo que copies en tu iPhone mediante Universal Clipboard.",
    downloadMac: "Descargar para macOS",
    viewGitHub: "Ver en GitHub",
    trust: "macOS 14+ · Gratis y de código abierto",
    search: "Buscar en el historial del portapapeles",
    copiedOnIPhone: "Copiado en el iPhone",
    scroll: "Descubre lo que guarda",
    featureTitle: "No solo texto.",
    featureBody:
      "Capturas, enlaces, archivos, código, fragmentos fijados y elementos de tu iPhone viven en el mismo historial con búsqueda.",
    releaseChecklist: "Lista de publicación",
    keptForever: "Guardado para siempre",
    privacyStamp: "PRIVADO POR DEFECTO",
    privacyTitle: "Tu portapapeles se queda en tu Mac.",
    privacyBody:
      "Las entradas que los gestores de contraseñas marcan como ocultas se ignoran automáticamente. Puedes excluir cualquier otra app. Tu historial permanece local y sobrevive a los reinicios.",
    privacyBulletOne:
      "Los elementos ocultos por tu gestor de contraseñas no se guardan",
    privacyBulletTwo: "Tú eliges qué apps ignora CopyKat",
    privacyBulletThree: "Sin nube. Sin cuentas. Todo se queda en local.",
    sourceKicker: "Licencia MIT · creado con Swift",
    sourceTitle: "Nativa.\nCódigo abierto.",
    sourceBody: "Creado para macOS con SwiftUI y SwiftData.",
    downloadCopyKat: "Descargar CopyKat",
    readSource: "Ver el código fuente",
    noMatches: "Sin resultados.",
    trySearch: "Prueba con «GitHub», «imagen» o «dispositivo».",
    noSelection: "Sin selección",
    image: "Imagen",
  },
  it: {
    navFeatures: "Cosa conserva",
    privacy: "Privacy",
    download: "Scarica",
    heroTitle: "Tutto ciò che copi. A una scorciatoia di distanza.",
    heroLede:
      "Testo, immagini, file e tutto ciò che copi sul tuo iPhone tramite Universal Clipboard.",
    downloadMac: "Scarica per macOS",
    viewGitHub: "Vedi su GitHub",
    trust: "macOS 14+ · Gratuito e open source",
    search: "Cerca nella cronologia degli appunti",
    copiedOnIPhone: "Copiato su iPhone",
    scroll: "Scopri cosa conserva",
    featureTitle: "Non solo testo.",
    featureBody:
      "Screenshot, link, file, codice, frammenti fissati e contenuti dal tuo iPhone convivono nella stessa cronologia ricercabile.",
    releaseChecklist: "Checklist di rilascio",
    keptForever: "Conservato per sempre",
    privacyStamp: "PRIVATO PER IMPOSTAZIONE PREDEFINITA",
    privacyTitle: "I tuoi appunti restano sul Mac.",
    privacyBody:
      "Le voci contrassegnate come nascoste dai gestori di password vengono ignorate automaticamente. Puoi escludere qualsiasi altra app. La cronologia resta locale e sopravvive ai riavvii.",
    privacyBulletOne:
      "Gli elementi nascosti dal gestore password non vengono salvati",
    privacyBulletTwo: "Scegli tu quali app deve ignorare CopyKat",
    privacyBulletThree:
      "Niente cloud. Nessun account. Tutto resta in locale.",
    sourceKicker: "Licenza MIT · sviluppato in Swift",
    sourceTitle: "Nativa.\nOpen source.",
    sourceBody: "Sviluppato per macOS con SwiftUI e SwiftData.",
    downloadCopyKat: "Scarica CopyKat",
    readSource: "Leggi il codice sorgente",
    noMatches: "Nessun risultato.",
    trySearch: "Prova “GitHub”, “immagine” o “dispositivo”.",
    noSelection: "Nessuna selezione",
    image: "Immagine",
  },
  "pt-PT": {
    navFeatures: "O que guarda",
    privacy: "Privacidade",
    download: "Descarregar",
    heroTitle: "Tudo o que copiou. A um atalho de distância.",
    heroLede:
      "Texto, imagens, ficheiros e tudo o que copiar no iPhone através do Universal Clipboard.",
    downloadMac: "Descarregar para macOS",
    viewGitHub: "Ver no GitHub",
    trust: "macOS 14+ · Gratuito e open source",
    search: "Pesquisar histórico da área de transferência",
    copiedOnIPhone: "Copiado no iPhone",
    scroll: "Veja o que guarda",
    featureTitle: "Não apenas texto.",
    featureBody:
      "Capturas, ligações, ficheiros, código, fragmentos afixados e itens do iPhone vivem no mesmo histórico pesquisável.",
    releaseChecklist: "Lista de lançamento",
    keptForever: "Guardado para sempre",
    privacyStamp: "PRIVADO POR PREDEFINIÇÃO",
    privacyTitle: "A área de transferência fica no seu Mac.",
    privacyBody:
      "As entradas assinaladas como ocultas por gestores de palavras-passe são ignoradas automaticamente. Pode excluir qualquer outra app. O histórico fica local e sobrevive aos reinícios.",
    privacyBulletOne:
      "Os itens ocultados pelo gestor de palavras-passe não são guardados",
    privacyBulletTwo:
      "Pode escolher as apps que o CopyKat deve ignorar",
    privacyBulletThree: "Sem cloud. Sem contas. Tudo fica local.",
    sourceKicker: "Licença MIT · criado em Swift",
    sourceTitle: "Nativa.\nOpen source.",
    sourceBody: "Criado para macOS com SwiftUI e SwiftData.",
    downloadCopyKat: "Descarregar CopyKat",
    readSource: "Ver o código-fonte",
    noMatches: "Sem resultados.",
    trySearch: "Experimente “GitHub”, “imagem” ou “dispositivo”.",
    noSelection: "Sem seleção",
    image: "Imagem",
  },
  pl: {
    navFeatures: "Co zachowuje",
    privacy: "Prywatność",
    download: "Pobierz",
    heroTitle: "Wszystko, co kopiujesz. Jeden skrót stąd.",
    heroLede:
      "Tekst, obrazy, pliki i wszystko, co kopiujesz na iPhonie przez Universal Clipboard.",
    downloadMac: "Pobierz dla macOS",
    viewGitHub: "Zobacz na GitHubie",
    trust: "macOS 14+ · Bezpłatny i open source",
    search: "Przeszukaj historię schowka",
    copiedOnIPhone: "Skopiowano na iPhonie",
    scroll: "Zobacz, co zachowuje",
    featureTitle: "Nie tylko tekst.",
    featureBody:
      "Zrzuty ekranu, linki, pliki, kod, przypięte fragmenty i elementy z iPhone’a trafiają do jednej przeszukiwalnej historii.",
    releaseChecklist: "Lista wydania",
    keptForever: "Zachowane na stałe",
    privacyStamp: "DOMYŚLNIE PRYWATNY",
    privacyTitle: "Twój schowek zostaje na Macu.",
    privacyBody:
      "Wpisy oznaczone przez menedżery haseł jako ukryte są automatycznie pomijane. Możesz wykluczyć dowolną inną aplikację. Historia jest lokalna i przetrwa ponowne uruchomienie.",
    privacyBulletOne:
      "Wpisy ukryte przez menedżera haseł nie są zapisywane",
    privacyBulletTwo: "Ty wybierasz, które aplikacje CopyKat ignoruje",
    privacyBulletThree:
      "Bez chmury. Bez kont. Wszystko zostaje lokalnie.",
    sourceKicker: "Licencja MIT · napisany w Swift",
    sourceTitle: "Natywna.\nOpen source.",
    sourceBody: "Stworzony dla macOS przy użyciu SwiftUI i SwiftData.",
    downloadCopyKat: "Pobierz CopyKat",
    readSource: "Zobacz kod źródłowy",
    noMatches: "Brak wyników.",
    trySearch: "Spróbuj „GitHub”, „obraz” lub „urządzenie”.",
    noSelection: "Brak zaznaczenia",
    image: "Obraz",
  },
  uk: {
    navFeatures: "Що зберігається",
    privacy: "Приватність",
    download: "Завантажити",
    heroTitle: "Усе, що ви копіювали. На відстані одного скорочення.",
    heroLede:
      "Текст, зображення, файли й усе, що ви копіюєте на iPhone через Universal Clipboard.",
    downloadMac: "Завантажити для macOS",
    viewGitHub: "Переглянути на GitHub",
    trust: "macOS 14+ · Безкоштовно й з відкритим кодом",
    search: "Пошук в історії буфера обміну",
    copiedOnIPhone: "Скопійовано на iPhone",
    scroll: "Подивіться, що зберігається",
    featureTitle: "Не лише текст.",
    featureBody:
      "Знімки екрана, посилання, файли, код, закріплені фрагменти й елементи з iPhone зберігаються в одній історії з пошуком.",
    releaseChecklist: "Список випуску",
    keptForever: "Збережено назавжди",
    privacyStamp: "ПРИВАТНІСТЬ ЗА ЗАМОВЧУВАННЯМ",
    privacyTitle: "Ваш буфер обміну залишається на Mac.",
    privacyBody:
      "Записи, позначені менеджерами паролів як приховані, автоматично ігноруються. Ви можете виключити будь-яку іншу програму. Історія зберігається локально й переживає перезапуски.",
    privacyBulletOne:
      "Записи, приховані менеджером паролів, не зберігаються",
    privacyBulletTwo:
      "Ви самі обираєте, які програми ігнорує CopyKat",
    privacyBulletThree:
      "Без хмари. Без облікових записів. Усе залишається локально.",
    sourceKicker: "Ліцензія MIT · створено на Swift",
    sourceTitle: "Нативна.\nВідкритий код.",
    sourceBody: "Створено для macOS за допомогою SwiftUI та SwiftData.",
    downloadCopyKat: "Завантажити CopyKat",
    readSource: "Переглянути код",
    noMatches: "Нічого не знайдено.",
    trySearch: "Спробуйте «GitHub», «зображення» або «пристрій».",
    noSelection: "Немає вибору",
    image: "Зображення",
  },
  ro: {
    navFeatures: "Ce păstrează",
    privacy: "Confidențialitate",
    download: "Descarcă",
    heroTitle: "Tot ce ai copiat. La o scurtătură distanță.",
    heroLede:
      "Text, imagini, fișiere și tot ce copiezi pe iPhone prin Universal Clipboard.",
    downloadMac: "Descarcă pentru macOS",
    viewGitHub: "Vezi pe GitHub",
    trust: "macOS 14+ · Gratuit și open source",
    search: "Caută în istoricul clipboardului",
    copiedOnIPhone: "Copiat pe iPhone",
    scroll: "Vezi ce păstrează",
    featureTitle: "Nu doar text.",
    featureBody:
      "Capturi de ecran, linkuri, fișiere, cod, fragmente fixate și elemente de pe iPhone trăiesc în același istoric cu căutare.",
    releaseChecklist: "Listă de lansare",
    keptForever: "Păstrat permanent",
    privacyStamp: "PRIVAT ÎN MOD IMPLICIT",
    privacyTitle: "Clipboardul tău rămâne pe Mac.",
    privacyBody:
      "Elementele marcate ca ascunse de managerii de parole sunt ignorate automat. Poți exclude orice altă aplicație. Istoricul rămâne local și supraviețuiește repornirilor.",
    privacyBulletOne:
      "Elementele ascunse de managerul de parole nu sunt salvate",
    privacyBulletTwo: "Tu alegi aplicațiile pe care CopyKat le ignoră",
    privacyBulletThree: "Fără cloud. Fără conturi. Totul rămâne local.",
    sourceKicker: "Licență MIT · creat în Swift",
    sourceTitle: "Nativă.\nOpen source.",
    sourceBody: "Creat pentru macOS cu SwiftUI și SwiftData.",
    downloadCopyKat: "Descarcă CopyKat",
    readSource: "Vezi codul sursă",
    noMatches: "Niciun rezultat.",
    trySearch: "Încearcă „GitHub”, „imagine” sau „dispozitiv”.",
    noSelection: "Nicio selecție",
    image: "Imagine",
  },
  sv: {
    navFeatures: "Det den sparar",
    privacy: "Integritet",
    download: "Hämta",
    heroTitle: "Allt du kopierat. Ett kortkommando bort.",
    heroLede:
      "Text, bilder, filer och allt du kopierar på din iPhone via Universal Clipboard.",
    downloadMac: "Hämta för macOS",
    viewGitHub: "Visa på GitHub",
    trust: "macOS 14+ · Gratis och öppen källkod",
    search: "Sök i urklippshistorik",
    copiedOnIPhone: "Kopierat på iPhone",
    scroll: "Se vad det sparar",
    featureTitle: "Inte bara text.",
    featureBody:
      "Skärmbilder, länkar, filer, kod, fästa fragment och objekt från din iPhone finns i samma sökbara historik.",
    releaseChecklist: "Releasechecklista",
    keptForever: "Sparad för alltid",
    privacyStamp: "PRIVAT SOM STANDARD",
    privacyTitle: "Ditt urklipp stannar på din Mac.",
    privacyBody:
      "Poster som lösenordshanterare markerar som dolda ignoreras automatiskt. Du kan själv utesluta andra appar. Historiken lagras lokalt och finns kvar efter omstart.",
    privacyBulletOne:
      "Poster som lösenordshanteraren döljer sparas inte",
    privacyBulletTwo: "Du väljer vilka appar CopyKat ignorerar",
    privacyBulletThree: "Inget moln. Inga konton. Allt stannar lokalt.",
    sourceKicker: "MIT-licens · byggd i Swift",
    sourceTitle: "Nativ.\nÖppen källkod.",
    sourceBody: "Byggd för macOS med SwiftUI och SwiftData.",
    downloadCopyKat: "Hämta CopyKat",
    readSource: "Läs källkoden",
    noMatches: "Inga träffar.",
    trySearch: "Prova ”GitHub”, ”bild” eller ”enhet”.",
    noSelection: "Inget markerat",
    image: "Bild",
  },
  ru: {
    navFeatures: "Что сохраняется",
    privacy: "Конфиденциальность",
    download: "Скачать",
    heroTitle: "Всё, что вы копировали. В одном сочетании клавиш.",
    heroLede:
      "Текст, изображения, файлы и всё, что вы копируете на iPhone через Universal Clipboard.",
    downloadMac: "Скачать для macOS",
    viewGitHub: "Посмотреть на GitHub",
    trust: "macOS 14+ · Бесплатно и с открытым кодом",
    search: "Поиск по истории буфера обмена",
    copiedOnIPhone: "Скопировано на iPhone",
    scroll: "Посмотрите, что сохраняется",
    featureTitle: "Не только текст.",
    featureBody:
      "Снимки экрана, ссылки, файлы, код, закреплённые фрагменты и элементы с iPhone находятся в одной истории с поиском.",
    releaseChecklist: "Список выпуска",
    keptForever: "Сохранено навсегда",
    privacyStamp: "ПРИВАТНО ПО УМОЛЧАНИЮ",
    privacyTitle: "Буфер обмена остаётся на вашем Mac.",
    privacyBody:
      "Записи, которые менеджеры паролей помечают как скрытые, автоматически игнорируются. Другие приложения можно исключить вручную. История хранится локально и сохраняется после перезапуска.",
    privacyBulletOne:
      "Записи, скрытые менеджером паролей, не сохраняются",
    privacyBulletTwo:
      "Вы сами выбираете, какие приложения игнорирует CopyKat",
    privacyBulletThree:
      "Без облака. Без учётных записей. Всё остаётся локально.",
    sourceKicker: "Лицензия MIT · создано на Swift",
    sourceTitle: "Нативное.\nС открытым кодом.",
    sourceBody: "Создано для macOS с использованием SwiftUI и SwiftData.",
    downloadCopyKat: "Скачать CopyKat",
    readSource: "Посмотреть исходный код",
    noMatches: "Ничего не найдено.",
    trySearch: "Попробуйте «GitHub», «изображение» или «устройство».",
    noSelection: "Нет выделения",
    image: "Изображение",
  },
  "zh-Hans": {
    navFeatures: "保存内容",
    privacy: "隐私",
    download: "下载",
    heroTitle: "复制过的一切，一个快捷键即可找回。",
    heroLede:
      "文本、图像、文件，以及通过 Universal Clipboard 在 iPhone 上复制的任何内容。",
    downloadMac: "下载 macOS 版",
    viewGitHub: "在 GitHub 上查看",
    trust: "macOS 14+ · 免费且开源",
    search: "搜索剪贴板历史记录",
    copiedOnIPhone: "在 iPhone 上复制",
    scroll: "查看保存内容",
    featureTitle: "不只是文本。",
    featureBody:
      "截屏、链接、文件、代码、置顶片段和来自 iPhone 的内容，全都汇集在同一个可搜索的历史记录中。",
    releaseChecklist: "发布检查清单",
    keptForever: "永久保留",
    privacyStamp: "默认私密",
    privacyTitle: "剪贴板内容只留在你的 Mac 上。",
    privacyBody:
      "密码管理器标记为隐藏的条目会被自动忽略。你也可以自行排除其他应用。历史记录保存在本地，重启后依然可用。",
    privacyBulletOne: "密码管理器隐藏的项目不会被保存",
    privacyBulletTwo: "由你选择 CopyKat 要忽略的应用",
    privacyBulletThree: "没有云端。无需账户。一切都保留在本地。",
    sourceKicker: "MIT 许可 · 使用 Swift 构建",
    sourceTitle: "原生。\n开放源码。",
    sourceBody: "使用 SwiftUI 和 SwiftData 为 macOS 打造。",
    downloadCopyKat: "下载 CopyKat",
    readSource: "查看源代码",
    noMatches: "没有匹配项。",
    trySearch: "试试“GitHub”“图像”或“设备”。",
    noSelection: "未选择任何内容",
    image: "图像",
  },
  "zh-Hant": {
    navFeatures: "儲存內容",
    privacy: "隱私權",
    download: "下載",
    heroTitle: "複製過的一切，一個快捷鍵即可找回。",
    heroLede:
      "文字、圖像、檔案，以及透過 Universal Clipboard 在 iPhone 上複製的任何內容。",
    downloadMac: "下載 macOS 版",
    viewGitHub: "在 GitHub 上查看",
    trust: "macOS 14+ · 免費且開源",
    search: "搜尋剪貼簿記錄",
    copiedOnIPhone: "在 iPhone 上複製",
    scroll: "查看儲存內容",
    featureTitle: "不只是文字。",
    featureBody:
      "截圖、連結、檔案、程式碼、釘選片段和來自 iPhone 的內容，全都集中在同一個可搜尋的記錄中。",
    releaseChecklist: "發佈檢查清單",
    keptForever: "永久保留",
    privacyStamp: "預設保持私密",
    privacyTitle: "剪貼簿內容只留在你的 Mac 上。",
    privacyBody:
      "密碼管理器標記為隱藏的項目會被自動忽略。你也可以自行排除其他 App。記錄保存在本機，重新啟動後仍可使用。",
    privacyBulletOne: "密碼管理器隱藏的項目不會被儲存",
    privacyBulletTwo: "由你選擇 CopyKat 要忽略的 App",
    privacyBulletThree: "沒有雲端。無需帳號。一切都留在本機。",
    sourceKicker: "MIT 授權 · 使用 Swift 建構",
    sourceTitle: "原生。\n開放原始碼。",
    sourceBody: "使用 SwiftUI 和 SwiftData 為 macOS 打造。",
    downloadCopyKat: "下載 CopyKat",
    readSource: "查看原始碼",
    noMatches: "沒有相符項目。",
    trySearch: "試試「GitHub」、「圖像」或「裝置」。",
    noSelection: "未選取項目",
    image: "圖像",
  },
  ja: {
    navFeatures: "保存できるもの",
    privacy: "プライバシー",
    download: "ダウンロード",
    heroTitle: "コピーしたすべてを、ショートカットひとつで。",
    heroLede:
      "テキスト、画像、ファイル、そしてiPhoneでUniversal Clipboard経由でコピーしたものまで。",
    downloadMac: "macOS版をダウンロード",
    viewGitHub: "GitHubで見る",
    trust: "macOS 14+ · 無料・オープンソース",
    search: "クリップボード履歴を検索",
    copiedOnIPhone: "iPhoneでコピー",
    scroll: "保存できるものを見る",
    featureTitle: "テキストだけではありません。",
    featureBody:
      "スクリーンショット、リンク、ファイル、コード、ピン留めした断片、iPhoneからの項目を、ひとつの検索可能な履歴にまとめます。",
    releaseChecklist: "リリースチェックリスト",
    keptForever: "ずっと保存",
    privacyStamp: "デフォルトでプライベート",
    privacyTitle: "クリップボードはMacの中だけに。",
    privacyBody:
      "パスワードマネージャが非表示として扱う項目は自動的に無視されます。他のアプリも自由に除外できます。履歴はローカルに保存され、再起動後も残ります。",
    privacyBulletOne:
      "パスワードマネージャが隠した項目は保存されません",
    privacyBulletTwo: "CopyKatが無視するアプリを自分で選べます",
    privacyBulletThree:
      "クラウドなし。アカウント不要。すべてローカルに保存。",
    sourceKicker: "MITライセンス · Swift製",
    sourceTitle: "ネイティブ。\nオープンソース。",
    sourceBody: "SwiftUIとSwiftDataでmacOS向けに開発。",
    downloadCopyKat: "CopyKatをダウンロード",
    readSource: "ソースコードを見る",
    noMatches: "一致する項目はありません。",
    trySearch: "「GitHub」「画像」「デバイス」をお試しください。",
    noSelection: "選択なし",
    image: "イメージ",
  },
  ko: {
    navFeatures: "저장하는 항목",
    privacy: "개인정보 보호",
    download: "다운로드",
    heroTitle: "복사한 모든 것. 단축키 하나면 충분합니다.",
    heroLede:
      "텍스트, 이미지, 파일은 물론 iPhone에서 Universal Clipboard로 복사한 내용까지.",
    downloadMac: "macOS용 다운로드",
    viewGitHub: "GitHub에서 보기",
    trust: "macOS 14+ · 무료 오픈 소스",
    search: "클립보드 기록 검색",
    copiedOnIPhone: "iPhone에서 복사됨",
    scroll: "저장 항목 보기",
    featureTitle: "텍스트 그 이상.",
    featureBody:
      "스크린샷, 링크, 파일, 코드, 고정한 조각, iPhone의 항목을 하나의 검색 가능한 기록에서 찾을 수 있습니다.",
    releaseChecklist: "릴리스 체크리스트",
    keptForever: "영구 보관",
    privacyStamp: "기본적으로 비공개",
    privacyTitle: "클립보드는 Mac에만 남습니다.",
    privacyBody:
      "암호 관리자가 가림으로 표시한 항목은 자동으로 무시됩니다. 다른 앱도 직접 제외할 수 있습니다. 기록은 로컬에 저장되며 재시동 후에도 유지됩니다.",
    privacyBulletOne: "암호 관리자가 가린 항목은 저장되지 않습니다",
    privacyBulletTwo: "CopyKat이 무시할 앱을 직접 선택합니다",
    privacyBulletThree:
      "클라우드 없음. 계정 없음. 모든 데이터는 로컬에 남습니다.",
    sourceKicker: "MIT 라이선스 · Swift로 제작",
    sourceTitle: "네이티브.\n오픈 소스.",
    sourceBody: "SwiftUI와 SwiftData로 macOS용으로 제작했습니다.",
    downloadCopyKat: "CopyKat 다운로드",
    readSource: "소스 코드 보기",
    noMatches: "일치하는 항목이 없습니다.",
    trySearch: "‘GitHub’, ‘이미지’ 또는 ‘기기’를 검색해 보세요.",
    noSelection: "선택 항목 없음",
    image: "이미지",
  },
  tr: {
    navFeatures: "Neleri saklar",
    privacy: "Gizlilik",
    download: "İndir",
    heroTitle: "Kopyaladığınız her şey. Tek bir kısayol uzakta.",
    heroLede:
      "Metin, görsel, dosya ve iPhone’unuzda Universal Clipboard ile kopyaladığınız her şey.",
    downloadMac: "macOS için indir",
    viewGitHub: "GitHub’da görüntüle",
    trust: "macOS 14+ · Ücretsiz ve açık kaynak",
    search: "Pano geçmişinde ara",
    copiedOnIPhone: "iPhone’da kopyalandı",
    scroll: "Neleri sakladığını görün",
    featureTitle: "Yalnızca metin değil.",
    featureBody:
      "Ekran görüntüleri, bağlantılar, dosyalar, kod, sabitlenmiş parçalar ve iPhone öğeleri aynı aranabilir geçmişte yaşar.",
    releaseChecklist: "Sürüm kontrol listesi",
    keptForever: "Kalıcı olarak saklanır",
    privacyStamp: "VARSAYILAN OLARAK GİZLİ",
    privacyTitle: "Panonuz Mac’inizde kalır.",
    privacyBody:
      "Parola yöneticilerinin gizli olarak işaretlediği öğeler otomatik olarak yok sayılır. Diğer uygulamaları da kendiniz hariç tutabilirsiniz. Geçmişiniz yerel kalır ve yeniden başlatmalarda korunur.",
    privacyBulletOne:
      "Parola yöneticinizin gizlediği öğeler saklanmaz",
    privacyBulletTwo:
      "CopyKat’in yok sayacağı uygulamaları siz seçersiniz",
    privacyBulletThree: "Bulut yok. Hesap yok. Her şey yerel kalır.",
    sourceKicker: "MIT lisanslı · Swift ile geliştirildi",
    sourceTitle: "Yerel.\nAçık kaynak.",
    sourceBody: "macOS için SwiftUI ve SwiftData ile geliştirildi.",
    downloadCopyKat: "CopyKat’i indir",
    readSource: "Kaynak kodu oku",
    noMatches: "Eşleşme yok.",
    trySearch: "“GitHub”, “görsel” veya “cihaz” deneyin.",
    noSelection: "Seçim yok",
    image: "Resim",
  },
  ar: {
    navFeatures: "ما يحتفظ به",
    privacy: "الخصوصية",
    download: "تنزيل",
    heroTitle: "كل ما نسخته. على بُعد اختصار واحد.",
    heroLede:
      "النصوص والصور والملفات، وكل ما تنسخه على iPhone عبر Universal Clipboard.",
    downloadMac: "تنزيل لـ macOS",
    viewGitHub: "عرض على GitHub",
    trust: "macOS 14+ · مجاني ومفتوح المصدر",
    search: "البحث في سجل الحافظة",
    copiedOnIPhone: "تم النسخ على iPhone",
    scroll: "شاهد ما يحتفظ به",
    featureTitle: "ليس النص فقط.",
    featureBody:
      "تعيش لقطات الشاشة والروابط والملفات والتعليمات البرمجية والمقتطفات المثبتة وعناصر iPhone في سجل واحد قابل للبحث.",
    releaseChecklist: "قائمة التحقق من الإصدار",
    keptForever: "محفوظ دائمًا",
    privacyStamp: "خاص افتراضيًا",
    privacyTitle: "تبقى حافظتك على جهاز Mac.",
    privacyBody:
      "يتم تجاهل العناصر التي تحددها تطبيقات إدارة كلمات المرور كمخفية تلقائيًا. ويمكنك استبعاد أي تطبيق آخر بنفسك. يبقى السجل محليًا ويستمر بعد إعادة التشغيل.",
    privacyBulletOne:
      "لا تُحفظ العناصر التي يخفيها مدير كلمات المرور",
    privacyBulletTwo: "أنت تختار التطبيقات التي يتجاهلها CopyKat",
    privacyBulletThree: "لا سحابة. لا حسابات. كل شيء يبقى محليًا.",
    sourceKicker: "بترخيص MIT · مبني بلغة Swift",
    sourceTitle: "أصلي.\nمفتوح المصدر.",
    sourceBody: "مبني لنظام macOS باستخدام SwiftUI وSwiftData.",
    downloadCopyKat: "تنزيل CopyKat",
    readSource: "قراءة المصدر",
    noMatches: "لا توجد نتائج.",
    trySearch: "جرّب «GitHub» أو «صورة» أو «جهاز».",
    noSelection: "لا يوجد تحديد",
    image: "صورة",
  },
  hi: {
    navFeatures: "यह क्या रखता है",
    privacy: "गोपनीयता",
    download: "डाउनलोड",
    heroTitle: "आपने जो भी कॉपी किया। बस एक शॉर्टकट दूर।",
    heroLede:
      "टेक्स्ट, इमेज, फ़ाइलें और iPhone पर Universal Clipboard से कॉपी की गई हर चीज़।",
    downloadMac: "macOS के लिए डाउनलोड करें",
    viewGitHub: "GitHub पर देखें",
    trust: "macOS 14+ · मुफ़्त और ओपन सोर्स",
    search: "क्लिपबोर्ड इतिहास खोजें",
    copiedOnIPhone: "iPhone पर कॉपी किया गया",
    scroll: "देखें यह क्या रखता है",
    featureTitle: "सिर्फ़ टेक्स्ट नहीं।",
    featureBody:
      "स्क्रीनशॉट, लिंक, फ़ाइलें, कोड, पिन किए गए अंश और iPhone के आइटम एक ही खोज योग्य इतिहास में रहते हैं।",
    releaseChecklist: "रिलीज़ चेकलिस्ट",
    keptForever: "हमेशा के लिए सहेजा गया",
    privacyStamp: "डिफ़ॉल्ट रूप से निजी",
    privacyTitle: "आपका क्लिपबोर्ड आपके Mac पर ही रहता है।",
    privacyBody:
      "पासवर्ड मैनेजर द्वारा छिपी हुई चिह्नित एंट्री अपने आप अनदेखी होती हैं। आप किसी अन्य ऐप को भी बाहर रख सकते हैं। आपका इतिहास स्थानीय रहता है और रीस्टार्ट के बाद भी उपलब्ध रहता है।",
    privacyBulletOne:
      "पासवर्ड मैनेजर द्वारा छिपाए गए आइटम सहेजे नहीं जाते",
    privacyBulletTwo:
      "CopyKat किन ऐप्स को अनदेखा करे, यह आप चुनते हैं",
    privacyBulletThree:
      "कोई क्लाउड नहीं। कोई अकाउंट नहीं। सब कुछ स्थानीय रहता है।",
    sourceKicker: "MIT लाइसेंस · Swift में निर्मित",
    sourceTitle: "नेटिव।\nओपन सोर्स।",
    sourceBody: "SwiftUI और SwiftData के साथ macOS के लिए बनाया गया।",
    downloadCopyKat: "CopyKat डाउनलोड करें",
    readSource: "सोर्स कोड देखें",
    noMatches: "कोई मिलान नहीं।",
    trySearch: "“GitHub”, “इमेज” या “डिवाइस” आज़माएँ।",
    noSelection: "कोई चयन नहीं",
    image: "इमेज",
  },
};

export function resolveLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const normalized = language.toLowerCase();

    if (
      normalized === "zh-hant" ||
      normalized.startsWith("zh-hant-") ||
      normalized.startsWith("zh-tw") ||
      normalized.startsWith("zh-hk") ||
      normalized.startsWith("zh-mo")
    ) {
      return "zh-Hant";
    }

    if (normalized === "zh" || normalized.startsWith("zh-")) {
      return "zh-Hans";
    }

    if (normalized === "pt" || normalized.startsWith("pt-")) {
      return "pt-PT";
    }

    const exact = supportedLocales.find(
      (locale) => locale.toLowerCase() === normalized,
    );
    if (exact) return exact;

    const base = normalized.split("-")[0];
    const baseMatch = supportedLocales.find(
      (locale) => locale.toLowerCase() === base,
    );
    if (baseMatch) return baseMatch;
  }

  return "en";
}

export function localeDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
