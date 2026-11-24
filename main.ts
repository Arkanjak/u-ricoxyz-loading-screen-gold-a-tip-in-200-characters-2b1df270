import { writeFileSync, mkdirSync } from "node:fs";

// Loading-screen tip for stressed developers and AI coding agents.
// Gate: /output/entry.txt, UTF-8, 1-200 characters, one line.
// This entry reads no assets, so no path needs resolving from
// import.meta.dirname; the output path is the absolute /output/entry.txt
// the gate requires.

const SETUP = "Your agent rewrote the code you just fixed.";
const PUNCHLINE =
  "Relax — neither of you knows why it worked the first time.";

const ENTRY = `${SETUP} ${PUNCHLINE}`;

function checkEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry length ${length} outside 1-200`);
  }
  if (/[\n\r]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

checkEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
