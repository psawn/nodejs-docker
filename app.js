require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on the port ${port}`);

  // for (var i = 0; i <= 100; i++) {
  //   print(i);
  // }

  // function print(i) {
  //   setTimeout(function () {
  //     console.log(i);
  //   }, i * 2000);
  // }
});
