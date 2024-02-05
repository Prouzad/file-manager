import { cpus, EOL, userInfo, arch, homedir } from "os";

export function cpusFn() {
  const os = cpus();
  const infoArr = os.map((item) => {
    return {
      model: item.model,
      speed: (item.speed / 1000).toFixed(2) + "GHz",
    };
  });
  console.log(infoArr);
}

export function checkEL() {
  const checkEL = JSON.stringify(EOL);
  console.log(`Default system End-Of-Line: ${checkEL}`);
}

export function checkUser() {
  const userName = userInfo().username;
  console.log(userName);
}

export function checkArch() {
  const archData = arch();
  console.log(archData);
}

export function checkHomeDir() {
  const homeDir = homedir();
  console.log(homeDir);
}
