const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
const app = express();
const productRouter = require('./Routes/ProductRoute')

//connecting to database
const Url = "mongodb://localhost:27017/";
mongoose.connect(Url).then(()=>{
  console.log("connected to database")
}).catch((err)=>{
  console.log("Error",err);
});

//route handling
app.use("/product",productRouter);


app.listen(port, () => {
  console.log("Express Server is listening on Port: " + port);
});

export default app;
