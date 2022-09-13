require("dotenv").config();
const express = require("express");
const app = express();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "dbuser",
  host: "db", // 172.17.0.2 || db || b6e8837d4eeb
  database: "testdb",
  password: "dbpass2022",
  port: 5432,
});

// host is IP address, service name when link, container id
// not working with container name

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/user", function (req, res) {
  pool.query("SELECT * FROM accounts", (error, results) => {
    if (error) {
      res.status(500).json(error);
    }
    res.status(200).json(results);
  });
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
