const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/event-man";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connected");
});

db.on("error", (err) => {
  console.error("DATABASE CONNECTION ERROR:", err);
});

module.exports = db;
