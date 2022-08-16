const express = require('express');
const router = express.Router();
const Auth = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const middleware = require('../middleware');



router.post('/', middleware, async (req, res) => {
    const token = req.body
    const { user_id } = jwt.verify(token.JWT, process.env.SECURITYKEY);
    // console.log(user_id);
    const user = await Auth.findOne({ _id: user_id })
    // console.log(user);
    res.status(202).json({ message: "home page", res: user });
})
module.exports = router;

