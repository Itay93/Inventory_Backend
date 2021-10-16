const express = require("express");
const router = express.Router();

const { HEB_LABELS } = require("../constants/labels/hebLabels");

// get heb labels
router.get("/", (req, res) => {
  res.send({ isError: false, HEB_LABELS });
});

module.exports = router;
