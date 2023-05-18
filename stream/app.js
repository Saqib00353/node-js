const fs = require("fs");
const path = require("path");

const readable = fs.createReadStream(path.join(__dirname, "test.jpeg"), { highWaterMark: 8 * 1024 });
const writeable = fs.createWriteStream(path.join(__dirname, "result.jpeg"));

// readable.on("data", (chunck) => {
//   writeable.write(chunck);
//   console.log(chunck.length);
// });

readable.pipe(writeable);
