// One-line laugh: a single everyday sentence, turn in the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "We agreed to split the cookie, and my half was the middle.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === "") {
  throw new Error(`entry must be 1-200 non-blank characters, got ${chars}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
