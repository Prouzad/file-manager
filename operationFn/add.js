import { join } from "path";
import { createWriteStream } from "fs";

export function add(dirname, str) {
  const file = str.slice(4);
  try {
    const originalFileName = file.split("/");
    console.log(originalFileName);
    const fileNameWithFormat = originalFileName[originalFileName.length - 1];
    const source = join(dirname, fileNameWithFormat);
    const writable = createWriteStream(source);
    console.log(`${file} has created!`);
    return;
  } catch (error) {
    console.log("Operation failed: wrong command!");

    return;
  }
}
