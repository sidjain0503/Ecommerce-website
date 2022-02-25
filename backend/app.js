// This is the main file on which our backend app is hosted! 

const express = require("express");
const port = 8000;
const app = express();
const cors = require('cors')
const connection = require('./server')
const productRouter = require('./Routes/ProductRoute')

const UserRouter = require("./Routes/UserRouter")

var fileupload = require("express-fileupload");
express().use(fileupload());

connection();  //database connection
// app.use(cors());
app.use(express.json());

//route handling
app.use(cors()); //This disables cors policy and allows to run both backend and frontend on the same device 

app.use("/product",productRouter); //This is a middleware calling on route /product and calling function "productRouter" imported from productRoute.js 
app.use("/user" , UserRouter); //This is a middleware calling on route /user and calling function "UserRouter" imported from UserRoute.js 


app.listen(port, () => {
  console.log("Express Server is listening on Port: " + port);
}); 