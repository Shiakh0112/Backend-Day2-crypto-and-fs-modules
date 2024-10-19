const fs = require("fs");

const { performance } = require("perf_hooks");

// using normal file system largeFile read

function readNormalFile(filePath) {
  const startTime = performance.now();
  console.log(startTime);
  const data = fs.readFileSync(filePath, "utf8");
  console.log(data);
  const endTime = performance.now();
  console.log(
    `the start Time is ${startTime} and the end Time is ${endTime} and File Read using normal method took ${
      endTime - startTime
    } milliseconds`
  );
}

function readFileStream(filePath) {
  const start = performance.now();
  const readStream = fs.createReadStream(filePath, "utf8");
  console.log(readStream);
}
// readNormalFile("./largFiles.txt");
readFileStream("./largFiles.txt");

module.exports = { readNormalFile, readFileStream };
