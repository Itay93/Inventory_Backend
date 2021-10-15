const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const express = require("express");
const app = express();

const labels = require("./routes/labels");
const suppliers = require("./routes/suppliers");
const products = require("./routes/products");

const connectToAtlas = async () => {
  await mongoose.connect(
    "mongodb+srv://dbAdminUser:Abvc1234@cluster0.ywyof.mongodb.net/inventory?retryWrites=true&w=majority"
  );
  console.log("Connected to MongoDB Atlas...");
};

connectToAtlas();

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use("/api/constants/labels", labels);
app.use("/api/suppliers", suppliers);
app.use("/api/products", products);
app.use(helmet());
app.use(compression());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
