const express = require("express");
const router = express.Router();

// @model of messages
const message = require("../models/messages");

// @routes GET /messages
router.get("/", (req, res) => {
  messages.find().then((items) => {
    res.json(items);
  });
});


  


// @routes POST /packages
router.post("/", (req, res) => {
  const newMessage = new message({
    name: req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    message:req.body.message

  });
  newMessage.save().then((p) => {
    res.json(p);
  });
});

module.exports = router;
