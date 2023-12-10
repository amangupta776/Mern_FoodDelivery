const express = require('express');
const router = express.Router();
const User = require('../../Models/User');
const bcrypt=require("bcryptjs")
const { body, validationResult } = require("express-validator");
const jwt=require("jsonwebtoken");
const jwtSecret="Mynameisamanajjewojewoje"
router.post("/creatuser", [
    body('email', "invalid email").isEmail(),
    body('password', "MiniMum length is 5").isLength({ min: 5 })
]
    ,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const salt=await bcrypt.genSalt(10);
        let secPassword=await bcrypt.hash(req.body.password,salt)
        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });
        } catch (error) {
            res.json({ success: false });
        }
    })
    router.post("/login", [
        body('email', "invalid email").isEmail(),
        body('password', "Minimum length is 5").isLength({ min: 5 })
      ], async (req, res) => {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
      
          let email = req.body.email;
          let user = await User.findOne({ email });
      
          if (!user) {
            return res.status(401).json({ error: "Try logging in with correct email and password" });
          }
      
          const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      
          if (!isPasswordValid) {
            return res.status(401).json({ error: "Try logging in with correct email and password" });
          }
      
          const data = {
            user2: {
              id: user.id
            }
          };
          const authToken = jwt.sign(data, jwtSecret);
          return res.status(200).json({ success: true, authtoken: authToken });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ success: false });
        }
      })
      
module.exports = router