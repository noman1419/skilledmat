const express = require('express');
const router = express.Router();
const Post = require('../model/postSchema')
const multer = require('multer');

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
router.post('/', upload.single('image'), async (req, res) => {
    const text = req.body.text;
    const postStory = new Post({ user_id: '123', text, image: req.file.filename, likes: 10 });
    console.log(req);
    const postStoryDone = await postStory.save();
    if (postStoryDone) {
        console.log("story posted successfluuy");
    } else {
        console.log("something is wrong in posting the story");
    }
    res.send("story posted")
})

module.exports = router;
