(() => {
  const STANDARD_LOGO_SRC = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  const DOODLE_ENABLED_KEY = "doodleEnabled";
  const ROOT_CLASS_HIDE = "nd-hide-doodle-share";
  const ROOT_CLASS_LOCK_GOOGLE_SEARCH = "nd-lock-google-search-bg";

  const STANDARD_LOGO_HTML =
    '<a href="/" aria-label="Google">' +
    '<img class="lnXdpd" alt="Google" height="92" width="272" ' +
    'src="' + STANDARD_LOGO_SRC + '">' +
    "</a>";

  const REMOVE_SELECTORS = [
    "#hplogo",
    "#imageDoodle",
    "#doodle",
    "#ddls",
    "#shareButton",
    "a[href*='/doodles/']",
    "a[href*='google.com/doodles']",
    "a[aria-label*='Share' i]",
    "button[aria-label*='Share' i]",
    "div[role='button'][aria-label*='Share' i]",
    "[data-tooltip*='Share' i]"
  ];
  const REMOVE_SELECTOR_QUERY = REMOVE_SELECTORS.join(",");
  const STYLE_OVERRIDE_SELECTORS = [
    "style[id^='stylus-']",
    "style[id^='stylish-']",
    "style[data-stylus]",
    "style[data-stylish]",
    "link[id^='stylus-']",
    "link[id^='stylish-']",
    "link[data-stylus]",
    "link[data-stylish]"
  ];
  const STYLE_OVERRIDE_QUERY = STYLE_OVERRIDE_SELECTORS.join(",");

  let doodleEnabled = false;
  let cleanScheduled = false;
  let observer = null;
  let observerStopTimer = null;
  const host = window.location.hostname.toLowerCase();

  function isGoogleHost() {
    return /^www\.google\./.test(host);
  }

  function isGoogleSearchPage() {
    const currentPath = window.location.pathname || "/";
    return isGoogleHost() && currentPath.startsWith("/search");
  }

  function isManagedGooglePage() {
    if (!isGoogleHost()) return false;
    const currentPath = window.location.pathname || "/";
    return currentPath === "/" || currentPath === "/webhp" || currentPath.startsWith("/search");
  }

  function forceStandardHomepageLogo() {
    const lga = document.querySelector("#lga");
    if (!lga) return;

    const currentLogo = lga.querySelector("img.lnXdpd");
    const currentSrc = currentLogo?.getAttribute("src") || "";

    const alreadyStandard =
      lga.children.length === 1 &&
      currentLogo &&
      currentSrc.includes("googlelogo_color_272x92dp.png");

    if (!alreadyStandard) {
      lga.innerHTML = STANDARD_LOGO_HTML;
    }
  }

  function hardClean() {
    document.querySelectorAll(REMOVE_SELECTOR_QUERY).forEach((el) => el.remove());
    forceStandardHomepageLogo();
  }

  function removeStylishOrStylusInjectedStyles() {
    document.querySelectorAll(STYLE_OVERRIDE_QUERY).forEach((el) => el.remove());
  }

  function enforceGoogleSearchBackgroundLock() {
    const html = document.documentElement;
    const body = document.body;
    if (!html || !body) return;

    html.style.setProperty("background-image", "none", "important");
    html.style.setProperty("background-color", "#ffffff", "important");
    body.style.setProperty("background-image", "none", "important");
    body.style.setProperty("background-color", "#ffffff", "important");
  }

  function enforceBackgroundLocksIfNeeded() {
    if (doodleEnabled) return;

    if (isGoogleSearchPage()) {
      removeStylishOrStylusInjectedStyles();
      enforceGoogleSearchBackgroundLock();
    }
  }

  function setRootMode() {
    document.documentElement.classList.toggle(ROOT_CLASS_HIDE, !doodleEnabled);
    document.documentElement.classList.toggle(ROOT_CLASS_LOCK_GOOGLE_SEARCH, !doodleEnabled && isGoogleSearchPage());
  }

  function cleanIfNeeded() {
    if (doodleEnabled) return;
    hardClean();
    enforceBackgroundLocksIfNeeded();
  }

  function scheduleClean() {
    if (doodleEnabled || cleanScheduled) return;
    cleanScheduled = true;
    requestAnimationFrame(() => {
      cleanScheduled = false;
      cleanIfNeeded();
    });
  }

  function stopObserving() {
    if (observerStopTimer) {
      clearTimeout(observerStopTimer);
      observerStopTimer = null;
    }
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  function armObserverStop(delayMs) {
    if (observerStopTimer) clearTimeout(observerStopTimer);
    observerStopTimer = setTimeout(stopObserving, delayMs);
  }

  function startTransientObserver() {
    if (doodleEnabled || observer || !document.documentElement) return;
    observer = new MutationObserver(() => {
      scheduleClean();
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
    armObserverStop(2500);
  }

  async function loadSetting() {
    const data = await chrome.storage.local.get(DOODLE_ENABLED_KEY);
    doodleEnabled = Boolean(data[DOODLE_ENABLED_KEY]);
  }

  async function start() {
    if (!isManagedGooglePage()) return;
    await loadSetting();
    setRootMode();
    cleanIfNeeded();
    startTransientObserver();

    window.addEventListener("load", () => {
      scheduleClean();
      armObserverStop(900);
    }, { once: true });
    setTimeout(scheduleClean, 150);
    setTimeout(() => {
      scheduleClean();
      armObserverStop(700);
    }, 700);
  }

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "local" || !changes[DOODLE_ENABLED_KEY]) return;

    doodleEnabled = Boolean(changes[DOODLE_ENABLED_KEY].newValue);
    setRootMode();
    if (doodleEnabled) {
      stopObserving();
      window.location.reload();
      return;
    }
    startTransientObserver();
    scheduleClean();
  });

  start();
})();
