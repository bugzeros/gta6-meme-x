// main.ts — entrypoint, GTA 6 meme bounty, meme #2 (court summons).
// Reads POST.json, prints the X post URL, and copies the file unchanged
// into the grader's output directory. Node stdlib only: no network,
// no clock, no writes outside the output directory.

const { existsSync, mkdirSync, copyFileSync, readFileSync } = require("node:fs");
const { join } = require("node:path");

function fail(message) {
  console.error("main.ts: " + message);
  process.exit(1);
}

const botDir = process.env.MAKEFUN_BOT_DIR || __dirname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(botDir, "out");
const postFile = join(botDir, "POST.json");

if (!existsSync(postFile)) fail("POST.json not found in " + botDir);

let post;
try {
  post = JSON.parse(readFileSync(postFile, "utf8"));
} catch {
  fail("POST.json is not valid JSON");
}

if (typeof post.url !== "string" || !post.url.startsWith("https://x.com/")) {
  fail("POST.json has no https://x.com/ post URL");
}

console.log("X post: " + post.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(postFile, join(outDir, "POST.json"));
console.log("copied POST.json to " + join(outDir, "POST.json"));
