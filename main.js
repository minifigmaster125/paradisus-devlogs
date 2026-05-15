import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight";
import RevealMarkdown from "reveal.js/plugin/markdown";
import RevealMath from "reveal.js/plugin/math";
import RevealNotes from "reveal.js/plugin/notes";

import "reveal.js/reset.css";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./custom.css";

const deck = new Reveal({
  hash: true,
  center: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX],
});

deck.initialize();
