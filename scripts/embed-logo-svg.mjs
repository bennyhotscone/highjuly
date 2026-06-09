import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "backgrounds");

for (const name of ["logo-primary", "logo-bong", "logo-pill", "logo-joint", "logo-icon"]) {
  const png = await readFile(path.join(outDir, `${name}.png`));
  const meta = await import("sharp").then((m) => m.default(png).metadata());
  const b64 = png.toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${meta.width} ${meta.height}" preserveAspectRatio="xMinYMid meet"><image href="data:image/png;base64,${b64}" width="${meta.width}" height="${meta.height}"/></svg>`;
  await writeFile(path.join(outDir, `${name}.svg`), svg);
  console.log("wrote", `${name}.svg`, `${meta.width}x${meta.height}`);
}
