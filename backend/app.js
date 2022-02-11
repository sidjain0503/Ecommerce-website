const express = require("express");
const port = 8000;
const app = express();
const cors = require('cors')
const connection = require('./server')
const productRouter = require('./Routes/ProductRoute')

connection();  //database connection
//route handling
app.use(cors());
app.use("/product",productRouter);


app.listen(port, () => {
  console.log("Express Server is listening on Port: " + port);
});