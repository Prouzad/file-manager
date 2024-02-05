import * as readline from "node:readline/promises";

import { homedir } from "os";

import getUserName from "./operationFn/getUserName.js";
import { changePath } from "./operationFn/pathOperations.js";
import { ls } from "./operationFn/ls.js";
import { cat } from "./operationFn/cat.js";
import { add } from "./operationFn/add.js";
import { rn } from "./operationFn/rn.js";
import { cp } from "./operationFn/cp.js";
import { mv } from "./operationFn/mv.js";
import { rmFn } from "./operationFn/rm.js";
import {
  checkArch,
  checkEL,
  checkHomeDir,
  checkUser,
  cpusFn,
} from "./operationFn/osFns.js";
import { hash } from "./operationFn/hash.js";
import { compressFn } from "./operationFn/compress.js";
import { decompressFn } from "./operationFn/decompress.js";
import { helpFn } from "./operationFn/help.js";

const user = await getUserName(process.argv[2]);
const consoleDir = (path) => {
  return console.log(`You are currently in ${path}`);
};

let dirName = homedir();

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome to the File Manager, ${user}!`);
console.log(`You are currently in ${dirName}`);

readlineInterface.on("line", async (value) => {
  if (value === ".exit") {
    readlineInterface.close();
  } else if (value === "up" || (value.length >= 4 && value.startsWith("cd "))) {
    dirName = await changePath(dirName, value);
    consoleDir(dirName);
  } else if (value === "ls") {
    console.log(dirName);
    await ls(dirName);
    consoleDir(dirName);
  } else if (value.length > 4 && value.startsWith("cat ")) {
    cat(dirName, value);
    consoleDir(dirName);
  } else if (value.length > 4 && value.startsWith("add ")) {
    add(dirName, value);
    consoleDir(dirName);
  } else if (value.length > 3 && value.startsWith("rn ")) {
    await rn(dirName, value);
    consoleDir(dirName);
  } else if (value.length > 3 && value.startsWith("cp ")) {
    await cp(dirName, value);
    consoleDir(dirName);
  } else if (value.length > 3 && value.startsWith("mv ")) {
    await mv(dirName, value);
    consoleDir(dirName);
  } else if (value.length > 3 && value.startsWith("rm ")) {
    await rmFn(dirName, value);
    consoleDir(dirName);
  } else if (value.length > 3 && value === "os --cpus") {
    cpusFn();
    consoleDir(dirName);
  } else if (value.length > 3 && value === "os --EOL") {
    checkEL();
    consoleDir(dirName);
  } else if (value.length > 3 && value === "os --homedir") {
    checkHomeDir();
    consoleDir(dirName);
  } else if (value.length > 3 && value === "os --username") {
    checkUser();
    consoleDir(dirName);
  } else if (value.length > 3 && value === "os --architecture") {
    checkArch();
    consoleDir(dirName);
  } else if (value.length > 5 && value.startsWith("hash ")) {
    await hash(dirName, value);
    consoleDir(dirName);
  } else if (value.length > 9 && value.startsWith("compress ")) {
    await compressFn(dirName, value);
    consoleDir(dirName);
  } else if (value.length > 11 && value.startsWith("decompress ")) {
    await decompressFn(dirName, value);
    consoleDir(dirName);
  } else if (value === "help") {
    helpFn();
    consoleDir(dirName);
  } else {
    console.log("Invalid input\n");
    consoleDir(dirName);
  }
});

readlineInterface.on("close", () => {
  console.log(`Thank you for using File Manager, ${user}, goodbye!`);
});
