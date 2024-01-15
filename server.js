require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://sh00:S5MTndNVq2LcT4Js@cluster0.7zvcwvw.mongodb.net/?retryWrites=true&w=majority",
);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(7000);
