const router = require('./auth');
const Auth = require('../model/userSchema');
const jwt = require('jsonwebtoken')
const multer = require('multer');


// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }

// })
//const upload = multer({ storage: storage }).single("testImage");

router.post('/profileimage', (req, res) => {
    // console.log(req);
    res.status(200).send("we can recieve the request but not the data from the front end properly")
    // upload(req, res, async (err) => {
    //     if (err) {
    //         console.log(err)
    //     }
    // else {
    //     console.log();
    //     const newImage = await Auth.updateOne({ firstName: "hamza" }, { $set: { image: { data: req.file.filename, contentType: 'image/png' } } });
    //     if (newImage) {
    //         res.status(202).json({ msg: "image updated successfully" })
    //     } else {
    //         res.status(500).json({ err: "some problem in uploading image" })
    //         return;
    //     }


    //     const { cookies, imageName } = req.body;
    //     console.log(imageName);

    //     const { user_id } = jwt.verify(cookies.JWT, process.env.SECURITYKEY)
    //     const addProfile = await Auth.updateOne({ _id: user_id }, { $set: { image: { data: req.file.filename, contentType: 'image/png' } } });
    //     if (addProfile) {
    //         console.log("updated", addProfile);
    //     }


    //     else {
    //         console.log("erro in updation");
    //     }
    //     res.status(202).json({ res: imageName })
    // }
    //     })


})
module.exports = router;