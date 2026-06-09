import sharp from "sharp";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "backgrounds");

const green = "#163528";
const yellow = "#E4FF3D";
const cream = "#F5F2EB";

function svgBuffer(svg) {
  return Buffer.from(svg);
}

function backTextOverlay({
  width,
  height,
  lines,
  fontSize = 44,
  rotate = 0,
  color = cream,
  opacity = 0.92,
}) {
  const lineHeight = fontSize * 1.12;
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2 + fontSize * 0.35;
  const textNodes = lines
    .map((line, i) => {
      const y = startY + i * lineHeight;
      return `<text x="${width / 2}" y="${y}" text-anchor="middle" fill="${color}" opacity="${opacity}" font-family="Arial Black, Helvetica, sans-serif" font-size="${fontSize}" font-weight="900" paint-order="stroke" stroke="rgba(0,0,0,0.35)" stroke-width="2">${line}</text>`;
    })
    .join("");

  return svgBuffer(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(${rotate} ${width / 2} ${height / 2})">${textNodes}</g>
  </svg>`);
}

async function compositeEdits(inputName, overlays) {
  const input = path.join(outDir, inputName);
  const base = sharp(await readFile(input));

  await base
    .composite(
      overlays.map(({ input, left, top, blend = "over" }) => ({
        input,
        left: Math.round(left),
        top: Math.round(top),
        blend,
      })),
    )
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(input);

  console.log("edited", inputName, `(${overlays.length} overlays)`);
}

async function exportProductCap(sourceName = "bg-extra-kitchen.jpg") {
  const buf = await readFile(path.join(outDir, sourceName));
  const meta = await sharp(buf).metadata();
  const srcW = meta.width;
  const srcH = meta.height;
  const aspect = 4 / 5;
  const focusX = 0.62;
  const focusY = 0.48;

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
  const width = Math.min(1536, cropW);
  const height = Math.round(width * (5 / 4));

  await sharp(buf)
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width, height, withoutEnlargement: true })
    .jpeg({ quality: 93, mozjpeg: true })
    .toFile(path.join(outDir, "product-cap.jpg"));

  console.log("wrote product-cap.jpg", `(${width}x${height})`);
}

await exportProductCap();

/** Rooftop group — shirt + hoodie backs */
await compositeEdits("bg-extra-rooftop.jpg", [
  {
    input: backTextOverlay({
      width: 460,
      height: 190,
      lines: ["this july,", "i'm staying high"],
      fontSize: 31,
      rotate: -14,
    }),
    left: 1945,
    top: 860,
  },
  {
    input: backTextOverlay({
      width: 430,
      height: 180,
      lines: ["sobriety is", "for quitters"],
      fontSize: 28,
      rotate: 11,
      color: yellow,
    }),
    left: 300,
    top: 820,
  },
  {
    input: backTextOverlay({
      width: 340,
      height: 145,
      lines: ["sobriety is", "for quitters"],
      fontSize: 20,
      rotate: 3,
      color: yellow,
    }),
    left: 930,
    top: 590,
  },
]);

console.log("photo edits applied");
