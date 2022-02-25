

const Jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");
const JWT_PRIVATE_KEY = "#jkuiad*&6e78Oujdfj90";
module.exports.fetchuser = async (req,res,next)=>{
    const token = req.header('authtocken');
    
if(!token){
 return res.status(401).send("Plese use currect details");
}

try {
    
    var user =await Jwt.verify(token , JWT_PRIVATE_KEY);
    req.user = user.userid;
    next();

} catch (error) {
    console.log(error);
    res.status(500).send("internal Server Error ! ");
}


   
}

