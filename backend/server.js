const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 4000;
require("dotenv").config();

app.use(cors());
app.use(express.static(path.join(__dirname, "frontend/public")));

app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
