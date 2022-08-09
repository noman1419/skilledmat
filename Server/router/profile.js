const express = require('express');
const router = express.Router();
const Auth = require('../model/userSchema');
const jwt = require('jsonwebtoken')
const middleware = require('../middleware');
const multer = require('multer');

router.post('/profile', middleware, async (req, res) => {
    const token = req.body.JWT;
    const { user_id } = jwt.verify(token, process.env.SECURITYKEY)
    const userInfo = await Auth.findOne({ _id: user_id })
    res.status(202).json({ res: userInfo })
})


router.post('/userprofile', async (req, res) => {
    console.log(req.body);
    const { userId, token } = req.body
    const { user_id } = jwt.verify(token, process.env.SECURITYKEY)
    const userInfo = await Auth.findOne({ _id: userId })
    console.log(userInfo);
    if (userId === user_id) {
        console.log("equal");
        res.status(202).json({ res: userInfo, owner: true })
    } else {
        res.status(202).json({ res: userInfo, owner: false })
        console.log("not equal");
    }
    //res.send("hello")
})

module.exports = router;