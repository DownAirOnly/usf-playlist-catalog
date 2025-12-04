# Universal Studios Florida Playlist Catalog

A small web project to catalog the background music playlists at **Universal Studios Florida (USF)**.

Throughout the park there are more playlists than most guests (and even some Team Members) realize: area street loops, café music, attraction exits, seasonal overlays, and more. This site is an attempt to document those playlists in one place and make them easy to browse.

> This is a personal fan project and is not affiliated with Universal Parks & Resorts.

---

## Current Status

- ✅ Basic static site built with **HTML + CSS**
- ✅ Top-of-page navigation with anchors to each area:
  - New York  
  - Production  
  - Hollywood / Central Park  
  - San Francisco  
  - London / Diagon Alley  
  - World Expo  
  - DreamWorks / KidZone  
  - Past Areas (deprecated)
- ✅ Playlists are grouped by:
  - **Area** (e.g., New York, Production, San Francisco)
  - **Playlist** within that area (e.g., street loop, Minion Cafe, Men in Black, Simpsons)
- ✅ New York and several other areas have real song data filled in
- ✅ Semantic structure in place for future evolution (each area and playlist has consistent markup and data attributes)

At this stage the site is still a single static page with hard-coded data, but the structure is intentionally designed so it can later be driven by JavaScript or a framework (React/Next etc.).

---

## Project Goals

### What this project is for

- **Practice web development**
  - Start with clean semantic HTML and basic CSS.
  - Grow into data-driven rendering and possibly a framework later.
- **Create a portfolio-friendly project**
  - Something concrete to show in tech conversations or interviews.
  - A real-world example of turning a niche interest into a usable tool.
- **Capture park history**
  - Some loops, especially older ones, are hard to find or verify.
  - This project is one way to document them before they disappear.

### What this project is *not*

- Not an official or complete source for Universal music.
- Not guaranteed accurate or always up to date.
- Not a full-blown app (yet).

---

## How It’s Structured (Tech Overview)

Right now the project is intentionally simple:

- **Static HTML**
  - One main page with:
    - `<header>` containing title and area navigation
    - `<main>` containing a series of `<section class="area">` blocks
    - Each area contains nested `<section class="playlist">` elements
- **Semantic grouping**
  - Areas have IDs like `#new-york`, `#production`, `#san-francisco` for navigation.
  - Playlists inside an area use:
    - `class="playlist"`
    - `data-area-id="new-york"`, `data-playlist-id="street"` (etc.)
    - `h3.playlist-title` for the playlist name
    - `ul.song-list` for the songs
    - optional `p.playlist-note` for extra context
- **CSS**
  - A single `styles.css` for layout, typography, and spacing.
  - Focus is on readability and a clean, simple look rather than heavy visual design.

This structure is chosen so it will be straightforward later to:

- Extract the playlist data into a JavaScript object or JSON file.
- Render areas and playlists dynamically from that data.
- Port the structure into components in React/Next if needed.

---

## Data Notes & Accuracy

- Some playlists are based on:
  - Direct listening in the park.
  - Known track lists from existing online sources (e.g., Spotify).
- Accuracy is **not guaranteed**:
  - Playlists change seasonally and over time.
  - Some loops may be incomplete, approximate, or outdated.
- Notes in the markup (and on the page) indicate where a playlist is:
  - Confirmed / mostly complete
  - “Coming soon”
  - Based on a third-party source and may not fully match the park loop

---

## Roadmap / Next Steps

Short term:

- Fill in more playlists for existing areas.
- Add small UX improvements (e.g., visual grouping of playlists, subtle separators, better typography).
- Add simple indicators for:
  - “Coming soon”
  - “Partial / unverified”
  - “Last updated” (per playlist or area)

Medium term:

- Move playlist data into a **JavaScript data structure** or JSON file.
- Render areas and playlists dynamically with JS instead of hand-coded HTML.
- Add basic features like:
  - Search/filter by song or artist
  - Jump-to-playlist controls within an area

Long term:

- Explore a **React or Next.js** version using components similar to the current HTML structure.
- Add support for:
  - Islands of Adventure (IOA)
  - Seasonal overlays and event-specific loops (e.g., holidays, HHN)
- Possibly host a more polished version as a portfolio piece.

---

