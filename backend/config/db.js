const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch(() => {
    console.log("MongoDB connection Failed");
  });


