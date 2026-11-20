// main.ts — entrypoint for the GTA 6 meme bounty, meme #3 (boarding pass).
// It takes POST.json (the address of the X post), prints the address, and
// copies the file unchanged into the output directory the grader reads.
// Node standard library only: no network, no clock, no writes outside the
// output directory. The copy is byte-identical, so the gate reads exactly
// the address this repository hands in.

const fs = require("node:fs");
const path = require("node:path");

function main() {
  const root = process.env.MAKEFUN_BOT_DIR || __dirname;
  const out = process.env.MAKEFUN_OUTPUT_DIR || path.join(root, "out");
  const source = path.join(root, "POST.json");

  if (!fs.existsSync(source)) {
    console.error("main.ts: POST.json is missing from " + root);
    process.exit(1);
  }

  const text = fs.readFileSync(source, "utf8");
  let post;
  try {
    post = JSON.parse(text);
  } catch {
    console.error("main.ts: POST.json is not valid JSON");
    process.exit(1);
  }

  if (typeof post.url !== "string" || !post.url.startsWith("https://x.com/")) {
    console.error("main.ts: POST.json has no https://x.com/ post URL");
    process.exit(1);
  }

  console.log("X post: " + post.url);
  fs.mkdirSync(out, { recursive: true });
  fs.copyFileSync(source, path.join(out, "POST.json"));
  console.log("POST.json copied to " + path.join(out, "POST.json"));
}

main();
