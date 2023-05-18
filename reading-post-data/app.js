const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log("url =>", url, method);

    if (url === "/") {
      const readStream = fs.createReadStream(path.join(__dirname, "./index.html"));
      readStream.pipe(res);
    } else if (url === "/message" && method === "POST") {
      let body = [];
      req.on("data", (chunck) => {
        body.push(chunck);
      });
      req.on("end", (chunck) => {
        const bodyData = body.concat(chunck).toString();
        const data = new URLSearchParams("?" + bodyData);
        console.log("bodyData =>", data);
        res.end("Done");
      });
    }
  })
  .listen(3000);
