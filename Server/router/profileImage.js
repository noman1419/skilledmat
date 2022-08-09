const express = require('express');
const router = express.Router();
const Auth = require('../model/userSchema');
const jwt = require('jsonwebtoken')
const multer = require('multer');
const Post = require('../model/postSchema')


var fileName = null
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
        fileName = Date.now() + '-' + file.originalname
    }
})

var upload = multer({ storage: storage }).single('file')


router.post('/', upload, async (req, res) => {
    const token = req.headers.token;
    const { user_id } = jwt.verify(token, process.env.SECURITYKEY,)

    const updateimageTODATABAS = await Auth.updateOne({ _id: user_id }, { $set: { image: req.file.filename } });
    await Post.updateMany({ user_id: user_id }, { $set: { profileImage: req.file.filename } })
    if (updateimageTODATABAS) {
        console.log(updateimageTODATABAS);
    } else {
        console.log("insert faild" + updateimageTODATABAS);
    }
    return res.status(200).send(req.file)
})

//})
module.exports = router;