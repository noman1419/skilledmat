const mongoose = require('mongoose');

const postJobSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now(),
    }
});

const PostJob = mongoose.model('PostJobs', postJobSchema);
module.exports = PostJob;