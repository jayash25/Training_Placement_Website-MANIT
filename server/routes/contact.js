// const Authcontext = require('../../src/components/context/auth/authcontext')
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// ROUTE 1: Send Query message
router.post('/',[
    body('name',"Name must have a length of at least 3 characters").isLength({min: 3}),
    body('email',"Enter a valid email").isEmail(),
    body('message',"Message can't be blank").isLength({min: 1})
] , async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const query = await Query.create({
        name: name,
        message: message,
        email: email
    })
      res.json({msg:`Message Sent Successfully from ${email}`});
    } catch (error) {
      req.status(500).json({error:"Some Internal Server Error !!"});
    }
})

module.exports = router
