# Nature Park Manager Devlogs

This repository hosts Reveal.js slide decks for the Nature Park Manager devlogs, using the published `reveal.js` npm package (not a full clone of the reveal.js source repository).

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local presentation server:
   ```bash
   npm run dev
   ```

The deck entrypoint is [`index.html`](./index.html), and the current markdown slide content is in [`devlogs/001/slides.md`](./devlogs/001/slides.md).

## Notes

- Reveal assets and plugins are imported from `node_modules/reveal.js` via [`main.js`](./main.js).
- Custom styling is in [`custom.css`](./custom.css).
