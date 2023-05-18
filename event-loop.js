const fs = require("fs");

fs.writeFile("./names.txt", "My Names List", (err) => {
  if (err) throw new Error(err);
  console.log("fs........");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});
