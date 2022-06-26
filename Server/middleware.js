const jwt = require('jsonwebtoken')
const Auth = require('./model/userSchema.js');

async function middleware(req, res, next) {
    const token = req.body.JWT;
    if (token) {
        next();
    } else {
        res.status(500).json({ err: "you are missing the fields" });
        return;
    }
}
module.exports = middleware;