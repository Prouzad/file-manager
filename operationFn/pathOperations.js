import { join } from "path";
import { readdir } from "node:fs/promises";

export async function changePath(dirname, path) {
  const pathToDir = path.slice(3);
  if (path === "up") {
    return join(dirname, "..");
  }
  if (pathToDir === ".") {
    console.log("Invalid input\n");
    return dirname;
  }

  try {
    if (pathToDir[1] === ":") {
      const newPathToDir = join(pathToDir, "/");
      await readdir(newPathToDir, { withFileTypes: true });
      return newPathToDir;
    }
    const dist = join(dirname, pathToDir);
    await readdir(dist, { withFileTypes: true });

    return dist;
  } catch (error) {
    console.log("Operation failed: Invalid directory requested\n");
    return dirname;
  }
}
