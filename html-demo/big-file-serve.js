const fs = require("fs");
const path = require("path");
const http = require("http");
const port = 3000;

http
  .createServer((request, response) => {
    const readable = fs.createReadStream(path.join(__dirname, "../stream/result.jpeg"));
    readable.pipe(response);
  })
  .listen(3000, () => console.log("server is listening"));
