var express = require("express");
var User = require("../model/User");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

var router = express.Router();

var SECRET_KEY = "secret!";
router.get("/signup", (req, res) => {
    res.send("signup");
});

router.post("/signup", (req, res) => {
    // var user = new User(req.body);
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (user) return res.status(401).send({ error: "Email already Exit" });
        if (!user) {
            const password = await bcrypt.hash(req.body.password, 10);
            console.log(password);
            console.log(req.body);
            User.create({
                ...req.body,
                password: password
            }).then(result => {
                const token = jwt.sign(
                    {
                        id: result.id,
                        email: result.email
                    },
                    SECRET_KEY
                );
                console.log(token);
                res.cookie("jwt", token, {
                    httpOnly: true
                    // secure: true,
                    // domain: "https://cacsffutmx-backend.herokuapp.com"
                });
                console.log("hello world");
                console.log({ userData: result, success: true });
                return res
                    .status(201)
                    .json({ userData: result, success: true });
            });
        }
    });

    // user.save((err, user) => {
    //   if (err) res.status(500).json({ error: "Something is wrong" });
    //   if (err) {
    //     console.log(err);
    //   }
    //   if (user) {
    //     res.cookie("user", {
    //       email: req.body.email,
    //       password: req.body.password
    //     });
    //   }
    // });
});

module.exports = router;
