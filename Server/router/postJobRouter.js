const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();
const PostJob = require('../model/PostJobSchema');

router.post('/postjob', async (req, res) => {
    const { user_token } = req.body.headers;
    const { user_id } = jwt.verify(user_token, process.env.SECURITYKEY)
    const job = req.body.data.job;
    const postJob = new PostJob({ user_id, job });
    const jobPosted = await postJob.save();
    jobPosted ? console.log("job posted successfully") : console.log("some problem in posting job");
    const data = await PostJob.find({ user_id })
    console.log("this is what I found ------>", data);
    res.status(200).json({ jobs: data })
})


router.post('/displayjobs', async (req, res) => {
    const data = await PostJob.find();
    console.log("jobs that I found-------->:", data);
    res.status(200).json({ jobs: data });
})



module.exports = router