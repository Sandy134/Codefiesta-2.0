const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

require("./config/db.js");

app.use("/api", require("./routes/router.js"));

app.listen(5000, () => {
  console.log("Server started at PORT 5000");
});
