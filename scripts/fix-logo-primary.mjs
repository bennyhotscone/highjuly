import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public", "backgrounds", "logo-bong.png");
const out = path.join(root, "public", "backgrounds", "logo-primary.png");

const trimmed = await sharp(src).trim({ threshold: 12 }).toBuffer();
const meta = await sharp(trimmed).metadata();

await sharp(trimmed)
  .extend({
    top: 16,
    bottom: 20,
    left: 16,
    right: 48,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(out);

const final = await sharp(out).metadata();
console.log("logo-primary:", meta.width, "x", meta.height, "->", final.width, "x", final.height);
console.log("Set LOGO_PRIMARY_W =", final.width, "LOGO_PRIMARY_H =", final.height);
