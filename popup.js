(() => {
  const ENHANCED_NEW_TAB_ENABLED_KEY = "enhancedNewTabEnabled";
  const toggle = document.getElementById("enhancedToggleSwitch");
  const status = document.getElementById("enhancedToggleStatus");

  function applyToggleState(isEnabled) {
    if (!toggle || !status) return;
    toggle.dataset.enabled = isEnabled ? "true" : "false";
    toggle.setAttribute("aria-checked", isEnabled ? "true" : "false");
    status.textContent = isEnabled ? "On" : "Old UI";
  }

  async function loadState() {
    const data = await chrome.storage.local.get(ENHANCED_NEW_TAB_ENABLED_KEY);
    const isEnabled = data[ENHANCED_NEW_TAB_ENABLED_KEY] !== false;
    applyToggleState(isEnabled);
  }

  toggle?.addEventListener("click", async () => {
    const next = toggle.dataset.enabled !== "true";
    await chrome.storage.local.set({ [ENHANCED_NEW_TAB_ENABLED_KEY]: next });
    applyToggleState(next);
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "local" || !changes[ENHANCED_NEW_TAB_ENABLED_KEY]) return;
    applyToggleState(changes[ENHANCED_NEW_TAB_ENABLED_KEY].newValue !== false);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.close();
    }
  });

  window.addEventListener("blur", () => {
    window.close();
  });

  loadState();
})();
