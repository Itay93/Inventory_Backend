const express = require("express");
const router = express.Router();

const { ENG } = require("../constants/labels/engLabels");
const { HEB } = require("../constants/labels/hebLabels");

router.get("/", (req, res) => {
  res.send({ isError: false, constants: { ENG, HEB } });
});

module.exports = router;
