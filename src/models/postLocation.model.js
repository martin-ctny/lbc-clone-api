const mongoose = require("mongoose");
const postLocationSchema = new mongoose.Schema({
  formatted_address: {
    type: String,
  },
  street_number: {
    type: String,
  },
  route: {
    type: String,
  },
  city: {
    type: String,
  },
  administrative_area_level_1: {
    type: String,
  },
  administrative_area_level_2: {
    type: String,
  },
  country: {
    type: String,
  },
  postal_code: {
    type: String,
  },
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});
module.exports = mongoose.model("PostLocation", postLocationSchema);
