const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send({
      isError: true,
      error: error.details[0].message,
    });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({
      isError: true,
      error: "Invalid email or password.",
    });

  const result = await bcrypt.compare(req.body.password, user.password);
  if (!result)
    return res.status(400).send({
      isError: true,
      error: "Invalid email or password.",
    });

  const token = jwt.sign(
    _.pick(user, ["_id", "name", "email"]),
    config.get("jwtPrivateKey")
  );

  res.send({
    isError: false,
    token,
  });
});

const validate = (req) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(req);
};

module.exports = router;
