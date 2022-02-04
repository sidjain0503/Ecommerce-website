const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000;
const Url = "mongodb://localhost:27017/";
mongoose.connect(Url);

app.get("/", (req, res) => {
  res.send("This is Express Server");
  res.end();
});
app.listen(port, () => {
  console.log("Express Server is listening on Port: " + port);
});

export default app;
