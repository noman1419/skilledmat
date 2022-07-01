const router = require('./auth');
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

module.exports = router;