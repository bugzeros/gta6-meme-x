// main.ts — entry program for the GTA 6 meme bounty.
// It copies POST.json (the X post's address) into the grader's output
// directory so the gate can read it. No network, no clock, no files
// outside the repository; both runs write identical bytes.

const fs = require("node:fs");
const path = require("node:path");

const repoRoot = process.env.MAKEFUN_BOT_DIR || __dirname;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || path.join(repoRoot, "out");

const postPath = path.join(repoRoot, "POST.json");

if (!fs.existsSync(postPath)) {
  throw new Error("POST.json is missing from the repository root");
}

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(postPath, path.join(outputDir, "POST.json"));
