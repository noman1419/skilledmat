const express = require('express');
const router = require('./auth');
const jwt = require('jsonwebtoken')

router.post('/home', (req, res) => {
    const token = req.body
    const decoded = jwt.verify(token, process.env.SECURITYKEY, (err, decoded) => {
        if (err) {
            console.log("there is some error ==> ", err);
        } else {
            console.log(decoded);
        }
    })
    console.log(token);
    res.status(202).json({ message: "home page", res: decoded });
})
module.exports = router;