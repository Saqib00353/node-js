const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000;

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        const readStream = fs.createReadStream(path.join(__dirname, "./index.html"));
        readStream.pipe(res);
        break;
      case "/save":
        const writeStream = fs.createWriteStream(path.join(__dirname, "./blog.txt"));
        req.pipe(writeStream);
        res.end("Data Saved");
        break;
      default:
        break;
    }
  })
  .listen(port);
