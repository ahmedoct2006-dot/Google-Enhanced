(() => {
  const LOGO_TEXT_DATA_ATTR = "ndYoutubeLogoText";
  const GUIDE_MODE_DATA_ATTR = "ndYoutubeGuideMode";
  const LEFT_TONE_DATA_ATTR = "ndYoutubeLeftTone";
  const RIGHT_TONE_DATA_ATTR = "ndYoutubeRightTone";
  const DARK_BRIGHTNESS_THRESHOLD = 150;
  const MIN_OPAQUE_ALPHA = 0.55;
  const MINI_GUIDE_MIN_WIDTH = 40;
  const EXPANDED_GUIDE_MIN_WIDTH = 160;
  const CHIP_BAR_FIX_STYLE_ID = "nd-youtube-chip-bar-fix";
  const SEARCH_PREVIEW_PATCH_SCRIPT_ID = "nd-youtube-search-preview-patch";
  const CHIP_BAR_FILL_COLOR_VAR = "--nd-youtube-chip-bar-fill-color";
  const CHIP_BAR_FILL_VALUE = `var(${CHIP_BAR_FILL_COLOR_VAR}, transparent)`;
  const CHIP_BAR_READY_DATA_ATTR = "ndYoutubeChipBarReady";
  const RIGHT_FILL_COLOR_VAR = "--nd-youtube-right-fill-color";
  const SUMMARY_TEXT_COLOR_VAR = "--nd-youtube-summary-text-color";
  const TOPBAR_PLAY_BUTTON_ATTR = "data-nd-youtube-topbar-play-button";
  const TOPBAR_PLAY_BUTTON_ID = "nd-youtube-topbar-play-button";
  const TOPBAR_PLAY_BUTTON_HIDDEN_ATTR = "data-nd-youtube-topbar-play-button-hidden";
  const ACTIVE_DATA_ATTR = "ndYoutubeActive";
  const DYNAMIC_STYLE_ID = "nd-youtube-dynamic-style";
  const COMPANION_ACTIVE_EVENT = "nd-youtube-background-changer-active-change";
  const COMPANION_ACTIVE_WINDOW_FLAG = "__ND_YOUTUBE_BACKGROUND_CHANGER_ACTIVE__";
  const COMPANION_ACTIVE_ATTRIBUTES = [
    "data-nd-youtube-background-changer-active",
    "data-nd-youtube-background-changer",
    "data-youtube-background-changer-active"
  ];
  const COMPANION_ACTIVE_CLASSES = [
    "nd-youtube-background-changer-active",
    "youtube-background-changer-active"
  ];
  const CHIP_BAR_STYLE_PROPERTIES = [
    "background",
    "background-color",
    "background-image",
    "backdrop-filter",
    "-webkit-backdrop-filter",
    "box-shadow",
    "border-color",
    "mask-image",
    "-webkit-mask-image"
  ];
  const FROSTED_GLASS_STYLE_PROPERTIES = [
    "display",
    "background",
    "background-color",
    "background-image",
    "background-position",
    "background-repeat",
    "background-size",
    "backdrop-filter",
    "-webkit-backdrop-filter",
    "box-shadow",
    "pointer-events"
  ];
  const HIDDEN_ELEMENT_STYLE_PROPERTIES = [
    "display",
    "visibility",
    "opacity",
    "pointer-events"
  ];
  const TOPBAR_PLAY_BUTTON_LEAF_SELECTOR = [
    "button",
    "tp-yt-paper-icon-button",
    "yt-icon-button",
    "a[href]",
    "[role='button']"
  ].join(", ");
  const SEARCH_PREVIEW_FLAG_KEYS = [
    "enable_inline_muted_playback_on_web_search",
    "enable_inline_muted_playback_on_web_search_for_vdc",
    "enable_inline_muted_playback_on_web_search_for_vdcb",
    "enable_force_imp_autoplay_on_desktop_search",
    "enable_full_length_inline_playback_desktop_search_shorts"
  ];
  const SEARCH_PREVIEW_DATA_KEYS = [
    "inlinePlaybackEndpoint",
    "movingThumbnailDetails"
  ];
  const SEARCH_PREVIEW_OVERLAY_RENDERER_KEYS = [
    "thumbnailOverlayLoadingPreviewRenderer"
  ];
  const ACTIVATION_UPDATE_DELAYS = [0, 120, 350, 900, 1800];
  const CHIP_BAR_FIX_CSS = `
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app {
  --nd-youtube-guide-gap-left: 0px;
  --nd-youtube-guide-gap-width: 0px;
  --nd-youtube-guide-gap-height: 0px;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app::before {
  content: "" !important;
  position: fixed !important;
  top: 0 !important;
  left: var(--nd-youtube-guide-gap-left, 0px) !important;
  width: var(--nd-youtube-guide-gap-width, 0px) !important;
  height: var(--nd-youtube-guide-gap-height, 0px) !important;
  background: ${CHIP_BAR_FILL_VALUE} !important;
  background-color: ${CHIP_BAR_FILL_VALUE} !important;
  background-image: none !important;
  pointer-events: none !important;
  z-index: 1998 !important;
}
html:not([data-${CHIP_BAR_READY_DATA_ATTR}="true"]) ytd-app #frosted-glass.loading-with-chipbar,
html:not([data-${CHIP_BAR_READY_DATA_ATTR}="true"]) ytd-app #frosted-glass.with-chipbar {
  display: none !important;
  opacity: 0 !important;
  background: none !important;
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
  pointer-events: none !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #chips-wrapper,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #chip-bar-background,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #background,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #chips-content,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #scroll-container,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #chip-bar,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #chip-bar-background,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #background,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #chips-content,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #scroll-container,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #chips-wrapper,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-sub-menu-renderer #background {
  background: ${CHIP_BAR_FILL_VALUE} !important;
  background-color: ${CHIP_BAR_FILL_VALUE} !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  box-shadow: none !important;
  border-color: transparent !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-sub-menu-renderer {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  box-shadow: none !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer {
  position: relative !important;
  isolation: isolate !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer::before {
  content: "" !important;
  position: absolute !important;
  top: calc(-1 * var(--nd-youtube-search-chip-bleed-top, 0px)) !important;
  left: calc(-1 * var(--nd-youtube-search-chip-bleed-left, 0px)) !important;
  right: calc(-1 * var(--nd-youtube-search-chip-bleed-right, 0px)) !important;
  bottom: 0 !important;
  background: ${CHIP_BAR_FILL_VALUE} !important;
  background-color: ${CHIP_BAR_FILL_VALUE} !important;
  background-image: none !important;
  pointer-events: none !important;
  z-index: -1 !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #scroll-container,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #scroll-container {
  mask-image: none !important;
  -webkit-mask-image: none !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #left-arrow,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #right-arrow,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #left-arrow-button,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #right-arrow-button,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer #left-arrow,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer #right-arrow,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer #left-arrow-button,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer #right-arrow-button,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #left-arrow,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #right-arrow,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #left-arrow-button,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #right-arrow-button,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search yt-chip-cloud-renderer #left-arrow,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search yt-chip-cloud-renderer #right-arrow,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search yt-chip-cloud-renderer #left-arrow-button,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search yt-chip-cloud-renderer #right-arrow-button {
  background: ${CHIP_BAR_FILL_VALUE} !important;
  background-color: ${CHIP_BAR_FILL_VALUE} !important;
  background-image: none !important;
  box-shadow: none !important;
  border-color: transparent !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer ytd-button-renderer.ytd-feed-filter-chip-bar-renderer,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer ytd-button-renderer.ytd-feed-filter-chip-bar-renderer .yt-spec-button-shape-next,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer ytd-button-renderer.yt-chip-cloud-renderer,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer ytd-button-renderer.yt-chip-cloud-renderer .yt-spec-button-shape-next,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search yt-chip-cloud-renderer ytd-button-renderer.yt-chip-cloud-renderer,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search yt-chip-cloud-renderer ytd-button-renderer.yt-chip-cloud-renderer .yt-spec-button-shape-next {
  background: ${CHIP_BAR_FILL_VALUE} !important;
  background-color: ${CHIP_BAR_FILL_VALUE} !important;
  background-image: none !important;
  box-shadow: none !important;
  border-color: transparent !important;
}
html ytd-app ytd-search ytd-thumbnail ytd-moving-thumbnail-renderer,
html ytd-app ytd-search ytd-thumbnail ytd-thumbnail-overlay-loading-preview-renderer,
html ytd-app ytd-search ytd-thumbnail-overlay-loading-preview-renderer,
html ytd-app ytd-search a#thumbnail #mouseover-overlay,
html ytd-app ytd-search a#thumbnail #hover-overlays,
html ytd-app ytd-search a#thumbnail [id*="preview" i],
html ytd-app ytd-search a#thumbnail [class*="preview" i],
html ytd-app ytd-search a#thumbnail [id*="hover" i],
html ytd-app ytd-search a#thumbnail [class*="hover" i],
html ytd-app ytd-search a#thumbnail [id*="mouseover" i],
html ytd-app ytd-search a#thumbnail [class*="mouseover" i],
html ytd-app ytd-search a#thumbnail video,
html ytd-app ytd-search ytd-thumbnail video,
html ytd-app ytd-search video,
html ytd-app ytd-search iframe {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app #frosted-glass.loading-with-chipbar,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app #frosted-glass.with-chipbar {
  display: none !important;
  opacity: 0 !important;
  background: none !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  box-shadow: none !important;
  pointer-events: none !important;
}
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #chips-wrapper::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #chips-wrapper::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #scroll-container::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #scroll-container::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #left-arrow::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #left-arrow::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #right-arrow::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #right-arrow::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #left-arrow-button::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #left-arrow-button::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #right-arrow-button::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer #right-arrow-button::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #scroll-container::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-header-renderer #scroll-container::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search yt-chip-cloud-renderer::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search yt-chip-cloud-renderer::after,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-sub-menu-renderer::before,
html[data-${CHIP_BAR_READY_DATA_ATTR}="true"] ytd-app ytd-search ytd-search-sub-menu-renderer::after {
  content: none !important;
  display: none !important;
}`;
  const CHIP_BAR_SELECTORS = [
    "ytd-feed-filter-chip-bar-renderer #chips-wrapper",
    "ytd-feed-filter-chip-bar-renderer #chip-bar-background",
    "ytd-feed-filter-chip-bar-renderer #background",
    "ytd-feed-filter-chip-bar-renderer #chips-content",
    "ytd-feed-filter-chip-bar-renderer #scroll-container",
    "ytd-search ytd-search-header-renderer #chip-bar",
    "ytd-search ytd-search-header-renderer #chip-bar-background",
    "ytd-search ytd-search-header-renderer #background",
    "ytd-search ytd-search-header-renderer #chips-content",
    "ytd-search ytd-search-header-renderer #scroll-container",
    "ytd-search ytd-search-header-renderer #chips-wrapper",
    "ytd-search ytd-search-sub-menu-renderer #background"
  ];
  const CHIP_BAR_HOST_SELECTORS = [
    "ytd-feed-filter-chip-bar-renderer",
    "ytd-search ytd-search-header-renderer",
    "ytd-search ytd-search-sub-menu-renderer"
  ];
  const CHIP_BAR_EDGE_BUTTON_SELECTORS = [
    "ytd-feed-filter-chip-bar-renderer #left-arrow",
    "ytd-feed-filter-chip-bar-renderer #right-arrow",
    "ytd-feed-filter-chip-bar-renderer #left-arrow-button",
    "ytd-feed-filter-chip-bar-renderer #right-arrow-button",
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer #left-arrow",
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer #right-arrow",
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer #left-arrow-button",
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer #right-arrow-button",
    "ytd-search ytd-search-header-renderer #left-arrow",
    "ytd-search ytd-search-header-renderer #right-arrow",
    "ytd-search ytd-search-header-renderer #left-arrow-button",
    "ytd-search ytd-search-header-renderer #right-arrow-button",
    "ytd-search yt-chip-cloud-renderer #left-arrow",
    "ytd-search yt-chip-cloud-renderer #right-arrow",
    "ytd-search yt-chip-cloud-renderer #left-arrow-button",
    "ytd-search yt-chip-cloud-renderer #right-arrow-button"
  ];
  const CHIP_BAR_EDGE_BUTTON_RENDERER_SELECTORS = [
    "ytd-feed-filter-chip-bar-renderer ytd-button-renderer.ytd-feed-filter-chip-bar-renderer",
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer ytd-button-renderer.yt-chip-cloud-renderer",
    "ytd-search yt-chip-cloud-renderer ytd-button-renderer.yt-chip-cloud-renderer"
  ];
  const CHIP_BAR_EDGE_BUTTON_SHAPE_SELECTORS = [
    "ytd-feed-filter-chip-bar-renderer ytd-button-renderer.ytd-feed-filter-chip-bar-renderer .yt-spec-button-shape-next",
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-renderer ytd-button-renderer.yt-chip-cloud-renderer .yt-spec-button-shape-next",
    "ytd-search yt-chip-cloud-renderer ytd-button-renderer.yt-chip-cloud-renderer .yt-spec-button-shape-next"
  ];
  const FROSTED_GLASS_SELECTORS = [
    "#frosted-glass.loading-with-chipbar",
    "#frosted-glass.with-chipbar"
  ];
  const FROSTED_GLASS_SOURCE_SELECTORS = [
    "ytd-masthead",
    "ytd-app #container.ytd-masthead",
    "ytd-masthead #background"
  ];
  const CHIP_BAR_FILL_SOURCE_SELECTORS = [
    "ytd-masthead",
    "ytd-app #container.ytd-masthead",
    "ytd-masthead #background"
  ];
  const SEARCH_PREVIEW_RENDERER_SELECTORS = [
    "ytd-search ytd-video-renderer",
    "ytd-search ytd-compact-video-renderer",
    "ytd-search ytd-grid-video-renderer",
    "ytd-search ytd-playlist-renderer",
    "ytd-search ytd-radio-renderer",
    "ytd-search ytd-movie-renderer"
  ];
  const SEARCH_AD_RENDERER_SELECTORS = [
    "ytd-search ytd-promoted-sparkles-web-renderer",
    "ytd-search ytd-promoted-sparkles-text-search-renderer",
    "ytd-search ytd-promoted-video-renderer",
    "ytd-search ytd-display-ad-renderer",
    "ytd-search ytd-in-feed-ad-layout-renderer",
    "ytd-search ytd-ad-slot-renderer",
    "ytd-search ytd-search-pyv-renderer"
  ];
  const SEARCH_THUMBNAIL_PREVIEW_HOST_SELECTORS = [
    "ytd-search ytd-thumbnail ytd-moving-thumbnail-renderer",
    "ytd-search ytd-thumbnail ytd-thumbnail-overlay-loading-preview-renderer",
    "ytd-search ytd-thumbnail-overlay-loading-preview-renderer",
    "ytd-search a#thumbnail #mouseover-overlay",
    "ytd-search a#thumbnail #hover-overlays",
    "ytd-search a#thumbnail [id*='preview' i]",
    "ytd-search a#thumbnail [class*='preview' i]",
    "ytd-search a#thumbnail [id*='hover' i]",
    "ytd-search a#thumbnail [class*='hover' i]",
    "ytd-search a#thumbnail [id*='mouseover' i]",
    "ytd-search a#thumbnail [class*='mouseover' i]"
  ];
  const SEARCH_THUMBNAIL_PREVIEW_VIDEO_SELECTORS = [
    "ytd-search a#thumbnail video",
    "ytd-search ytd-thumbnail video",
    "ytd-search video[autoplay]",
    "ytd-search video",
    "ytd-search iframe"
  ];
  const SEARCH_PREVIEW_BLOCK_TARGET_SELECTOR = [
    "ytd-search a#thumbnail",
    "ytd-search ytd-thumbnail",
    "ytd-search ytd-video-renderer",
    "ytd-search ytd-compact-video-renderer",
    "ytd-search ytd-grid-video-renderer",
    "ytd-search ytd-playlist-renderer",
    "ytd-search ytd-radio-renderer",
    "ytd-search ytd-movie-renderer"
  ].join(", ");
  const GUIDE_GAP_MASK_TARGET_SELECTORS = [
    "ytd-search ytd-search-header-renderer #chips-content",
    "ytd-feed-filter-chip-bar-renderer #chips-wrapper"
  ];
  const CHIP_BAR_READY_RENDERER_SELECTORS = [
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-chip-renderer",
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-button-shape",
    "ytd-feed-filter-chip-bar-renderer yt-chip-cloud-chip-view-model",
    "ytd-search ytd-search-header-renderer yt-chip-cloud-chip-renderer",
    "ytd-search ytd-search-header-renderer yt-chip-cloud-button-shape",
    "ytd-search ytd-search-header-renderer yt-chip-cloud-chip-view-model"
  ];
  const SEARCH_PREVIEW_BLOCKED_EVENT_TYPES = [
    "mouseenter",
    "mouseover",
    "mousemove",
    "pointerenter",
    "pointerover",
    "pointermove"
  ];
  const DEFAULT_LIGHT_SURFACE_BRIGHTNESS = 248;
  const DEFAULT_LIGHT_SURFACE_DELTA = 12;
  const SEARCH_RIGHT_FILL_SOURCE_SELECTORS = [
    "ytd-search #primary",
    "ytd-search #contents",
    "ytd-search ytd-two-column-search-results-renderer",
    "ytd-search ytd-section-list-renderer",
    "#page-manager",
    "ytd-app"
  ];

  let updateScheduled = false;
  let lastSignature = "";
  let searchPreviewBlockersInstalled = false;
  let lastStableSearchFillColor = "";
  let helperActive = false;
  let activationSyncScheduled = false;
  let activeObserver = null;
  let activationRootObserver = null;
  let activationBodyObserver = null;
  let youtubeStyleTextPromise = null;
  let activationGeneration = 0;
  let activationRefreshTimeouts = [];

  function isTruthyCompanionAttr(value) {
    if (value == null) return false;
    if (value === "") return true;
    return !/^(false|0|off|disabled|no)$/i.test(String(value).trim());
  }

  function isCompanionMarkerPresent(element) {
    if (!element) return false;

    for (const attribute of COMPANION_ACTIVE_ATTRIBUTES) {
      if (!element.hasAttribute(attribute)) continue;
      if (isTruthyCompanionAttr(element.getAttribute(attribute))) {
        return true;
      }
    }

    return COMPANION_ACTIVE_CLASSES.some((className) => element.classList.contains(className));
  }

  function isCompanionActive() {
    return Boolean(
      window[COMPANION_ACTIVE_WINDOW_FLAG] ||
      isCompanionMarkerPresent(document.documentElement) ||
      isCompanionMarkerPresent(document.body)
    );
  }

  function clearActivationRefreshTimers() {
    for (const timeoutId of activationRefreshTimeouts) {
      window.clearTimeout(timeoutId);
    }
    activationRefreshTimeouts = [];
  }

  function scheduleActivationRefreshes() {
    clearActivationRefreshTimers();

    for (const delay of ACTIVATION_UPDATE_DELAYS) {
      const timeoutId = window.setTimeout(() => {
        if (!helperActive) return;
        scheduleUpdate();
      }, delay);
      activationRefreshTimeouts.push(timeoutId);
    }
  }

  function loadYoutubeStyleText() {
    if (!youtubeStyleTextPromise) {
      youtubeStyleTextPromise = fetch(chrome.runtime.getURL("youtube.css"))
        .then((response) => response.ok ? response.text() : "")
        .catch(() => "");
    }

    return youtubeStyleTextPromise;
  }

  async function ensureYoutubeStyles() {
    const head = document.head || document.documentElement;
    if (!head) return false;

    let style = document.getElementById(DYNAMIC_STYLE_ID);
    if (style) return true;

    const cssText = await loadYoutubeStyleText();
    if (!cssText) return false;

    style = document.createElement("style");
    style.id = DYNAMIC_STYLE_ID;
    style.textContent = cssText;
    head.appendChild(style);
    return true;
  }

  function removeYoutubeStyles() {
    document.getElementById(DYNAMIC_STYLE_ID)?.remove();
  }

  function removeStylePropertiesFromElements(selectors, properties) {
    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        for (const property of properties) {
          element.style.removeProperty(property);
        }
      }
    }
  }

  function ensureSearchPreviewConfigPatch() {
    const root = document.documentElement;
    if (!root || document.getElementById(SEARCH_PREVIEW_PATCH_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SEARCH_PREVIEW_PATCH_SCRIPT_ID;
    script.textContent = `(() => {
  const FLAG_KEYS = ${JSON.stringify(SEARCH_PREVIEW_FLAG_KEYS)};
  const PREVIEW_DATA_KEYS = ${JSON.stringify(SEARCH_PREVIEW_DATA_KEYS)};
  const PREVIEW_OVERLAY_KEYS = new Set(${JSON.stringify(SEARCH_PREVIEW_OVERLAY_RENDERER_KEYS)});
  const mutateFlags = (bucket) => {
    if (!bucket || typeof bucket !== "object") return;
    for (const key of FLAG_KEYS) {
      if (key in bucket || Object.isExtensible(bucket)) {
        try {
          bucket[key] = false;
        } catch {}
      }
    }
  };
  const mutateConfig = (config) => {
    if (!config || typeof config !== "object") return;
    mutateFlags(config);
    mutateFlags(config.EXPERIMENT_FLAGS);
    mutateFlags(config.EXPERIMENTS_FORCED_FLAGS);
    const contexts = config.WEB_PLAYER_CONTEXT_CONFIGS;
    if (!contexts || typeof contexts !== "object") return;
    for (const value of Object.values(contexts)) {
      if (!value || typeof value !== "object") continue;
      mutateFlags(value);
      mutateFlags(value.experimentFlags);
      if (typeof value.serializedExperimentFlags === "string") {
        for (const key of FLAG_KEYS) {
          const pattern = new RegExp(key + "=true", "g");
          value.serializedExperimentFlags = value.serializedExperimentFlags.replace(pattern, key + "=false");
        }
      }
    }
  };
  const sanitizePreviewData = (root) => {
    const seen = new WeakSet();
    const visit = (value) => {
      if (!value || typeof value !== "object" || seen.has(value)) {
        return value;
      }
      seen.add(value);

      if (Array.isArray(value)) {
        for (let index = value.length - 1; index >= 0; index -= 1) {
          const item = value[index];
          if (item && typeof item === "object") {
            const itemKeys = Object.keys(item);
            if (itemKeys.some((key) => PREVIEW_OVERLAY_KEYS.has(key))) {
              value.splice(index, 1);
              continue;
            }
          }
          visit(item);
        }
        return value;
      }

      for (const key of PREVIEW_DATA_KEYS) {
        if (!(key in value)) continue;
        try {
          delete value[key];
        } catch {}
        if (key in value) {
          try {
            value[key] = null;
          } catch {}
        }
      }

      if (Array.isArray(value.thumbnailOverlays)) {
        try {
          value.thumbnailOverlays = value.thumbnailOverlays.filter((item) => {
            if (!item || typeof item !== "object") return true;
            return !Object.keys(item).some((key) => PREVIEW_OVERLAY_KEYS.has(key));
          });
        } catch {}
      }

      for (const child of Object.values(value)) {
        visit(child);
      }

      return value;
    };

    return visit(root);
  };
  const patchYtcfg = (ytcfg) => {
    if (!ytcfg || typeof ytcfg !== "object") return ytcfg;
    if (ytcfg.__ndSearchPreviewPatched) {
      mutateConfig(ytcfg.data_);
      mutateConfig(ytcfg);
      return ytcfg;
    }
    try {
      Object.defineProperty(ytcfg, "__ndSearchPreviewPatched", {
        value: true,
        configurable: true
      });
    } catch {
      ytcfg.__ndSearchPreviewPatched = true;
    }
    if (typeof ytcfg.set === "function" && !ytcfg.set.__ndSearchPreviewPatched) {
      const originalSet = ytcfg.set;
      const wrappedSet = function(...args) {
        if (args.length > 0) {
          mutateConfig(args[0]);
        }
        const result = originalSet.apply(this, args);
        mutateConfig(this?.data_);
        return result;
      };
      try {
        wrappedSet.__ndSearchPreviewPatched = true;
      } catch {}
      ytcfg.set = wrappedSet;
    }
    mutateConfig(ytcfg.data_);
    mutateConfig(ytcfg);
    return ytcfg;
  };
  const patchSanitizedValue = (name) => {
    const descriptor = Object.getOwnPropertyDescriptor(window, name);
    if (descriptor && !descriptor.configurable) {
      sanitizePreviewData(window[name]);
      return;
    }

    let currentValue = sanitizePreviewData(window[name]);
    Object.defineProperty(window, name, {
      configurable: true,
      enumerable: descriptor ? descriptor.enumerable : true,
      get() {
        return currentValue;
      },
      set(value) {
        currentValue = sanitizePreviewData(value);
      }
    });
  };
  const patchWrappedFunction = (name, wrapperFactory) => {
    const descriptor = Object.getOwnPropertyDescriptor(window, name);
    const wrapValue = (value) => {
      if (typeof value !== "function" || value.__ndSearchPreviewWrapped) {
        return value;
      }

      const wrapped = wrapperFactory(value);
      try {
        wrapped.__ndSearchPreviewWrapped = true;
      } catch {}
      return wrapped;
    };

    if (descriptor && !descriptor.configurable) {
      if (typeof window[name] === "function") {
        window[name] = wrapValue(window[name]);
      }
      return;
    }

    let currentValue = wrapValue(window[name]);
    Object.defineProperty(window, name, {
      configurable: true,
      enumerable: descriptor ? descriptor.enumerable : true,
      get() {
        return currentValue;
      },
      set(value) {
        currentValue = wrapValue(value);
      }
    });
  };
  const existingDescriptor = Object.getOwnPropertyDescriptor(window, "ytcfg");
  if (!existingDescriptor || existingDescriptor.configurable) {
    let currentValue = patchYtcfg(window.ytcfg);
    Object.defineProperty(window, "ytcfg", {
      configurable: true,
      enumerable: existingDescriptor ? existingDescriptor.enumerable : true,
      get() {
        return currentValue;
      },
      set(value) {
        currentValue = patchYtcfg(value);
      }
    });
  } else {
    patchYtcfg(window.ytcfg);
  }
  patchSanitizedValue("ytInitialData");
  patchWrappedFunction("getInitialData", (original) => function(...args) {
    const result = original.apply(this, args);
    sanitizePreviewData(result);
    return result;
  });
  patchWrappedFunction("loadInitialData", (original) => function(...args) {
    if (args.length > 0) {
      sanitizePreviewData(args[0]);
    }
    return original.apply(this, args);
  });
  sanitizePreviewData(window.ytInitialData);
  patchYtcfg(window.ytcfg);
})();`;

    root.appendChild(script);
    script.remove();
  }

  function isElementVisible(element) {
    if (!element) return false;

    const style = window.getComputedStyle(element);
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      Number.parseFloat(style.opacity || "1") === 0
    ) {
      return false;
    }

    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function parseColor(value) {
    if (typeof value !== "string") return null;

    const color = value.trim().toLowerCase();
    if (!color || color === "transparent") return null;

    if (color === "white") {
      return { r: 255, g: 255, b: 255, a: 1 };
    }

    if (color === "black") {
      return { r: 0, g: 0, b: 0, a: 1 };
    }

    if (color.startsWith("#")) {
      const hex = color.slice(1);

      if (hex.length === 3 || hex.length === 4) {
        const expanded = hex.split("").map((char) => char + char).join("");
        return parseColor(`#${expanded}`);
      }

      if (hex.length === 6 || hex.length === 8) {
        const r = Number.parseInt(hex.slice(0, 2), 16);
        const g = Number.parseInt(hex.slice(2, 4), 16);
        const b = Number.parseInt(hex.slice(4, 6), 16);
        const a = hex.length === 8
          ? Number.parseInt(hex.slice(6, 8), 16) / 255
          : 1;

        if ([r, g, b, a].some((part) => Number.isNaN(part))) {
          return null;
        }

        return { r, g, b, a };
      }
    }

    const rgbMatch = color.match(/^rgba?\(([^)]+)\)$/);
    if (rgbMatch) {
      const parts = rgbMatch[1].split(",").map((part) => part.trim());
      if (parts.length < 3) return null;

      const r = Number.parseFloat(parts[0]);
      const g = Number.parseFloat(parts[1]);
      const b = Number.parseFloat(parts[2]);
      const a = parts.length >= 4 ? Number.parseFloat(parts[3]) : 1;

      if ([r, g, b, a].some((part) => Number.isNaN(part))) {
        return null;
      }

      if (a <= 0) return null;
      return { r, g, b, a };
    }

    return null;
  }

  function getStyleColorCandidate(style, options = {}) {
    if (!style) return null;
    const preferLastMatch = Boolean(options.preferLastMatch);

    const backgroundImage = style.backgroundImage;
    if (backgroundImage && backgroundImage !== "none") {
      const matches = backgroundImage.match(/rgba?\([^)]+\)|#[0-9a-f]{3,8}/ig);
      if (matches?.length) {
        return preferLastMatch ? matches[matches.length - 1] : matches[0];
      }
    }

    return style.backgroundColor;
  }

  function hasUsableBackground(style) {
    if (!style) return false;
    if (style.backgroundImage && style.backgroundImage !== "none") {
      return true;
    }

    const parsed = parseColor(style.backgroundColor);
    return Boolean(parsed && parsed.a > 0);
  }

  function getToneFromColor(color) {
    const parsed = parseColor(color);
    if (!parsed) return null;
    if (parsed.a < MIN_OPAQUE_ALPHA) return null;

    const brightness = (
      (parsed.r * 299) +
      (parsed.g * 587) +
      (parsed.b * 114)
    ) / 1000;

    return brightness < DARK_BRIGHTNESS_THRESHOLD ? "dark" : "light";
  }

  function getResolvedColorFromElement(element, options = {}) {
    let current = element;

    while (current && current.nodeType === Node.ELEMENT_NODE) {
      const style = window.getComputedStyle(current);
      const candidate = getStyleColorCandidate(style, options);
      const parsed = parseColor(candidate);
      if (parsed && parsed.a > 0) {
        return candidate;
      }
      current = current.parentElement;
    }

    return null;
  }

  function isDefaultLightSurfaceColor(color) {
    const parsed = parseColor(color);
    if (!parsed || parsed.a < 0.95) return false;

    const brightness = (
      (parsed.r * 299) +
      (parsed.g * 587) +
      (parsed.b * 114)
    ) / 1000;
    const delta = Math.max(parsed.r, parsed.g, parsed.b) - Math.min(parsed.r, parsed.g, parsed.b);

    return brightness >= DEFAULT_LIGHT_SURFACE_BRIGHTNESS && delta <= DEFAULT_LIGHT_SURFACE_DELTA;
  }

  function getToneFromElement(element) {
    let current = element;

    while (current && current.nodeType === Node.ELEMENT_NODE) {
      const style = window.getComputedStyle(current);
      const tone = getToneFromColor(getStyleColorCandidate(style));
      if (tone) {
        return tone;
      }
      current = current.parentElement;
    }

    return null;
  }

  function getDocumentTone() {
    return (
      getToneFromElement(document.body) ||
      getToneFromElement(document.documentElement) ||
      "light"
    );
  }

  function findVisibleElement(selectors) {
    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        if (isElementVisible(element)) {
          return element;
        }
      }
    }

    return null;
  }

  function getGuideMode() {
    const miniGuide = findVisibleElement(["ytd-mini-guide-renderer"]);
    if (miniGuide && miniGuide.getBoundingClientRect().width >= MINI_GUIDE_MIN_WIDTH) {
      return "collapsed";
    }

    const app = document.querySelector("ytd-app");
    if (app?.hasAttribute("guide-persistent-and-visible")) {
      return "expanded";
    }

    const expandedGuide = findVisibleElement(["ytd-guide-renderer", "#guide"]);
    if (
      expandedGuide &&
      expandedGuide.getBoundingClientRect().width >= EXPANDED_GUIDE_MIN_WIDTH
    ) {
      return "expanded";
    }

    return "collapsed";
  }

  function getLeftTone(guideMode) {
    const selectors = guideMode === "expanded"
      ? ["ytd-guide-renderer", "#guide-inner-content-container", "#guide-content", "#guide"]
      : ["ytd-mini-guide-renderer"];

    const element = findVisibleElement(selectors);
    return element ? (getToneFromElement(element) || getDocumentTone()) : getDocumentTone();
  }

  function getRightTone() {
    const element = findVisibleElement([
      "ytd-masthead",
      "ytd-app #container.ytd-masthead",
      "#page-manager",
      "ytd-app"
    ]);

    return element ? (getToneFromElement(element) || getDocumentTone()) : getDocumentTone();
  }

  function getLogoTextTone(guideMode, leftTone, rightTone) {
    let effectiveTone;

    if (guideMode === "expanded") {
      effectiveTone = leftTone;
    } else if (leftTone === rightTone) {
      effectiveTone = leftTone;
    } else {
      effectiveTone = rightTone;
    }

    return effectiveTone === "dark" ? "white" : "black";
  }

  function ensureChipBarFixStyle() {
    const head = document.head || document.documentElement;
    if (!head) return;

    let style = document.getElementById(CHIP_BAR_FIX_STYLE_ID);
    if (!style) {
      style = document.createElement("style");
      style.id = CHIP_BAR_FIX_STYLE_ID;
      style.textContent = CHIP_BAR_FIX_CSS;
    } else if (style.textContent !== CHIP_BAR_FIX_CSS) {
      style.textContent = CHIP_BAR_FIX_CSS;
    }

    const anchor = document.getElementById("cursor-space");
    if (anchor?.parentNode === head) {
      if (style.previousSibling !== anchor) {
        anchor.insertAdjacentElement("afterend", style);
      }
      return;
    }

    if (style.parentNode !== head || style !== head.lastElementChild) {
      head.appendChild(style);
    }
  }

  function clearChipBarScrims() {
    ensureChipBarFixStyle();

    for (const selector of CHIP_BAR_HOST_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.style.setProperty("background", "transparent", "important");
        element.style.setProperty("background-color", "transparent", "important");
        element.style.setProperty("background-image", "none", "important");
        element.style.setProperty("backdrop-filter", "none", "important");
        element.style.setProperty("-webkit-backdrop-filter", "none", "important");
        element.style.setProperty("box-shadow", "none", "important");
        element.style.setProperty("border-color", "transparent", "important");
      }
    }

    for (const selector of CHIP_BAR_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.style.setProperty("background", CHIP_BAR_FILL_VALUE, "important");
        element.style.setProperty("background-color", CHIP_BAR_FILL_VALUE, "important");
        element.style.setProperty("background-image", "none", "important");
        element.style.setProperty("backdrop-filter", "none", "important");
        element.style.setProperty("-webkit-backdrop-filter", "none", "important");
        element.style.setProperty("box-shadow", "none", "important");
        element.style.setProperty("border-color", "transparent", "important");
        if (element.id === "scroll-container") {
          element.style.setProperty("mask-image", "none", "important");
          element.style.setProperty("-webkit-mask-image", "none", "important");
        }
      }
    }
  }

  function clearChipBarEdgeButtons() {
    for (const selector of CHIP_BAR_EDGE_BUTTON_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.style.setProperty("background", CHIP_BAR_FILL_VALUE, "important");
        element.style.setProperty("background-color", CHIP_BAR_FILL_VALUE, "important");
        element.style.setProperty("background-image", "none", "important");
        element.style.setProperty("box-shadow", "none", "important");
        element.style.setProperty("border-color", "transparent", "important");
      }
    }

    for (const selector of CHIP_BAR_EDGE_BUTTON_RENDERER_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.style.setProperty("background", CHIP_BAR_FILL_VALUE, "important");
        element.style.setProperty("background-color", CHIP_BAR_FILL_VALUE, "important");
        element.style.setProperty("background-image", "none", "important");
        element.style.setProperty("box-shadow", "none", "important");
        element.style.setProperty("border-color", "transparent", "important");
      }
    }

    for (const selector of CHIP_BAR_EDGE_BUTTON_SHAPE_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.style.setProperty("background", CHIP_BAR_FILL_VALUE, "important");
        element.style.setProperty("background-color", CHIP_BAR_FILL_VALUE, "important");
        element.style.setProperty("background-image", "none", "important");
        element.style.setProperty("box-shadow", "none", "important");
        element.style.setProperty("border-color", "transparent", "important");
      }
    }
  }

  function getFrostedGlassSourceStyle() {
    for (const selector of FROSTED_GLASS_SOURCE_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        const style = window.getComputedStyle(element);
        if (hasUsableBackground(style)) {
          return style;
        }
      }
    }

    return null;
  }

  function getChipBarFillColor(sourceStyle) {
    for (const selector of CHIP_BAR_FILL_SOURCE_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        const style = window.getComputedStyle(element);
        const candidate = getStyleColorCandidate(style, { preferLastMatch: true });
        const parsed = parseColor(candidate);
        if (parsed && parsed.a > 0) {
          return candidate;
        }
      }
    }

    if (sourceStyle) {
      const candidate = getStyleColorCandidate(sourceStyle, { preferLastMatch: true });
      const parsed = parseColor(candidate);
      if (parsed && parsed.a > 0) {
        return candidate;
      }
    }

    return null;
  }

  function hasReadyChipBar() {
    for (const selector of CHIP_BAR_READY_RENDERER_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        if (!element.isConnected) continue;
        if (element.hidden || element.closest("[hidden]")) continue;

        const text = element.textContent?.replace(/\s+/g, " ").trim();
        if (text) {
          return true;
        }

        if (element.querySelector("button, a, [role='button'], yt-formatted-string")) {
          return true;
        }
      }
    }

    return false;
  }

  function resetChipBarVisualState() {
    const root = document.documentElement;
    const app = document.querySelector("ytd-app");
    const searchHeaders = document.querySelectorAll("ytd-search ytd-search-header-renderer");

    if (root) {
      delete root.dataset[CHIP_BAR_READY_DATA_ATTR];
      root.style.removeProperty(CHIP_BAR_FILL_COLOR_VAR);
    }

    if (app) {
      app.style.removeProperty("--nd-youtube-guide-gap-left");
      app.style.removeProperty("--nd-youtube-guide-gap-width");
      app.style.removeProperty("--nd-youtube-guide-gap-height");
    }

    for (const header of searchHeaders) {
      header.style.removeProperty("--nd-youtube-search-chip-bleed-left");
      header.style.removeProperty("--nd-youtube-search-chip-bleed-right");
      header.style.removeProperty("--nd-youtube-search-chip-bleed-top");
    }

    removeStylePropertiesFromElements(CHIP_BAR_HOST_SELECTORS, CHIP_BAR_STYLE_PROPERTIES);
    removeStylePropertiesFromElements(CHIP_BAR_SELECTORS, CHIP_BAR_STYLE_PROPERTIES);
    removeStylePropertiesFromElements(CHIP_BAR_EDGE_BUTTON_SELECTORS, CHIP_BAR_STYLE_PROPERTIES);
    removeStylePropertiesFromElements(CHIP_BAR_EDGE_BUTTON_RENDERER_SELECTORS, CHIP_BAR_STYLE_PROPERTIES);
    removeStylePropertiesFromElements(CHIP_BAR_EDGE_BUTTON_SHAPE_SELECTORS, CHIP_BAR_STYLE_PROPERTIES);

    for (const selector of FROSTED_GLASS_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.style.setProperty("display", "none", "important");
        element.style.setProperty("opacity", "0", "important");
        element.style.setProperty("background", "none", "important");
        element.style.setProperty("background-color", "transparent", "important");
        element.style.setProperty("background-image", "none", "important");
        element.style.setProperty("box-shadow", "none", "important");
        element.style.setProperty("pointer-events", "none", "important");
      }
    }
  }

  function setChipBarReadyState(isReady) {
    const root = document.documentElement;
    if (!root) return;

    if (isReady) {
      root.dataset[CHIP_BAR_READY_DATA_ATTR] = "true";
      return;
    }

    resetChipBarVisualState();
  }

  function isSearchPage() {
    return window.location.pathname === "/results" || Boolean(document.querySelector("ytd-search"));
  }

  function getSearchRightFillColor(sourceStyle) {
    for (const selector of SEARCH_RIGHT_FILL_SOURCE_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        if (!isElementVisible(element)) continue;
        const color = getResolvedColorFromElement(element, { preferLastMatch: true });
        if (color) {
          return color;
        }
      }
    }

    return (
      getResolvedColorFromElement(document.body, { preferLastMatch: true }) ||
      getResolvedColorFromElement(document.documentElement, { preferLastMatch: true })
    );
  }

  function syncChipBarFillVars(sourceStyle) {
    const root = document.documentElement;
    if (!root) return;

    const fillColor = getChipBarFillColor(sourceStyle);
    if (!fillColor || isDefaultLightSurfaceColor(fillColor)) {
      root.style.removeProperty(CHIP_BAR_FILL_COLOR_VAR);
      return;
    }

    root.style.setProperty(CHIP_BAR_FILL_COLOR_VAR, fillColor);
  }

  function syncRightSurfaceVars(sourceStyle) {
    const root = document.documentElement;
    if (!root) return;

    if (!isSearchPage()) {
      root.style.removeProperty(SUMMARY_TEXT_COLOR_VAR);
      return;
    }

    let fillColor = getSearchRightFillColor(sourceStyle);
    const existingFillColor = root.style.getPropertyValue(RIGHT_FILL_COLOR_VAR).trim();

    if (fillColor && !isDefaultLightSurfaceColor(fillColor)) {
      lastStableSearchFillColor = fillColor;
    } else if (lastStableSearchFillColor) {
      fillColor = lastStableSearchFillColor;
    } else if (existingFillColor) {
      fillColor = existingFillColor;
    }

    if (!fillColor) {
      root.style.removeProperty(RIGHT_FILL_COLOR_VAR);
      root.style.removeProperty(SUMMARY_TEXT_COLOR_VAR);
      return;
    }

    const tone = getToneFromColor(fillColor) || getDocumentTone();
    root.style.setProperty(RIGHT_FILL_COLOR_VAR, fillColor);
    root.style.setProperty(SUMMARY_TEXT_COLOR_VAR, tone === "dark" ? "#fff" : "#000");
  }

  function getContentLeftBoundary() {
    const guide = findVisibleElement([
      "ytd-mini-guide-renderer",
      "#guide",
      "ytd-guide-renderer"
    ]);
    if (guide) {
      return Math.max(0, guide.getBoundingClientRect().right);
    }

    const app = document.querySelector("ytd-app");
    return app ? Math.max(0, app.getBoundingClientRect().left) : 0;
  }

  function isSearchPreviewOverlayItem(item) {
    if (!item || typeof item !== "object") return false;
    return Object.keys(item).some((key) => SEARCH_PREVIEW_OVERLAY_RENDERER_KEYS.includes(key));
  }

  function stripSearchPreviewDataFromRenderers() {
    for (const selector of SEARCH_PREVIEW_RENDERER_SELECTORS) {
      const renderers = document.querySelectorAll(selector);
      for (const renderer of renderers) {
        const data = renderer?.data;
        if (!data || typeof data !== "object") continue;

        let changed = false;
        for (const key of SEARCH_PREVIEW_DATA_KEYS) {
          if (!(key in data)) continue;
          try {
            delete data[key];
            changed = true;
          } catch {}
          if (key in data) {
            try {
              data[key] = null;
              changed = true;
            } catch {}
          }
        }

        if (Array.isArray(data.thumbnailOverlays)) {
          const filteredOverlays = data.thumbnailOverlays.filter((item) => !isSearchPreviewOverlayItem(item));
          if (filteredOverlays.length !== data.thumbnailOverlays.length) {
            try {
              data.thumbnailOverlays = filteredOverlays;
              changed = true;
            } catch {}
          }
        }

        if (!changed) continue;

        try {
          renderer.data = data;
        } catch {}
        try {
          if (typeof renderer.notifyPath === "function") {
            for (const key of SEARCH_PREVIEW_DATA_KEYS) {
              renderer.notifyPath(`data.${key}`, null);
            }
            renderer.notifyPath("data.thumbnailOverlays", data.thumbnailOverlays);
          }
        } catch {}
        try {
          if (typeof renderer.dataChanged === "function") {
            renderer.dataChanged();
          }
        } catch {}
        try {
          if (typeof renderer.markDirty === "function") {
            renderer.markDirty();
          }
        } catch {}
        try {
          if (typeof renderer.requestUpdate === "function") {
            renderer.requestUpdate();
          }
        } catch {}
      }
    }
  }

  function removeSearchAds() {
    for (const selector of SEARCH_AD_RENDERER_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.setAttribute("hidden", "");
        element.style.setProperty("display", "none", "important");
        element.style.setProperty("visibility", "hidden", "important");
        element.style.setProperty("opacity", "0", "important");
        element.style.setProperty("pointer-events", "none", "important");
      }
    }
  }

  function freezeSearchThumbnails() {
    removeSearchAds();
    stripSearchPreviewDataFromRenderers();

    for (const selector of SEARCH_THUMBNAIL_PREVIEW_HOST_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.style.setProperty("display", "none", "important");
        element.style.setProperty("visibility", "hidden", "important");
        element.style.setProperty("opacity", "0", "important");
        element.style.setProperty("pointer-events", "none", "important");
      }
    }

    for (const selector of SEARCH_THUMBNAIL_PREVIEW_VIDEO_SELECTORS) {
      const mediaElements = document.querySelectorAll(selector);
      for (const media of mediaElements) {
        try {
          if (typeof media.pause === "function") {
            media.pause();
          }
          if ("currentTime" in media) {
            media.currentTime = 0;
          }
        } catch {}

        media.removeAttribute("autoplay");
        media.style.setProperty("display", "none", "important");
        media.style.setProperty("visibility", "hidden", "important");
        media.style.setProperty("opacity", "0", "important");
        media.style.setProperty("pointer-events", "none", "important");
      }
    }
  }

  function blockSearchPreviewEvent(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!target.closest(SEARCH_PREVIEW_BLOCK_TARGET_SELECTOR)) return;

    event.stopImmediatePropagation();
  }

  function installSearchPreviewBlockers() {
    if (searchPreviewBlockersInstalled) return;
    searchPreviewBlockersInstalled = true;

    for (const type of SEARCH_PREVIEW_BLOCKED_EVENT_TYPES) {
      document.addEventListener(type, blockSearchPreviewEvent, true);
    }
  }

  function uninstallSearchPreviewBlockers() {
    if (!searchPreviewBlockersInstalled) return;
    searchPreviewBlockersInstalled = false;

    for (const type of SEARCH_PREVIEW_BLOCKED_EVENT_TYPES) {
      document.removeEventListener(type, blockSearchPreviewEvent, true);
    }
  }

  function syncGuideGapMask() {
    const app = document.querySelector("ytd-app");
    if (!app) return;

    app.style.setProperty("--nd-youtube-guide-gap-left", "0px");
    app.style.setProperty("--nd-youtube-guide-gap-width", "0px");
    app.style.setProperty("--nd-youtube-guide-gap-height", "0px");

    if (getGuideMode() !== "expanded") return;

    const guide = findVisibleElement([
      "ytd-guide-renderer",
      "#guide-inner-content-container",
      "#guide-content",
      "#guide"
    ]);
    const target = findVisibleElement(GUIDE_GAP_MASK_TARGET_SELECTORS);
    if (!guide || !target) return;

    const guideRight = Math.max(0, guide.getBoundingClientRect().right);
    const targetRect = target.getBoundingClientRect();
    const masthead = findVisibleElement([
      "ytd-masthead",
      "ytd-app #container.ytd-masthead"
    ]);
    const mastheadBottom = masthead ? masthead.getBoundingClientRect().bottom : 0;
    const gapWidth = Math.max(0, targetRect.left - guideRight);
    const gapHeight = Math.max(mastheadBottom, targetRect.top);

    if (gapWidth < 1 || gapHeight < 1) return;

    app.style.setProperty("--nd-youtube-guide-gap-left", `${Math.floor(guideRight)}px`);
    app.style.setProperty("--nd-youtube-guide-gap-width", `${Math.ceil(gapWidth)}px`);
    app.style.setProperty("--nd-youtube-guide-gap-height", `${Math.ceil(gapHeight)}px`);
  }

  function syncSearchChipBarBleed() {
    const headers = document.querySelectorAll("ytd-search ytd-search-header-renderer");
    if (!headers.length) return;

    const contentLeft = getContentLeftBoundary();
    const viewportRight = document.documentElement.clientWidth;
    const masthead = findVisibleElement([
      "ytd-masthead",
      "ytd-app #container.ytd-masthead"
    ]);
    const mastheadBottom = masthead ? masthead.getBoundingClientRect().bottom : 0;

    for (const header of headers) {
      const rect = header.getBoundingClientRect();
      const bleedLeft = Math.max(0, rect.left - contentLeft);
      const bleedRight = Math.max(0, viewportRight - rect.right);
      const bleedTop = Math.max(0, rect.top - mastheadBottom);

      header.style.setProperty("--nd-youtube-search-chip-bleed-left", `${bleedLeft}px`);
      header.style.setProperty("--nd-youtube-search-chip-bleed-right", `${bleedRight}px`);
      header.style.setProperty("--nd-youtube-search-chip-bleed-top", `${bleedTop}px`);
    }
  }

  function syncFrostedGlassFill(sourceStyle) {
    for (const selector of FROSTED_GLASS_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.style.setProperty("display", "none", "important");
        element.style.setProperty("opacity", "0", "important");
        element.style.setProperty("background", "none", "important");
        element.style.setProperty("background-color", "transparent", "important");
        element.style.setProperty("background-image", "none", "important");
        element.style.setProperty("background-position", "0 0", "important");
        element.style.setProperty("background-repeat", "repeat", "important");
        element.style.setProperty("background-size", "auto", "important");
        element.style.setProperty("backdrop-filter", "none", "important");
        element.style.setProperty("-webkit-backdrop-filter", "none", "important");
        element.style.setProperty("box-shadow", "none", "important");
        element.style.setProperty("pointer-events", "none", "important");
      }
    }
  }

  function applyLogoTone() {
    const logo = document.querySelector("ytd-topbar-logo-renderer#logo, #masthead-logo");
    if (!logo) return;

    const guideMode = getGuideMode();
    const leftTone = getLeftTone(guideMode);
    const rightTone = getRightTone();
    const logoTextTone = getLogoTextTone(guideMode, leftTone, rightTone);
    const signature = `${guideMode}|${leftTone}|${rightTone}|${logoTextTone}`;

    if (signature === lastSignature) return;
    lastSignature = signature;

    const root = document.documentElement;
    root.dataset[LOGO_TEXT_DATA_ATTR] = logoTextTone;
    root.dataset[GUIDE_MODE_DATA_ATTR] = guideMode;
    root.dataset[LEFT_TONE_DATA_ATTR] = leftTone;
    root.dataset[RIGHT_TONE_DATA_ATTR] = rightTone;
  }

  function getElementLabels(element) {
    if (!element) return "";

    return [
      element.getAttribute("aria-label"),
      element.getAttribute("title"),
      element.getAttribute("tooltip"),
      element.querySelector("[aria-label]")?.getAttribute("aria-label"),
      element.querySelector("[title]")?.getAttribute("title")
    ]
      .filter(Boolean)
      .join(" ");
  }

  function restoreHiddenTopbarPlayButtonTargets() {
    const hiddenTargets = document.querySelectorAll(`[${TOPBAR_PLAY_BUTTON_HIDDEN_ATTR}="true"]`);
    for (const element of hiddenTargets) {
      element.removeAttribute(TOPBAR_PLAY_BUTTON_HIDDEN_ATTR);
      element.style.removeProperty("display");
      element.style.removeProperty("visibility");
      element.style.removeProperty("opacity");
      element.style.removeProperty("pointer-events");
    }
  }

  function getTopbarVoiceButton() {
    const candidates = document.querySelectorAll(
      "ytd-masthead button, ytd-masthead tp-yt-paper-icon-button, ytd-masthead yt-icon-button, ytd-masthead ytd-button-renderer, ytd-masthead ytd-topbar-menu-button-renderer, ytd-masthead [role='button']"
    );

    for (const candidate of candidates) {
      if (/voice|microphone/i.test(getElementLabels(candidate))) {
        return candidate;
      }
    }

    return null;
  }

  function getTopbarButtonsContainer() {
    const voiceButton = getTopbarVoiceButton();
    const voiceParent = voiceButton?.parentElement;
    if (voiceParent && voiceParent.children.length > 1) {
      return voiceParent;
    }

    return (
      document.querySelector("ytd-masthead #end #buttons") ||
      document.querySelector("ytd-masthead #buttons.ytd-masthead") ||
      document.querySelector("ytd-masthead #buttons")
    );
  }

  function removeInjectedTopbarPlayButton() {
    document.getElementById(TOPBAR_PLAY_BUTTON_ID)?.remove();
  }

  function clearTopbarPlayButtonStyles(element) {
    if (!element) return;

    [
      "transform",
      "transform-origin",
      "margin-inline",
      "width",
      "height",
      "min-width",
      "min-height",
      "display",
      "align-items",
      "justify-content",
      "overflow"
    ].forEach((property) => element.style.removeProperty(property));

    const descendants = element.querySelectorAll(
      "button, tp-yt-paper-icon-button, yt-icon-button, yt-button-shape, .yt-spec-button-shape-next, a, div, img, svg, yt-icon, .ytIconWrapperHost"
    );
    for (const node of descendants) {
      [
        "width",
        "height",
        "min-width",
        "min-height",
        "padding",
        "margin",
        "display",
        "align-items",
        "justify-content",
        "object-fit"
      ].forEach((property) => node.style.removeProperty(property));
    }
  }

  function isExcludedTopbarPlayButtonCandidate(element) {
    const labels = getElementLabels(element);
    return /settings|sign in|voice|microphone/i.test(labels);
  }

  function resolveTopbarPlayButtonTarget(candidateRoot) {
    if (!candidateRoot) return null;

    const candidates = [];
    if (candidateRoot.matches?.(TOPBAR_PLAY_BUTTON_LEAF_SELECTOR)) {
      candidates.push(candidateRoot);
    }
    candidates.push(...candidateRoot.querySelectorAll(TOPBAR_PLAY_BUTTON_LEAF_SELECTOR));

    let bestCandidate = null;
    let bestArea = Number.POSITIVE_INFINITY;

    for (const candidate of candidates) {
      if (!isElementVisible(candidate)) continue;
      if (candidate.id === TOPBAR_PLAY_BUTTON_ID) continue;
      if (isExcludedTopbarPlayButtonCandidate(candidate)) continue;

      const rect = candidate.getBoundingClientRect();
      const area = rect.width * rect.height;
      if (area < 64) continue;

      if (area < bestArea) {
        bestCandidate = candidate;
        bestArea = area;
      }
    }

    if (bestCandidate) {
      return bestCandidate;
    }

    if (!isElementVisible(candidateRoot)) return null;
    if (candidateRoot.id === TOPBAR_PLAY_BUTTON_ID) return null;
    if (isExcludedTopbarPlayButtonCandidate(candidateRoot)) return null;
    return candidateRoot;
  }

  function getTopbarPlayButtonTarget(container) {
    if (!container) return null;

    const directChildren = Array.from(container.children);
    const voiceButton = directChildren.find((element) => /voice|microphone/i.test(getElementLabels(element)));
    if (voiceButton) {
      const voiceIndex = directChildren.indexOf(voiceButton);
      for (let index = voiceIndex + 1; index < directChildren.length; index += 1) {
        const resolvedCandidate = resolveTopbarPlayButtonTarget(directChildren[index]);
        if (resolvedCandidate) {
          return resolvedCandidate;
        }
      }
    }

    const settingsButton = directChildren.find((element) => /settings/i.test(getElementLabels(element)));
    if (settingsButton?.previousElementSibling) {
      const resolvedCandidate = resolveTopbarPlayButtonTarget(settingsButton.previousElementSibling);
      if (resolvedCandidate) {
        return resolvedCandidate;
      }
    }

    if (settingsButton) {
      const settingsIndex = directChildren.indexOf(settingsButton);
      for (let index = settingsIndex - 1; index >= 0; index -= 1) {
        const resolvedCandidate = resolveTopbarPlayButtonTarget(directChildren[index]);
        if (resolvedCandidate) {
          return resolvedCandidate;
        }
      }
    }

    for (const child of directChildren) {
      const resolvedCandidate = resolveTopbarPlayButtonTarget(child);
      if (resolvedCandidate) {
        return resolvedCandidate;
      }
    }

    return null;
  }

  function markTopbarPlayButton() {
    restoreHiddenTopbarPlayButtonTargets();
    removeInjectedTopbarPlayButton();

    const container = getTopbarButtonsContainer();
    const target = container ? getTopbarPlayButtonTarget(container) : null;
    if (!target) return;

    const previouslyMarked = document.querySelectorAll(`[${TOPBAR_PLAY_BUTTON_ATTR}]`);
    if (previouslyMarked.length === 1 && previouslyMarked[0] === target) {
      return;
    }

    for (const element of previouslyMarked) {
      element.removeAttribute(TOPBAR_PLAY_BUTTON_ATTR);
      clearTopbarPlayButtonStyles(element);
    }

    for (const child of Array.from(container.children)) {
      clearTopbarPlayButtonStyles(child);
    }

    clearTopbarPlayButtonStyles(target);
    target.setAttribute(TOPBAR_PLAY_BUTTON_ATTR, "true");
  }

  function clearTopbarPlayButtonState() {
    restoreHiddenTopbarPlayButtonTargets();
    removeInjectedTopbarPlayButton();

    const previouslyMarked = document.querySelectorAll(`[${TOPBAR_PLAY_BUTTON_ATTR}]`);
    for (const element of previouslyMarked) {
      element.removeAttribute(TOPBAR_PLAY_BUTTON_ATTR);
      clearTopbarPlayButtonStyles(element);
    }
  }

  function cleanupHelperState() {
    const root = document.documentElement;

    clearActivationRefreshTimers();
    uninstallSearchPreviewBlockers();
    clearTopbarPlayButtonState();
    document.getElementById(CHIP_BAR_FIX_STYLE_ID)?.remove();
    resetChipBarVisualState();
    removeStylePropertiesFromElements(FROSTED_GLASS_SELECTORS, [
      ...FROSTED_GLASS_STYLE_PROPERTIES,
      "opacity"
    ]);
    removeStylePropertiesFromElements(SEARCH_THUMBNAIL_PREVIEW_HOST_SELECTORS, HIDDEN_ELEMENT_STYLE_PROPERTIES);
    removeStylePropertiesFromElements(SEARCH_THUMBNAIL_PREVIEW_VIDEO_SELECTORS, HIDDEN_ELEMENT_STYLE_PROPERTIES);
    removeStylePropertiesFromElements(SEARCH_AD_RENDERER_SELECTORS, HIDDEN_ELEMENT_STYLE_PROPERTIES);

    for (const selector of SEARCH_AD_RENDERER_SELECTORS) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        element.removeAttribute("hidden");
      }
    }

    if (root) {
      root.style.removeProperty(RIGHT_FILL_COLOR_VAR);
      root.style.removeProperty(SUMMARY_TEXT_COLOR_VAR);
      delete root.dataset[ACTIVE_DATA_ATTR];
      delete root.dataset[CHIP_BAR_READY_DATA_ATTR];
      delete root.dataset[LOGO_TEXT_DATA_ATTR];
      delete root.dataset[GUIDE_MODE_DATA_ATTR];
      delete root.dataset[LEFT_TONE_DATA_ATTR];
      delete root.dataset[RIGHT_TONE_DATA_ATTR];
    }

    lastSignature = "";
    lastStableSearchFillColor = "";
  }

  function scheduleUpdate() {
    if (!helperActive || updateScheduled) return;
    updateScheduled = true;

    requestAnimationFrame(() => {
      updateScheduled = false;
      if (!helperActive) return;

      ensureSearchPreviewConfigPatch();
      ensureChipBarFixStyle();
      installSearchPreviewBlockers();
      const sourceStyle = getFrostedGlassSourceStyle();
      freezeSearchThumbnails();
      syncRightSurfaceVars(sourceStyle);
      const chipBarReady = hasReadyChipBar();
      setChipBarReadyState(chipBarReady);

      if (chipBarReady) {
        clearChipBarScrims();
        clearChipBarEdgeButtons();
        syncChipBarFillVars(sourceStyle);
        syncGuideGapMask();
        syncSearchChipBarBleed();
        syncFrostedGlassFill(sourceStyle);
      }

      applyLogoTone();
      markTopbarPlayButton();
    });
  }

  function startActiveObserver() {
    if (activeObserver) return;

    activeObserver = new MutationObserver(() => {
      scheduleUpdate();
    });

    activeObserver.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["class", "style", "hidden", "dark", "guide-persistent-and-visible"]
    });
  }

  function stopActiveObserver() {
    if (!activeObserver) return;
    activeObserver.disconnect();
    activeObserver = null;
  }

  function attachActivationBodyObserver() {
    if (!document.body || activationBodyObserver) return;

    activationBodyObserver = new MutationObserver(() => {
      scheduleActivationSync();
    });

    activationBodyObserver.observe(document.body, {
      attributes: true,
      childList: false,
      subtree: false,
      attributeFilter: [...COMPANION_ACTIVE_ATTRIBUTES, "class"]
    });
  }

  function startActivationObservers() {
    if (!activationRootObserver) {
      activationRootObserver = new MutationObserver(() => {
        attachActivationBodyObserver();
        scheduleActivationSync();
      });

      activationRootObserver.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: false,
        attributeFilter: [...COMPANION_ACTIVE_ATTRIBUTES, "class"]
      });
    }

    attachActivationBodyObserver();
  }

  async function activateHelper() {
    const generation = ++activationGeneration;
    ensureChipBarFixStyle();
    const stylesReady = await ensureYoutubeStyles();

    if (!stylesReady) return;
    if (generation !== activationGeneration) return;
    if (!isCompanionActive()) {
      removeYoutubeStyles();
      return;
    }

    helperActive = true;
    scheduleActivationRefreshes();
    if (document.documentElement) {
      document.documentElement.dataset[ACTIVE_DATA_ATTR] = "true";
    }

    startActiveObserver();
    scheduleUpdate();
  }

  function deactivateHelper() {
    activationGeneration += 1;
    clearActivationRefreshTimers();

    if (
      !helperActive &&
      !document.getElementById(DYNAMIC_STYLE_ID) &&
      !document.getElementById(CHIP_BAR_FIX_STYLE_ID)
    ) {
      return;
    }

    helperActive = false;
    stopActiveObserver();
    cleanupHelperState();
    removeYoutubeStyles();
  }

  function syncHelperActivation() {
    if (isCompanionActive()) {
      void activateHelper();
      return;
    }

    deactivateHelper();
  }

  function scheduleActivationSync() {
    if (activationSyncScheduled) return;
    activationSyncScheduled = true;

    requestAnimationFrame(() => {
      activationSyncScheduled = false;
      syncHelperActivation();
    });
  }

  function handlePotentialPageChange() {
    attachActivationBodyObserver();
    scheduleActivationSync();

    if (helperActive) {
      scheduleUpdate();
    }
  }

  function handleCompanionActiveEvent(event) {
    const nextValue = Boolean(event?.detail?.active);
    window[COMPANION_ACTIVE_WINDOW_FLAG] = nextValue;
    scheduleActivationSync();
  }

  document.addEventListener("DOMContentLoaded", handlePotentialPageChange, { once: true });
  document.addEventListener("yt-navigate-finish", handlePotentialPageChange, true);
  document.addEventListener("yt-page-data-updated", handlePotentialPageChange, true);
  window.addEventListener("load", handlePotentialPageChange, { once: true });
  window.addEventListener("resize", () => {
    if (helperActive) {
      scheduleUpdate();
    }
  }, { passive: true });
  window.addEventListener(COMPANION_ACTIVE_EVENT, handleCompanionActiveEvent, true);

  startActivationObservers();
  scheduleActivationSync();
  setTimeout(scheduleActivationSync, 250);
  setTimeout(scheduleActivationSync, 1200);
})();
