const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello To Camp Ground ... !");
});

app.listen(3000, () => {
  console.log("Serving on the port 3000 !");
});
