const _ = require("lodash");
const express = require("express");
const router = express.Router();

const { ENG } = require("../constants/eng");
const { Supplier, validate } = require("../models/supplier");

// get all suppliers
router.get("/", async (req, res) => {
  const suppliers = await Supplier.find().sort(ENG.SUPPLIER.NAME);
  if (suppliers.length === 0)
    return res.status(404).send({
      isError: true,
      error: "No suppliers found.",
    });
  res.send({ isError: false, suppliers });
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
      ENG.SUPPLIER.NAME,
      ENG.SUPPLIER.TYPE,
      ENG.SUPPLIER.DELIVERY_DAYS,
      ENG.SUPPLIER.ORDER_DAYS,
      ENG.SUPPLIER.SALES_AGENT,
      ENG.SUPPLIER.NUMBER,
      ENG.SUPPLIER.ORDER_BY,
      ,
    ])
  );
  await supplier.save();
  res.send({ isError: false, supplier });
});

// delete supplier
router.delete("/:id", async (req, res) => {
  const supplier = await Supplier.findByIdAndRemove(req.params.id);
  if (!supplier)
    return res.status(404).send({
      isError: true,
      error: "",
    });
  res.send({ isError: false, supplier });
});

module.exports = router;
