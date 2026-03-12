# Chrome Web Store privacy notes for Google Enhanced

## Single purpose

Customize Google's homepage and Chrome's new tab page by removing doodles/share UI and providing a clean, customizable replacement new tab with shortcuts, themes, and Google quick-access controls.

## Permissions justifications

- `topSites`: Used to create the initial shortcut tiles on the custom new tab page from the browser's most visited sites.
- `storage`: Used to save user settings and local customization data such as shortcuts, uploaded backgrounds, theme choices, doodle state, and UI preferences.
- `identity`: Used to access the Chrome profile's Google account information needed for the account chip feature on the custom new tab page.
- `identity.email`: Used only to read the signed-in profile email so the extension can show the account chip and related avatar on the custom new tab page.
- `alarms`: Used to retry restoring or refreshing open new-tab pages after install, update, or settings changes.
- `tabs`: Used to find existing new-tab-like tabs and switch or reload them when the enhanced new tab feature is enabled or disabled.

## Data usage disclosures to select

Select the options in the Privacy tab that correspond to:

- Email address / personally identifiable information, because the extension uses `chrome.identity.getProfileUserInfo()`.
- Browsing activity or web history, because the extension uses `chrome.topSites.get()` to build initial shortcuts.
- User-provided content or stored user settings, because the extension stores custom shortcuts, uploaded backgrounds, avatar choices, and UI preferences locally.

## Certifications

Only certify statements that are true in the dashboard. Based on the current code:

- Data is used only to provide the extension's user-facing features.
- Data is not sold.
- Data is not used for creditworthiness or lending decisions.
- Data is not used or transferred for personalized advertising.

## Privacy policy link

Host `privacy-policy.html` at a public HTTPS URL, then paste that URL into the Privacy Policy field on the Privacy tab.
