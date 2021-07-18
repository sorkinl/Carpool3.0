const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getUser = (req, res) => {
  let token = req.cookies["token"];

  console.log("happens1");
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
      uid: null,
    });
  }
  console.log("happens2");
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
        uid: null,
      });
    }
    console.log(decoded);
    return res.status(200).send({
      uid: decoded.id,
    });
  });
};

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    uid: req.body.uid,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then(() => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ id: user.dataValues.uid }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      res.cookie("token", token, { httpOnly: true });
      res.status(200).send({
        uid: user.dataValues.uid,
        email: user.dataValues.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
