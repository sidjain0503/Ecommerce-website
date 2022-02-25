const bcrypt = require("bcrypt");
const { Model } = require("mongoose");
const saltRound = 10;
const UserModel = require("../Models/userModel");




 module.exports.RegisterUser =    (req, res) => {
    var Userinfo = req.body;
    var Url = req.file;
    // console.log(Url);
    var password;
    bcrypt.hash(Userinfo.password, saltRound, (err, hash) => {
      if (err) {
        console.log(err);
        req.send("passcode generate Error");
      } else {
        var newuser = new UserModel({
          Firstname: Userinfo.Firstname,
          Lastname: Userinfo.Lastname,
          email: Userinfo.email,  
          password: hash,
          // profileImageUrl: Url.path
        });
        // res.send(req.body);
        newuser
          .save()
          .then(() => {
            res.send("User added to MongoDB");
          })
          .catch((err) => {
            console.log(err);
            res.send("SOME ERR ",err);
          });
      }
    });
  }




  // Login 

  module.exports.LoginUser =(req, res) => {
    // const userinfo =  req.body;

    res.send(req.body)
    // UserModel
    //   .find(userinfo)
    //   .then((data) => {
    //     bcrypt.compare(req.body.password, data[0].password, (err, result) => {
    //       if (err) {
    //         res.send("Eroor 🥵");
    //       } else {
    //         if (result == true) {
    //           res.send("Logged in ")
    //           // res.json({name: data[0].name , email: data[0].email});
    //           // res.sendfile(  data[0].profileImageUrl );
    //         } else {
    //           res.send("User Not Register 😒!");
    //         }
    //       }
    //     });
    //     // res.send(data)
    //   })
    //   .catch((err) => {
    //     res.send(err);
    //   });
  }