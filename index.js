const mongoose = require("mongoose");
const express = require("express");
const app = express();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

connectDB().then(() => {
  app.listen(process.env.PORT || 3000);
});
