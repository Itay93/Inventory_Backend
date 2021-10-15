const Joi = require("joi");
const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  deliveryDays: { type: Array, required: true },
  orderDays: { type: Array, required: true },
  salesAgent: { type: String, required: true, trim: true },
  number: { type: String, required: true, trim: true },
  orderBy: { type: String, required: true, trim: true },
});

const Supplier = mongoose.model("Supplier", supplierSchema);

const validateSupplier = (supplier) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    deliveryDays: Joi.array().required(),
    orderDays: Joi.array().required(),
    salesAgent: Joi.string().required(),
    number: Joi.string().required(),
    orderBy: Joi.string().required(),
  });
  return schema.validate(supplier);
};

exports.Supplier = Supplier;
exports.validate = validateSupplier;
