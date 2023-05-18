const fs = require("fs");
const path = require("path");
const http = require("http");
const port = 3000;

http
  .createServer((request, response) => {
    const url = request.url;
    switch (url) {
      case "/":
        response.writeHead(200, { "content-type": "text/html" });
        const page = fs.readFileSync(path.join(__dirname, "./index.html"));
        response.end(page);
        break;
      case "/about":
        response.writeHead(200);
        const image = fs.createReadStream(path.join(__dirname, "../stream/result.jpeg"));
        image.pipe(response);
        break;
      default:
        response.writeHead(404);
        response.end("page not found");
    }
  })
  .listen(port, () => console.log("server is active at ", port));
