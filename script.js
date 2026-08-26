const LANGUAGE_STORAGE_KEY = "orbiPreferredLanguage";
const supportedLanguages = ["en", "da"];

const translations = {
  en: {
    meta: {
      title: "Orbi | Practical Media, Not Social",
      description:
        "Orbi is a privacy-first chat and events app built for practical communication without feeds, distractions, or ad-driven product choices.",
      ogDescription:
        "Message friends, plan events, and stay connected without feeds, distractions, or constant notifications.",
      twitterDescription:
        "A calmer chat and events app focused on privacy, clarity, and practical communication.",
    },
    nav: {
      primary: "Primary",
      mobilePrimary: "Mobile Primary",
      why: "Why Orbi?",
      features: "Features",
      faq: "FAQ",
      contact: "Contact us",
      join: "Join Orbi",
    },
    language: {
      label: "Language",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    hero: {
      eyebrow: "Orbi - Chat & Events",
      title: "Practical Media,<br />Not Social",
      text: "A place to talk, plan, and connect - everything you need, without distractions.",
      body1:
        'Orbi sits in the <span class="highlight">space between</span> traditional <span class="highlight">chat apps</span> and <span class="highlight">social media</span>. It gives you the familiar chat experience, while adding practical tools like <span class="highlight">events</span> and <span class="highlight">birthdays</span>, with more on the way.',
      body2:
        'Our mission is to offer <span class="highlight">practical communication</span> tools that <span class="highlight">respect your attention</span> and keep your data safe.',
      body3:
        'Built by a small <span class="highlight">Danish startup</span> creating a calmer, privacy-first <span class="highlight">European alternative</span>.',
    },
    store: {
      appStoreAlt: "Download on the App Store",
      googlePlayAlt: "Get it on Google Play",
    },
    principles: {
      eyebrow: "Why Orbi?",
      title: "Let's keep communication simple",
      text: "Orbi is built around a few core principles:",
      privateTitle: "Ad-free & private",
      privateText:
        "Orbi uses as little personal data as possible and avoids ad-driven product choices, advertising tracking, and targeting.<br><br>An ad-free experience, with end-to-end encrypted messaging.",
      europeTitle: "Independent European tech",
      europeText:
        "Choosing Orbi means supporting a small Danish startup building communication tools rooted in European values, privacy standards, and digital independence.",
      attentionTitle: "Not another attention platform",
      attentionText:
        "Orbi is not built to maximize screen time. No algorithmic feeds, no endless scrolling, and no design patterns made to compete for your attention.",
    },
    features: {
      eyebrow: "Features",
      title: "Feature explained",
      messagingChipTop: "End-to-end encryption",
      messagingChipBottom: "Danish/European alternative",
      messagingTitle: "Chat like you're used to",
      messagingCallout1Title: "Effortless Messaging",
      messagingCallout1Text:
        "Send encrypted one-to-one and group messages with reactions, pins, voice messages, photos, files, and more.",
      messagingCallout2Title: "Dedicated Event Chats",
      messagingCallout2Text:
        "Create group chats for your events to keep conversations, photos, and updates in one place.",
      eventsChipTop: "Everything at a glance",
      eventsChipBottom: "See who's attending",
      eventsTitle: "Your event hub",
      eventsPoint1Title: "Remind guests to respond",
      eventsPoint1Text:
        "Never wonder who's coming. Send gentle reminders to guests who haven't responded yet.",
      eventsPoint2Title: "Invite groups & reuse guest lists",
      eventsPoint2Text:
        "Quickly invite entire chat groups or reuse guest lists from past events to save time.",
      eventsPoint3Title: "Auto-sync with your device calendar",
      eventsPoint3Text:
        "Keep your schedule organized by automatically syncing events to your device's calendar.",
      birthdayChipTop: "🎂 Today's birthdays",
      birthdayChipBottom: "🎉 Friendly reminders",
      birthdayTitle: "Never miss a birthday",
      birthdayText:
        "See who is celebrating right on your profile page and get a gentle reminder when it's time to reach out. Orbi keeps birthdays visible, personal, and easy to act on.",
      tagsChipTop: "Filter chats",
      tagsChipBottom: "Create your own",
      tagsTitle: "Find the right chats faster",
      tagsText:
        "Create tags for work, clubs, teams, friend groups, and everything in between. Filter the chats page by what matters right now, so conversations stay easy to find.",
      backupChipTop: "6-digit PIN",
      backupChipBottom: "Restore safely",
      backupTitle: "Recover encrypted chats",
      backupText:
        "If you lose your phone, log out, or switch to a new device, your backup PIN helps you restore your account and access encrypted chats.",
      friendsChipTop: "Add friends first",
      friendsChipBottom: "No stranger DMs",
      friendsTitle: "Friend-based connections",
      friendsText:
        "People can't contact you directly unless you're friends. Send or accept a request first, then message safely with people you choose to connect with.",
      appearanceChipTop: "Light mode",
      appearanceChipBottom: "Dark mode",
      appearanceTitle: "Light or dark, your choice",
      appearanceText:
        "Switch between light and dark mode whenever you like. Orbi keeps chats, events, and comments readable in whichever look feels best.",
    },
    carousel: {
      prev: "Show previous feature",
      next: "Show next feature",
      navigation: "Feature navigation",
      feature1: "Feature 1",
      feature2: "Feature 2",
      feature3: "Feature 3",
      feature4: "Feature 4",
      feature5: "Feature 5",
      feature6: "Feature 6",
      feature7: "Feature 7",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      whatQuestion: "What is Orbi?",
      whatAnswer:
        "Orbi is a private chat and event app built for staying in touch without the clutter. You can message friends, plan events, share updates, and keep the practical parts of your social life in one place.",
      chatQuestion: "How is Orbi different from other chat apps?",
      chatAnswer:
        "Orbi is not just a chat app. It is a European, Danish-built communication platform with practical tools like events and birthdays already included, and more practical communication tools coming in the future.",
      socialQuestion: "How is Orbi different from social media?",
      socialAnswer:
        "Orbi is not built around feeds, followers, algorithms, or endless scrolling. It is made for direct communication: talking with people you choose, planning things together, and staying connected without distractions.",
      messagesQuestion: "Who can message me on Orbi?",
      messagesAnswer:
        "You decide who can reach you. Only people you connect with can message you directly. If you are added to a group chat, people in that group can message you there.",
      freeQuestion: "Is Orbi free to use?",
      freeAnswer: "Yes. Orbi is completely free to use.",
      privateQuestion: "Is Orbi private?",
      privateAnswer:
        "Orbi does not sell personal data, personally identifiable information, or access to individual profiles. We do not use your personal data for advertising or targeting. We may use and share privacy-protected aggregate statistics that do not identify individual users.",
      encryptionQuestion: "Does Orbi use end-to-end encryption?",
      encryptionAnswer:
        "Yes. Orbi supports end-to-end encrypted chats when encryption is enabled during chat creation.",
      eventsQuestion: "How do events work in Orbi?",
      eventsAnswer:
        "Events give plans their own place outside messy chat threads. You can create an event, invite friends, add details like time and location, track who is going, and keep event updates easy to find.",
      invitesQuestion: "Can I invite people who are not on Orbi yet?",
      invitesAnswer:
        "Yes. You can invite people to events by SMS, even if they are not on Orbi yet. This makes it easier to plan with everyone, not only people already using the app.",
      accessQuestion: "What happens if I lose access to my account?",
      accessAnswer:
        "Orbi uses a 6-digit Backup PIN to help you restore access to your account and encrypted chats on a new device.",
      behindQuestion: "Who is behind Orbi?",
      behindAnswer:
        "Orbi is built by a small Danish startup. Our core backend is hosted in Frankfurt, Germany.",
    },
    footer: {
      terms: "Terms of service",
      privacy: "Privacy policy",
      support: "Get support",
      contactButton: "Contact us",
      text: "A small startup from Denmark building a calmer way to chat and plan together.",
    },
  },
  da: {
    meta: {
      title: "Orbi | Praktisk medie, ikke socialt",
      description:
        "Orbi er en privatlivsfokuseret chat- og eventapp skabt til praktisk kommunikation uden feeds, distraktioner eller annoncebaserede produktvalg.",
      ogDescription:
        "Skriv med venner, planlæg events, og hold kontakten uden feeds, distraktioner eller konstante notifikationer.",
      twitterDescription:
        "En roligere chat- og eventapp med fokus på privatliv, overblik og praktisk kommunikation.",
    },
    nav: {
      primary: "Primær",
      mobilePrimary: "Mobil primær",
      why: "Hvorfor Orbi?",
      features: "Funktioner",
      faq: "FAQ",
      contact: "Kontakt os",
      join: "Kom med i Orbi",
    },
    language: {
      label: "Sprog",
    },
    menu: {
      open: "Åbn menu",
      close: "Luk menu",
    },
    hero: {
      eyebrow: "Orbi - Chat & Events",
      title: "Praktisk medie,<br />ikke socialt",
      text: "Et sted at tale, planlægge og holde kontakt - alt det, du har brug for, uden distraktioner.",
      body1:
        'Orbi ligger i <span class="highlight">mellemrummet</span> mellem traditionelle <span class="highlight">chatapps</span> og <span class="highlight">sociale medier</span>. Du får den velkendte chatoplevelse, men med praktiske værktøjer som <span class="highlight">events</span> og <span class="highlight">fødselsdage</span>, og mere er på vej.',
      body2:
        'Vores mission er at tilbyde <span class="highlight">praktiske kommunikationsværktøjer</span>, der <span class="highlight">respekterer din opmærksomhed</span> og passer på dine data.',
      body3:
        'Bygget af en lille <span class="highlight">dansk startup</span>, der skaber et roligere, privatlivsfokuseret <span class="highlight">europæisk alternativ</span>.',
    },
    store: {
      appStoreAlt: "Hent i App Store",
      googlePlayAlt: "Hent den på Google Play",
    },
    principles: {
      eyebrow: "Hvorfor Orbi?",
      title: "Lad os holde kommunikation enkel",
      text: "Orbi bygger på nogle få kerneprincipper:",
      privateTitle: "Reklamefri og privat",
      privateText:
        "Orbi bruger så få personlige data som muligt og undgår annoncebaserede produktvalg, annonceringssporing og målretning.<br><br>En reklamefri oplevelse med ende-til-ende-krypterede beskeder.",
      europeTitle: "Uafhængig europæisk teknologi",
      europeText:
        "Når du vælger Orbi, støtter du en lille dansk startup, der bygger kommunikationsværktøjer med afsæt i europæiske værdier, privatlivsstandarder og digital uafhængighed.",
      attentionTitle: "Ikke endnu en opmærksomhedsplatform",
      attentionText:
        "Orbi er ikke bygget til at maksimere skærmtid. Ingen algoritmiske feeds, ingen endeløs scrolling og ingen designgreb, der er skabt til at konkurrere om din opmærksomhed.",
    },
    features: {
      eyebrow: "Funktioner",
      title: "Funktioner forklaret",
      messagingChipTop: "Ende-til-ende-kryptering",
      messagingChipBottom: "Dansk/europæisk alternativ",
      messagingTitle: "Chat som du plejer",
      messagingCallout1Title: "Nem beskedudveksling",
      messagingCallout1Text:
        "Send krypterede beskeder en-til-en og i grupper med reaktioner, pins, talebeskeder, billeder, filer og mere.",
      messagingCallout2Title: "Dedikerede eventchats",
      messagingCallout2Text:
        "Opret gruppechats til dine events, så samtaler, billeder og opdateringer er samlet ét sted.",
      eventsChipTop: "Alt ved hånden",
      eventsChipBottom: "Se hvem der deltager",
      eventsTitle: "Dit eventoverblik",
      eventsPoint1Title: "Mind gæster om at svare",
      eventsPoint1Text:
        "Slip for at gætte på, hvem der kommer. Send venlige påmindelser til gæster, der ikke har svaret endnu.",
      eventsPoint2Title: "Inviter grupper og genbrug gæstelister",
      eventsPoint2Text:
        "Inviter hurtigt hele chatgrupper, eller genbrug gæstelister fra tidligere events for at spare tid.",
      eventsPoint3Title: "Synkroniser automatisk med din kalender",
      eventsPoint3Text:
        "Hold styr på din kalender ved automatisk at synkronisere events med kalenderen på din enhed.",
      birthdayChipTop: "🎂 Dagens fødselsdage",
      birthdayChipBottom: "🎉 Venlige påmindelser",
      birthdayTitle: "Glem aldrig en fødselsdag",
      birthdayText:
        "Se hvem der har fødselsdag direkte på din profilside, og få en venlig påmindelse, når det er tid til at række ud. Orbi gør fødselsdage synlige, personlige og nemme at handle på.",
      tagsChipTop: "Filtrer chats",
      tagsChipBottom: "Lav dine egne",
      tagsTitle: "Find de rigtige chats hurtigere",
      tagsText:
        "Opret tags til arbejde, klubber, hold, vennegrupper og alt derimellem. Filtrer chatsiden efter det, der er vigtigt lige nu, så samtaler er nemme at finde.",
      backupChipTop: "6-cifret PIN",
      backupChipBottom: "Gendan sikkert",
      backupTitle: "Gendan krypterede chats",
      backupText:
        "Hvis du mister din telefon, logger ud eller skifter til en ny enhed, hjælper din backup-PIN dig med at gendanne din konto og få adgang til krypterede chats.",
      friendsChipTop: "Tilføj venner først",
      friendsChipBottom: "Ingen fremmede DM'er",
      friendsTitle: "Forbindelser baseret på venner",
      friendsText:
        "Folk kan ikke kontakte dig direkte, medmindre I er venner. Send eller accepter først en anmodning, og skriv derefter trygt med de personer, du selv vælger at forbinde dig med.",
      appearanceChipTop: "Lyst tema",
      appearanceChipBottom: "Mørkt tema",
      appearanceTitle: "Lyst eller mørkt - du vælger",
      appearanceText:
        "Skift mellem lyst og mørkt tema, når du har lyst. Orbi holder chats, events og kommentarer læsbare i det udtryk, der passer dig bedst.",
    },
    carousel: {
      prev: "Vis forrige funktion",
      next: "Vis næste funktion",
      navigation: "Funktionsnavigation",
      feature1: "Funktion 1",
      feature2: "Funktion 2",
      feature3: "Funktion 3",
      feature4: "Funktion 4",
      feature5: "Funktion 5",
      feature6: "Funktion 6",
      feature7: "Funktion 7",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Ofte stillede spørgsmål",
      whatQuestion: "Hvad er Orbi?",
      whatAnswer:
        "Orbi er en privat chat- og eventapp, der gør det nemt at holde kontakt uden støj. Du kan skrive med venner, planlægge events, dele opdateringer og samle de praktiske dele af dit sociale liv ét sted.",
      chatQuestion: "Hvordan adskiller Orbi sig fra andre chatapps?",
      chatAnswer:
        "Orbi er ikke bare en chatapp. Det er en europæisk, danskbygget kommunikationsplatform med praktiske værktøjer som events og fødselsdage allerede inkluderet, og flere praktiske kommunikationsværktøjer på vej.",
      socialQuestion: "Hvordan adskiller Orbi sig fra sociale medier?",
      socialAnswer:
        "Orbi er ikke bygget omkring feeds, følgere, algoritmer eller endeløs scrolling. Appen er lavet til direkte kommunikation: at tale med de mennesker, du vælger, planlægge ting sammen og holde kontakt uden distraktioner.",
      messagesQuestion: "Hvem kan skrive til mig på Orbi?",
      messagesAnswer:
        "Du bestemmer, hvem der kan få fat i dig. Kun personer, du forbinder dig med, kan skrive direkte til dig. Hvis du bliver tilføjet til en gruppechat, kan personer i den gruppe skrive til dig der.",
      freeQuestion: "Er Orbi gratis at bruge?",
      freeAnswer: "Ja. Orbi er helt gratis at bruge.",
      privateQuestion: "Er Orbi privat?",
      privateAnswer:
        "Orbi sælger ikke persondata, personhenførbare oplysninger eller adgang til individuelle profiler. Vi bruger ikke dine persondata til annoncering eller målretning. Vi kan bruge og dele privatlivsbeskyttede, aggregerede statistikker, som ikke identificerer enkelte brugere.",
      encryptionQuestion: "Bruger Orbi ende-til-ende-kryptering?",
      encryptionAnswer:
        "Ja. Orbi understøtter ende-til-ende-krypterede chats, når kryptering er slået til ved oprettelsen af chatten.",
      eventsQuestion: "Hvordan fungerer events i Orbi?",
      eventsAnswer:
        "Events giver planer deres eget sted uden for rodede chattråde. Du kan oprette et event, invitere venner, tilføje detaljer som tid og sted, følge med i hvem der kommer og holde eventopdateringer nemme at finde.",
      invitesQuestion: "Kan jeg invitere personer, der endnu ikke bruger Orbi?",
      invitesAnswer:
        "Ja. Du kan invitere personer til events via SMS, selv hvis de ikke bruger Orbi endnu. Det gør det lettere at planlægge med alle, ikke kun personer der allerede er på appen.",
      accessQuestion: "Hvad sker der, hvis jeg mister adgang til min konto?",
      accessAnswer:
        "Orbi bruger en 6-cifret backup-PIN til at hjælpe dig med at gendanne adgang til din konto og dine krypterede chats på en ny enhed.",
      behindQuestion: "Hvem står bag Orbi?",
      behindAnswer:
        "Orbi er bygget af en lille dansk startup. Vores centrale backend er hostet i Frankfurt, Tyskland.",
    },
    footer: {
      terms: "Servicevilkår",
      privacy: "Privatlivspolitik",
      support: "Få support",
      contactButton: "Kontakt os",
      text: "En lille startup fra Danmark, der bygger en roligere måde at chatte og planlægge sammen på.",
    },
  },
};

let currentLanguage = detectInitialLanguage();

function getTranslation(language, key) {
  return key.split(".").reduce((value, part) => {
    if (!value || typeof value !== "object") return undefined;
    return value[part];
  }, translations[language]);
}

function detectInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (supportedLanguages.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch (error) {
    // localStorage may be unavailable in private browsing or strict environments.
  }

  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone === "Europe/Copenhagen" ? "da" : "en";
  } catch (error) {
    return "en";
  }
}

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element && content) {
    element.setAttribute("content", content);
  }
}

