const express = require('express');
const router = express.Router();
const Post = require('../model/postSchema')
const multer = require('multer');
const jwt = require('jsonwebtoken')
const Auth = require('../model/userSchema')
const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storyImages');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: storage })


router.post('/poststory', upload.array('images', 4), async (req, res) => {
    const { text, user_token } = req.body;
    console.log("token is ==>", user_token);
    const { user_id } = jwt.verify(user_token, process.env.SECURITYKEY)
    console.log("User Id from the toke ===> ", user_id);
    const user = await Auth.findOne({ _id: user_id })
    console.log("user for the ID is", user)
    const { name, image } = user;
    if (req.files === undefined) {
        console.log("image path is not define");
        var images = undefined;
    } else {
        const imagesArray = req.files;
        var images = [];
        imagesArray.map((val) => {
            images.push(val.filename);
        })
    }

    console.log(images);
    const postStory = new Post({ user_id, text, image: images, userName: name, profileImage: image, });
    const postStoryDone = await postStory.save();
    if (postStoryDone) {
        console.log("story posted successfluuy");
    } else {

        console.log("something is wrong in posting the story");
    }
    res.send("story posted")
})

router.get('/displaystory', async (req, res) => {
    const { user_token } = req.headers;
    const { user_id } = jwt.verify(user_token, process.env.SECURITYKEY);
    const data = await Post.find();
    console.log(data);
    console.log("********************************************************8")
    res.status(200).json({ data, user_id })
})


router.delete('/deletestory', async (req, res) => {
    const { delete_id } = req.headers;
    console.log(delete_id);
    await Post.deleteOne({ _id: delete_id })
})

router.post('/updatelikes', async (req, res) => {
    const { likes, post_id, likersID, push } = req.body;
    console.log(req.body)
    if (push) {
        var updatedData = await Post.updateOne({ _id: post_id }, { $set: { likes: likes, }, $push: { likersID: likersID } })
            .then(console.log("updated successfully")).catch(() => { console.log("couldn't update"); })
    } else {
        var updatedData = await Post.updateOne({ _id: post_id }, { $set: { likes: likes, }, $pull: { likersID: likersID } })
            .then(console.log("updated successfully")).catch(() => { console.log("couldn't update"); })
    }
    console.log(updatedData);

    res.send("done really well");
})
module.exports = router;
