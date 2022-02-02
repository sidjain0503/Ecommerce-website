const express = require("express");
const app = express();
const mongo = require("mongoose");
const port = 8000;
const Url = "mongodb://localhost:27017/";
mongo.connect(Url);

app.get("/", (req, res) => {
  res.send("THis is Express Server");
  res.end();
});
app.listen(port, () => {
  console.log("Express Server is Listning on Port: " + port);
});

export default app;
