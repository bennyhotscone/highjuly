import sharp from "sharp";
import { copyFile, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bgDir = path.join(__dirname, "..", "public", "backgrounds");
const productsDir = path.join(__dirname, "..", "public", "products");

const loungeW = 2560;
const loungeH = 1707;
const focusX = 0.38;
const focusY = 0.45;
const aspect = 4 / 5;

const cropH = loungeH;
const cropW = Math.round(cropH * aspect);
const left = Math.min(Math.max(0, Math.round(focusX * loungeW - cropW / 2)), loungeW - cropW);
const top = Math.min(Math.max(0, Math.round(focusY * loungeH - cropH / 2)), loungeH - cropH);

async function buildOverlay(productPath) {
  const product = await readFile(productPath);
  const resized = await sharp(product).resize(cropW, cropH, { fit: "fill" }).png().toBuffer();

  const maskSvg = `<svg width="${cropW}" height="${cropH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="white" stop-opacity="1"/>
        <stop offset="78%" stop-color="white" stop-opacity="1"/>
        <stop offset="90%" stop-color="white" stop-opacity="0"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${cropW}" height="${cropH}" fill="url(#fade)"/>
  </svg>`;

  const mask = await sharp(Buffer.from(maskSvg)).blur(5).greyscale().toBuffer();
  return sharp(resized).joinChannel(mask).png().toBuffer();
}

async function fixLounge() {
  const output = path.join(bgDir, "bg-extra-lounge.jpg");
  const productPath = path.join(bgDir, "product-crop-top.jpg");
  const basePath = path.join(bgDir, "bg-extra-lounge-original.jpg");

  await copyFile(output, path.join(bgDir, "bg-extra-lounge-v8-backup.jpg"));

  const overlay = await buildOverlay(productPath);

  await sharp(await readFile(basePath))
    .composite([{ input: overlay, left, top, blend: "over" }])
    .jpeg({ quality: 93, mozjpeg: true })
    .toFile(output);

  await copyFile(productPath, path.join(productsDir, "product-crop-top.jpg"));
  await copyFile(output, path.join(productsDir, "bg-extra-lounge.jpg"));

  console.log(`fixed bg-extra-lounge.jpg — product card sleeve overlaid at ${left},${top}`);
}

await fixLounge();
