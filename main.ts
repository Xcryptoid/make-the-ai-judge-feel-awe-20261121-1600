// Make the AI judge feel awe — make-the-ai-judge-feel-awe-20261121-1600
//
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. The text is fixed and deterministic; running
// this program twice produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

// The chosen text (231 Unicode code points). Drafted in three versions
// and picked against the judge's brief, in order: it relaxes by slowing
// the reader down; the calm comes from the image itself, never from an
// instruction; plain concrete words, a slow even rhythm; and a thought
// that keeps growing after the last line — light older than anyone alive,
// crossing all that dark without hurrying, still arriving on time.
const TEXT =
  "The light from a far star left before anyone alive was born. " +
  "It crossed all that dark without hurrying, and arrives now, gently, " +
  "on a window you happen to be looking through. " +
  "Some things take the long way, and still arrive on time.";

mkdirSync("/output", { recursive: true });

// Self-check before writing: the gate requires 1 to 280 Unicode code
// points and text that is not only whitespace. Fail loudly instead of
// handing the grader an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry.txt must be 1-280 code points, got ${codePoints}`);
}
if (/^\s*$/.test(TEXT)) {
  throw new Error("entry.txt must not be only whitespace");
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
