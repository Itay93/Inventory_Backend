const Joi = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  valueInSales: { type: Number, required: true },
  includeInMonthlyInventory: { type: Boolean, required: true },
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
  kg: { type: Number, required: true },
  box: { type: Number, required: true },
  unit: { type: Number, required: true },
  third: { type: Number, required: true },
  dThird: { type: Number, required: true },
  boxDough: { type: Number, required: true },
  ambat: { type: Number, required: true },
  totalInStock: { type: Number, required: true },
});
const calculationsSchema = new mongoose.Schema({
  orderInventoryValue: { type: Number, required: true },
  outOfStock: { type: Number, required: true },
  needToOrder: { type: Number, required: true },
  monthlyInventoryValue: { type: Number, required: true },
});

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    product: { type: productSchema, required: true },
    supplier: { type: supplierSchema, required: true },
    sizes: { type: sizesSchema, required: true },
    inStock: { type: inStockSchema, required: true },
    calculations: { type: calculationsSchema, required: true },
    insertOrder: { type: Number, required: true },
  })
);

const validateProduct = (product) => {
  const schema = Joi.object({
    product: Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      valueInSales: Joi.number().required(),
      includeInMonthlyInventory: Joi.boolean().required(),
    }).required(),
    supplier: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
    }).required(),
    sizes: Joi.object({
      stockDaily: Joi.string().required(),
      stockMonthly: Joi.string().required(),
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
