import { stat } from "node:fs/promises";

export async function checkFile(path, type) {
  try {
    const file = await stat(path);
    return type === "file" ? file.isFile() : file.isDirectory();
  } catch (error) {
    return false;
  }
}
