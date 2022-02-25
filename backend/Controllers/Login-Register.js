const bcrypt = require("bcrypt");
const { Model } = require("mongoose");
const saltRound = 10;
const UserModel = require("../Models/userModel");



//  module.exports.RegisterUser =    



  // Login 

  module.exports.LoginUser =(req, res) => {
    var userinfo = { email: req.body.email };

    UserModel
      .find(userinfo)
      .then((data) => {
        bcrypt.compare(req.body.password, data[0].password, (err, result) => {
          if (err) {
            res.send("Eroor 🥵");
          } else {
            if (result == true) {
              res.send({name: data[0].name , email: data[0].email});
              // res.sendfile(  data[0].profileImageUrl );
            } else {
              res.send("User Not Register 😒!");
            }
          }
        });
        // res.send(data)
      })
      .catch((err) => {
        res.send(err);
      });
  }