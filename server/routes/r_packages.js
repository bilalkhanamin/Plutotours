const express = require("express");
const router = express.Router();

// @model of package
const m_packages = require("../models/m_packages");

// @routes GET /packages
router.get("/", (req, res) => {
  m_packages.find().then((items) => {
    res.json(items);
  });
});


// @routes GET /packages/:id
router.get("/:id", (req, res) => {
  m_packages.findById(req.params.id).then(found => {
    if (!found) res.send("not found");
    return res.json(found);
  })
});
// let found = m_packages.some(p => p._id === parseInt(req.params.id));
// console.log(found)
// if (found) {
//    res.json(m_packages.filter(p => p._id === parseInt(req.params.id)));
//   } else {
//    res.status(404);
//    res.send(`No PACKAGE found at ${req.params.id}`);
//   }

//  res.json(m_packages.filter(p => p._id == parseInt(req.params.id)));

// const findPackage = m_packages.map((e) => {
//   let found = e._id == req.params.id;
//   if (found) {
//     return found;
//   } else {
//     res.status(404);
//   }
// });
// res.json(findPackage);
//});


// @routes POST /packages
router.post("/", (req, res) => {
  const newPackage = new m_packages({
    package_name: req.body.package_name,
    cover_images: req.body.cover_images,
    starting_loc: req.body.starting_loc,
    duration: req.body.duration,
    host_name: req.body.host_name,
    price: req.body.price,
    overview: req.body.overview,
    itinerary: req.body.itinerary,
    activities: req.body.activities,
    attractions: req.body.attractions,
    about_host: req.body.about_host,
    c_policy: req.body.c_policy,
    tags: req.body.tags,
  });
  newPackage.save().then((p) => {
    res.json(p);
  });
});

module.exports = router;
