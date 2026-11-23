import { mkdirSync, writeFileSync } from "node:fs";

// One line about office life, and nothing else.
const line = "The office wellness room is fully booked—with meetings about burnout.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
