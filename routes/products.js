const _ = require("lodash");
const express = require("express");
const router = express.Router();

const { ENG_LABELS } = require("../constants/labels/engLabels");
const { HEB_MESSAGES } = require("../constants/messages/hebMessages");
const { Product, validate } = require("../models/product");

// get all products
router.get("/", async (req, res) => {
  const products = await Product.find().sort(
    `${ENG_LABELS.SUPPLIER.SUPPLIER}.${ENG_LABELS.SUPPLIER.NAME}`
  );
  if (products.length === 0)
    return res
      .status(404)
      .send({ isError: true, error: HEB_MESSAGES.ERRORS.PRODUCT.NO_PRODUCTS });
  res.send({ isError: false, products });
});

// get product by id
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).send({
      isError: true,
      error: HEB_MESSAGES.ERRORS.PRODUCT.NO_PRODUCT_WITH_ID,
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
      ENG_LABELS.PRODUCT.NAME,
      ENG_LABELS.PRODUCT.PRICE,
      ENG_LABELS.PRODUCT.VALUE_IN_SALES,
    ]),
    supplier: _.pick(req.body.supplier, [
      ENG_LABELS.SUPPLIER.NAME,
      ENG_LABELS.SUPPLIER.TYPE,
    ]),
    sizes: _.pick(req.body.sizes, [
      ENG_LABELS.SIZES.STOCK_DAILY,
      ENG_LABELS.SIZES.STOCK_MONTHLY,
      ENG_LABELS.SIZES.IN_ORDER,
      ENG_LABELS.SIZES.KG,
      ENG_LABELS.SIZES.BOX,
      ENG_LABELS.SIZES.UNIT,
      ENG_LABELS.SIZES.THIRD,
      ENG_LABELS.SIZES.D_THIRD,
      ENG_LABELS.SIZES.BOX_DOUGH,
      ENG_LABELS.SIZES.AMBAT,
    ]),
    inStock: _.pick(req.body.inStock, [
      ENG_LABELS.IN_STOCK.KG,
      ENG_LABELS.IN_STOCK.BOX,
      ENG_LABELS.IN_STOCK.UNIT,
      ENG_LABELS.IN_STOCK.THIRD,
      ENG_LABELS.IN_STOCK.D_THIRD,
      ENG_LABELS.IN_STOCK.BOX_DOUGH,
      ENG_LABELS.IN_STOCK.AMBAT,
      ENG_LABELS.IN_STOCK.TOTAL_IN_STOCK,
    ]),
    calculations: _.pick(req.body.calculations, [
      ENG_LABELS.CALCULATIONS.ORDER_INVENTORY_VALUE,
      ENG_LABELS.CALCULATIONS.OUT_OF_STOCK,
      ENG_LABELS.CALCULATIONS.NEED_TO_ORDER,
      ENG_LABELS.CALCULATIONS.MONTHLY_INVENTORY_VALUE,
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
    return res.status(404).send({
      isError: true,
      error: HEB_MESSAGES.ERRORS.PRODUCT.NO_PRODUCT_WITH_ID,
    });
  res.send({ isError: false, product });
});

module.exports = router;
