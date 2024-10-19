const args = process.argv.slice(2);
const { encryptString, generateUUID } = require("./crypto");
const printSystemDetails = require("./OSmodule");
const { readNormalFile, readFileStream } = require("./largFile");
switch (args[0]) {
  case "encrypt":
    encryptString("Hello, Good Morning");
    break;
  case "uuid":
    generateUUID();
    break;
  case "normalRead":
    readNormalFile("./largFiles.txt");
    break;
  case "streamRead":
    readFileStream("./largFiles.txt");
    break;
  case "system":
    printSystemDetails();
    break;
  default:
    console.log("Invalid command");
}
