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
      _.pick(ENG_LABELS.PRODUCT, [NAME, PRICE, VALUE_IN_SALES]),
    ]),
    supplier: _.pick(req.body.supplier, [
      _.pick(ENG_LABELS.SUPPLIER, [NAME, TYPE]),
    ]),
    sizes: _.pick(req.body.sizes, [
      _.pick(ENG_LABELS.SIZES, [
        STOCK_DAILY,
        STOCK_MONTHLY,
        IN_ORDER,
        KG,
        BOX,
        UNIT,
        THIRD,
        D_THIRD,
        BOX_DOUGH,
        AMBAT,
      ]),
    ]),
    inStock: _.pick(req.body.inStock, [
      _.pick(ENG_LABELS.IN_STOCK, [
        KG,
        BOX,
        UNIT,
        THIRD,
        D_THIRD,
        BOX_DOUGH,
        AMBAT,
        TOTAL_IN_STOCK,
      ]),
    ]),
    calculations: _.pick(req.body.calculations, [
      _.pick(ENG_LABELS.CALCULATIONS, [
        ORDER_INVENTORY_VALUE,
        OUT_OF_STOCK,
        NEED_TO_ORDER,
        MONTHLY_INVENTORY_VALUE,
      ]),
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
