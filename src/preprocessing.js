import sharp from "sharp";
import { mkdirp } from "mkdirp";
import path from "path";
import { readdirSync } from "fs";

const imagesDir = "public/images";
const tilesDir = "public/tiles";

const imageFiles = readdirSync(imagesDir);

imageFiles.forEach(async (file) => {
  const imagePath = path.join(imagesDir, file);
  const imageName = path.basename(file, path.extname(file));

  // Create output directories
  const outputDir = path.join(tilesDir, imageName);
  mkdirp.sync(outputDir);

  // Generate tiles
  await sharp(imagePath)
    .tile({
      size: 256,
      overlap: 2,
      layout: "dz",
    })
    .toFile(path.join(outputDir, `${imageName}`));

  // Generate thumbnail
  await sharp(imagePath)
    .resize({ width: 300 })
    .toFile(path.join(tilesDir, `${imageName}_thumbnail.jpg`));

  console.log(`Processed ${file}`);
});
