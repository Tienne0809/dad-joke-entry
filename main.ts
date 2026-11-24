import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Dad Joke Showdown — make.fun bounty entry.
// The program writes one groan-worthy dad joke (73 chars) to the output entry file.
const line =
  "My guitar is the most anxious instrument I own — it never stops fretting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
