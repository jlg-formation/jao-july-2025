const fs = require("fs");
const promisify = require("util").promisify;

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

readdir(".")
  .then((files) => {
    console.log("files: ", files);
    return readFile(files[0], "utf-8");
  })
  .then((content) => {
    console.log("content: ", content);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
