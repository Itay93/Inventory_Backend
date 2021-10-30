const express = require("express");
const router = express.Router();

const checkAuthToken = require("../middlewares/auth");
const { ENG } = require("../constants/eng");
const { HEB } = require("../constants/heb");

router.get("/", checkAuthToken, (req, res) => {
  res.send({ isError: false, constants: { ENG, HEB } });
});

module.exports = router;
