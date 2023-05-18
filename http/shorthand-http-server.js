const http = require("http");
const port = 3000;

http
  .createServer((request, response) => {
    response.write("Working fine \n");
    response.end("Respose End");
  })
  .listen(port, () => console.log("Server is Running at ", port));
