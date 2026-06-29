import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const data = readFileSync("src/lib/data.ts", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");
const text = data + layout;
const paths = [...text.matchAll(/"(\/backgrounds\/[^"]+)"/g)].map((m) => m[1]);
const unique = [...new Set(paths)];

const missing = [];
for (const p of unique) {
  if (!existsSync(join("public", p))) missing.push(p);
}

const tracked = new Set(
  execSync("git ls-files public/", { encoding: "utf8" })
    .trim()
    .split("\n")
    .map((f) => f.replace(/^public/, "").replace(/\\/g, "/")),
);
const notInGit = unique.filter((p) => !missing.includes(p) && !tracked.has(p));

console.log(`Checked ${unique.length} image paths from data.ts + layout.tsx`);
if (missing.length) {
  console.log("\nMISSING on disk:");
  missing.forEach((m) => console.log("  ", m));
  process.exit(1);
}
if (notInGit.length) {
  console.log("\nOn disk but NOT in git (won't work on home laptop after clone):");
  notInGit.forEach((m) => console.log("  ", m));
  process.exit(1);
}
console.log("All images exist locally and are tracked in git.");
