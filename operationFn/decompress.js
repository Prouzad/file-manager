import { stat } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { join } from "node:path";
import { pipeline } from "stream";
import { createBrotliDecompress } from "zlib";

export async function decompressFn(dirname, text) {
  const command = text.slice(3).split(" ");
  if (command.length !== 2) {
    console.log("Invalid input\n");
    return;
  }
  const originalFilePath = command[0];
  const newFilePath = command[1];

  try {
    const pathToFile = join(dirname, originalFilePath);
    const pathFileArr = pathToFile.split(`\\`);
    const originalFileName = pathFileArr[pathFileArr.length - 1];
    if ((await checkFile(pathToFile, "file")) === false) {
      console.log("Operation failed: Wrong file name!");
      return;
    }
    const distPath = join(dirname, newFilePath, originalFileName);
    if ((await checkFile(join(dirname, newFilePath), "directory")) === false) {
      console.log("Operation failed: written wrong directory name!");
      return;
    }

    const readable = createReadStream(pathToFile);
    const brotliDeCompress = createBrotliDecompress();
    const writable = createWriteStream(distPath);

    pipeline(readable, brotliDeCompress, writable, (err) => {
      if (err) {
        console.log("Operation failed: error operation in read Stream!");
      } else {
        console.log("Decompressed!");
      }
    });
  } catch (error) {
    console.log("Operation failed: wrong path to new directory!");
    return;
  }
}

export async function checkFile(path, type) {
  try {
    const file = await stat(path);
    return type === "file" ? file.isFile() : file.isDirectory();
  } catch (error) {
    return false;
  }
}
