const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB!");
      console.error(error);
      process.exit(1);
    });
}

module.exports = dbConnect;
