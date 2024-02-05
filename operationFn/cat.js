import { join } from "path";
import { createReadStream } from "fs";

export function cat(dirname, str) {
  const fileName = str.slice(4);
  const pathToFile = join(dirname, fileName);
  const readableStream = createReadStream(pathToFile);
  let totalChunk = "";
  readableStream.on("data", (chunk) => {
    totalChunk += chunk.toString();
  });
  readableStream.on("error", () => {
    console.log(`Operation failed: wrong path_to_file: ${pathToFile}`);
  });
  readableStream.on("end", () => {
    console.log(totalChunk);
  });
}
