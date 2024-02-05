import { stat } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { join } from "node:path";
import { pipeline } from "stream";
import { createBrotliCompress } from "zlib";

export async function compressFn(dirname, text) {
  const command = text.slice(9).split(" ");
  if (command.length !== 2) {
    console.log("Invalid input\n");
    return;
  }
  const originalFilePath = command[0];
  const newFilePath = command[1];

  try {
    const pathToFile = join(dirname, originalFilePath);
    const pathFileArr = pathToFile.split(`\\`);
    console.log(pathFileArr, "PATHTOFILE");
    const originalFileName = pathFileArr[pathFileArr.length - 1];
    if ((await checkFile(pathToFile, "file")) === false) {
      console.log("Operation failed: Wrong file name!");
      return;
    }
    const distPath = join(newFilePath, originalFileName);
    if ((await checkFile(join(dirname, newFilePath), "directory")) === false) {
      console.log("Operation failed: Wrong directory name!");
      return;
    }

    const readable = createReadStream(pathToFile);
    const compressBrot = createBrotliCompress();
    const writable = createWriteStream(distPath);
    console.log(distPath);
    pipeline(readable, compressBrot, writable, (err) => {
      if (err) {
        console.log(err);
        console.log("Operation failed: error operation in read Stream!");
      } else {
        console.log("compress done!");
      }
    });
  } catch (error) {
    console.log("Operation failed: Wrong path to new directory!");
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
