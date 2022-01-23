const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/", (req, res) => {
    const { email, password } = req.body;
        
     User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "login sucess", user: user, login: true })
            } else {
                res.send({ message: "wrong credentials", login: false })
            }
        } else {
            res.send({
                message: "not registerd", login
                    : false
            })
        }
    })


});

module.exports = router;
