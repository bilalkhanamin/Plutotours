const express = require("express");
const router = express.Router();

const User = require("../models/user");



router.post("/", (req, res) => {
    // console.log(req.body)
     const { name, email,phone,CNIC, password } = req.body;
    User.findOne({ email:email }, (err, user) => {
        if (user) {
            res.send({ message: "user already exist", signup : false })
        } else {
            const newUser = new User({ name, email,phone,CNIC, password })
            newUser.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Account is created sucessfully", signup : true })
                }
            })
        //     user.save().then((p) => {
        //         res.json(p);
        //       });
         }
    })


});

module.exports = router;
