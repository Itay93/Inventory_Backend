const express = require("express");
const router = express.Router();

const { ENG_LABELS } = require("../constants/labels/engLabels");
const { HEB_LABELS } = require("../constants/labels/hebLabels");

router.get("/", (req, res) => {
  res.send({ isError: false, constants: { ENG_LABELS, HEB_LABELS } });
});

module.exports = router;
