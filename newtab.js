(() => {
  const input = document.getElementById("q");
  const form = document.getElementById("searchForm");
  const imageSearchBtn = document.getElementById("imageSearchBtn");
  const imageSearchUploadForm = document.getElementById("imageSearchUploadForm");
  const imageSearchFile = document.getElementById("imageSearchFile");
  const imageSearchDialogOverlay = document.getElementById("imageSearchDialogOverlay");
  const imageSearchDialog = document.getElementById("imageSearchDialog");
  const imageSearchDialogClose = document.getElementById("imageSearchDialogClose");
  const imageSearchDropZone = document.getElementById("imageSearchDropZone");
  const imageSearchUploadBtn = document.getElementById("imageSearchUploadBtn");
  const imageSearchUrlInput = document.getElementById("imageSearchUrlInput");
  const imageSearchUrlSubmit = document.getElementById("imageSearchUrlSubmit");
  const imageSearchLoading = document.getElementById("imageSearchLoading");
  const grid = document.getElementById("shortcutsGrid");
  const bgBtn = document.getElementById("bgBtn");
  const bgPanel = document.getElementById("bgPanel");
  const themesMenuBtn = document.getElementById("themesMenuBtn");
  const themesCatalog = document.getElementById("themesCatalog");
  const defaultThemeCard = document.getElementById("defaultThemeCard");
  const uploadThemeCard = document.getElementById("uploadThemeCard");
  const solidColoursCard = document.getElementById("solidColoursCard");
  const solidColourThumb = solidColoursCard?.querySelector(".catalog-thumb-solid");
  const macOsXCard = document.getElementById("macOsXCard");
  const risingArtistsCard = document.getElementById("risingArtistsCard");
  const arturoTorresCard = document.getElementById("arturoTorresCard");
  const nativeAmericanArtistsCard = document.getElementById("nativeAmericanArtistsCard");
  const asianPacificArtistsCard = document.getElementById("asianPacificArtistsCard");
  const latinoArtistsCard = document.getElementById("latinoArtistsCard");
  const blackArtistsCard = document.getElementById("blackArtistsCard");
  const landscapesCard = document.getElementById("landscapesCard");
  const texturesCard = document.getElementById("texturesCard");
  const geometricShapesCard = document.getElementById("geometricShapesCard");
  const earthCard = document.getElementById("earthCard");
  const artCard = document.getElementById("artCard");
  const cityscapeCard = document.getElementById("cityscapeCard");
  const seascapesCard = document.getElementById("seascapesCard");
  const lifeCard = document.getElementById("lifeCard");
  const vibeCanvasCard = document.getElementById("vibeCanvasCard");
  const themesListWrap = document.getElementById("themesListWrap");
  const themesBackBtn = document.getElementById("themesBackBtn");
  const themesSectionTitle = document.getElementById("themesSectionTitle");
  const themesList = document.getElementById("themesList");
  const bgFile = document.getElementById("bgFile");
  const template = document.getElementById("shortcutTemplate");
  const appsBtn = document.getElementById("appsBtn");
  const appsPanel = document.getElementById("appsPanel");
  const appsScroll = document.getElementById("appsScroll");
  const appsGrid = document.getElementById("appsGrid");
  const appsIframeWrap = document.getElementById("appsIframeWrap");
  const appsIframe = document.getElementById("appsIframe");
  const appsThemeToggleBtn = document.getElementById("appsThemeToggleBtn");
  const accountSignInBtn = document.getElementById("accountSignInBtn");
  const accountChip = document.getElementById("accountChip");
  const accountAvatar = document.getElementById("accountAvatar");
  const accountInitial = document.getElementById("accountInitial");
  const accountMenu = document.getElementById("accountMenu");
  const accountSignOutBtn = document.getElementById("accountSignOutBtn");
  const accountChangePhotoBtn = document.getElementById("accountChangePhotoBtn");
  const accountAddAccountBtn = document.getElementById("accountAddAccountBtn");
  const accountPhotoFile = document.getElementById("accountPhotoFile");
  const doodleToggleBtn = document.getElementById("doodleToggleBtn");
  const doodleVariantBtn = document.getElementById("doodleVariantBtn");
  const defaultUiModeBtn = document.getElementById("defaultUiModeBtn");
  const doodleArt = document.getElementById("doodleArt");
  const aiModeBtn = document.getElementById("aiModeBtn");

  const BG_STORAGE_KEY = "customBackground";
  const BG_SOURCE_KEY = "customBackgroundSource";
  const BG_MODE_KEY = "backgroundMode";
  const BG_INIT_KEY = "backgroundInitDone";
  const BG_MIGRATION_VERSION_KEY = "backgroundMigrationVersion";
  const BG_MIGRATION_VERSION = 7;
  const BG_CUSTOM_EXPLICIT_KEY = "customBackgroundExplicit";
  const BG_DEFAULT_UI_EXPLICIT_KEY = "defaultUiExplicit";
  const BG_DEFAULT_UI_MANUAL_KEY = "defaultUiManualSelection";
  const BG_DEFAULT_UI_SELECTED_KEY = "defaultUiSelectedV2";
  const BG_PLAIN_COLOR_KEY = "plainBackgroundColor";
  const SOLID_COLOR_CATALOG_PREVIEW = "#7e57c2";
  const BG_DEFAULT_UI_MODE = "default_ui";
  const PRELOAD_MODE_KEY = "ntpPreloadMode";
  const PRELOAD_BG_KEY = "ntpPreloadBg";
  const PRELOAD_COLOR_KEY = "ntpPreloadColor";
  const PRELOAD_THEME_KEY = "ntpPreloadTheme";
  const PRELOAD_DOODLE_SRC_KEY = "ntpPreloadDoodleSrc";
  const PRELOAD_DOODLE_ENABLED_KEY = "ntpPreloadDoodleEnabled";
  const UI_THEME_KEY = "defaultChromeUiTheme";
  const ENHANCED_NEW_TAB_ENABLED_KEY = "enhancedNewTabEnabled";
  const SHORTCUTS_STORAGE_KEY = "userShortcuts";
  const SHORTCUTS_CACHE_KEY = "ntpShortcutsCache";
  const HOMEPAGE_DOODLE_ENABLED_KEY = "doodleEnabled";
  const NEWTAB_DOODLE_ENABLED_KEY = "newTabDoodleEnabled";
  const DOODLE_VARIANT_KEY = "doodleVariant";
  const APPS_FRAME_THEME_KEY = "appsFrameTheme";
  const ACCOUNT_SIGNED_OUT_KEY = "accountSignedOutLocal";
  const ACCOUNT_CUSTOM_AVATAR_KEY = "accountCustomAvatar";
  const NATIVE_NEW_TAB_URL = "chrome://new-tab-page/";
  const MAC_OS_BG = "Mac OS Doodle/macosx-bg.svg";
  const MAC_OS_DOODLE = "Mac OS Doodle/macosx-doodle.svg";
  const CHROME_THEME_BG_URL = "chrome://theme/IDR_THEME_NTP_BACKGROUND";
  const OLD_UI_DEFAULT_BG_MARKER = "chrome-untrusted://new-tab-page/background.jpg";
  const OLD_UI_DEFAULT_BG_MARKER_ENCODED = "chrome-untrusted%3A%2F%2Fnew-tab-page%2Fbackground.jpg";
  const DEFAULT_DOODLE_SRC =
    doodleArt?.getAttribute("src") ||
    "doodle-logo-1.png";
  const DOODLE_SOURCES = {
    logo1: DEFAULT_DOODLE_SRC,
    logo2: "doodle-logo-2.png",
    logo3: "doodle-logo-3.png",
    logo4: "doodle-logo-4.svg"
  };
  const THEME_DOODLE_OVERRIDES = {
    [MAC_OS_BG]: MAC_OS_DOODLE
  };
  const WALLPAPER_VIEWPORT_OVERRIDES = {
    "3.png": {
      size: "cover",
      position: "center"
    }
  };

  const BLOCKED_BACKGROUND_URL_TOKENS = [
    "UZkrVBQqGXaTokM6MMtUXwp2-LZ64YoupviZVKN4WfsUDv_47u4hZ7Yiy1Dy5nFuOJ83m6YwhlHxqWyGWZEsBdrBz-85I3G1PaKkOg"
  ];
  const LEGACY_BACKGROUND_REMAP = {
    "vibe-canvas/vc-user-09-google-comic-heroes.jpg": "vibe-canvas/vibe-canvas-09.jpg"
  };

  
  const APPS_IFRAME_BASE = "https://ogs.google.com/u/0/widget/app";
  let appsIframeLoaded = false;
  let appsIframeReady = false;
  let appsIframeFallbackTimer = null;
  let appsPanelRendered = false;
  let catalogThumbnailsApplied = false;
  let currentBackgroundMode = "";
  let currentBackgroundValue = "";
  let currentBackgroundSource = "";
  let currentPlainColor = "";
  let currentDoodleEnabled = true;
  let currentDoodleVariant = "logo1";
  let shortcutsHydrationPromise = null;

  function buildAppsIframeSrc() {
    const lang = encodeURIComponent(navigator.language || "en-GB");
    const originOne = encodeURIComponent("chrome-untrusted://new-tab-page");
    const originTwo = encodeURIComponent("chrome://new-tab-page");
    return `${APPS_IFRAME_BASE}?eom=1&awwd=1&gpa=3&em=2&scv=1&origin=${originOne}&origin=${originTwo}&cn=app&pid=1&spid=243&hl=${lang}`;
  }

  function setAppsIframeMode(isEnabled) {
    if (!appsPanel || !appsIframeWrap) return;
    appsIframeReady = isEnabled;
    appsIframeLoaded = isEnabled;
    appsPanel.classList.toggle("apps-iframe-mode", isEnabled);
    appsIframeWrap.classList.toggle("hidden", !isEnabled);
    appsIframeWrap.setAttribute("aria-hidden", isEnabled ? "false" : "true");
  }

  function applyAppsFrameTheme(theme) {
    if (!appsPanel) return;
    const isLight = theme === "light";
    appsPanel.classList.toggle("apps-light", isLight);
    if (appsThemeToggleBtn) {
      appsThemeToggleBtn.textContent = isLight ? "Frame: Light" : "Frame: Dark";
      appsThemeToggleBtn.setAttribute("aria-label", isLight ? "Switch to dark apps frame" : "Switch to light apps frame");
    }
  }

  function normalizeHexColor(value) {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    const short = /^#([0-9a-fA-F]{3})$/;
    const long = /^#([0-9a-fA-F]{6})$/;
    if (long.test(trimmed)) return trimmed.toLowerCase();
    const shortMatch = trimmed.match(short);
    if (!shortMatch) return null;
    const [r, g, b] = shortMatch[1].split("");
    return `#${r}${r}${g}${g}${b}${b}`.toLowerCase();
  }

  async function loadAppsFrameTheme(initialData = null) {
    const data = initialData || await chrome.storage.local.get(APPS_FRAME_THEME_KEY);
    const saved = data[APPS_FRAME_THEME_KEY] === "light" ? "light" : "dark";
    applyAppsFrameTheme(saved);
  }

  async function isEnhancedNewTabEnabled(initialData = null) {
    const data = initialData || await chrome.storage.local.get(ENHANCED_NEW_TAB_ENABLED_KEY);
    return data[ENHANCED_NEW_TAB_ENABLED_KEY] !== false;
  }

  function setAccountMenuOpen(isOpen) {
    if (!accountMenu) return;
    accountMenu.classList.toggle("hidden", !isOpen);
  }

  function setAccountChip(email, customAvatar = "") {
    if (!accountChip || !accountInitial || !accountAvatar) return;
    const normalizedEmail = (email || "").trim();
    if (!normalizedEmail) {
      accountSignInBtn?.classList.remove("hidden");
      accountChip.classList.add("hidden");
      setAccountMenuOpen(false);
      accountAvatar.classList.add("hidden");
      accountInitial.classList.remove("hidden");
      accountAvatar.removeAttribute("src");
      accountInitial.textContent = "A";
      return;
    }

    accountSignInBtn?.classList.add("hidden");
    const initial = (normalizedEmail[0] || "A").toUpperCase();
    accountInitial.textContent = initial;
    accountChip.classList.remove("hidden");

    if (customAvatar) {
      accountAvatar.src = customAvatar;
      accountAvatar.classList.remove("hidden");
      accountInitial.classList.add("hidden");
      return;
    }

    const candidates = [
      `https://www.google.com/s2/photos/profile/${encodeURIComponent(normalizedEmail)}?sz=96`,
      `https://profiles.google.com/s2/photos/profile/${encodeURIComponent(normalizedEmail)}?sz=96`
    ];

    const tryNext = () => {
      const next = candidates.shift();
      if (!next) {
        accountAvatar.classList.add("hidden");
        accountInitial.classList.remove("hidden");
        return;
      }
      accountAvatar.src = next;
    };

    accountAvatar.onload = () => {
      accountAvatar.classList.remove("hidden");
      accountInitial.classList.add("hidden");
    };
    accountAvatar.onerror = tryNext;
    tryNext();
  }

  async function loadAccountChip() {
    const local = await chrome.storage.local.get([ACCOUNT_SIGNED_OUT_KEY, ACCOUNT_CUSTOM_AVATAR_KEY]);
    if (local[ACCOUNT_SIGNED_OUT_KEY]) {
      setAccountChip("");
      return;
    }
    if (!chrome.identity?.getProfileUserInfo) {
      setAccountChip("");
      return;
    }
    try {
      const infoAny = await new Promise((resolve) => {
        chrome.identity.getProfileUserInfo({ accountStatus: "ANY" }, (value) => {
          resolve(value || {});
        });
      });
      if (infoAny?.email) {
        setAccountChip(infoAny.email, local[ACCOUNT_CUSTOM_AVATAR_KEY] || "");
        return;
      }

      // Fallback for older or stricter Chrome builds.
      const infoDefault = await new Promise((resolve) => {
        chrome.identity.getProfileUserInfo((value) => {
          resolve(value || {});
        });
      });
      setAccountChip(infoDefault.email || "", local[ACCOUNT_CUSTOM_AVATAR_KEY] || "");
    } catch {
      setAccountChip("");
    }
  }

  function initAppsIframe() {
    if (!appsIframe || !appsPanel || !appsIframeWrap) return;
    if (appsIframe.dataset.initialized !== "true") {
      appsIframe.dataset.initialized = "true";
      appsIframe.src = buildAppsIframeSrc();

      appsIframe.addEventListener("error", () => {
        setAppsIframeMode(false);
      });

      window.addEventListener("message", (event) => {
        if (event.origin !== "https://ogs.google.com") return;
        if (!appsPanel || appsPanel.classList.contains("hidden")) return;
        if (appsIframeFallbackTimer) {
          clearTimeout(appsIframeFallbackTimer);
          appsIframeFallbackTimer = null;
        }
        appsIframe.classList.add("fade-in");
        setAppsIframeMode(true);
      });
    }

    if (appsIframeFallbackTimer) clearTimeout(appsIframeFallbackTimer);
    appsIframeFallbackTimer = setTimeout(() => {
      if (!appsIframeReady) setAppsIframeMode(false);
    }, 1400);
  }
  const GOOGLE_APPS = [
    {
      name: "Account",
      url: "https://myaccount.google.com/",
      iconCandidates: [
        "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png",
        "https://ssl.gstatic.com/gb/images/p1_6269e604.png"
      ]
    },
    { name: "Search", url: "https://www.google.com/" },
    { name: "Maps", url: "https://maps.google.com/" },
    { name: "News", url: "https://news.google.com/" },
    { name: "Gmail", url: "https://mail.google.com/" },
    { name: "Meet", url: "https://meet.google.com/" },
    { name: "Chat", url: "https://mail.google.com/chat/" },
    { name: "Contacts", url: "https://contacts.google.com/" },
    { name: "Drive", url: "https://drive.google.com/" },
    { name: "Calendar", url: "https://calendar.google.com/" },
    { name: "Play", url: "https://play.google.com/" },
    { name: "Translate", url: "https://translate.google.com/" },
    { name: "Photos", url: "https://photos.google.com/" },
    { name: "Shopping", url: "https://shopping.google.com/" },
    { name: "Finance", url: "https://www.google.com/finance/" },
    {
      name: "Docs",
      url: "https://docs.google.com/document/",
      iconCandidates: [
        "https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/8d/Google_Docs_2020_Logo.svg"
      ]
    },
    {
      name: "Sheets",
      url: "https://docs.google.com/spreadsheets/",
      iconCandidates: [
        "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png",
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_2020_Logo.svg"
      ]
    },
    {
      name: "Slides",
      url: "https://docs.google.com/presentation/",
      iconCandidates: [
        "https://www.gstatic.com/images/branding/product/1x/slides_2020q4_48dp.png",
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_2020_Logo.svg"
      ]
    },
    {
      name: "Books",
      url: "https://books.google.com/",
      iconCandidates: [
        "https://www.gstatic.com/images/branding/product/1x/play_books_48dp.png",
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Google_Play_Books_icon_%282016%29.svg"
      ]
    },
    { name: "Blogger", url: "https://www.blogger.com/" },
    { name: "Keep", url: "https://keep.google.com/" },
    { name: "Earth", url: "https://earth.google.com/" },
    { name: "Saved", url: "https://www.google.com/save" },
    { name: "Arts & Culture", url: "https://artsandculture.google.com/" },
    { name: "Google Ads", url: "https://ads.google.com/" },
    {
      name: "Merchant Center",
      url: "https://merchants.google.com/",
      iconCandidates: [
        "https://www.gstatic.com/images/branding/product/1x/merchant_center_48dp.png",
        "https://www.gstatic.com/images/branding/product/1x/shopping_48dp.png"
      ]
    },
    { name: "Travel", url: "https://www.google.com/travel/" },
    {
      name: "Forms",
      url: "https://docs.google.com/forms/",
      iconCandidates: [
        "https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png",
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Forms_2020_Logo.svg"
      ]
    },
    { name: "Store", url: "https://store.google.com/" },
    {
      name: "Chrome Web Store",
      url: "https://chromewebstore.google.com/",
      iconCandidates: [
        remoteFaviconFor("https://chromewebstore.google.com/", 64),
        remoteFaviconFor("https://chromewebstore.google.com/", 128)
      ]
    },
    { name: "Analytics", url: "https://analytics.google.com/" }
  ];

  const EMPTY_THEMES = Object.freeze([]);
  let themeCollections = null;
  let themeCollectionsPromise = null;

  const THEME_CARD_PAIRS = [
    ["macOsX", macOsXCard],
    ["risingArtists", risingArtistsCard],
    ["arturoTorres", arturoTorresCard],
    ["nativeAmerican", nativeAmericanArtistsCard],
    ["asianPacific", asianPacificArtistsCard],
    ["latinoArtists", latinoArtistsCard],
    ["blackArtists", blackArtistsCard],
    ["landscapes", landscapesCard],
    ["textures", texturesCard],
    ["geometricShapes", geometricShapesCard],
    ["earth", earthCard],
    ["art", artCard],
    ["cityscape", cityscapeCard],
    ["seascapes", seascapesCard],
    ["life", lifeCard],
    ["vibeCanvas", vibeCanvasCard]
  ];

  function getThemeCollection(key) {
    return themeCollections?.[key] || EMPTY_THEMES;
  }

  function getThemeGroups() {
    return THEME_CARD_PAIRS.map(([key]) => getThemeCollection(key));
  }

  function scheduleIdleTask(task, timeout = 500) {
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(task, { timeout });
      return;
    }
    window.setTimeout(task, 0);
  }

  function normalizeShortcutEntry(entry) {
    if (!entry || typeof entry !== "object") return null;
    const url = normalizeUrl(typeof entry.url === "string" ? entry.url : "");
    if (!url) return null;
    const rawTitle = typeof entry.title === "string" ? entry.title.trim() : "";
    return {
      title: rawTitle || makeTitleFromUrl(url),
      url
    };
  }

  function normalizeShortcutList(shortcuts) {
    if (!Array.isArray(shortcuts)) return null;
    return shortcuts
      .map(normalizeShortcutEntry)
      .filter(Boolean);
  }

  function readShortcutCache() {
    try {
      const raw = localStorage.getItem(SHORTCUTS_CACHE_KEY);
      if (!raw) return null;
      return normalizeShortcutList(JSON.parse(raw));
    } catch {
      return null;
    }
  }

  function writeShortcutCache(shortcuts) {
    const normalized = normalizeShortcutList(shortcuts);
    try {
      if (normalized === null) {
        localStorage.removeItem(SHORTCUTS_CACHE_KEY);
      } else {
        localStorage.setItem(SHORTCUTS_CACHE_KEY, JSON.stringify(normalized));
      }
    } catch {
      // Ignore local cache write failures.
    }
    return normalized;
  }

  function renderCachedShortcuts() {
    const cached = readShortcutCache();
    if (cached === null) return false;
    renderShortcuts(cached);
    return true;
  }

  function hydrateShortcuts() {
    if (shortcutsHydrationPromise) return shortcutsHydrationPromise;
    shortcutsHydrationPromise = initializeShortcuts()
      .then((shortcuts) => {
        renderShortcuts(shortcuts);
        return shortcuts;
      })
      .catch((error) => {
        shortcutsHydrationPromise = null;
        throw error;
      });
    return shortcutsHydrationPromise;
  }

  async function ensureThemeCollectionsLoaded() {
    if (themeCollections) return themeCollections;
    if (!themeCollectionsPromise) {
      themeCollectionsPromise = import(chrome.runtime.getURL("newtab-themes.js"))
        .then((module) => {
          themeCollections = module.THEME_COLLECTIONS || {};
          return themeCollections;
        })
        .catch((error) => {
          themeCollectionsPromise = null;
          throw error;
        });
    }

    return themeCollectionsPromise;
  }

  const SOLID_COLORS = [
    "#6386df", "#5f9dd8", "#69aec7",
    "#4f5bb5", "#6a46b8", "#8e3db2",
    "#a39ad0", "#5a9f96", "#5aa064",
    "#97be5f", "#c3d45a", "#e8de63",
    "#e2b845", "#e2bd7f", "#e59d3b",
    "#e36638", "#c85340", "#cc3c68",
    "#d77891", "#ddc0c1", "#cfc39f",
    "#7f6455", "#9c9c9c", "#738898",
    "#000000"
  ];

  function updateSolidColorPreview(color = currentPlainColor || SOLID_COLORS[0]) {
    if (!solidColourThumb) return;
    solidColourThumb.style.removeProperty("background-image");
    solidColourThumb.style.removeProperty("background-size");
    solidColourThumb.style.removeProperty("background-position");
    solidColourThumb.style.removeProperty("background-repeat");
    solidColourThumb.style.setProperty("--solid-preview-color", SOLID_COLOR_CATALOG_PREVIEW);
  }

  function isMacThemeBackground(backgroundValue = currentBackgroundValue, mode = currentBackgroundMode) {
    return mode === "custom" && typeof backgroundValue === "string" && backgroundValue.includes(MAC_OS_BG);
  }

  function syncDoodleVariantVisibility(isEnabled = currentDoodleEnabled) {
    if (!doodleVariantBtn) return;
    const shouldShow = Boolean(isEnabled) && !isMacThemeBackground();
    doodleVariantBtn.hidden = !shouldShow;
    doodleVariantBtn.disabled = !shouldShow;
    doodleVariantBtn.setAttribute("aria-hidden", shouldShow ? "false" : "true");
  }

  function setDoodleToggleUI(isEnabled) {
    currentDoodleEnabled = Boolean(isEnabled);
    if (doodleToggleBtn) {
      doodleToggleBtn.dataset.enabled = currentDoodleEnabled ? "true" : "false";
      doodleToggleBtn.textContent = currentDoodleEnabled ? "Doodle: On" : "Doodle: Off";
    }
    syncDoodleVariantVisibility(currentDoodleEnabled);
  }

  function normalizeDoodleVariant(value) {
    return value === "logo2" || value === "logo3" || value === "logo4" ? value : "logo1";
  }

  function getDoodleSourceForVariant(variant) {
    return DOODLE_SOURCES[normalizeDoodleVariant(variant)] || DEFAULT_DOODLE_SRC;
  }

  function setDoodleVariantUI(variant) {
    if (!doodleVariantBtn) return;
    const normalized = normalizeDoodleVariant(variant);
    const next =
      normalized === "logo1" ? "Logo 2" :
      normalized === "logo2" ? "Logo 3" :
      normalized === "logo3" ? "Logo 4" :
      "Logo 1";
    doodleVariantBtn.dataset.variant = normalized;
    doodleVariantBtn.textContent =
      normalized === "logo1" ? "Logo: 1" :
      normalized === "logo2" ? "Logo: 2" :
      normalized === "logo3" ? "Logo: 3" :
      "Logo: 4";
    doodleVariantBtn.setAttribute("aria-label", `Switch doodle logo to ${next}`);
  }

  function setDoodleVisibilityBySetting(isEnabled) {
    if (!doodleArt) return;
    doodleArt.style.visibility = isEnabled ? "visible" : "hidden";
    doodleArt.style.opacity = isEnabled ? "1" : "0";
  }

  function resolveDoodleSource(backgroundValue, mode, variant = currentDoodleVariant) {
    if (mode !== "custom" || !backgroundValue) {
      return getDoodleSourceForVariant(variant);
    }
    const override = Object.entries(THEME_DOODLE_OVERRIDES).find(([key]) => backgroundValue.includes(key));
    return override ? override[1] : getDoodleSourceForVariant(variant);
  }

  function writePreloadDoodleCache(
    backgroundValue = currentBackgroundValue,
    mode = currentBackgroundMode,
    variant = currentDoodleVariant,
    enabled = currentDoodleEnabled
  ) {
    try {
      localStorage.setItem(PRELOAD_DOODLE_SRC_KEY, resolveDoodleSource(backgroundValue, mode, variant));
      localStorage.setItem(PRELOAD_DOODLE_ENABLED_KEY, enabled ? "1" : "0");
    } catch {
      // Ignore local preload cache write failures.
    }
  }

  function applyDoodleForTheme(backgroundValue, mode, variant = currentDoodleVariant) {
    if (!doodleArt) return;
    doodleArt.src = resolveDoodleSource(backgroundValue, mode, variant);
    setDoodleVisibilityBySetting(currentDoodleEnabled);
  }

  async function loadDoodleSetting(initialData = null) {
    const data = initialData || await chrome.storage.local.get([
      HOMEPAGE_DOODLE_ENABLED_KEY,
      NEWTAB_DOODLE_ENABLED_KEY,
      DOODLE_VARIANT_KEY
    ]);
    let enabled;
    if (typeof data[NEWTAB_DOODLE_ENABLED_KEY] === "boolean") {
      enabled = data[NEWTAB_DOODLE_ENABLED_KEY];
    } else if (typeof data[HOMEPAGE_DOODLE_ENABLED_KEY] === "boolean") {
      enabled = data[HOMEPAGE_DOODLE_ENABLED_KEY];
      await chrome.storage.local.set({ [NEWTAB_DOODLE_ENABLED_KEY]: enabled });
      await chrome.storage.local.remove(HOMEPAGE_DOODLE_ENABLED_KEY);
    } else {
      enabled = true;
      await chrome.storage.local.set({ [NEWTAB_DOODLE_ENABLED_KEY]: true });
    }
    const variant = normalizeDoodleVariant(data[DOODLE_VARIANT_KEY]);
    currentDoodleVariant = variant;
    setDoodleToggleUI(enabled);
    setDoodleVariantUI(variant);
    applyDoodleForTheme(currentBackgroundValue, currentBackgroundMode, variant);
    setDoodleVisibilityBySetting(enabled);
    writePreloadDoodleCache(currentBackgroundValue, currentBackgroundMode, variant, enabled);
  }

  function normalizeUrl(value) {
    const text = value.trim();
    if (!text) return null;
    if (/^https?:\/\//i.test(text)) return text;
    if (/^[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(text)) return `https://${text}`;
    return null;
  }

  function remoteFaviconFor(url, size = 64) {
    return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${encodeURIComponent(url)}`;
  }

  function extensionFaviconFor(url, size = 64) {
    try {
      const faviconUrl = new URL(chrome.runtime.getURL("/_favicon/"));
      faviconUrl.searchParams.set("pageUrl", url);
      faviconUrl.searchParams.set("size", String(size));
      return faviconUrl.toString();
    } catch {
      return remoteFaviconFor(url, size);
    }
  }

  function isChromeWebStoreUrl(url) {
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace(/^www\./, "");
      return host === "chromewebstore.google.com" ||
        (host === "chrome.google.com" && parsed.pathname.startsWith("/webstore"));
    } catch {
      return false;
    }
  }

  function faviconFor(url) {
    return extensionFaviconFor(url, 64);
  }

  function largeFaviconFor(url) {
    return extensionFaviconFor(url, 128);
  }

  function applyShortcutIcon(icon, url, index) {
    if (!icon || !url) return;
    const candidates = isChromeWebStoreUrl(url)
      ? [
          remoteFaviconFor(url, 64),
          remoteFaviconFor(url, 128),
          faviconFor(url),
          largeFaviconFor(url)
        ].filter(Boolean)
      : [
          faviconFor(url),
          largeFaviconFor(url),
          remoteFaviconFor(url, 64),
          remoteFaviconFor(url, 128)
        ].filter(Boolean);

    const loadNext = () => {
      const next = candidates.shift();
      if (next) {
        icon.src = next;
        return;
      }
      icon.removeAttribute("src");
    };

    icon.decoding = "async";
    icon.loading = "eager";
    if ("fetchPriority" in icon) {
      icon.fetchPriority = index < 10 ? "high" : "auto";
    }
    icon.onerror = loadNext;
    loadNext();
  }

  function extractBackgroundFileName(value) {
    if (!value) return "";
    const cleaned = String(value).split("#")[0].split("?")[0];
    const slashIndex = cleaned.lastIndexOf("/");
    return (slashIndex >= 0 ? cleaned.slice(slashIndex + 1) : cleaned).toLowerCase();
  }

  function normalizeBuiltInBackgroundValue(value) {
    if (typeof value !== "string") return "";
    const trimmed = value.trim();
    return LEGACY_BACKGROUND_REMAP[trimmed] || trimmed;
  }

  function isSupportedBackgroundUpload(file) {
    if (!file) return false;
    const type = (file.type || "").toLowerCase();
    const name = (file.name || "").toLowerCase();
    const validType =
      type === "image/jpeg" ||
      type === "image/jpg" ||
      type === "image/pjpeg" ||
      type === "image/png" ||
      type === "image/x-png";
    const validExt = name.endsWith(".jpg") || name.endsWith(".jpeg") || name.endsWith(".png");
    return validType || validExt;
  }

  function isSupportedBackgroundDataUrl(dataUrl) {
    if (typeof dataUrl !== "string") return false;
    const normalized = dataUrl.slice(0, 64).toLowerCase();
    return (
      normalized.startsWith("data:image/jpeg") ||
      normalized.startsWith("data:image/jpg") ||
      normalized.startsWith("data:image/png")
    );
  }

  function isOldUiDefaultBackgroundValue(value) {
    if (typeof value !== "string" || !value.trim()) return false;
    const raw = value.trim();
    if (raw.includes(OLD_UI_DEFAULT_BG_MARKER) || raw.includes(OLD_UI_DEFAULT_BG_MARKER_ENCODED)) {
      return true;
    }
    try {
      const decoded = decodeURIComponent(raw);
      return decoded.includes(OLD_UI_DEFAULT_BG_MARKER);
    } catch {
      return false;
    }
  }

  function isJpgOrPngBackgroundValue(value) {
    if (typeof value !== "string" || !value.trim()) return false;
    const raw = value.trim();
    const imageExtPattern = /\.(jpe?g|png)(?:$|[?#&])/i;

    if (raw.startsWith("data:image/jpeg") || raw.startsWith("data:image/jpg") || raw.startsWith("data:image/png")) {
      return true;
    }
    if (imageExtPattern.test(raw)) return true;

    try {
      const decoded = decodeURIComponent(raw);
      if (imageExtPattern.test(decoded)) return true;

      const marker = "chrome-untrusted://new-tab-page/custom_background_image?url=";
      if (decoded.startsWith(marker)) {
        const encodedInner = decoded.slice(marker.length);
        const inner = decodeURIComponent(encodedInner);
        return imageExtPattern.test(inner);
      }
    } catch {
      return false;
    }

    return false;
  }

  function applyBackgroundViewport(value) {
    const fileName = extractBackgroundFileName(value);
    const override = WALLPAPER_VIEWPORT_OVERRIDES[fileName];
    document.body.dataset.bgKey = fileName || "";
    document.body.style.backgroundSize = override?.size || "cover";
    document.body.style.backgroundPosition = override?.position || "center";
    document.body.style.backgroundRepeat = "no-repeat";
  }

  function applyBrowserBackground() {
    document.body.style.backgroundImage = `url("${CHROME_THEME_BG_URL}")`;
    applyBackgroundViewport("");
  }

  function waitForBackgroundImage(url, timeoutMs = 1800) {
    return new Promise((resolve) => {
      if (!url) {
        resolve();
        return;
      }

      const img = new Image();
      let finished = false;
      const done = () => {
        if (finished) return;
        finished = true;
        resolve();
      };

      const timer = setTimeout(done, timeoutMs);
      img.onload = () => {
        clearTimeout(timer);
        done();
      };
      img.onerror = () => {
        clearTimeout(timer);
        done();
      };
      img.src = url;
    });
  }

  function makeTitleFromUrl(url) {
    try {
      const host = new URL(url).hostname.replace(/^www\./, "");
      return host || url;
    } catch {
      return url;
    }
  }

  function normalizeBackgroundModeValue(mode) {
    return mode === "custom" || mode === "plain" || mode === "browser" || mode === BG_DEFAULT_UI_MODE
      ? mode
      : null;
  }

  async function readBackgroundMode(initialData = null) {
    if (initialData) {
      return normalizeBackgroundModeValue(initialData[BG_MODE_KEY]);
    }
    const data = await chrome.storage.local.get(BG_MODE_KEY);
    return normalizeBackgroundModeValue(data[BG_MODE_KEY]);
  }

  async function writeBackgroundMode(mode) {
    await chrome.storage.local.set({ [BG_MODE_KEY]: mode });
  }

  function normalizeUiThemeValue(theme) {
    return theme === "dark" ? "dark" : "light";
  }

  async function readUiTheme(initialData = null) {
    if (initialData) {
      return normalizeUiThemeValue(initialData[UI_THEME_KEY]);
    }
    const data = await chrome.storage.local.get(UI_THEME_KEY);
    return normalizeUiThemeValue(data[UI_THEME_KEY]);
  }

  async function writeUiTheme(theme) {
    if (theme !== "light" && theme !== "dark") return;
    await chrome.storage.local.set({ [UI_THEME_KEY]: theme });
  }

  function setDefaultUiModeButton(theme) {
    if (!defaultUiModeBtn) return;
    const mode = theme === "dark" ? "Dark" : "Light";
    defaultUiModeBtn.textContent = `Default UI: ${mode}`;
    defaultUiModeBtn.setAttribute("aria-label", `Switch default UI background to ${mode === "Dark" ? "light" : "dark"} mode`);
  }

  function setDefaultUiModeButtonState(backgroundMode) {
    if (!defaultUiModeBtn) return;
    const enabled = backgroundMode === BG_DEFAULT_UI_MODE;
    defaultUiModeBtn.hidden = !enabled;
    defaultUiModeBtn.disabled = !enabled;
    defaultUiModeBtn.title = enabled
      ? "Toggle default UI light/dark"
      : "Available only when Themes > Default Chrome is selected";
  }

  function applyUiTheme(theme, backgroundMode) {
    const shouldApply = backgroundMode === BG_DEFAULT_UI_MODE;
    document.body.classList.toggle("ui-light", shouldApply && theme === "light");
    document.body.classList.toggle("ui-dark", shouldApply && theme === "dark");
    setDefaultUiModeButton(theme);
    setDefaultUiModeButtonState(backgroundMode);
  }

  function writePreloadBackgroundCache(mode, bg, plainColor = "", uiTheme = "light") {
    try {
      const canCacheCustom =
        mode === "custom" &&
        typeof bg === "string" &&
        bg.trim() !== "" &&
        !bg.startsWith("data:");

      if (canCacheCustom) {
        localStorage.setItem(PRELOAD_MODE_KEY, "custom");
        localStorage.setItem(PRELOAD_BG_KEY, bg);
        localStorage.removeItem(PRELOAD_COLOR_KEY);
        localStorage.removeItem(PRELOAD_THEME_KEY);
        return;
      }

      if (mode === "plain" && typeof plainColor === "string" && plainColor.trim() !== "") {
        localStorage.setItem(PRELOAD_MODE_KEY, "plain");
        localStorage.setItem(PRELOAD_COLOR_KEY, plainColor.trim());
        localStorage.removeItem(PRELOAD_BG_KEY);
        localStorage.removeItem(PRELOAD_THEME_KEY);
        return;
      }

      if (mode === BG_DEFAULT_UI_MODE) {
        localStorage.setItem(PRELOAD_MODE_KEY, BG_DEFAULT_UI_MODE);
        localStorage.setItem(PRELOAD_THEME_KEY, normalizeUiThemeValue(uiTheme));
        localStorage.removeItem(PRELOAD_BG_KEY);
        localStorage.removeItem(PRELOAD_COLOR_KEY);
        return;
      }

      localStorage.removeItem(PRELOAD_MODE_KEY);
      localStorage.removeItem(PRELOAD_BG_KEY);
      localStorage.removeItem(PRELOAD_COLOR_KEY);
      localStorage.removeItem(PRELOAD_THEME_KEY);
    } catch {
      // Ignore local preload cache write failures.
    }
  }

  function clearPreloadStyle() {
    const preloadStyle = document.getElementById("ntp-preload-bg-style");
    preloadStyle?.remove();
  }

  function isUploadedBackgroundValue(value, source) {
    if (source === "upload") return true;
    return typeof value === "string" && value.startsWith("data:");
  }


  function isBlockedBackgroundValue(value) {
    if (typeof value !== "string") return false;
    return BLOCKED_BACKGROUND_URL_TOKENS.some((tokenValue) => value.includes(tokenValue));
  }
  function hasSelectedPresetBackground() {
    return (
      currentBackgroundMode === "custom" &&
      Boolean(currentBackgroundValue) &&
      !isUploadedBackgroundValue(currentBackgroundValue, currentBackgroundSource)
    );
  }

  function catalogContainsTheme(themeList) {
    if (!hasSelectedPresetBackground()) return false;
    return themeList.some((theme) => theme.imageUrl === currentBackgroundValue);
  }

  function setSelectedState(element, isSelected) {
    if (!element) return;
    element.classList.toggle("is-selected", Boolean(isSelected));
    element.setAttribute("aria-pressed", isSelected ? "true" : "false");
  }

  function updateCatalogSelectionState() {
    setSelectedState(defaultThemeCard, currentBackgroundMode === BG_DEFAULT_UI_MODE);
    setSelectedState(solidColoursCard, currentBackgroundMode === "plain");
    for (const [key, card] of THEME_CARD_PAIRS) {
      setSelectedState(card, catalogContainsTheme(getThemeCollection(key)));
    }
    setSelectedState(uploadThemeCard, isUploadedBackgroundValue(currentBackgroundValue, currentBackgroundSource));
  }

  async function ensureBackgroundDefaults() {
    const data = await chrome.storage.local.get([
      BG_INIT_KEY,
      BG_MODE_KEY,
      BG_STORAGE_KEY,
      BG_SOURCE_KEY,
      BG_MIGRATION_VERSION_KEY,
      BG_CUSTOM_EXPLICIT_KEY,
      BG_DEFAULT_UI_EXPLICIT_KEY,
      BG_DEFAULT_UI_MANUAL_KEY,
      BG_DEFAULT_UI_SELECTED_KEY
    ]);
    const hasCustom = typeof data[BG_STORAGE_KEY] === "string" && data[BG_STORAGE_KEY].trim() !== "";
    const customValue = hasCustom ? String(data[BG_STORAGE_KEY]).trim() : "";
    const customSource = typeof data[BG_SOURCE_KEY] === "string" ? data[BG_SOURCE_KEY] : "";
    const isSavedOldUiDefault = hasCustom && isOldUiDefaultBackgroundValue(customValue);
    const hasExplicitCustom = data[BG_CUSTOM_EXPLICIT_KEY] === true;
    const hasExplicitDefaultUi = data[BG_DEFAULT_UI_EXPLICIT_KEY] === true;
    const hasManualDefaultUiSelection = data[BG_DEFAULT_UI_MANUAL_KEY] === true;
    const hasCurrentDefaultUiSelection = data[BG_DEFAULT_UI_SELECTED_KEY] === true;
    const currentMode = data[BG_MODE_KEY];
    const isValidMode =
      currentMode === "custom" ||
      currentMode === "plain" ||
      currentMode === "browser" ||
      currentMode === BG_DEFAULT_UI_MODE;

    // First run behavior:
    // - If old/default background is detected, start in the extension's Default UI mode.
    // - If an old/custom background exists, mirror Chrome's live theme background.
    // - Otherwise, start in the extension's Default UI mode.
    if (!data[BG_INIT_KEY]) {
      if (hasCustom && !isSavedOldUiDefault) {
        await Promise.all([
          chrome.storage.local.remove(BG_STORAGE_KEY),
          chrome.storage.local.set({
            [BG_INIT_KEY]: true,
            [BG_MODE_KEY]: "browser",
            [BG_SOURCE_KEY]: "",
            [BG_MIGRATION_VERSION_KEY]: BG_MIGRATION_VERSION,
            [BG_CUSTOM_EXPLICIT_KEY]: false,
            [BG_DEFAULT_UI_EXPLICIT_KEY]: false,
            [BG_DEFAULT_UI_MANUAL_KEY]: false,
            [BG_DEFAULT_UI_SELECTED_KEY]: false
          })
        ]);
      } else {
        await Promise.all([
          chrome.storage.local.remove(BG_STORAGE_KEY),
          chrome.storage.local.set({
            [BG_INIT_KEY]: true,
            [BG_MODE_KEY]: BG_DEFAULT_UI_MODE,
            [BG_SOURCE_KEY]: "",
            [BG_MIGRATION_VERSION_KEY]: BG_MIGRATION_VERSION,
            [BG_CUSTOM_EXPLICIT_KEY]: false,
            [BG_DEFAULT_UI_EXPLICIT_KEY]: true,
            [BG_DEFAULT_UI_MANUAL_KEY]: true,
            [BG_DEFAULT_UI_SELECTED_KEY]: true
          })
        ]);
      }
      return;
    }

    const migrationVersion = Number(data[BG_MIGRATION_VERSION_KEY] || 0);
    if (migrationVersion < BG_MIGRATION_VERSION) {
      await chrome.storage.local.set({
        [BG_MIGRATION_VERSION_KEY]: BG_MIGRATION_VERSION
      });
    }

    // Migration: stale custom state without explicit opt-in should fall back to browser mirroring.
    // Keep old-default marker handling below so it can map to Default UI mode.
    if (currentMode === "custom" && hasCustom && !hasExplicitCustom && !isSavedOldUiDefault) {
      await chrome.storage.local.set({
        [BG_MODE_KEY]: "browser",
        [BG_SOURCE_KEY]: "",
        [BG_DEFAULT_UI_MANUAL_KEY]: false,
        [BG_DEFAULT_UI_SELECTED_KEY]: false
      });
      return;
    }

    // If the saved "custom" value is actually old Chrome's default background marker,
    // map it to the extension's Default UI mode.
    if (isSavedOldUiDefault) {
      await chrome.storage.local.remove(BG_STORAGE_KEY);
      await chrome.storage.local.set({
        [BG_MODE_KEY]: BG_DEFAULT_UI_MODE,
        [BG_SOURCE_KEY]: "",
        [BG_CUSTOM_EXPLICIT_KEY]: false,
        [BG_DEFAULT_UI_EXPLICIT_KEY]: true,
        [BG_DEFAULT_UI_MANUAL_KEY]: true,
        [BG_DEFAULT_UI_SELECTED_KEY]: true
      });
      return;
    }

    // Migration: invalid mode with no explicit custom should use Default UI mode.
    if (!isValidMode && !hasCustom) {
      await chrome.storage.local.set({
        [BG_MODE_KEY]: BG_DEFAULT_UI_MODE,
        [BG_SOURCE_KEY]: "",
        [BG_DEFAULT_UI_EXPLICIT_KEY]: true,
        [BG_DEFAULT_UI_MANUAL_KEY]: true,
        [BG_DEFAULT_UI_SELECTED_KEY]: true
      });
      return;
    }

    // Keep default_ui selections sticky across tabs/builds by normalizing legacy flags.
    if (
      currentMode === BG_DEFAULT_UI_MODE &&
      (!hasExplicitDefaultUi || !hasManualDefaultUiSelection || !hasCurrentDefaultUiSelection)
    ) {
      await chrome.storage.local.set({
        [BG_DEFAULT_UI_EXPLICIT_KEY]: true,
        [BG_DEFAULT_UI_MANUAL_KEY]: true,
        [BG_DEFAULT_UI_SELECTED_KEY]: true
      });
      return;
    }

    // Migration: stale URL-based custom backgrounds from older builds should mirror Chrome's live background.
    // Keep only explicit local uploads/data URLs and built-in bundled assets.
    const isLegacyUntaggedUrlCustom =
      currentMode === "custom" &&
      hasCustom &&
      !customValue.startsWith("data:") &&
      !customValue.includes("Mac OS Doodle/") &&
      !customValue.startsWith("chrome-extension://") &&
      customSource !== "theme" &&
      customSource !== "upload";

    if (isLegacyUntaggedUrlCustom) {
      await chrome.storage.local.set({
        [BG_MODE_KEY]: "browser",
        [BG_SOURCE_KEY]: "",
        [BG_CUSTOM_EXPLICIT_KEY]: false,
        [BG_DEFAULT_UI_EXPLICIT_KEY]: false,
        [BG_DEFAULT_UI_MANUAL_KEY]: false,
        [BG_DEFAULT_UI_SELECTED_KEY]: false
      });
      return;
    }
    // Default behavior: if user did not explicitly choose custom/plain/default-ui,
    // normalize to Default UI mode (new UI baseline).
    const shouldForceDefaultUiMode =
      !hasExplicitCustom &&
      !hasCustom &&
      !hasExplicitDefaultUi &&
      !hasManualDefaultUiSelection &&
      !hasCurrentDefaultUiSelection &&
      currentMode !== "custom" &&
      currentMode !== "plain" &&
      currentMode !== BG_DEFAULT_UI_MODE;

    if (shouldForceDefaultUiMode) {
      await chrome.storage.local.set({
        [BG_MODE_KEY]: BG_DEFAULT_UI_MODE,
        [BG_SOURCE_KEY]: "",
        [BG_DEFAULT_UI_EXPLICIT_KEY]: true,
        [BG_DEFAULT_UI_MANUAL_KEY]: true,
        [BG_DEFAULT_UI_SELECTED_KEY]: true
      });
      return;
    }

    // Keep valid modes (including plain/default-ui) unchanged.
  }

  async function loadBackground(initialData = null) {
    const data = initialData || await chrome.storage.local.get([
      BG_STORAGE_KEY,
      BG_SOURCE_KEY,
      BG_PLAIN_COLOR_KEY,
      BG_MODE_KEY,
      UI_THEME_KEY
    ]);
    const mode = await readBackgroundMode(data);
    const uiTheme = await readUiTheme(data);
    const rawBg = typeof data[BG_STORAGE_KEY] === "string" ? data[BG_STORAGE_KEY] : "";
    const bg = normalizeBuiltInBackgroundValue(rawBg);
    const bgSource = typeof data[BG_SOURCE_KEY] === "string" ? data[BG_SOURCE_KEY] : "";

    if (bg && rawBg && bg !== rawBg) {
      await chrome.storage.local.set({ [BG_STORAGE_KEY]: bg });
    }

    if (typeof bg === "string" && isBlockedBackgroundValue(bg)) {
      await Promise.all([
        chrome.storage.local.remove(BG_STORAGE_KEY),
        chrome.storage.local.remove(BG_SOURCE_KEY),
        chrome.storage.local.remove(BG_PLAIN_COLOR_KEY),
        chrome.storage.local.set({ [BG_CUSTOM_EXPLICIT_KEY]: false }),
        chrome.storage.local.set({ [BG_DEFAULT_UI_EXPLICIT_KEY]: true }),
        chrome.storage.local.set({ [BG_DEFAULT_UI_MANUAL_KEY]: true }),
        chrome.storage.local.set({ [BG_DEFAULT_UI_SELECTED_KEY]: true }),
        writeBackgroundMode(BG_DEFAULT_UI_MODE)
      ]);
      await loadBackground();
      return;
    }
    const plainColor =
      typeof data[BG_PLAIN_COLOR_KEY] === "string" && data[BG_PLAIN_COLOR_KEY].trim()
        ? data[BG_PLAIN_COLOR_KEY].trim()
        : "#000";
    let effectiveMode = mode || (bg ? "custom" : "browser");
    let renderMode = effectiveMode;

    const isMacTheme = isMacThemeBackground(bg, renderMode);
    document.body.classList.toggle("theme-macosx", isMacTheme);

    document.body.classList.toggle("use-browser-theme", renderMode === "browser");

    if (renderMode === "custom" && bg && isOldUiDefaultBackgroundValue(bg)) {
      renderMode = "browser";
    }

    if (renderMode === "custom" && bg) {
      document.body.style.backgroundImage = `url("${bg}")`;
      applyBackgroundViewport(bg);
    } else if (renderMode === "browser") {
      applyBrowserBackground();
    } else if (renderMode === BG_DEFAULT_UI_MODE) {
      document.body.style.backgroundImage = "none";
      applyBackgroundViewport("");
    } else {
      document.body.style.backgroundImage = "none";
      applyBackgroundViewport("");
    }

    currentBackgroundMode = renderMode;
    currentBackgroundValue = typeof bg === "string" ? bg : "";
    currentBackgroundSource = bgSource;
    currentPlainColor = renderMode === "plain" ? plainColor : "";

    applyDoodleForTheme(currentBackgroundValue, currentBackgroundMode, currentDoodleVariant);

    if (renderMode === "plain") {
      document.body.style.backgroundColor = plainColor;
    } else if (renderMode === BG_DEFAULT_UI_MODE) {
      document.body.style.backgroundColor = uiTheme === "dark" ? "#000" : "#f1f3f4";
    } else {
      document.body.style.backgroundColor = "";
    }
    writePreloadBackgroundCache(renderMode, typeof bg === "string" ? bg : "", plainColor, uiTheme);
    writePreloadDoodleCache(currentBackgroundValue, currentBackgroundMode, currentDoodleVariant, currentDoodleEnabled);
    clearPreloadStyle();
    updateSolidColorPreview(plainColor);
    syncDoodleVariantVisibility();
    updateCatalogSelectionState();
    applyUiTheme(uiTheme, renderMode);
  }

  async function saveBackground(dataUrl) {
    if (!isSupportedBackgroundDataUrl(dataUrl)) return;
    await Promise.all([
      chrome.storage.local.set({ [BG_STORAGE_KEY]: dataUrl }),
      chrome.storage.local.set({ [BG_SOURCE_KEY]: "upload" }),
      chrome.storage.local.remove(BG_PLAIN_COLOR_KEY),
      chrome.storage.local.set({ [BG_CUSTOM_EXPLICIT_KEY]: true }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_EXPLICIT_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_MANUAL_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_SELECTED_KEY]: false }),
      writeBackgroundMode("custom")
    ]);
    await loadBackground();
  }

  async function saveThemeBackground(imageUrl) {
    if (!imageUrl) return;
    const normalizedImageUrl = normalizeBuiltInBackgroundValue(imageUrl);
    if (isBlockedBackgroundValue(normalizedImageUrl)) {
      return;
    }
    await preloadBackgroundImage(normalizedImageUrl);
    await Promise.all([
      chrome.storage.local.set({ [BG_STORAGE_KEY]: normalizedImageUrl }),
      chrome.storage.local.set({ [BG_SOURCE_KEY]: "theme" }),
      chrome.storage.local.remove(BG_PLAIN_COLOR_KEY),
      chrome.storage.local.set({ [BG_CUSTOM_EXPLICIT_KEY]: true }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_EXPLICIT_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_MANUAL_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_SELECTED_KEY]: false }),
      writeBackgroundMode("custom")
    ]);
    await loadBackground();
  }

  async function clearBackground() {
    await Promise.all([
      chrome.storage.local.remove(BG_STORAGE_KEY),
      chrome.storage.local.remove(BG_SOURCE_KEY),
      chrome.storage.local.remove(BG_PLAIN_COLOR_KEY),
      chrome.storage.local.set({ [BG_CUSTOM_EXPLICIT_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_EXPLICIT_KEY]: true }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_MANUAL_KEY]: true }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_SELECTED_KEY]: true }),
      writeBackgroundMode(BG_DEFAULT_UI_MODE)
    ]);
    await loadBackground();
  }

  async function useDefaultChromeTheme(uiTheme) {
    await Promise.all([
      chrome.storage.local.remove(BG_STORAGE_KEY),
      chrome.storage.local.remove(BG_SOURCE_KEY),
      chrome.storage.local.remove(BG_PLAIN_COLOR_KEY),
      chrome.storage.local.set({ [BG_CUSTOM_EXPLICIT_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_EXPLICIT_KEY]: true }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_MANUAL_KEY]: true }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_SELECTED_KEY]: true }),
      writeBackgroundMode(BG_DEFAULT_UI_MODE),
      writeUiTheme(uiTheme)
    ]);
    await loadBackground();
  }

  async function applyPreviousBackgroundPreset() {
    const [data, uiTheme] = await Promise.all([
      chrome.storage.local.get(BG_STORAGE_KEY),
      readUiTheme()
    ]);
    const previousValue = typeof data[BG_STORAGE_KEY] === "string" ? data[BG_STORAGE_KEY].trim() : "";

    if (previousValue && isOldUiDefaultBackgroundValue(previousValue)) {
      await useDefaultChromeTheme(uiTheme);
      return;
    }

    if (previousValue && isJpgOrPngBackgroundValue(previousValue)) {
      await saveThemeBackground(previousValue);
      return;
    }

    await useDefaultChromeTheme(uiTheme);
  }

  async function refreshBrowserBackgroundIfNeeded() {
    const mode = await readBackgroundMode();
    if (mode === "browser") {
      applyBrowserBackground();
    }
  }

  async function useSolidColor(color) {
    await Promise.all([
      chrome.storage.local.remove(BG_STORAGE_KEY),
      chrome.storage.local.set({ [BG_CUSTOM_EXPLICIT_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_EXPLICIT_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_MANUAL_KEY]: false }),
      chrome.storage.local.set({ [BG_DEFAULT_UI_SELECTED_KEY]: false }),
      chrome.storage.local.set({ [BG_SOURCE_KEY]: "plain" }),
      chrome.storage.local.set({ [BG_PLAIN_COLOR_KEY]: color }),
      writeBackgroundMode("plain")
    ]);
    document.body.style.backgroundColor = color;
    document.body.style.backgroundImage = "none";
    currentBackgroundMode = "plain";
    currentBackgroundValue = "";
    currentBackgroundSource = "plain";
    currentPlainColor = color;
    updateSolidColorPreview(color);
    syncDoodleVariantVisibility();
    updateCatalogSelectionState();
  }

  async function getStoredShortcuts() {
    const data = await chrome.storage.local.get(SHORTCUTS_STORAGE_KEY);
    return normalizeShortcutList(data[SHORTCUTS_STORAGE_KEY]);
  }

  async function saveShortcuts(shortcuts) {
    const normalized = writeShortcutCache(shortcuts) || [];
    await chrome.storage.local.set({ [SHORTCUTS_STORAGE_KEY]: normalized });
    return normalized;
  }

  async function initializeShortcuts() {
    const stored = await getStoredShortcuts();
    if (stored !== null) {
      writeShortcutCache(stored);
      return stored;
    }
    const sites = await chrome.topSites.get();
    const initial = sites
      .filter((s) => s.url && s.title)
      .map((s) => ({ title: s.title, url: s.url }));
    return saveShortcuts(initial);
  }

  function renderAppsPanel() {
    if (!appsGrid) return;
    appsPanelRendered = true;
    appsGrid.innerHTML = "";
    for (const app of GOOGLE_APPS) {
      const link = document.createElement("a");
      link.className = "app-link";
      link.href = app.url;
      link.title = app.name;

      const icon = document.createElement("img");
      icon.className = "app-icon";
      const candidates = Array.isArray(app.iconCandidates)
        ? [
            ...app.iconCandidates,
            app.icon,
            largeFaviconFor(app.url),
            faviconFor(app.url),
            remoteFaviconFor(app.url, 128),
            remoteFaviconFor(app.url, 64)
          ].filter(Boolean)
        : [
            app.icon,
            largeFaviconFor(app.url),
            faviconFor(app.url),
            remoteFaviconFor(app.url, 128),
            remoteFaviconFor(app.url, 64)
          ].filter(Boolean);
      icon.src = candidates.shift() || faviconFor(app.url);
      icon.onerror = () => {
        const next = candidates.shift();
        if (next) {
          icon.src = next;
        }
      };
      icon.alt = "";
      icon.loading = "lazy";
      icon.decoding = "async";

      const label = document.createElement("span");
      label.className = "app-name";
      label.textContent = app.name;

      link.appendChild(icon);
      link.appendChild(label);
      appsGrid.appendChild(link);
    }
  }

  function setAppsPanelOpen(isOpen) {
    if (!appsPanel || !appsBtn) return;
    appsPanel.classList.toggle("hidden", !isOpen);
    appsBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (isOpen) {
      if (!appsPanelRendered) {
        renderAppsPanel();
      }
      initAppsIframe();
      if (appsIframeReady) {
        setAppsIframeMode(true);
      } else {
        setAppsIframeMode(false);
        updateAppsScrollState();
      }
    } else if (appsIframeFallbackTimer) {
      clearTimeout(appsIframeFallbackTimer);
      appsIframeFallbackTimer = null;
    }
  }

  function updateAppsScrollState() {
    if (!appsPanel || !appsScroll) return;
    const maxTop = appsScroll.scrollHeight - appsScroll.clientHeight;
    const canScroll = maxTop > 2;
    const atTop = appsScroll.scrollTop <= 1;
    const atBottom = appsScroll.scrollTop >= maxTop - 1;
    appsPanel.classList.toggle("apps-can-scroll", canScroll);
    appsPanel.classList.toggle("apps-scroll-top", canScroll && !atTop);
    appsPanel.classList.toggle("apps-scroll-bottom", canScroll && !atBottom);
  }

  function renderAddShortcutTile(shortcuts) {
    const add = document.createElement("button");
    add.type = "button";
    add.className = "shortcut add-shortcut";
    add.innerHTML = '<span class="add-plus">+</span><span class="shortcut-title">Add shortcut</span>';
    add.addEventListener("click", async () => {
      const rawUrl = window.prompt("Shortcut URL (example: https://example.com)");
      if (!rawUrl) return;
      const normalized = normalizeUrl(rawUrl);
      if (!normalized) {
        window.alert("Please enter a valid URL.");
        return;
      }
      const titleInput = window.prompt("Shortcut name", makeTitleFromUrl(normalized));
      const title = (titleInput || "").trim() || makeTitleFromUrl(normalized);
      shortcuts.push({ title, url: normalized });
      await saveShortcuts(shortcuts);
      renderShortcuts(shortcuts);
    });
    return add;
  }

  function renderThemeSection(sectionTitle, themes) {
    if (!themesList) return;
    themesList.innerHTML = "";
    if (themesSectionTitle) themesSectionTitle.textContent = sectionTitle;

    if (!themes.length) {
      const empty = document.createElement("div");
      empty.className = "theme-empty";
      empty.textContent = "No themes added yet.";
      themesList.appendChild(empty);
      return;
    }

    const fragment = document.createDocumentFragment();
    for (const [index, theme] of themes.entries()) {
      fragment.appendChild(buildThemeCard(theme, index));
    }
    themesList.appendChild(fragment);
  }

  function renderRisingArtists(themes = getThemeCollection("risingArtists")) {
    renderThemeSection("Rising artists", themes);
  }

  function renderNativeAmericanArtists(themes = getThemeCollection("nativeAmerican")) {
    renderThemeSection("Native American artists", themes);
  }

  function renderArturoTorresCollection(themes = getThemeCollection("arturoTorres")) {
    renderThemeSection("Arturo Torres collection", themes);
  }

  function renderMacOsXThemes(themes = getThemeCollection("macOsX")) {
    renderThemeSection("Mac OS X", themes);
  }

  function renderAsianPacificArtists(themes = getThemeCollection("asianPacific")) {
    renderThemeSection("Asian and Pacific Islander artists", themes);
  }

  function renderLatinoArtists(themes = getThemeCollection("latinoArtists")) {
    renderThemeSection("Latino artists", themes);
  }

  function renderBlackArtists(themes = getThemeCollection("blackArtists")) {
    renderThemeSection("Black artists", themes);
  }

  function renderLandscapes(themes = getThemeCollection("landscapes")) {
    renderThemeSection("Landscapes", themes);
  }

  function renderTextures(themes = getThemeCollection("textures")) {
    renderThemeSection("Textures", themes);
  }

  function renderGeometricShapes(themes = getThemeCollection("geometricShapes")) {
    renderThemeSection("Geometric shapes", themes);
  }

  function renderEarth(themes = getThemeCollection("earth")) {
    renderThemeSection("Earth", themes);
  }

  function renderArt(themes = getThemeCollection("art")) {
    renderThemeSection("Art", themes);
  }

  function renderCityscape(themes = getThemeCollection("cityscape")) {
    renderThemeSection("Cityscape", themes);
  }

  function renderSeascapes(themes = getThemeCollection("seascapes")) {
    renderThemeSection("Seascapes", themes);
  }

  function renderLife(themes = getThemeCollection("life")) {
    renderThemeSection("Life", themes);
  }

  function renderVibeCanvas(themes = getThemeCollection("vibeCanvas")) {
    renderThemeSection(`Vibe Canvas (${themes.length})`, themes);
  }

  const CATALOG_THUMB_SIZE_SUFFIX = "=w320-h180-p-k-no-nd-mv";
  const THEME_LIST_THUMB_SIZE_SUFFIX = "=w256-h144-p-k-no-nd-mv";
  const THUMBNAIL_PRELOAD_LIMIT_PER_SECTION = 8;
  const thumbnailPreloadCache = new Map();
  const backgroundPreloadCache = new Map();
  const themeSectionPreloadCache = new Map();
  let themeSectionWarmScheduled = false;

  function toCatalogThumbnailUrl(imageUrl) {
    if (!imageUrl) return "";
    const raw = String(imageUrl).trim();
    if (!/^https:\/\/lh\d\.googleusercontent\.com\/proxy\//i.test(raw)) {
      return raw;
    }
    if (/=w\d+-h\d+-p-k-no-nd-mv$/i.test(raw)) {
      return raw.replace(/=w\d+-h\d+-p-k-no-nd-mv$/i, CATALOG_THUMB_SIZE_SUFFIX);
    }
    return raw;
  }

  function toThemeListThumbnailUrl(imageUrl) {
    if (!imageUrl) return "";
    const raw = String(imageUrl).trim();
    if (!/^https:\/\/lh\d\.googleusercontent\.com\/proxy\//i.test(raw)) {
      return raw;
    }
    if (/=w\d+-h\d+-p-k-no-nd-mv$/i.test(raw)) {
      return raw.replace(/=w\d+-h\d+-p-k-no-nd-mv$/i, THEME_LIST_THUMB_SIZE_SUFFIX);
    }
    return raw;
  }

  function preloadImage(url, fetchPriority = "low") {
    if (!url) return Promise.resolve();
    if (thumbnailPreloadCache.has(url)) {
      return thumbnailPreloadCache.get(url);
    }

    const preloadPromise = new Promise((resolve) => {
      const img = new Image();
      let settled = false;

      const finish = () => {
        if (settled) return;
        settled = true;
        resolve();
      };

      const finalizeLoad = () => {
        if (settled) return;
        if (typeof img.decode === "function") {
          img.decode()
            .catch(() => {})
            .finally(finish);
          return;
        }
        finish();
      };

      img.decoding = "async";
      img.fetchPriority = fetchPriority;
      img.onload = finalizeLoad;
      img.onerror = finish;
      img.src = url;
      if (img.complete) {
        finalizeLoad();
      }
    });

    thumbnailPreloadCache.set(url, preloadPromise);
    return preloadPromise;
  }

  function preloadBackgroundImage(url) {
    const normalizedUrl = typeof url === "string" ? url.trim() : "";
    if (!normalizedUrl) return Promise.resolve();
    if (backgroundPreloadCache.has(normalizedUrl)) {
      return backgroundPreloadCache.get(normalizedUrl);
    }

    const preloadPromise = new Promise((resolve) => {
      const img = new Image();
      let settled = false;

      const finish = () => {
        if (settled) return;
        settled = true;
        resolve();
      };

      const timeoutId = window.setTimeout(finish, 4000);

      const finalizeLoad = () => {
        if (settled) return;
        if (typeof img.decode === "function") {
          img.decode()
            .catch(() => {})
            .finally(() => {
              clearTimeout(timeoutId);
              finish();
            });
          return;
        }
        clearTimeout(timeoutId);
        finish();
      };

      img.decoding = "async";
      img.fetchPriority = "high";
      img.onload = finalizeLoad;
      img.onerror = () => {
        clearTimeout(timeoutId);
        finish();
      };
      img.src = normalizedUrl;
      if (img.complete) {
        finalizeLoad();
      }
    });

    backgroundPreloadCache.set(normalizedUrl, preloadPromise);
    return preloadPromise;
  }

  function collectCatalogThumbnailUrls() {
    return getThemeGroups()
      .map((themes) => toCatalogThumbnailUrl(themes?.[0]?.imageUrl))
      .filter(Boolean);
  }

  function preloadCatalogThumbnails() {
    for (const url of collectCatalogThumbnailUrls()) {
      preloadImage(url);
    }
  }

  function preloadThemeSectionThumbnails(themes, limit = THUMBNAIL_PRELOAD_LIMIT_PER_SECTION, fetchPriority = "low") {
    if (!Array.isArray(themes) || !themes.length) return Promise.resolve();
    const urls = themes
      .slice(0, Math.max(1, limit))
      .map((theme) => toThemeListThumbnailUrl(theme?.imageUrl))
      .filter(Boolean);
    return Promise.all(urls.map((url) => preloadImage(url, fetchPriority)));
  }

  function preloadThemeCollectionByKey(key, fetchPriority = "low") {
    if (!key) return Promise.resolve(EMPTY_THEMES);
    if (themeSectionPreloadCache.has(key)) {
      return themeSectionPreloadCache.get(key);
    }

    const themes = getThemeCollection(key);
    const preloadPromise = preloadThemeSectionThumbnails(themes, themes.length, fetchPriority)
      .catch(() => {})
      .then(() => themes);

    themeSectionPreloadCache.set(key, preloadPromise);
    return preloadPromise;
  }

  function deferPreloadThemeSections() {
    if (themeSectionWarmScheduled) return;
    themeSectionWarmScheduled = true;
    const keys = THEME_CARD_PAIRS.map(([key]) => key);
    let index = 0;
    const step = () => {
      if (index >= keys.length) return;
      preloadThemeCollectionByKey(keys[index]);
      index += 1;
      setTimeout(step, 90);
    };
    setTimeout(step, 0);
  }

  function warmAllThemeCollections() {
    if (themeSectionWarmScheduled) return;
    themeSectionWarmScheduled = true;
    for (const [key] of THEME_CARD_PAIRS) {
      preloadThemeCollectionByKey(key);
    }
  }

  function buildThemeCard(theme, index) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "theme-card";
    row.title = `Apply ${theme.name}`;
    row.setAttribute("aria-label", `Apply ${theme.name}`);

    const thumb = document.createElement("img");
    thumb.className = "theme-thumb";
    thumb.alt = "";
    thumb.decoding = "async";
    thumb.loading = "eager";
    if ("fetchPriority" in thumb) {
      thumb.fetchPriority = index < 9 ? "high" : "auto";
    }
    thumb.src = toThemeListThumbnailUrl(theme.imageUrl);

    const isSelected = hasSelectedPresetBackground() && currentBackgroundValue === theme.imageUrl;
    if (isSelected) {
      row.classList.add("is-selected");
    }

    const name = document.createElement("div");
    name.className = "theme-name";
    name.textContent = theme.name;

    row.addEventListener("click", async () => {
      await saveThemeBackground(theme.imageUrl);
      bgPanel?.classList.add("hidden");
    });

    row.appendChild(thumb);
    row.appendChild(name);
    return row;
  }

  function setCatalogCardThumbnail(card, themes) {
    if (!card || !Array.isArray(themes) || !themes.length) return;
    const thumb = card.querySelector(".catalog-thumb");
    if (!thumb) return;
    let thumbImage = thumb.querySelector(".catalog-thumb-image");
    if (thumb.dataset.staticThumbnail === "true") {
      thumbImage?.remove();
      return;
    }
    const firstImage = themes[0]?.imageUrl;
    if (!firstImage) return;
    const thumbUrl = toCatalogThumbnailUrl(firstImage);
    if (!thumbImage) {
      thumbImage = document.createElement("img");
      thumbImage.className = "catalog-thumb-image";
      thumbImage.alt = "";
      thumbImage.decoding = "async";
      thumbImage.loading = "eager";
      thumb.appendChild(thumbImage);
    }
    if ("fetchPriority" in thumbImage) {
      thumbImage.fetchPriority = "low";
    }
    if (thumbImage.src !== thumbUrl) {
      thumbImage.src = thumbUrl;
    }
  }

  function applyCatalogCategoryThumbnails() {
    for (const [key, card] of THEME_CARD_PAIRS) {
      setCatalogCardThumbnail(card, getThemeCollection(key));
    }
  }

  async function ensureCatalogCategoryThumbnails() {
    if (catalogThumbnailsApplied) return;
    await ensureThemeCollectionsLoaded();
    if (catalogThumbnailsApplied) return;
    catalogThumbnailsApplied = true;
    applyCatalogCategoryThumbnails();
  }

  function openThemeCollection(renderFn, themes) {
    themesCatalog?.classList.add("hidden");
    themesListWrap?.classList.remove("hidden");
    renderFn(themes);
  }

  function renderSolidColors() {
    if (!themesList) return;
    themesList.innerHTML = "";
    if (themesSectionTitle) themesSectionTitle.textContent = "Solid colours";
    updateSolidColorPreview(currentPlainColor || SOLID_COLORS[0]);

    for (const color of SOLID_COLORS) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "color-swatch";
      btn.title = color;
      btn.setAttribute("aria-label", `Use color ${color}`);
      btn.style.background = color;
      if (currentBackgroundMode === "plain" && currentPlainColor === color) {
        btn.classList.add("is-selected");
      }
      btn.addEventListener("click", async () => {
        await useSolidColor(color);
        bgPanel?.classList.add("hidden");
        themesCatalog?.classList.add("hidden");
        themesListWrap?.classList.add("hidden");
      });
      themesList.appendChild(btn);
    }

  }


  async function openThemeCollectionByKey(renderFn, key) {
    try {
      const collections = await ensureThemeCollectionsLoaded();
      await preloadThemeCollectionByKey(key, "high");
      openThemeCollection(renderFn, collections[key] || EMPTY_THEMES);
    } catch {
      // Ignore deferred catalog load failures and keep the page responsive.
    }
  }

  function warmThemeCatalog() {
    scheduleIdleTask(() => {
      ensureThemeCollectionsLoaded()
        .then(() => {
          catalogThumbnailsApplied = true;
          applyCatalogCategoryThumbnails();
          preloadCatalogThumbnails();
          deferPreloadThemeSections();
          updateCatalogSelectionState();
        })
        .catch(() => {
          // Keep startup resilient if the deferred catalog import fails.
        });
    }, 50);
  }

  function warmThemeCollectionOnIntent(key) {
    ensureThemeCollectionsLoaded()
      .then(() => preloadThemeCollectionByKey(key))
      .catch(() => {
        // Ignore warmup failures and keep the picker interactive.
      });
  }

  function attachCatalogWarmupHandlers() {
    for (const [key, card] of THEME_CARD_PAIRS) {
      if (!card) continue;
      const warm = () => warmThemeCollectionOnIntent(key);
      card.addEventListener("pointerenter", warm, { passive: true });
      card.addEventListener("focus", warm);
      card.addEventListener("pointerdown", warm, { passive: true });
    }
  }

  async function openRisingArtists() {
    await openThemeCollectionByKey(renderRisingArtists, "risingArtists");
  }

  function openSolidColors() {
    themesCatalog?.classList.add("hidden");
    themesListWrap?.classList.remove("hidden");
    renderSolidColors();
  }

  async function openNativeAmericanArtists() {
    await openThemeCollectionByKey(renderNativeAmericanArtists, "nativeAmerican");
  }

  async function openArturoTorresCollection() {
    await openThemeCollectionByKey(renderArturoTorresCollection, "arturoTorres");
  }

  async function openMacOsXThemes() {
    try {
      const collections = await ensureThemeCollectionsLoaded();
      const macTheme = collections.macOsX?.[0];
      if (!macTheme?.imageUrl) return;
      await saveThemeBackground(macTheme.imageUrl);
      bgPanel?.classList.add("hidden");
      themesCatalog?.classList.add("hidden");
      themesListWrap?.classList.add("hidden");
    } catch {
      // Ignore deferred catalog load failures and keep the page responsive.
    }
  }

  async function openAsianPacificArtists() {
    await openThemeCollectionByKey(renderAsianPacificArtists, "asianPacific");
  }

  async function openLatinoArtists() {
    await openThemeCollectionByKey(renderLatinoArtists, "latinoArtists");
  }

  async function openBlackArtists() {
    await openThemeCollectionByKey(renderBlackArtists, "blackArtists");
  }

  async function openLandscapes() {
    await openThemeCollectionByKey(renderLandscapes, "landscapes");
  }

  async function openTextures() {
    await openThemeCollectionByKey(renderTextures, "textures");
  }

  async function openGeometricShapes() {
    await openThemeCollectionByKey(renderGeometricShapes, "geometricShapes");
  }

  async function openEarth() {
    await openThemeCollectionByKey(renderEarth, "earth");
  }

  async function openArt() {
    await openThemeCollectionByKey(renderArt, "art");
  }

  async function openCityscape() {
    await openThemeCollectionByKey(renderCityscape, "cityscape");
  }

  async function openSeascapes() {
    await openThemeCollectionByKey(renderSeascapes, "seascapes");
  }

  async function openLife() {
    await openThemeCollectionByKey(renderLife, "life");
  }

  async function openVibeCanvas() {
    await openThemeCollectionByKey(renderVibeCanvas, "vibeCanvas");
  }

  async function openThemesCatalog() {
    try {
      await ensureCatalogCategoryThumbnails();
      warmAllThemeCollections();
    } catch {
      // Ignore deferred catalog load failures and keep the dialog usable.
    }
    themesCatalog?.classList.remove("hidden");
    themesListWrap?.classList.add("hidden");
    updateCatalogSelectionState();
  }

  function renderShortcuts(shortcuts) {
    if (!grid || !template) return;
    const fragment = document.createDocumentFragment();
    for (const [index, site] of shortcuts.entries()) {
      const node = template.content.firstElementChild.cloneNode(true);
      const link = node;
      const icon = node.querySelector(".shortcut-icon");
      const title = node.querySelector(".shortcut-title");
      const del = node.querySelector(".shortcut-delete");

      link.href = site.url;
      link.title = site.title;
      applyShortcutIcon(icon, site.url, index);
      title.textContent = site.title;

      del.addEventListener("click", async (event) => {
        event.preventDefault();
        event.stopPropagation();
        shortcuts.splice(index, 1);
        await saveShortcuts(shortcuts);
        renderShortcuts(shortcuts);
      });

      fragment.appendChild(node);
    }
    fragment.appendChild(renderAddShortcutTile(shortcuts));
    grid.replaceChildren(fragment);
  }

  function runSearch(useAiMode) {
    const value = input?.value || "";
    const maybeUrl = normalizeUrl(value);
    if (maybeUrl && !useAiMode) {
      window.location.href = maybeUrl;
      return;
    }
    const base = useAiMode
      ? "https://www.google.com/search?udm=50&q="
      : "https://www.google.com/search?q=";
    window.location.href = `${base}${encodeURIComponent(value)}`;
  }

  function setImageSearchLoading(isLoading) {
    if (!imageSearchLoading) return;
    imageSearchLoading.classList.toggle("hidden", !isLoading);
    imageSearchDialog?.setAttribute("aria-busy", isLoading ? "true" : "false");
  }

  function setImageSearchDialogOpen(isOpen) {
    if (!imageSearchDialogOverlay) return;
    imageSearchDialogOverlay.classList.toggle("hidden", !isOpen);
    imageSearchDialogOverlay.setAttribute("aria-hidden", isOpen ? "false" : "true");
    if (isOpen) {
      setImageSearchLoading(false);
      imageSearchUrlInput?.focus();
    } else {
      imageSearchDropZone?.classList.remove("is-dragover");
      if (imageSearchUrlInput) imageSearchUrlInput.value = "";
      setImageSearchLoading(false);
    }
  }

  function searchImageByUrl(rawUrl) {
    const normalized = normalizeUrl(rawUrl);
    if (!normalized) return false;
    window.location.href = `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(normalized)}`;
    return true;
  }

  function submitSelectedImageSearch() {
    const file = imageSearchFile?.files?.[0];
    if (!file) return;
    setImageSearchLoading(true);
    // Let the loading overlay paint before the navigation starts.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        imageSearchUploadForm?.submit();
      });
    });
  }

  function startImageSearchFlow() {
    setImageSearchDialogOpen(true);
  }

  function submitImageSearchLink() {
    const query = imageSearchUrlInput?.value?.trim() || "";
    if (!query) return;
    if (!searchImageByUrl(query)) {
      alert("Please paste a valid image URL.");
      return;
    }
    setImageSearchDialogOpen(false);
  }
  function removeLegacyBottomBar() {
    // Disabled: legacy cleanup was removing active controls (e.g. Doodle toggle).
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    runSearch(false);
  });

  aiModeBtn?.addEventListener("click", () => {
    runSearch(true);
  });

  imageSearchBtn?.addEventListener("click", startImageSearchFlow);

  imageSearchDialogClose?.addEventListener("click", () => {
    setImageSearchDialogOpen(false);
  });

  imageSearchDialogOverlay?.addEventListener("click", (event) => {
    if (event.target === imageSearchDialogOverlay) {
      setImageSearchDialogOpen(false);
    }
  });

  imageSearchUploadBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    setImageSearchLoading(false);
    if (imageSearchFile) imageSearchFile.value = "";
    imageSearchFile?.click();
  });

  imageSearchDropZone?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setImageSearchLoading(false);
      if (imageSearchFile) imageSearchFile.value = "";
      imageSearchFile?.click();
    }
  });

  imageSearchUrlSubmit?.addEventListener("click", submitImageSearchLink);
  imageSearchUrlInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitImageSearchLink();
    }
  });

  imageSearchDropZone?.addEventListener("dragenter", (event) => {
    event.preventDefault();
    imageSearchDropZone.classList.add("is-dragover");
  });

  imageSearchDropZone?.addEventListener("dragover", (event) => {
    event.preventDefault();
    imageSearchDropZone.classList.add("is-dragover");
  });

  imageSearchDropZone?.addEventListener("dragleave", (event) => {
    event.preventDefault();
    const nextTarget = event.relatedTarget;
    if (!(nextTarget instanceof Node) || !imageSearchDropZone.contains(nextTarget)) {
      imageSearchDropZone.classList.remove("is-dragover");
    }
  });

  imageSearchDropZone?.addEventListener("drop", (event) => {
    event.preventDefault();
    imageSearchDropZone.classList.remove("is-dragover");
    const droppedFile = event.dataTransfer?.files?.[0];
    if (!droppedFile || !droppedFile.type.startsWith("image/")) return;
    if (!imageSearchFile) return;
    setImageSearchLoading(false);
    try {
      const transfer = new DataTransfer();
      transfer.items.add(droppedFile);
      imageSearchFile.files = transfer.files;
      submitSelectedImageSearch();
    } catch {
      if (imageSearchFile) imageSearchFile.value = "";
      imageSearchFile.click();
    }
  });

  imageSearchFile?.addEventListener("change", () => {
    submitSelectedImageSearch();
  });

  doodleToggleBtn?.addEventListener("click", async () => {
    const isEnabled = doodleToggleBtn.dataset.enabled === "true";
    const next = !isEnabled;
    await chrome.storage.local.set({ [NEWTAB_DOODLE_ENABLED_KEY]: next });
    setDoodleToggleUI(next);
    setDoodleVisibilityBySetting(next);
    writePreloadDoodleCache(currentBackgroundValue, currentBackgroundMode, currentDoodleVariant, next);
  });

  doodleVariantBtn?.addEventListener("click", async () => {
    const current = normalizeDoodleVariant(doodleVariantBtn.dataset.variant);
    const next =
      current === "logo1" ? "logo2" :
      current === "logo2" ? "logo3" :
      current === "logo3" ? "logo4" :
      "logo1";
    await chrome.storage.local.set({ [DOODLE_VARIANT_KEY]: next });
    currentDoodleVariant = next;
    setDoodleVariantUI(next);
    applyDoodleForTheme(currentBackgroundValue, currentBackgroundMode, next);
    writePreloadDoodleCache(currentBackgroundValue, currentBackgroundMode, next, currentDoodleEnabled);
  });

  defaultUiModeBtn?.addEventListener("click", async () => {
    const mode = await readBackgroundMode();
    if (mode !== BG_DEFAULT_UI_MODE) return;
    const currentTheme = await readUiTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    await useDefaultChromeTheme(nextTheme);
  });

  appsBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    const shouldOpen = appsPanel?.classList.contains("hidden") ?? true;
    setAppsPanelOpen(shouldOpen);
  });

  accountChip?.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (accountChip.classList.contains("hidden")) return;
    const shouldOpen = accountMenu?.classList.contains("hidden") ?? true;
    setAccountMenuOpen(shouldOpen);
  });

  accountSignOutBtn?.addEventListener("click", async () => {
    await chrome.storage.local.set({ [ACCOUNT_SIGNED_OUT_KEY]: true });
    setAccountChip("");
  });

  accountSignInBtn?.addEventListener("click", async () => {
    await chrome.storage.local.set({ [ACCOUNT_SIGNED_OUT_KEY]: false });
  });

  accountChangePhotoBtn?.addEventListener("click", () => {
    accountPhotoFile?.click();
  });

  accountPhotoFile?.addEventListener("change", () => {
    const file = accountPhotoFile.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      if (accountPhotoFile) accountPhotoFile.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      const result = reader.result;
      if (typeof result === "string") {
        await chrome.storage.local.set({
          [ACCOUNT_CUSTOM_AVATAR_KEY]: result,
          [ACCOUNT_SIGNED_OUT_KEY]: false
        });
        await loadAccountChip();
      }
      if (accountPhotoFile) accountPhotoFile.value = "";
      setAccountMenuOpen(false);
    };
    reader.readAsDataURL(file);
  });

  accountAddAccountBtn?.addEventListener("click", async () => {
    await chrome.storage.local.set({ [ACCOUNT_SIGNED_OUT_KEY]: false });
    window.open("https://accounts.google.com/AddSession", "_blank", "noopener");
    setAccountMenuOpen(false);
  });

  appsThemeToggleBtn?.addEventListener("click", async () => {
    const next = appsPanel?.classList.contains("apps-light") ? "dark" : "light";
    applyAppsFrameTheme(next);
    await chrome.storage.local.set({ [APPS_FRAME_THEME_KEY]: next });
  });

  bgBtn?.addEventListener("click", () => {
    bgPanel?.classList.toggle("hidden");
    if (bgPanel && !bgPanel.classList.contains("hidden")) {
      openThemesCatalog();
    }
  });

  themesMenuBtn?.addEventListener("click", async () => {
    await applyPreviousBackgroundPreset();
    themesCatalog?.classList.add("hidden");
    themesListWrap?.classList.add("hidden");
  });

  themesBackBtn?.addEventListener("click", openThemesCatalog);
  risingArtistsCard?.addEventListener("click", openRisingArtists);
  macOsXCard?.addEventListener("click", openMacOsXThemes);
  arturoTorresCard?.addEventListener("click", openArturoTorresCollection);
  nativeAmericanArtistsCard?.addEventListener("click", openNativeAmericanArtists);
  asianPacificArtistsCard?.addEventListener("click", openAsianPacificArtists);
  latinoArtistsCard?.addEventListener("click", openLatinoArtists);
  blackArtistsCard?.addEventListener("click", openBlackArtists);
  landscapesCard?.addEventListener("click", openLandscapes);
  texturesCard?.addEventListener("click", openTextures);
  geometricShapesCard?.addEventListener("click", openGeometricShapes);
  earthCard?.addEventListener("click", openEarth);
  artCard?.addEventListener("click", openArt);
  cityscapeCard?.addEventListener("click", openCityscape);
  seascapesCard?.addEventListener("click", openSeascapes);
  lifeCard?.addEventListener("click", openLife);
  vibeCanvasCard?.addEventListener("click", openVibeCanvas);
  attachCatalogWarmupHandlers();

  defaultThemeCard?.addEventListener("click", async () => {
    const theme = await readUiTheme();
    await useDefaultChromeTheme(theme);
    bgPanel?.classList.add("hidden");
    themesCatalog?.classList.add("hidden");
    themesListWrap?.classList.add("hidden");
  });

  uploadThemeCard?.addEventListener("click", () => {
    bgFile?.click();
  });

  solidColoursCard?.addEventListener("click", openSolidColors);

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;

    if (
      bgPanel &&
      bgBtn &&
      !bgPanel.contains(target) &&
      !bgBtn.contains(target)
    ) {
      bgPanel.classList.add("hidden");
      themesCatalog?.classList.add("hidden");
      themesListWrap?.classList.add("hidden");
    }

    if (appsPanel && appsBtn && !appsPanel.contains(target) && !appsBtn.contains(target)) {
      setAppsPanelOpen(false);
    }
    if (
      accountMenu &&
      accountChip &&
      !accountMenu.contains(target) &&
      !accountChip.contains(target)
    ) {
      setAccountMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setAppsPanelOpen(false);
      setAccountMenuOpen(false);
      setImageSearchDialogOpen(false);
      bgPanel?.classList.add("hidden");
      themesCatalog?.classList.add("hidden");
      themesListWrap?.classList.add("hidden");
    }
  });

  appsScroll?.addEventListener("scroll", updateAppsScrollState);
  window.addEventListener("resize", updateAppsScrollState);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      loadAccountChip();
      refreshBrowserBackgroundIfNeeded();
    }
  });
  window.addEventListener("focus", () => {
    refreshBrowserBackgroundIfNeeded();
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "local") return;
    if (changes[ENHANCED_NEW_TAB_ENABLED_KEY]) {
      const enabled = changes[ENHANCED_NEW_TAB_ENABLED_KEY].newValue !== false;
      if (!enabled) {
        window.location.replace(NATIVE_NEW_TAB_URL);
        return;
      }
      window.location.reload();
      return;
    }
    if (changes[NEWTAB_DOODLE_ENABLED_KEY]) {
      const enabled = Boolean(changes[NEWTAB_DOODLE_ENABLED_KEY].newValue);
      setDoodleToggleUI(enabled);
      setDoodleVisibilityBySetting(enabled);
      writePreloadDoodleCache(currentBackgroundValue, currentBackgroundMode, currentDoodleVariant, enabled);
    }
    if (changes[DOODLE_VARIANT_KEY]) {
      const variant = normalizeDoodleVariant(changes[DOODLE_VARIANT_KEY].newValue);
      currentDoodleVariant = variant;
      setDoodleVariantUI(variant);
      applyDoodleForTheme(currentBackgroundValue, currentBackgroundMode, variant);
      writePreloadDoodleCache(currentBackgroundValue, currentBackgroundMode, variant, currentDoodleEnabled);
    }
    if (changes[APPS_FRAME_THEME_KEY]) {
      const theme = changes[APPS_FRAME_THEME_KEY].newValue === "light" ? "light" : "dark";
      applyAppsFrameTheme(theme);
    }
    if (changes[SHORTCUTS_STORAGE_KEY]) {
      const shortcuts = normalizeShortcutList(changes[SHORTCUTS_STORAGE_KEY].newValue) || [];
      writeShortcutCache(shortcuts);
      renderShortcuts(shortcuts);
    }
    if (changes[BG_MODE_KEY] || changes[UI_THEME_KEY]) {
      loadBackground();
    }
  });

  bgFile?.addEventListener("change", () => {
    const file = bgFile.files?.[0];
    if (!file) return;
    if (!isSupportedBackgroundUpload(file)) {
      alert("Only JPG and PNG files are supported for uploaded backgrounds.");
      bgFile.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const result = reader.result;
      if (typeof result === "string") {
        await saveBackground(result);
      }
      bgFile.value = "";
      bgPanel?.classList.add("hidden");
      themesCatalog?.classList.add("hidden");
      themesListWrap?.classList.add("hidden");
    };
    reader.readAsDataURL(file);
  });

  function schedulePostBootTasks(bootData) {
    scheduleIdleTask(() => {
      loadAppsFrameTheme(bootData);
      loadAccountChip();
    }, 700);

    warmThemeCatalog();
  }

  function primeVisibleUi() {
    renderCachedShortcuts();
    requestAnimationFrame(() => {
      input?.focus({ preventScroll: true });
    });
    hydrateShortcuts().catch(() => {
      // Keep the main page interactive even if shortcut hydration fails.
    });
  }

  async function boot() {
    try {
      const bootData = await chrome.storage.local.get([
        ENHANCED_NEW_TAB_ENABLED_KEY,
        HOMEPAGE_DOODLE_ENABLED_KEY,
        NEWTAB_DOODLE_ENABLED_KEY,
        DOODLE_VARIANT_KEY,
        APPS_FRAME_THEME_KEY,
        BG_STORAGE_KEY,
        BG_SOURCE_KEY,
        BG_PLAIN_COLOR_KEY,
        BG_MODE_KEY,
        UI_THEME_KEY
      ]);
      const enhancedEnabled = await isEnhancedNewTabEnabled(bootData);
      if (!enhancedEnabled) {
        window.location.replace(NATIVE_NEW_TAB_URL);
        return;
      }
      updateSolidColorPreview();
      primeVisibleUi();
      schedulePostBootTasks(bootData);
      await ensureBackgroundDefaults();
      const resolvedBootData = await chrome.storage.local.get([
        HOMEPAGE_DOODLE_ENABLED_KEY,
        NEWTAB_DOODLE_ENABLED_KEY,
        DOODLE_VARIANT_KEY,
        BG_STORAGE_KEY,
        BG_SOURCE_KEY,
        BG_PLAIN_COLOR_KEY,
        BG_MODE_KEY,
        UI_THEME_KEY
      ]);
      await loadBackground(resolvedBootData);
      await loadDoodleSetting(resolvedBootData);
    } finally {
      document.body.classList.add("app-ready");
    }
  }

  boot();
})();
