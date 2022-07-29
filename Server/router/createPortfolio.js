const express = require('express')
const router = express.Router()
const portfolio = require('../model/portfolioSchema')
const JWT = require('jsonwebtoken')
router.post('/', async (req, res) => {
    const { token, data, skills, education } = req.body;
    const { user_id } = JWT.verify(token, process.env.SECURITYKEY)
    const portfolioData = await portfolio({ ...data, portfolio_id: user_id, skills, education });
    const portfolioDone = portfolioData.save();
    portfolioDone ? console.log("true") : console.log("false");
    res.send(data)
})

module.exports = router;