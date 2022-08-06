const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();
const PostJob = require('../model/PostJobSchema');

router.post('/', async (req, res) => {
    const { user_token } = req.body.headers;
    const { user_id } = jwt.verify(user_token, process.env.SECURITYKEY)
    console.log(user_id);
    const postJob = new PostJob({ user_id, job: "this is the job description", });
    const jobPosted = await postJob.save();
    jobPosted ? console.log("job posted successfully") : console.log("some problem in posting job");
    res.send("empty")


})



module.exports = router