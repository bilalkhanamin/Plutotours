const express = require("express");
const router = express.Router();

// @model of package
const destinationsModel = require("../models/destinations");

// @routes GET /destinations
router.get("/", (req, res) => {
    destinationsModel.find().then((items) => {
     res.json(items);
    
   });
});

// @routes POST /packages
router.post("/", (req, res) => {
  const newDestination = new destinationsModel({
    destination_name: req.body.destination_name,
    cover_image: req.body.cover_image,
  });
  newDestination.save().then((p) => {
    res.json(p);
  });
});

module.exports = router;
