const url = require("url");
const http = require("http");

http
  .createServer((request, response) => {
    const obj = url.parse(request.url, true);
    console.log(obj);
    response.end("Request Ended");
  })
  .listen(3000, () => console.log("serve is listening at ", 3000));

const myURL = new URL("https://saqib:789oo789oo@gmail.google.com:443/web/user/default?id=5&index=3#top");
console.log("My url =>", myURL);

const searchParams = new URLSearchParams("?id=5&index=3&id=5");
console.log("search =>", searchParams);
console.log(searchParams.getAll("id"));
