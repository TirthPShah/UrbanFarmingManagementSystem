const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tirth@009",
  database: "farmerDB",
});

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});


app.get("/getDetails", (req, res) => {
  con.query("SELECT * FROM cropMapping", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
