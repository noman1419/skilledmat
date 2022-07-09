const router = require('./auth');
const Auth = require('../model/userSchema');
const Portfolio = require('../model/portfolioSchema');
const jwt = require('jsonwebtoken')
const middleware = require('../middleware');
const multer = require('multer');

router.get('/myportfolio', async (req, res) => {
    const token = req.headers.token;

    const { user_id } = jwt.verify(token, process.env.SECURITYKEY)
    const userInfo = await Portfolio.findOne({ portfolio_id: user_id })
    if (userInfo) {
        res.status(200).json({ message: "it is okh dear on my portfolios" })
        return;
    }
    else {
        res.status(500).json({ error: "portfolio not found" });
        return;
    }

})

module.exports = router;