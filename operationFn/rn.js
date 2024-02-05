import { rename, stat } from "node:fs/promises";
import { join } from "node:path";

export async function rn(dirname, pathStr) {
  const commandStr = pathStr.slice(3).split(" ");
  if (commandStr.length !== 2) {
    console.log("Invalid input\n");
    return;
  }
  const pathToFile = commandStr[0];
  const newFile = commandStr[1];

  try {
    if (checkPath(pathToFile) === false) {
      console.log("Operation failed: Wrong file name!");

      return;
    }
    const source = join(dirname, pathToFile);
    const distPath = join(dirname, newFile);
    await rename(source, distPath);
    console.log("successfully renamed!\n");

    return;
  } catch (error) {
    console.log(error);
    console.log("Operation failed: Wrong file!");

    return;
  }
}

async function checkPath(path) {
  try {
    const fileName = await stat(path);
    return fileName.isFile();
  } catch (error) {
    return false;
  }
}
