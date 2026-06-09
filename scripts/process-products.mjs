import sharp from "sharp";
import { mkdir, readdir, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir =
  "C:\\Users\\Administrator\\.cursor\\projects\\c-Users-Administrator-Desktop-Projects-highjuly\\assets";
const outDir = path.join(root, "public", "backgrounds");

const JPEG_QUALITY = 93;

function pick(files, pattern) {
  const match = files.find((f) => pattern.test(f));
  if (!match) throw new Error(`No file matching ${pattern}`);
  return path.join(assetsDir, match);
}

async function loadBuffer(filePath) {
  return readFile(filePath);
}

async function exportProduct(input, output, { focusX = 0.5, focusY = 0.45, maxWidth = 1536 }) {
  const buf = await loadBuffer(input);
  const meta = await sharp(buf).metadata();
  const srcW = meta.width;
  const srcH = meta.height;
  const aspect = 4 / 5;

  let cropW;
  let cropH;
  if (srcW / srcH > aspect) {
    cropH = srcH;
    cropW = Math.round(srcH * aspect);
  } else {
    cropW = srcW;
    cropH = Math.round(srcW / aspect);
  }

  const left = Math.min(Math.max(0, Math.round(focusX * srcW - cropW / 2)), srcW - cropW);
  const top = Math.min(Math.max(0, Math.round(focusY * srcH - cropH / 2)), srcH - cropH);
  const width = Math.min(maxWidth, cropW);
  const height = Math.round(width * (5 / 4));

  await sharp(buf)
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width, height, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(output);
  console.log("wrote", output, `(${width}x${height})`);
}

async function exportStoreHero(input, output) {
  const buf = await loadBuffer(input);
  const meta = await sharp(buf).metadata();
  const srcW = meta.width;
  const srcH = meta.height;
  const aspect = 21 / 9;

  let cropW = srcW;
  let cropH = Math.round(srcW / aspect);
  if (cropH > srcH) {
    cropH = srcH;
    cropW = Math.round(srcH * aspect);
  }

  const left = Math.round((srcW - cropW) / 2);
  const top = Math.min(Math.round(srcH * 0.12), srcH - cropH);
  const outW = Math.min(1600, cropW);

  await sharp(buf)
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width: outW, height: Math.round(outW / aspect), withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(output);
  console.log("wrote", output, `(${outW}x${Math.round(outW / aspect)})`);
}

await mkdir(outDir, { recursive: true });
const files = await readdir(assetsDir);

const high1 = pick(files, /images_high1/i);
const high2 = pick(files, /images_high_2/i);

const products = [
  ["product-cap.jpg", path.join(assetsDir, "bg-extra-kitchen.png"), { focusX: 0.62, focusY: 0.48 }],
  ["product-tote.jpg", path.join(assetsDir, "bg-extra-lounge.png"), { focusX: 0.38, focusY: 0.45 }],
  ["product-mug.jpg", path.join(assetsDir, "bg-extra-rooftop.png"), { focusX: 0.78, focusY: 0.42 }],
  ["product-poster.jpg", path.join(assetsDir, "bg-extra-rolling.png"), { focusX: 0.5, focusY: 0.72 }],
];

for (const [name, src, opts] of products) {
  await exportProduct(src, path.join(outDir, name), opts);
}

await exportStoreHero(high2, path.join(outDir, "store-hero.jpg"));
