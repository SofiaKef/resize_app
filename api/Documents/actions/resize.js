import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

let images64 = [];
// in case we give the user the option of changing the folder in the future
const dirPath = __dirname;
const resizedFolder = path.join(dirPath, path.basename(`${dirPath} resized`));

// creates the new folder where images will be stored
try {
  fs.access(resizedFolder);
} catch (error) {
  fs.mkdir(resizedFolder, (err) => {});
}

// turn images to base64
function base64Encode(file) {
  const bitmap = fs.readFileSync(file);
  return Buffer.from(bitmap).toString('base64');
}

function fromDir(startPath) {
  const filter = ['.jpeg', '.jpg', '.png', '.webp', '.gif', '.svg'];
  const files = fs.readdirSync(startPath);
  images64 = [];
  for (let i = 0, filesLength = files.length; i < filesLength; i += 1) {
    const filename = path.join(startPath, files[i]);
    // checks if the current file has the extension type of an image
    if (filter.some((extension) => path.extname(filename.toLowerCase()) === extension)) {
      const inStream = fs.createReadStream(filename);
      const outStream = fs.createWriteStream(path.join(resizedFolder, files[i]), { flags: 'w' });
      const transform = sharp().resize({ width: 500 });
      // throw new Error('For testing');
      inStream.pipe(transform).pipe(outStream);
      images64.push(base64Encode(files[i]));
    }
  }
}
