const fs = require("fs");
const path = require("path");

module.exports = (filePathFrom, newFileName, imageCreatedCallback) => {
  const validExtensions = ["jpeg", "jpg", "png"];
  const extension = path.extname(filePathFrom);
  const isValidExtension =
    validExtensions.indexOf(extension.substring(1)) !== -1;

  if (!isValidExtension) {
    const error = "Invalid type!";

    imageCreatedCallback(error);
    return;
  }

  const newFilePath = `./assets/images/${newFileName}${extension}`;

  fs.createReadStream(filePathFrom)
    .pipe(fs.createWriteStream(newFilePath))
    .on("finish", () => imageCreatedCallback(false, newFilePath));
};

// fs.readFile("../assets/tekinha.jpeg", (error, buffer) => {
//   console.log("foi que foi");
//   console.log(buffer);

//   fs.writeFile("../assets/tekinha2.jpeg", buffer, (error) => {
//     console.log("image foi iskrita");
//   });
// });
