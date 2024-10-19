const os = require("os");

//  OS modules

function printSystemDetails() {
  // console.log("Operating System: " + os.type());
  // console.log("Platform: " + os.platform());
  // console.log("CPU Architecture: " + os.arch());
  // console.log("Total Memory: " + os.totalmem() + " bytes");
  // console.log("Free Memory: " + os.freemem() + " bytes");
  // console.log("Home Directory: " + os.homedir());
  console.log("Current Directory: " + process.cwd());
}
printSystemDetails();
module.exports = printSystemDetails;