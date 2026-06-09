/**
 * logo-bong.png was exported too narrow — the wordmark is clipped on the right.
 * logo-pill.png has the same typography with full letters. Stitch icon + wordmark.
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "backgrounds");
const out = path.join(outDir, "logo-primary.png");

const bongIcon = await sharp(path.join(outDir, "logo-bong.png"))
  .extract({ left: 0, top: 0, width: 266, height: 319 })
  .toBuffer();

const pillWordmark = await sharp(path.join(outDir, "logo-pill.png"))
  .extract({ left: 286, top: 0, width: 204, height: 319 })
  .toBuffer();

const canvasW = 266 + 204 + 16;

await sharp({
  create: {
    width: canvasW,
    height: 319,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([
    { input: bongIcon, left: 0, top: 0 },
    { input: pillWordmark, left: 266, top: 0 },
  ])
  .png()
  .toFile(out);

const final = await sharp(out).metadata();
console.log("wrote logo-primary.png", final.width, "x", final.height);
