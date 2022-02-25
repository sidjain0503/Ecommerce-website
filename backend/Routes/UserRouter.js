const express = require("express");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const saltRound = 10;
const UserModel = require("../Models/userModel");
const { body, validationResult } = require("express-validator");
const UserRouter = express.Router();
const multer = require("multer");
const { UUID } = require("bson");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const { json } = require("body-parser");
const userModel = require("../Models/userModel");
const JWT_PRIVATE_KEY = "#jkuiad*&6e78Oujdfj90";
const { promise } = require("bcrypt/promises");
const { findOne } = require("../Models/userModel");
const { fetchuser } = require("../Controllers/featch");




// creating new user  !  Login not requires
UserRouter.post(
  // route
  "/new",

  // validation part
  [
    body("name", "follow currect rule for name").isLength({ min: 3 }), //name length should minimum  3
    body("email", "incorrect email adress").isEmail(), //cheak email is valid or not
    body("email").custom((value) => {
      // check   is  user  alread exixt ? ❔❔
      return userModel.findOne({ email: value }).then((data) => {
        if (data) {
          return Promise.reject("User already exist ! 👮‍♂️ ");
        }
      });
    }),
    body("password").isLength({ min: 6 }), // check  password length atleast 6
  ],

  // next work
  async (req, res) => {
    var succes = false;

    const error = validationResult(req);

    // if  error in validationResult
    if (!error.isEmpty()) {
      return res.status(401).send({ succes, error: error.array() });
    }

    // if user is Perfect
    try {
      // generating hash password
      const sakt = bcrypt.genSalt(10);
      const haspassword = await bcrypt.hash(req.body.password, 10);

      // appending to mongoDB
      const newuser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: haspassword,
      });
      var user = await newuser.save();

      // sending a user tocken for auth
      const tocken = jwt.sign({ userid: user._id }, JWT_PRIVATE_KEY);
      res.send({ authtocken: tocken });
    } catch (error) {
      // if any error
      console.log(error);
      res.status(500).send("Internal server Error ! ");
    }
  }
);

// Login user ! login not required
UserRouter.post(
  "/login",
  [
    body("email", "enter vailid email adress").isEmail(),
    body("email").custom((value) => {
      return userModel.findOne({ email: value }).then((data) => {
        if (!data) {
          return Promise.reject("User is  not exist ! 👮‍♂️ ");
        }
      });
    }),
    body("password", "Enter currect detail !").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const succes = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(401).json({ succes, error: error.array() });
    }

    try {
      // console.log(req.body.email);

      var user = await userModel.findOne({ email: req.body.email });

      console.log(user);

      const result = await bcrypt.compare(req.body.password, user.password);
      // console.log(result);

      if (result) {
        const tocken = jwt.sign({ userid: user._id }, JWT_PRIVATE_KEY);
        return res.send({ authtocken: tocken });
      }
      // console.log(req.body);

      return res.status(401).send("Please login using currect details");
    } catch (error) {
      console.log(error);
      res.status(500).send("internal server Error");
    }
  }
);

// featching user detail using tocken

UserRouter.post("/featchuser", fetchuser, async (req, res) => {
  try {
    const user = await userModel
      .findById(req.user)
      .select("-password")
      .select("-_id")
      .select("-_v")
      .select("-date");
    if (user) {
      return res.send(user);
    }
    return res.status(401).send("please fill currect details ");
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server Error");
  }
});

UserRouter.post("/update", fetchuser, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user);
if(!user){
return res.status(401).send("Enter currect details")
}
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(401).send("plese enter correct Password");
    }

    const { ename, epassword, eemail } = req.body;

    var updatedata = {};

    if (ename) {
      updatedata.name = ename;
    }
    if (epassword) {
      updatedata.email = eemail;
    }
    if (epassword) {
      updatedata.password = await bcrypt.hash(epassword, 10);
    }

    const update = await UserModel.findByIdAndUpdate(
      req.user,
      { $set: updatedata },
      { updated: true }
    );
    console.log(update);

    res.send("updated succesfuly !");
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server Error");
  }
});

UserRouter.put("/delet", fetchuser, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user);
    if (!user) {
      return res.status(401).send("fill currect detail");
    }
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(401).send("plese enter correct Password");
    }
    if (result == true) {
      const delet = await userModel.findByIdAndDelete(req.user);
      if(delet)
     return res.send("USER succesfully deleted");
    }
    res.status(500).send("internal server Error");
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server Error");
  }
});


// UserRouter.post("/updateprofileimg" , )


module.exports = UserRouter;
