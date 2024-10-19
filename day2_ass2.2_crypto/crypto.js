const crypto = require("crypto");
// Encrypt string

function encryptString(text) {
  const cipher = crypto.createCipher("aes-256-cbc", "ass");
  // console.log(cipher);
  let encrypted = cipher.update(text, "utf-8", "hex");
  console.log("that is the encrypted", encrypted);
  encrypted += cipher.final("hex");
  console.log(`Encrypted Text: ${encrypted}`);
}

function generateUUID() {
  const uuid = crypto.randomUUID();
  console.log("UUID generated:", uuid);
}
encryptString("Hello, Good Morning");
generateUUID("sad");
module.exports = { encryptString, generateUUID };