// This is the main file on which our backend app is hosted! 

const express = require("express");
const port = 8000;
const app = express();
const cors = require('cors')
const connection = require('./server')
const productRouter = require('./Routes/ProductRoute')
<<<<<<< Updated upstream
const UserRouter = require("./Routes/UserRouter")
app.use(express.urlencoded());
var fileupload = require("express-fileupload");
express().use(fileupload());
=======


>>>>>>> Stashed changes
connection();  //database connection

//route handling
app.use(cors()); //This disables cors policy and allows to run both backend and frontend on the same device 
<<<<<<< Updated upstream
app.use("/product",productRouter); //This is a middleware calling on route /product and calling function "productRouter" imported from productRoute.js 
app.use("/user" , UserRouter); //This is a middleware calling on route /user and calling function "UserRouter" imported from UserRoute.js 
=======
app.use("/product",productRouter);
//This is a middleware calling on route /product and calling function "productRouter" imported from productRoute.js 


>>>>>>> Stashed changes

app.listen(port, () => {
  console.log("Express Server is listening on Port: " + port);
}); 