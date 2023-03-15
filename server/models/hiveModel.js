const mongoose = require("mongoose");

const Hive = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "Please provide a user Email"],
    unique: false,
  },
  apiary: {
    type: String,
    required: [true, "Please provide an Apiary"],
    unique: false,
  },
  title: {
    type: String,
    required: true,
    unique: false,
  },
  slug: {
    type: String,
    required: true,
    unique: false,
  },
  photo: {
    type: String,
    unique: false,
  },
  type: [{ type: String }],
});

module.exports = mongoose.model.Hives || mongoose.model("Hives", Hive);
