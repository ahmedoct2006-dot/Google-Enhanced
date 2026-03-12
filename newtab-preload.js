(() => {
  const BG_STORAGE_KEY = "customBackground";
  const BG_MODE_KEY = "backgroundMode";
  const BG_PLAIN_COLOR_KEY = "plainBackgroundColor";
  const PRELOAD_MODE_KEY = "ntpPreloadMode";
  const PRELOAD_BG_KEY = "ntpPreloadBg";
  const PRELOAD_COLOR_KEY = "ntpPreloadColor";
  const PRELOAD_THEME_KEY = "ntpPreloadTheme";
  const PRELOAD_DOODLE_SRC_KEY = "ntpPreloadDoodleSrc";
  const PRELOAD_DOODLE_ENABLED_KEY = "ntpPreloadDoodleEnabled";
  const BG_DEFAULT_UI_MODE = "default_ui";
  const UI_THEME_KEY = "defaultChromeUiTheme";
  const MAC_OS_BG = "Mac OS Doodle/macosx-bg.svg";

  function applyPreloadStyle(lines) {
    const style = document.getElementById("ntp-preload-bg-style") || document.createElement("style");
    style.id = "ntp-preload-bg-style";
    style.textContent = lines.join("\n");
    if (!style.parentNode) {
      (document.head || document.documentElement).appendChild(style);
    }
  }

  function applyPreloadImageLink(id, href) {
    if (!href || typeof href !== "string") return;
    const head = document.head || document.documentElement;
    if (!head) return;
    const existing = document.getElementById(id);
    if (existing) {
      if (existing.getAttribute("href") !== href) {
        existing.setAttribute("href", href);
      }
      return;
    }
    const link = document.createElement("link");
    link.id = id;
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    head.appendChild(link);
  }

  function applyPreloadBackground(bg) {
    if (!bg || typeof bg !== "string") return;
    const serializedUrl = JSON.stringify(bg);
    const fallbackColor = bg.includes(MAC_OS_BG) ? "#d7d7d7" : "#f1f3f4";
    applyPreloadImageLink("ntp-preload-bg-link", bg);
    applyPreloadStyle([
      "html, body {",
      `  background-color: ${fallbackColor} !important;`,
      `  background-image: url(${serializedUrl}) !important;`,
      "  background-size: cover !important;",
      "  background-position: center !important;",
      "  background-repeat: no-repeat !important;",
      "}"
    ]);
  }

  function applyPreloadDoodle() {
    try {
      const src = localStorage.getItem(PRELOAD_DOODLE_SRC_KEY);
      const enabled = localStorage.getItem(PRELOAD_DOODLE_ENABLED_KEY) !== "0";
      if (!src) return;
      applyPreloadImageLink("ntp-preload-doodle-link", src);

      const applyToElement = (img) => {
        if (!img) return;
        if (img.getAttribute("src") !== src) {
          img.setAttribute("src", src);
        }
        img.style.visibility = enabled ? "visible" : "hidden";
        img.style.opacity = enabled ? "1" : "0";
      };

      const current = document.getElementById("doodleArt");
      if (current) {
        applyToElement(current);
        return;
      }

      const observer = new MutationObserver(() => {
        const img = document.getElementById("doodleArt");
        if (!img) return;
        observer.disconnect();
        applyToElement(img);
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    } catch {
      // Ignore doodle preload cache failures and continue normal startup.
    }
  }

  function applyPreloadColor(color) {
    if (!color || typeof color !== "string") return;
    applyPreloadStyle([
      "html, body {",
      `  background-color: ${color} !important;`,
      "  background-image: none !important;",
      "}"
    ]);
  }

  try {
    const mode = localStorage.getItem(PRELOAD_MODE_KEY);
    const bg = localStorage.getItem(PRELOAD_BG_KEY);
    const color = localStorage.getItem(PRELOAD_COLOR_KEY);
    const theme = localStorage.getItem(PRELOAD_THEME_KEY);
    if (mode === "custom" && bg) {
      applyPreloadBackground(bg);
    } else if (mode === "plain" && color) {
      applyPreloadColor(color);
    } else if (mode === BG_DEFAULT_UI_MODE) {
      applyPreloadColor(theme === "dark" ? "#000" : "#f1f3f4");
    }
  } catch {
    // Ignore preload cache failures and continue normal startup.
  }

  applyPreloadDoodle();

  try {
    if (typeof chrome !== "undefined" && chrome.storage?.local?.get) {
      chrome.storage.local.get([BG_MODE_KEY, BG_STORAGE_KEY, BG_PLAIN_COLOR_KEY, UI_THEME_KEY], (data) => {
        const mode = data?.[BG_MODE_KEY];
        const bg = data?.[BG_STORAGE_KEY];
        if (mode === "custom" && typeof bg === "string" && bg.trim()) {
          applyPreloadBackground(bg.trim());
          return;
        }
        if (mode === "plain" && typeof data?.[BG_PLAIN_COLOR_KEY] === "string" && data[BG_PLAIN_COLOR_KEY].trim()) {
          applyPreloadColor(data[BG_PLAIN_COLOR_KEY].trim());
          return;
        }
        if (mode === BG_DEFAULT_UI_MODE) {
          applyPreloadColor(data?.[UI_THEME_KEY] === "dark" ? "#000" : "#f1f3f4");
        }
      });
    }
  } catch {
    // Ignore storage preload failures and continue normal startup.
  }
})();
