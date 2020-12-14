var express = require("express");
var User = require("../model/User");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var router = express.Router();

router.get("/login", (req, res) => {
  res.send("login");
});

const SECRET_KEY = "secret!";

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      return err.message;
    }
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    } else {
      let password = await bcrypt.compare(req.body.password, user.password);
      if (!password) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      if (password) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          SECRET_KEY
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          // secure: true,
          // domain: "https://cacsffutmx-backend.herokuapp.com"
        });
        return res.status(201).json({ userData: user, success: true });
      }
    }
  });
});

module.exports = router;
