const { Product, validate } = require("../models/product");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

// get all products
router.get("/", async (req, res) => {
  const products = await Product.find().sort("supplier.name");
  if (products.length === 0)
    return res.status(404).send({ isError: true, error: "לא נמצאו מוצרים" });
  res.send({ isError: false, products });
});

// get product by id
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res
      .status(404)
      .send({ isError: true, error: "לא נמצא מוצר עם המזהה שהוזן" });
  res.send({ isError: false, product });
});

// post product
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ isError: true, error: error.details[0].message });
  const product = new Product({
    product: _.pick(req.body.product, ["name", "price", "valueInSales"]),
    supplier: _.pick(req.body.supplier, ["name", "type"]),
    sizes: _.pick(req.body.sizes, [
      "stockDaily",
      "stockmonthly",
      "inOrder",
      "kg",
      "box",
      "unit",
      "third",
      "dThird",
      "boxDough",
      "ambat",
    ]),
    inStock: _.pick(req.body.inStock, [
      "kg",
      "box",
      "unit",
      "third",
      "dThird",
      "boxDough",
      "ambat",
      "totalInStock",
    ]),
    calculations: _.pick(req.body.calculations, [
      "orderInventoryValue",
      "outOfStock",
      "needToOrder",
      "monthlyInventoryValue",
    ]),
    insertOrder: req.body.insertOrder,
  });
  await product.save();
  res.send({ isError: false, product });
});

// update product by id
router.put("/:id", async (req, res) => {});

// delete product by id
router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product)
    return res
      .status(404)
      .send({ isError: true, error: "לא נמצא מוצר עם המזהה שהוזן" });
  res.send({ isError: false, product });
});

module.exports = router;
