const express = require('express');
const Auth = require('../model/userSchema');
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post('/register', async (req, res) => {
    const { firstName, lastName, userName, email, password, cpassword } = req.body;
    if (!firstName || !lastName || !userName || !email || !password || !cpassword) {
        console.log('you are missing the fields');
        res.status(500).json({ err: "you are missing the fields" });
        const result = false;
        return;
    } else {
        if (password == cpassword) {
            const userExist = await Auth.findOne({ email: email })
            if (userExist) {
                res.status(500).json({ err: "User Email Alredy Exist" });
                console.log('User Email Alredy Exist');
                const result = false;
                return;
            }

            else {
                const user = new Auth({ firstName, lastName, email, userName, password, cpassword, });
                //creat token
                const token = jwt.sign({ user_id: user._id },
                    process.env.SECURITYKEY, {
                    expiresIn: "2h",
                }
                )
                user.token = token;

                // res.cookie("jwt", token,)
                res.cookie('cookieName', token, { expires: new Date(Date.now() + 900000), httpOnly: true })
                const register = await user.save()
                if (register) {
                    res.status(202).json({ Message: "user register successfully" });
                    console.log(register);
                    return;
                }
            }

        } else {
            res.status(500).json({ err: "Password Does Not Match" });
            return;
        }

    }
})
router.post('/login', async (req, res) => {
    //getting data from the request body of post
    const { email, password } = req.body;
    //condition to check if there is any empty field
    if (!email || !password) {
        res.status(500).json({ err: "Please enter your cradidentials" })
        return;
    } else {
        const userEmail = await Auth.findOne({ email: email });
        const userPass = await Auth.findOne({ password: password })

        if (!userEmail || !userPass) {
            res.status(500).json({ err: "Email or Password incorrect" })
            return;
        } else {
            console.log(userEmail);
            const token = jwt.sign({ user_id: userEmail._id },
                process.env.SECURITYKEY, {
                expiresIn: "2h",
            }
            )
            res.cookie('cookieName', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
            res.status(202).json({ message: "User Logedin Successfully", token: token });
            return;
        }
    }
})
module.exports = router;
