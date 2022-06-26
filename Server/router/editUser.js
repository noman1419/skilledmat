const router = require('./auth');
const Auth = require('../model/userSchema');
const jwt = require('jsonwebtoken');

// const middleware = require('../middleware');
// const multer = require('multer');

router.post('/edituser', async (req, res) => {
    const token = req.body.cookies.JWT;
    const { firstName, lastName, userName } = req.body.val;

    const { user_id } = jwt.verify(token, process.env.SECURITYKEY)
    const saved = await Auth.updateOne({ _id: user_id }, { $set: { firstName, lastName, userName } });
    if (saved) {
        console.log("user data updated");
    } else {
        console.log("data did not updated successfully");
    }
    res.json({ res: "data updated successfully" })
})
module.exports = router;