const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

module.exports = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_ADDRESSE}`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};
