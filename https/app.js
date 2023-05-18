//to generate certificate and privatekey use this in openSSL
// req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privateKey.key -out certificate.crt

const fs = require("fs");
const https = require("https");
const path = require("path");
const port = 443;

const server = https.createServer({
  cert: fs.readFileSync(path.join(__dirname, "./certificate.crt")),
  key: fs.readFileSync(path.join(__dirname, "./privateKey.key")),
});

server
  .on("request", (req, res) => {
    res.end("Hello from https.....");
  })
  .listen(port, () => console.log("server is running at ", port));

// const arr1 = [4, 5, 4, 4, 6];
// const arr2 = [1, 2, 4, 5, 7, 8];
// const result = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
// }

// console.log("result =>", result);
