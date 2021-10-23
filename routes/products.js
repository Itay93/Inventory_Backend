const _ = require("lodash");
const express = require("express");
const router = express.Router();

const { ENG } = require("../constants/eng");
const { Product, validate } = require("../models/product");

// get all products or products by supplier type
router.get("/", async (req, res) => {
  let products = [];

  if (Object.keys(req.query).length > 0) {
    products = await Product.find({
      "supplier.type": req.query.type,
    }).sort(`${ENG.SUPPLIER.SUPPLIER}.${ENG.SUPPLIER.NAME}`);
  } else {
    products = await Product.find().sort(
      `${ENG.SUPPLIER.SUPPLIER}.${ENG.SUPPLIER.NAME}`
    );
  }

  res.send({ isError: false, products });
});

// get product by id
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).send({
      isError: true,
      error: "",
    });
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
    product: _.pick(req.body.product, [
      ENG.PRODUCT.NAME,
      ENG.PRODUCT.PRICE,
      ENG.PRODUCT.VALUE_IN_SALES,
    ]),
    supplier: _.pick(req.body.supplier, [ENG.SUPPLIER.NAME, ENG.SUPPLIER.TYPE]),
    sizes: _.pick(req.body.sizes, [
      ENG.SIZES.STOCK_DAILY,
      ENG.SIZES.STOCK_MONTHLY,
      ENG.SIZES.IN_ORDER,
      ENG.SIZES.KG,
      ENG.SIZES.BOX,
      ENG.SIZES.UNIT,
      ENG.SIZES.THIRD,
      ENG.SIZES.D_THIRD,
      ENG.SIZES.BOX_DOUGH,
      ENG.SIZES.AMBAT,
    ]),
    inStock: _.pick(req.body.inStock, [
      ENG.IN_STOCK.KG,
      ENG.IN_STOCK.BOX,
      ENG.IN_STOCK.UNIT,
      ENG.IN_STOCK.THIRD,
      ENG.IN_STOCK.D_THIRD,
      ENG.IN_STOCK.BOX_DOUGH,
      ENG.IN_STOCK.AMBAT,
      ENG.IN_STOCK.TOTAL_IN_STOCK,
    ]),
    calculations: _.pick(req.body.calculations, [
      ENG.CALCULATIONS.ORDER_INVENTORY_VALUE,
      ENG.CALCULATIONS.OUT_OF_STOCK,
      ENG.CALCULATIONS.NEED_TO_ORDER,
      ENG.CALCULATIONS.MONTHLY_INVENTORY_VALUE,
    ]),
    insertOrder: req.body.insertOrder,
  });
  await product.save();
  res.send({ isError: false, product });
});

// delete product by id
router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product)
    return res.status(404).send({
      isError: true,
      error: "",
    });
  res.send({ isError: false, product });
});

module.exports = router;
