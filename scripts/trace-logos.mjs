import ImageTracer from "imagetracerjs";
import sharp from "sharp";
import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "backgrounds");

const logos = [
  "logo-primary.png",
  "logo-bong.png",
  "logo-pill.png",
  "logo-joint.png",
  "logo-icon.png",
];

const traceOptions = {
  numberofcolors: 8,
  pathomit: 12,
  ltres: 1,
  qtres: 1,
  strokewidth: 0,
  blurradius: 0,
  blurdelta: 0,
  linefilter: true,
};

async function pngToSvg(pngName) {
  const input = path.join(outDir, pngName);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8ClampedArray(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    const isBackground = r > 245 && g > 245 && b > 245;
    pixels[i] = r;
    pixels[i + 1] = g;
    pixels[i + 2] = b;
    pixels[i + 3] = isBackground ? 0 : a;
  }

  const imageData = {
    width: info.width,
    height: info.height,
    data: pixels,
  };

  let svg = ImageTracer.imagedataToSVG(imageData, traceOptions);
  svg = svg.replace(
    "<svg ",
    `<svg viewBox="0 0 ${info.width} ${info.height}" preserveAspectRatio="xMinYMid meet" `,
  );

  const output = path.join(outDir, pngName.replace(".png", ".svg"));
  await writeFile(output, svg);
  console.log("wrote", path.basename(output), `${info.width}x${info.height}`);
}

for (const png of logos) {
  await pngToSvg(png);
}
