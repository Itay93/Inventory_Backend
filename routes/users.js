const _ = require("lodash");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { User, validate } = require("../models/user");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send({
      isError: true,
      error: error.details[0].message,
    });
  let user = await User.findOne({ email: req.body.email });
  if (user)
    res.status(400).send({
      isError: true,
      error: "User already registered.",
    });
  user = new User(_.pick(req.body, ["name", "email", "password"]));
  await user.save();
  res.send({
    isError: false,
    user,
  });
});

module.exports = router;