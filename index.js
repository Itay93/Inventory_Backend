const mongoose = require("mongoose");
const express = require("express");
const app = express();

const products = require("./routes/products");

const connectToAtlas = async () => {
  await mongoose.connect(
    "mongodb+srv://dbAdminUser:Abvc1234@cluster0.ywyof.mongodb.net/inventory?retryWrites=true&w=majority"
  );
  console.log("Connected to MongoDB Atlas...");
};

connectToAtlas();

app.use(express.json());
app.use("/api/products", products);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
