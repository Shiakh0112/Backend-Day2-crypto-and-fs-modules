const fs = require("fs");

const ProcessCommand = process.argv[2];
const FileName = process.argv[3];
const FileText = process.argv[4];

switch (ProcessCommand) {
  case "create":
    fs.writeFile(FileName, FileText, (err) => {
      if (err) {
        console.log("Error creating", err);
      }
      console.log(
        `Your: ${FileName} has been created and  your File content is: ${FileText}`
      );
    });
    break;
  case "read":
    fs.readFile(FileName, "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading file", err);
      }
      console.log(`Your: ${FileName} content is: ${data}`);
    });
    break;

  case "update":
    fs.appendFile(FileName, FileText, (err) => {
      if (err) {
        console.log("Error updating file", err);
      }
      console.log(
        `Your: ${FileName} content has been updated with: ${FileText}`
      );
    });
    break;
  case "":
    fs.appendFile(FileName, FileText, (err) => {
      if (err) {
        console.log("Error updating file", err);
      }
      console.log(
        `Your: ${FileName} content has been updated with: ${FileText}`
      );
    });
    break;
  case "rename":
    let NewFileName = FileText;
    fs.rename(FileName, NewFileName, (err) => {
      if (err) {
        console.error("File not Axis ", err);
      }
      console.log("File renamed " + NewFileName + " to " + NewFileName);
    });
    break;
  case "delete":
    fs.unlink(FileName, (err) => {
      if (err) {
        console.log("Error deleting file", err);
      }
      console.log(`Your: ${FileName} has been deleted.`);
    });
    break;
  case "list":
    const directory = FileName || "."; // If no directory is passed, list current directory
    fs.readdir(directory, (err, files) => {
      if (err) {
        console.log("Error listing directory:", err);
        return;
      }
      console.log(`Files in directory "${directory}":\n`, files.join("\n"));
    });
    break;

  default:
    console.log("Invalid command. Please use create.");
    process.exit(1);
}
