const _ = require("lodash");
const express = require("express");
const router = express.Router();

const { ENG_LABELS } = require("../constants/labels/engLabels");
const { HEB_MESSAGES } = require("../constants/messages/hebMessages");
const { Supplier, validate } = require("../models/supplier");

// get all suppliers
router.get("/", async (req, res) => {
  const suppliers = await Supplier.find().sort(ENG_LABELS.SUPPLIER.NAME);
  if (suppliers.length === 0)
    return res.status(404).send({
      isError: true,
      error: HEB_MESSAGES.ERRORS.SUPPLIER.NO_SUPPLIERS,
    });
  res.send({ isError: false, suppliers });
});

// get supplier by id
router.get("/:id", async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  if (!supplier)
    return res.status(404).send({
      isError: true,
      error: HEB_MESSAGES.ERRORS.SUPPLIER.NO_SUPPLIER_WITH_ID,
    });
  res.send({ isError: true, supplier });
});

// post supplier
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ isError: true, error: error.details[0].message });
  const supplier = new Supplier(
    _.pick(req.body, [
      ENG_LABELS.SUPPLIER.NAME,
      ENG_LABELS.SUPPLIER.TYPE,
      ENG_LABELS.SUPPLIER.DELIVERY_DAYS,
      ENG_LABELS.SUPPLIER.ORDER_DAYS,
      ENG_LABELS.SUPPLIER.SALES_AGENT,
      ENG_LABELS.SUPPLIER.NUMBER,
      ENG_LABELS.SUPPLIER.ORDER_BY,
      ,
    ])
  );
  await supplier.save();
  res.send({ isError: false, supplier });
});

// update supplier by id
router.put("/:id", async (req, res) => {});

// delete supplier by id
router.delete("/:id", async (req, res) => {
  const supplier = await Supplier.findByIdAndRemove(req.params.id);
  if (!supplier)
    return res.status(404).send({
      isError: true,
      error: HEB_MESSAGES.ERRORS.SUPPLIER.NO_SUPPLIER_WITH_ID,
    });
  res.send({ isError: false, supplier });
});

module.exports = router;
