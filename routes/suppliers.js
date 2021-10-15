const { Supplier, validate } = require("../models/supplier");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

// get all suppliers
router.get("/", async (req, res) => {
  const supplier = await Supplier.find().sort("name");
  if (supplier.length === 0)
    return res.status(404).json({ isError: true, error: "לא נמצאו ספקים" });

  res.json({ isError: false, data: supplier });
});

// get supplier by id
router.get("/:id", async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  if (!supplier)
    return res.status(404).json({
      isError: true,
      error: "לא נמצא ספק עם המזהה שהוזן",
    });

  res.json({ isError: false, data: supplier });
});

// post supplier
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ isError: true, error: error.details[0].message });

  const supplier = new Supplier(
    _.pick(req.body, [
      "name",
      "type",
      "deliveryDays",
      "orderDays",
      "salesAgent",
      "number",
      "orderBy",
    ])
  );
  await supplier.save();

  res.json({ isError: false, data: supplier });
});

// update supplier by id
router.put("/:id", async (req, res) => {});

// delete supplier by id
router.delete("/:id", async (req, res) => {
  const supplier = await Supplier.findByIdAndRemove(req.params.id);
  if (!supplier)
    return res.status(404).json({
      isError: true,
      error: "לא נמצא ספק עם המזהה שהוזן",
    });

  res.json({ isError: false, data: supplier });
});

module.exports = router;