function applyLanguage(language, shouldStore = false) {
  const nextLanguage = supportedLanguages.includes(language) ? language : "en";
  currentLanguage = nextLanguage;
  document.documentElement.lang = nextLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(nextLanguage, element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getTranslation(nextLanguage, element.dataset.i18nHtml);
    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((part) => part && part.trim());
      const value = getTranslation(nextLanguage, key);
      if (attribute && typeof value === "string") {
        element.setAttribute(attribute, value);
      }
    });
  });

  document.querySelectorAll(".menu-toggle").forEach((toggle) => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    const label = getTranslation(nextLanguage, isOpen ? "menu.close" : "menu.open");
    if (label) {
      toggle.setAttribute("aria-label", label);
    }
  });

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const meta = translations[nextLanguage].meta;
  document.title = meta.title;
  setMetaContent('meta[name="description"]', meta.description);
  setMetaContent('meta[property="og:title"]', meta.title);
  setMetaContent('meta[property="og:description"]', meta.ogDescription);
  setMetaContent('meta[name="twitter:title"]', meta.title);
  setMetaContent('meta[name="twitter:description"]', meta.twitterDescription);

  if (shouldStore) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch (error) {
      // Ignore storage failures; the selector still works for this session.
    }
  }
}

document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption, true);
  });
});

