import { readdir } from "node:fs/promises";

export async function ls(path) {
  try {
    const pathFiles = await readdir(path, { withFileTypes: true });
    const arr = pathFiles
      .map((item) => {
        return {
          name: item.name,
          type: !item.isFile() ? "directory" : "file",
        };
      })
      .sort(sortFn)
      .sort((a, b) => a.name - b.name);
    console.table(arr);
  } catch (err) {
    console.log("Operation failed: not files!");
    return [];
  }
}

function sortFn(a, b) {
  if (a.type === "directory" && b.type === "file") {
    return -1;
  } else {
    return 1;
  }
}
