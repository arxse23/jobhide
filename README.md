# Seek Job Hide

A Chrome extension that hides job listings on [Seek](https://www.seek.com.au) matching keywords you choose.

## Why

While job hunting I kept scrolling past the same irrelevant listings: roles too senior, wrong specialisation, agencies reposting the same ad. There are extensions that filter job boards, but the free tiers cap you at a handful of keywords, so I built my own.

## Installation

Not on the Chrome Web Store, so it installs unpacked:

1. Clone or download this repo
2. Go to `chrome://extensions`
3. Turn on **Developer mode** (top right)
4. Click **Load unpacked** and select the project folder

## Usage

<img width="418" height="413" alt="Screenshot 2026-09-10 201406" src="https://github.com/user-attachments/assets/c8da9d22-09ed-4d27-88e3-03a1df902682" />

Click the extension icon, type a keyword, hit **Add**. Any job on Seek whose title contains that keyword is hidden. Click the ✕ on a keyword to remove it.

Keywords are case-insensitive and match partial words — `senior` will hide "Senior Developer" and "Senior Analyst".

Your list is saved locally and persists between sessions.

## How it works

- `popup.html` / `popup.js` — the keyword list UI, backed by `chrome.storage.local`
- `content.js` — runs on Seek pages, checks each job card's title against the saved keywords, and hides matches
- A `MutationObserver` re-runs the check when new cards load, so filtering holds through pagination and infinite scroll

## Known limitations

- **Titles only.** Keywords are matched against the job title, not the description or company name.
- **Seek only.** Won't work on Indeed, LinkedIn, or other boards.
- **Hidden means hidden.** There's no way to see what got filtered, so a short keyword like `it` will hide far more than you expect.
- **Selector-dependent.** It targets Seek's current DOM structure. If Seek changes their markup, it'll stop working until the selectors are updated.

## Built with

Plain HTML, CSS, and JavaScript — no frameworks, no build step. Chrome Extension Manifest V3.
