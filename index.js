require("express-async-errors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const express = require("express");
const app = express();

const constants = require("./routes/constants");
const suppliers = require("./routes/suppliers");
const products = require("./routes/products");

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

const connectToAtlas = async () => {
  await mongoose.connect(
    "mongodb+srv://dbAdminUser:Abvc1234@cluster0.ywyof.mongodb.net/inventory?retryWrites=true&w=majority"
  );
  console.log("Connected to MongoDB Atlas...");
};

connectToAtlas();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "origin, x-requested-with, content-type"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use(express.json());
app.use("/api/constants", constants);
app.use("/api/suppliers", suppliers);
app.use("/api/products", products);
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
app.use(helmet());
app.use(compression());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
