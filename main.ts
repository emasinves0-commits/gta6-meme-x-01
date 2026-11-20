// gta6-meme-x-01 entry: hands the X post's address to the gate.
// The post itself is the entry. The house reads the meme picture and
// its text from X and hands them to the judge. This program only
// copies POST.json into the output directory, after checking that
// it names a real https post URL.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
const raw = readFileSync(src, "utf8");
const post = JSON.parse(raw) as { url?: unknown };
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  console.error("POST.json has no https post URL");
  process.exit(1);
}
if (post.url.includes("<handle>") || post.url.includes("<id>")) {
  console.error("POST.json still holds the placeholder address, not a real post");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "POST.json"));
console.log(`handed in post: ${post.url}`);
