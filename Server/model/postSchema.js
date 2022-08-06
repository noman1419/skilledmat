const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String
    },
    userName: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    text: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
    }],
    likes: {
        type: Number,
        default: 0,
    }
})

const Post = mongoose.model('posts', postSchema);

module.exports = Post;

