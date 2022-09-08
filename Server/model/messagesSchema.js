const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    roomID: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now(),
    }
})

const Messages = mongoose.model('message', messageSchema);
module.exports = Messages;