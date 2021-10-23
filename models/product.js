const Joi = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  valueInSales: { type: Number, required: true },
});
const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
});
const sizesSchema = new mongoose.Schema({
  stockDaily: { type: String, required: true, trim: true },
  stockMonthly: { type: String, required: true, trim: true },
  inOrder: { type: String, required: true, trim: true },
  kg: { type: Number, required: true },
  box: { type: Number, required: true },
  unit: { type: Number, required: true },
  third: { type: Number, required: true },
  dThird: { type: Number, required: true },
  boxDough: { type: Number, required: true },
  ambat: { type: Number, required: true },
});
const inStockSchema = new mongoose.Schema({
  kg: { type: Number, required: true, default: 0 },
  box: { type: Number, required: true, default: 0 },
  unit: { type: Number, required: true, default: 0 },
  third: { type: Number, required: true, default: 0 },
  dThird: { type: Number, required: true, default: 0 },
  boxDough: { type: Number, required: true, default: 0 },
  ambat: { type: Number, required: true, default: 0 },
  totalInStock: { type: Number, required: true, default: 0 },
});
const calculationsSchema = new mongoose.Schema({
  orderInventoryValue: { type: Number, required: true, default: 0 },
  outOfStock: { type: Number, required: true, default: 0 },
  needToOrder: { type: Number, required: true, default: 0 },
  monthlyInventoryValue: { type: Number, required: true, default: 0 },
});

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    product: { type: productSchema, required: true },
    supplier: { type: supplierSchema, required: true },
    sizes: { type: sizesSchema, required: true },
    inStock: { type: inStockSchema, required: true },
    calculations: { type: calculationsSchema, required: true },
    insertOrder: { type: Number, required: true, default: 0 },
  })
);

const validateProduct = (product) => {
  const schema = Joi.object({
    product: Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      valueInSales: Joi.number().required(),
    }).required(),
    supplier: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
    }).required(),
    sizes: Joi.object({
      stockDaily: Joi.string().required(),
      stockmonthly: Joi.string().required(),
      inOrder: Joi.string().required(),
      kg: Joi.number().required(),
      box: Joi.number().required(),
      unit: Joi.number().required(),
      third: Joi.number().required(),
      dThird: Joi.number().required(),
      boxDough: Joi.number().required(),
      ambat: Joi.number().required(),
    }).required(),
    inStock: Joi.object({
      kg: Joi.number().required(),
      box: Joi.number().required(),
      unit: Joi.number().required(),
      third: Joi.number().required(),
      dThird: Joi.number().required(),
      boxDough: Joi.number().required(),
      ambat: Joi.number().required(),
      totalInStock: Joi.number().required(),
    }).required(),
    calculations: Joi.object({
      orderInventoryValue: Joi.number().required(),
      outOfStock: Joi.number().required(),
      needToOrder: Joi.number().required(),
      monthlyInventoryValue: Joi.number().required(),
    }).required(),
    insertOrder: Joi.number().required(),
  });
  return schema.validate(product);
};

exports.Product = Product;
exports.validate = validateProduct;
