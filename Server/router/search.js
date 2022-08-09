const express = require('express');
const router = express.Router();
const Auth = require('../model/userSchema')
router.post('', async (req, res) => {
    const { name, email, city, field } = req.body;
    const data = await Auth.find({
        $or: [
            { name: name },
            { email: email }
        ]
    })
    console.log(data);
    res.status(200).json({ data })
})

module.exports = router;