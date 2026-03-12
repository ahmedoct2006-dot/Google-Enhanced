const NEW_TAB_URL = "chrome://newtab/";
const NATIVE_NEW_TAB_URL = "chrome://new-tab-page/";
const EXTENSION_NEW_TAB_URL = chrome.runtime.getURL("newtab.html");
const RESTORE_ALARM_ONE = "restore-open-new-tab-pages-1";
const RESTORE_ALARM_TWO = "restore-open-new-tab-pages-2";
const BG_INIT_KEY = "backgroundInitDone";
const BG_MODE_KEY = "backgroundMode";
const BG_SOURCE_KEY = "customBackgroundSource";
const BG_MIGRATION_VERSION_KEY = "backgroundMigrationVersion";
const BG_MIGRATION_VERSION = 7;
const BG_CUSTOM_EXPLICIT_KEY = "customBackgroundExplicit";
const BG_DEFAULT_UI_EXPLICIT_KEY = "defaultUiExplicit";
const BG_DEFAULT_UI_MANUAL_KEY = "defaultUiManualSelection";
const BG_DEFAULT_UI_SELECTED_KEY = "defaultUiSelectedV2";
const BG_DEFAULT_UI_MODE = "default_ui";
const UI_THEME_KEY = "defaultChromeUiTheme";
const ENHANCED_NEW_TAB_ENABLED_KEY = "enhancedNewTabEnabled";
const NEWTAB_DOODLE_ENABLED_KEY = "newTabDoodleEnabled";
const DOODLE_VARIANT_KEY = "doodleVariant";
const NEW_TAB_PREFIXES = [
  "chrome://newtab/",
  "chrome://new-tab-page/",
  "chrome-search://local-ntp/",
  "https://www.google.com/_/chrome/newtab",
  "https://www.google.co.uk/_/chrome/newtab",
  "https://www.google.ca/_/chrome/newtab",
  "https://www.google.com.au/_/chrome/newtab",
  "https://www.google.co.in/_/chrome/newtab"
];

function isNewTabLikeUrl(url) {
  if (typeof url !== "string" || !url) return false;
  if (url === EXTENSION_NEW_TAB_URL) return true;
  return NEW_TAB_PREFIXES.some((prefix) => url.startsWith(prefix));
}

function isNativeNewTabUrl(url) {
  return typeof url === "string" && (
    url.startsWith(NATIVE_NEW_TAB_URL) ||
    url.startsWith("chrome-search://local-ntp/")
  );
}

async function isEnhancedNewTabEnabled() {
  const data = await chrome.storage.local.get(ENHANCED_NEW_TAB_ENABLED_KEY);
  return data[ENHANCED_NEW_TAB_ENABLED_KEY] !== false;
}

async function restoreOpenNewTabPages() {
  if (!chrome.tabs?.query || !chrome.tabs?.update) return;

  const useEnhancedNewTab = await isEnhancedNewTabEnabled();
  const tabs = await chrome.tabs.query({});
  await Promise.all(tabs.map(async (tab) => {
    if (typeof tab.id !== "number") return;

    const currentUrl = tab.pendingUrl || tab.url || "";
    if (!isNewTabLikeUrl(currentUrl)) return;

    try {
      if (useEnhancedNewTab) {
        if (currentUrl === EXTENSION_NEW_TAB_URL) {
          await chrome.tabs.reload(tab.id);
          return;
        }

        await chrome.tabs.update(tab.id, { url: NEW_TAB_URL });
        return;
      }

      if (!isNativeNewTabUrl(currentUrl)) {
        await chrome.tabs.update(tab.id, { url: NATIVE_NEW_TAB_URL });
      }
    } catch {
      // Ignore tabs that Chrome refuses to navigate during reload/update.
    }
  }));
}

function scheduleRestoreRetries() {
  if (!chrome.alarms?.create) return;
  chrome.alarms.create(RESTORE_ALARM_ONE, { delayInMinutes: 0.05 });
  chrome.alarms.create(RESTORE_ALARM_TWO, { delayInMinutes: 0.2 });
}

async function initializeInstallDefaults() {
  const data = await chrome.storage.local.get([
    BG_INIT_KEY,
    BG_MODE_KEY,
    UI_THEME_KEY,
    ENHANCED_NEW_TAB_ENABLED_KEY,
    NEWTAB_DOODLE_ENABLED_KEY,
    DOODLE_VARIANT_KEY
  ]);

  const updates = {};

  if (data[BG_INIT_KEY] !== true) {
    updates[BG_INIT_KEY] = true;
    updates[BG_MODE_KEY] = BG_DEFAULT_UI_MODE;
    updates[BG_SOURCE_KEY] = "";
    updates[BG_MIGRATION_VERSION_KEY] = BG_MIGRATION_VERSION;
    updates[BG_CUSTOM_EXPLICIT_KEY] = false;
    updates[BG_DEFAULT_UI_EXPLICIT_KEY] = true;
    updates[BG_DEFAULT_UI_MANUAL_KEY] = true;
    updates[BG_DEFAULT_UI_SELECTED_KEY] = true;
  }

  if (data[UI_THEME_KEY] !== "light" && data[UI_THEME_KEY] !== "dark") {
    updates[UI_THEME_KEY] = "light";
  }

  if (typeof data[ENHANCED_NEW_TAB_ENABLED_KEY] !== "boolean") {
    updates[ENHANCED_NEW_TAB_ENABLED_KEY] = true;
  }

  if (typeof data[NEWTAB_DOODLE_ENABLED_KEY] !== "boolean") {
    updates[NEWTAB_DOODLE_ENABLED_KEY] = true;
  }

  if (
    data[DOODLE_VARIANT_KEY] !== "logo1" &&
    data[DOODLE_VARIANT_KEY] !== "logo2" &&
    data[DOODLE_VARIANT_KEY] !== "logo3" &&
    data[DOODLE_VARIANT_KEY] !== "logo4"
  ) {
    updates[DOODLE_VARIANT_KEY] = "logo1";
  }

  if (Object.keys(updates).length > 0) {
    await chrome.storage.local.set(updates);
  }
}

chrome.runtime.onInstalled.addListener((details) => {
  const reason = details?.reason;
  if (
    reason !== chrome.runtime.OnInstalledReason.INSTALL &&
    reason !== chrome.runtime.OnInstalledReason.UPDATE &&
    reason !== chrome.runtime.OnInstalledReason.CHROME_UPDATE
  ) {
    return;
  }

  (async () => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      await initializeInstallDefaults();
    }
    await restoreOpenNewTabPages();
    scheduleRestoreRetries();
  })();
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm?.name !== RESTORE_ALARM_ONE && alarm?.name !== RESTORE_ALARM_TWO) return;
  restoreOpenNewTabPages();
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local" || !changes[ENHANCED_NEW_TAB_ENABLED_KEY]) return;
  restoreOpenNewTabPages();
  scheduleRestoreRetries();
});
