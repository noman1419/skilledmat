const express = require('express');
const Auth = require('../model/userSchema');

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
                const register = await user.save()
                if (register) {
                    const result = true;
                    res.status(202).json({ Message: "you are missing the fields" });
                    console.log("user register successfully");
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
            res.status(202).json({ message: "User Logedin Successfully" });
            return;
        }
    }
})
module.exports = router;
