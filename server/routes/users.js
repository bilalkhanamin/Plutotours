const express = require("express");
const router = express.Router();

// @model of users
const user = require("../models/user");

// @routes GET /users
router.get("/", (req, res) => {
    user.find().then((items) => {
      res.json(items);
    });
  });
  
module.exports = router;
