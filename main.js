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
import { registerGDScriptLanguage } from "./gdscript-hljs";

const deck = new Reveal({
  hash: true,
  center: true,
  highlight: {
    highlightOnLoad: false
  },
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX],
});

deck.initialize().then(() => {
  const highlightPlugin = deck.getPlugin("highlight");
  const hljs = highlightPlugin?.hljs || RevealHighlight.hljs;
  registerGDScriptLanguage(hljs);

  // Run Reveal highlighting once, after custom languages are registered.
  document.querySelectorAll("pre code").forEach((block) => {
    highlightPlugin?.highlightBlock?.(block);
  });

  // Ensure images marked for "after code fragments" appear after all generated
  // data-line-numbers fragments on the same slide.
  document.querySelectorAll("section").forEach((slide) => {
    const targets = slide.querySelectorAll(
      '.fragment[data-after-code-fragments="true"]'
    );
    if (!targets.length) return;

    let maxIndex = -1;
    slide.querySelectorAll(".fragment").forEach((fragment) => {
      if (fragment.hasAttribute("data-after-code-fragments")) return;
      const raw = fragment.getAttribute("data-fragment-index");
      const idx = Number.parseInt(raw, 10);
      if (Number.isFinite(idx)) {
        maxIndex = Math.max(maxIndex, idx);
      }
    });

    const afterCodeIndex = String(maxIndex + 1);
    targets.forEach((target) => {
      target.setAttribute("data-fragment-index", afterCodeIndex);
    });
  });
});

// deck.initialize()
