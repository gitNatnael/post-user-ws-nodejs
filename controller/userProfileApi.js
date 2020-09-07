const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err.message,
      });
    }
    let user = new User.Register({
      name: req.body.name,
      email: req.body.email,
      telephone: req.body.telephone,
      address: req.body.address,
      password: hashedPass,
    });
    user.save().then((user) => {
      res
        .json({
          message: "user added successfully",
        })
        .catch((error) => {
          res.json({
            message: "an error occured.",
          });
        });
    });
  });
};

const login = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  User.Register.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({ error: err.message });
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, "verySecretValue", {
            expiresIn: "1h",
          });
          res.json({ message: "login successful", user, token });
        } else {
          res.json({ message: "login failed" });
        }
      });
    } else {
      res.json({ message: "No user found" });
    }
  });
};

const allUser = (req, res, next) => {
  User.Register.find()
    .then((user) => {
      if (user) {
        res.json({
          user,
        });
      } else {
        res.json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
};

module.exports = {
  register,
  login,
  allUser,
};
