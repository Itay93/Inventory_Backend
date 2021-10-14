const { LABELS } = require("../constants/labels");

const express = require("express");
const router = express.Router();

// get all labels
router.get("/", (req, res) => {
  res.json({ isError: false, data: LABELS });
});

module.exports = router;
