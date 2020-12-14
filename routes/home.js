var express = require("express");

var router = express.Router();
var Event = require("../model/Event");
var app = express();

// const checkLogin = (req, res) => {
//   if (req.session.user) {
//     console.log(req.session.user);
//     next();
//   } else {
//     console.log("user not found");
//   }
// };

router.get("/", (req, res) => {
    // if (req.session.user) {
    //   res.send("Hello world");
    //   req.session(user);
    // } else {
    //   res.send("homepage");
    // }

    res.send("hello world");
});

router.post("/", (req, res) => {
    console.log("hello world");
    Event.create({ name: "birthday" }, (err, result) => {
        if (err) return console.log(err);
        console.log(result);
    });
});
// app.use("/", (err, req, res) => {
//   res.send("/login");
// });

module.exports = router;