applyLanguage(currentLanguage);

const track = document.querySelector("[data-carousel-track]");
const slides = track ? Array.from(track.children) : [];
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const dots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
const viewport = document.querySelector(".carousel-viewport");

let currentSlide = 0;
let touchStartX = 0;
let touchStartY = 0;

function updateCarousel(index) {
  if (!track || !slides.length) return;

  currentSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentSlide);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === currentSlide);
  });
}

if (prevButton) {
  prevButton.addEventListener("click", () => updateCarousel(currentSlide - 1));
}

if (nextButton) {
  nextButton.addEventListener("click", () => updateCarousel(currentSlide + 1));
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    updateCarousel(Number(dot.dataset.carouselDot || 0));
  });
});

if (viewport && slides.length > 1) {
  viewport.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }

      updateCarousel(deltaX > 0 ? currentSlide - 1 : currentSlide + 1);
    },
    { passive: true }
  );
}

const revealTargets = document.querySelectorAll("[data-reveal]");
const navShells = Array.from(document.querySelectorAll(".nav-shell"));
const siteHeader = document.querySelector(".site-header");
const brandLogo = document.querySelector(".brand img[data-logo-color][data-logo-white]");
const darkLogoSections = Array.from(document.querySelectorAll(".feature-band, .faq-band"));

