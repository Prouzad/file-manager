const getUserName = (userArgv) => {
  if (userArgv.includes("=")) {
    const firstElem = userArgv.split("=")[0];
    if (firstElem.toLowerCase().includes("username")) {
      const result = userArgv.split("=")[1];
      return result[0].toUpperCase() + result.slice(1);
    }

    return "Stranger";
  }
  return "Stranger";
};

export default getUserName;
