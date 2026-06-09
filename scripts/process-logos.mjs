import sharp from "sharp";
import { mkdir, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir =
  "C:\\Users\\Administrator\\.cursor\\projects\\c-Users-Administrator-Desktop-Projects-highjuly\\assets";
const sheet = path.join(
  assetsDir,
  "c__Users_Administrator_AppData_Roaming_Cursor_User_workspaceStorage_f51fc81566fd4786ffb463fc7aa1bc58_images_5e0a23f5-4bcb-40a2-840a-b4eea9b0befa-b5389698-1c9f-4414-874d-245a5226ce0b.png",
);
const outDir = path.join(root, "public", "backgrounds");

const slices = [
  { name: "logo-bong.png", left: 0, top: 0, width: 512, height: 682 },
  { name: "logo-pill.png", left: 512, top: 0, width: 512, height: 341 },
  { name: "logo-joint.png", left: 512, top: 341, width: 512, height: 341 },
];

await mkdir(outDir, { recursive: true });
const buf = await readFile(sheet);

for (const { name, left, top, width, height } of slices) {
  await sharp(buf).extract({ left, top, width, height }).png().toFile(path.join(outDir, name));
  console.log("wrote", name);
}

await sharp(buf)
  .extract({ left: 20, top: 20, width: 200, height: 200 })
  .resize(512, 512)
  .png()
  .toFile(path.join(outDir, "logo-icon.png"));

await sharp(path.join(outDir, "logo-bong.png"))
  .resize({ width: 420, withoutEnlargement: true })
  .png()
  .toFile(path.join(outDir, "logo-primary.png"));

console.log("logos written to public/backgrounds/");

async function exportProductJpg(input, output, focusX = 0.5, focusY = 0.45) {
  const image = sharp(await readFile(input));
  const meta = await image.metadata();
  const aspect = 4 / 5;
  let cropW, cropH;
  if (meta.width / meta.height > aspect) {
    cropH = meta.height;
    cropW = Math.round(meta.height * aspect);
  } else {
    cropW = meta.width;
    cropH = Math.round(meta.width / aspect);
  }
  const left = Math.min(Math.max(0, Math.round(focusX * meta.width - cropW / 2)), meta.width - cropW);
  const top = Math.min(Math.max(0, Math.round(focusY * meta.height - cropH / 2)), meta.height - cropH);
  const width = Math.min(1200, cropW);
  await image
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width, height: Math.round(width * (5 / 4)), withoutEnlargement: true })
    .jpeg({ quality: 93, mozjpeg: true })
    .toFile(output);
  console.log("wrote", path.basename(output));
}

// Apparel edits — same scenes, people now wearing merch
await exportProductJpg(
  path.join(assetsDir, "product-hoodie-apparel.png"),
  path.join(outDir, "product-hoodie.jpg"),
  0.5,
  0.45,
);
await exportProductJpg(
  path.join(assetsDir, "product-tee-apparel.png"),
  path.join(outDir, "product-official-tee.jpg"),
  0.5,
  0.42,
);

console.log("apparel product photos updated");
