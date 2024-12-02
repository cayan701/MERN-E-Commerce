require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hey there");
});

app.get("/twitter", (req, res) => {
  res.send("Hey from twitter");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app is running on ${PORT}`);
});
