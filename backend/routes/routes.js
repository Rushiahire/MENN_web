const express = require("express");
const router = express.Router();
const crypto = require("crypto");
// const cors = require("cors");

const User = require("../models/User");

const app = express();

// app.use(cors());

let data = [];

function hashUserPassword(password) {
    /// crypto.randomBytes(64).toString("hex") // to create salt in nodejs
    let salt =
      "cc068a99facba1dcc6beb2810f3338240763df8655c8d5574f9fb3d2e79019353ac395b9db05754739d4e13eda20cb687058e3a7a4a6a18b5f4e537040402787";
    return crypto
      .pbkdf2Sync(password, salt, 1000, 32, "sha3-512")
      .toString("hex");
  }

  function getCurrentDate(date) {
    let localData = new Date(date).toLocaleString("en", {
      timeZone: "Asia/Kolkata",
    });
    return localData.split(", ").join(" ").split("/").join("-");
  }
  

router.get("/", (req,res) => {
    res.send("Welcome to our MENN website !!!")
})


router.post("/add-user", (req, res) => {
    console.log("create user body",req.body);
    const user = {
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      mobile: req.body.mobile,
    //   password: hashUserPassword(req.body.password),
      created: getCurrentDate(Date.now()),
      modified: getCurrentDate(Date.now()),
    };
    User.create(user);
  
    res.status(200).json({ Success: "User created" });
  });


  router.get("/get-user" , (req,res) => {
      User.find().exec((err,data) => {
          res.status(200).json({ Success:data })
        })
        console.log("get user data",req.body)
  })

  


router.get("/login", (req,res) => {
    let email = "";
    let password = "";
  
    if (req.body) {
      (email = req.body.email), (password = hashUserPassword(req.body.password));
    }
    data.map((user) => {
      if (user.email === email && user.password === password) {
        res.status(200).json({ Success: "Login succesfully", redirect: "/" });
      } else {
        res.status(200).json({ Incorrect: "Incorrect user and password" });
      }
    });
})


router.post("/register", (req,res) => {
    console.log("register body",req.body)
    
})


module.exports = router;