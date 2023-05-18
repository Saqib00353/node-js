const fs = require("fs");
const path = require("path");

// const names = fs.readFileSync("./names.txt", "utf8");
// console.log(names);

// fs.readFile("./namess.txt", { encoding: "utf8" }, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFileSync("./names.txt", "First Name \r\nSecond Name \r\nThird Name", "utf8");

// fs.writeFile("./names2.txt", "First Name \r\nSecond Name \r\nThird Name \r\nForth Name", "utf8", (err) => {
//   if (err) throw err;
//   console.log("Done...");
// });

const filePath = path.join(__dirname, "./name-api/student-names/names.txt");
fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
  if (err) throw err;
  console.log("data =>", data);
});

console.log("filename =>", __filename);
