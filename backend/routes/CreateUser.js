const express = require("express");
const router = express.Router();
const user = require("../models/User");

const { body, validationResult } = require("express-validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs")

const jwtsecret="IamVishalCoderFromJahangirPuri$#";

router.post(
  "/createuser",
  [
    body("name")
      .isLength({ min: 5 })
      .withMessage("name must be at least 5 characters long")
      .trim()
      .escape(),
    body("email").isEmail().withMessage("Email is not valid").normalizeEmail(),
    body("password", "Incorrect Password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // await for asynchrounus process like bcrypt functionbcrypt.
const salt=await bcrypt.genSalt(10)
let secPassword=await bcrypt.hash(req.body.password,salt)
    try {
      await user.create({
        name: req.body.name,
        password: secPassword,
        location: req.body.location,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail().withMessage("Email is not valid").normalizeEmail(),
    body("password", "Incorrect Password or Password must be atleast 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;

    try {
      let userData = await user.findOne({ email: req.body.email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      const passcomp=await bcrypt.compare(req.body.password,userData.password);

      if (!passcomp) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      const data={
        user:{
id:userData.id,
        }
      }

      // hashing is one way and encryption/encode are both different
      
      const authToken=jwt.sign(data,jwtsecret)//jwt token will remain untill cache memory not cleared
return res.json({ success: true,authToken:authToken});

    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
