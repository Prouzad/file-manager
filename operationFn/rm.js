import { join } from "path";
import { rm } from "fs/promises";

export async function rmFn(dirname, str) {
  const file = str.slice(3);
  const path = join(dirname, file);

  try {
    const result = await rm(path);
    console.log(`${file} removed!`);
  } catch (error) {
    console.log(`Operation failed: written wrong path_to_file: ${dirname}`);
  }
}
