const http = require("http");
const server = http.createServer();
const port = 3000;

server.on("request", (request, response) => {
  console.log("request =>", request.headers);
  response.writeHead(200, "request successfully processed", { "content-type": "text/plain" });

  //   response.write("Hello from this thing");
  response.end("request Ended");
});

server.listen(port, () => {
  console.log("server is running ", port);
});
