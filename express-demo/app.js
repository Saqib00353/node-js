const express = require("express");
const app = express();
const port = 3000;

app.enable("case sensitive routing");
app.enable("etag");
app.set("env", "development");

app.use("/users", (req, res, next) => {
  res.send("Hello From /users");
});

app.use("/", (req, res, next) => {
  res.send("Hello From express");
});

app.listen(port, () => console.log("Server is Running at ", port));
