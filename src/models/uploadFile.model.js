const mongoose = require("mongoose");
const uploadFileSchema = new mongoose.Schema({
  ETag: {
    type: String,
  },
  ServerSideEncryption: {
    type: String,
  },
  Location: {
    type: String,
  },
  key: {
    type: String,
  },
  Key: {
    type: String,
  },
  Bucket: {
    type: String,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});
module.exports = mongoose.model("UploadFile", uploadFileSchema);
