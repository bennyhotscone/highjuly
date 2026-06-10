import sharp from "sharp";
import { mkdir, readFile, readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir =
  "C:\\Users\\Administrator\\.cursor\\projects\\c-Users-Administrator-Desktop-Projects-highjuly\\assets";
const outDir = path.join(root, "public", "backgrounds");

function pick(files, pattern) {
  const match = files.find((f) => pattern.test(f));
  if (!match) throw new Error(`No file matching ${pattern}`);
  return path.join(assetsDir, match);
}

await mkdir(outDir, { recursive: true });
const files = await readdir(assetsDir);
const gridLogo = pick(files, /10_24_51/i);
const gridBuf = await readFile(gridLogo);

const cell = Math.floor(1024 / 3);
const gridVariants = [
  { name: "logo-bong.png", col: 0, row: 0 },
  { name: "logo-pipe.png", col: 1, row: 0 },
  { name: "logo-joint.png", col: 2, row: 0 },
  { name: "logo-blunt.png", col: 0, row: 1 },
  { name: "logo-mushroom.png", col: 1, row: 1 },
  { name: "logo-munchies.png", col: 2, row: 1 },
  { name: "logo-pineapple.png", col: 0, row: 2 },
  { name: "logo-pizza.png", col: 1, row: 2 },
  { name: "logo-sleep.png", col: 2, row: 2 },
];

async function extractCell(col, row) {
  const left = col * cell;
  const top = row * cell;
  const width = col === 2 ? 1024 - left : cell;
  const height = row === 2 ? 1024 - top : cell;
  return sharp(gridBuf).extract({ left, top, width, height }).trim();
}

for (const { name, col, row } of gridVariants) {
  await (await extractCell(col, row)).png().toFile(path.join(outDir, name));
  console.log("wrote", name);
}

await sharp(path.join(outDir, "logo-pipe.png")).png().toFile(path.join(outDir, "logo-pill.png"));

console.log("done");