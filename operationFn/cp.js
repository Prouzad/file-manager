import { createReadStream, createWriteStream, writev } from "node:fs";
import { join } from "node:path";

export async function cp(dirname, text) {
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
      console.log("Operation failed: written wrong file name!");
      return;
    }
    const distPath = join(dirname, newFilePath, originalFileName);
    if ((await checkFile(join(dirname, newFilePath), "directory")) === false) {
      console.log("Operation failed: written wrong directory name!");
      return;
    }
    let body = "";
    const read = createReadStream(pathToFile);
    const write = createWriteStream(distPath);

    read.on("data", (chunk) => {
      body += chunk.toString();
    });
    read.on("error", () => {
      console.log("Operation failed: error operation in read Stream!");
    });

    read.on("end", () => {
      writev.write(body);
      console.log("successfully copied!");
    });
  } catch (error) {
    console.log("Operation failed: written wrong path to new directory!");
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
