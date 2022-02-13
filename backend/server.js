// <<<<<<< HEAD
//This file is for connecting to database

const connection =()=>{
  const mongoose = require("mongoose");
const Url = "mongodb://localhost:27017/Ecommerce";
mongoose.connect(Url).then(()=>{
  console.log("connected to database mongodb")
}).catch((err)=>{
  console.log("Error",err);
});
}

module.exports = connection



// =======
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
// >>>>>>> bb88d7e2a946729f6f0d938c4f03866679a4b026