if (siteHeader && brandLogo && !document.body.classList.contains("legal-body")) {
  let headerLogoOnDark = null;
  let pendingHeaderCheck = false;

  const updateHeaderLogo = () => {
    pendingHeaderCheck = false;

    const headerBounds = siteHeader.getBoundingClientRect();
    const probeY = Math.min(headerBounds.bottom + 10, window.innerHeight - 8);
    const isDarkSection = darkLogoSections.some((section) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= probeY && bounds.bottom >= probeY;
    });

    if (isDarkSection === headerLogoOnDark) return;

    headerLogoOnDark = isDarkSection;
    brandLogo.src = isDarkSection
      ? brandLogo.dataset.logoWhite || brandLogo.src
      : brandLogo.dataset.logoColor || brandLogo.src;
  };

  const requestHeaderLogoUpdate = () => {
    if (pendingHeaderCheck) return;
    pendingHeaderCheck = true;
    window.requestAnimationFrame(updateHeaderLogo);
  };

  window.addEventListener("scroll", requestHeaderLogoUpdate, { passive: true });
  window.addEventListener("resize", requestHeaderLogoUpdate);
  window.addEventListener("load", requestHeaderLogoUpdate);
  requestHeaderLogoUpdate();
}

if ("IntersectionObserver" in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

navShells.forEach((shell) => {
  const toggle = shell.querySelector(".menu-toggle");
  const closeTargets = shell.querySelectorAll("[data-menu-close]");

  if (!toggle) return;

  const setMenuState = (isOpen) => {
    shell.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      getTranslation(currentLanguage, isOpen ? "menu.close" : "menu.open") ||
        (isOpen ? "Close menu" : "Open menu")
    );
  };

  toggle.addEventListener("click", () => {
    setMenuState(!shell.classList.contains("menu-open"));
  });

  closeTargets.forEach((target) => {
    target.addEventListener("click", () => setMenuState(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
});

updateCarousel(0);
