const mongoose = require("mongoose");
const schema = mongoose.Schema;

//creating a schema
const DestinationSchema = new schema({
  destination_name: { type: String, required: true },
  cover_image: { type: String, required: true },
});

module.exports = Destinations = mongoose.model("Destinations", DestinationSchema);
