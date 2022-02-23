const express = require("express");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const saltRound = 10;
const UserModel = require("../Models/userModel");

const NewUserRouter = express.Router();
const multer = require("multer");
const { UUID } = require("bson");
const res = require("express/lib/response");
const { json } = require("body-parser");
const userModel = require("../Models/userModel");
var storage = multer.diskStorage({
  destination: "backend/uploads/Profileimage/",
  filename: (req, file, cb) => {
    cb(null, uuid.v4() + file.originalname);
  },
});

const upload = multer({ storage: storage });
const { RegisterUser, LoginUser } = require("../Controllers/Login-Register");
NewUserRouter.post("/new", upload.single("profileImage"), RegisterUser);
NewUserRouter.post("/login", LoginUser);
module.exports = NewUserRouter;
