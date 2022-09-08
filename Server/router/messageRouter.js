const express = require('express');
const router = express.Router();
const Message = require('../model/messagesSchema')
const Auth = require('../model/userSchema')
router.post('/message', async (req, res) => {
    const insert = new Message({ message: "hello everyBody", roomID: '123' })
    const saved = await insert.save();
    if (saved) {
        console.log("Message saved successfully");
    } else {
        console.log("problem in saving messages");
    }
    console.log('Message api is getting requests');
    res.send("done")
})
router.get('/messagelist', async (req, res) => {
    const data = await Auth.find();
    res.status(200).json({ data })
})
module.exports = router;