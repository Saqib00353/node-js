const fs = require("fs");
const path = require("path");
const gzip = require("zlib").createGzip();

const readStream = fs.createReadStream(path.join(__dirname, "./readme.txt"));
const writeStream = fs.createWriteStream(path.join(__dirname, "./destination.txt.gz"));

readStream.pipe(gzip).pipe(writeStream);
