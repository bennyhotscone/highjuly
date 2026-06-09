import sharp from "sharp";
import { execFile } from "node:child_process";
import { mkdir, readdir, readFile } from "fs/promises";
import path from "path";
import { promisify } from "node:util";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir =
  "C:\\Users\\Administrator\\.cursor\\projects\\c-Users-Administrator-Desktop-Projects-highjuly\\assets";
const outDir = path.join(root, "public", "backgrounds");

const EXPORT_WIDTH = 2560;
const TRIPTYCH_PANEL_WIDTH = 1800;
const JPEG_QUALITY = 92;

function pick(files, pattern) {
  const match = files.find((f) => pattern.test(f));
  if (!match) throw new Error(`No file matching ${pattern}`);
  return path.join(assetsDir, match);
}

async function loadImage(filePath) {
  return sharp(await readFile(filePath));
}

async function exportJpg(input, output, width = EXPORT_WIDTH) {
  await (await loadImage(input))
    .resize({ width, withoutEnlargement: false })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(output);
  console.log("wrote", output);
}

async function splitTriptych(input, prefix) {
  const meta = await (await loadImage(input)).metadata();
  const w = meta.width;
  const h = meta.height;
  const third = Math.floor(w / 3);

  for (let i = 0; i < 3; i++) {
    const left = third * i;
    const width = i === 2 ? w - third * 2 : third;
    const out = path.join(outDir, `${prefix}-${i + 1}.jpg`);
    await (await loadImage(input))
      .extract({ left, top: 0, width, height: h })
      .resize({ width: TRIPTYCH_PANEL_WIDTH, withoutEnlargement: false })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(out);
    console.log("wrote", out);
  }
}

const extraExports = [
  ["bg-extra-rooftop.png", "bg-extra-rooftop.jpg"],
  ["bg-extra-kitchen.png", "bg-extra-kitchen.jpg"],
  ["bg-extra-lounge.png", "bg-extra-lounge.jpg"],
  ["bg-extra-rolling.png", "bg-extra-rolling.jpg"],
];

await mkdir(outDir, { recursive: true });
const files = await readdir(assetsDir);

const rooftop = pick(files, /images_high1/i);
const kitchen = pick(files, /images_high_2/i);
const triptych = pick(files, /ChatGPT_Image/i);

await exportJpg(rooftop, path.join(outDir, "bg-rooftop.jpg"));
await exportJpg(kitchen, path.join(outDir, "bg-kitchen.jpg"));
await splitTriptych(triptych, "bg-triptych");

for (const [src, dest] of extraExports) {
  const input = path.join(assetsDir, src);
  try {
    await exportJpg(input, path.join(outDir, dest));
  } catch {
    console.warn("skip missing", src);
  }
}

await promisify(execFile)("node", [path.join(__dirname, "apply-photo-edits.mjs")], {
  cwd: root,
});
