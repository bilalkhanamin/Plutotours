const mongoose = require("mongoose");
 const schema = mongoose.Schema;

//creating a schema
const packageSchema = new schema({
  package_name: { type: String, required: true },
  cover_images: { type: Array, required: true },
  starting_loc: { type: String, required: true },
  duration: { type: String, required: true },
  host_name: { type: String, required: true },
  price: { type: String, required: true },
  overview: { type: String, required: true },
    itinerary: [
    {
      id: { type: Number, default: 1 },
      title: { type: String, default: "" },
      data: { type: Array, default: [] },
    },
  ],
   activities: { type: Array, default: [], required: true },
  attractions: { type: Array, required: true },
  about_host: { type: String, required: true },
  c_policy: { type: Array, required: true },
  tags: { type: Array, required: true },
});

module.exports = m_packages = mongoose.model("m_packages", packageSchema);
