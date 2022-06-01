const express = require('express');
const Auth = require('../model/userSchema');

const router = express.Router()

router.post('/register', async (req, res) => {
    const { firstName, lastName, userName, email, password, cpassword } = req.body;

    if (!firstName || !lastName || !userName || !email || !password || !cpassword) {
        console.log('you are missing the fields');
        return;
    } else {
        const userExist = await Auth.findOne({ email: email })
        if (userExist) {
            res.send('User Email Alredy Exist')
            return;
        }
        else {
            const user = new Auth({ firstName, lastName, email, userName, password, cpassword, });
            const register = await user.save()
            if (register) {
                res.send("user register successfully")
                return;
            }
        }
    }
})

router.post('/login', async (req, res) => {
    //getting data from the request body of post
    const { email, password } = req.body;
    //condition to check if there is any empty field
    if (!email || !password) {
        res.json({ error: "Please enter your cradidentials" })
        return;
    } else {
        const userEmail = await Auth.findOne({ email: email });
        const userPass = await Auth.findOne({ password: password })

        if (!userEmail || !userPass) {
            res.send("Email or Password incorrect")
            return;
        } else {
            console.log(userEmail);
            res.send("User Logedin Successfully");
            return;
        }
    }
})
module.exports = router;
