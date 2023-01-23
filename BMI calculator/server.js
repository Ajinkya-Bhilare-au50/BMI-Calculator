const express = require("express");
// var path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3200;

app.get("/bmi", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/bmi", (req, res) => {
 
  var height1 = parseFloat(req.body.height);
  var weight1 = parseFloat(req.body.weight);
  console.log(weight1);
  console.log(height1);
  var bmi = parseFloat(weight1 / (height1 * height1));
  res.send("bmi is " + bmi);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// console.log(__dirname);
