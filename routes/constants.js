const express = require("express");
const router = express.Router();

const { ENG } = require("../constants/eng");
const { HEB } = require("../constants/heb");

router.get("/", (req, res) => {
  res.send({ isError: false, constants: { ENG, HEB } });
});

module.exports = router;
