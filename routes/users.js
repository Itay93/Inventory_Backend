const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
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
    return res.status(400).send({
      isError: true,
      error: "User already registered.",
    });

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = jwt.sign(
    _.pick(user, ["_id", "name", "email"]),
    config.get("jwtPrivateKey")
  );

  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send({
      isError: false,
      user: _.pick(user, ["_id", "name", "email"]),
    });
});

module.exports = router;
