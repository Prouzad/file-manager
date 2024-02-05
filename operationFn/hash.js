import { createReadStream } from "fs";
import { createHash } from "crypto";
import { join } from "path";

export async function hash(dirname, str) {
  const item = str.slice(5);
  const pathToFile = join(dirname, item);
  const readStream = createReadStream(pathToFile);
  let body = "";

  readStream.on("data", (chunk) => (body += chunk.toString()));

  readStream.on("error", () => {
    console.log("Operation failed: Incorrect file name to hash.");
  });

  readStream.on("end", () => {
    const hash = createHash("sha256");
    const resultHash = hash.update(body).digest("hex");
    console.log(resultHash);
  });
}
