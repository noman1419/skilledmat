const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    portfolio_id: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    field: {
        type: String,
        required: true,
    },
    skills: [{ type: String, }],
    education: [
        {
            school: {
                type: String,
            },
            course: {
                type: String
            }
        }
    ]
})

const portfolio = mongoose.model('portfolio', portfolioSchema);

module.exports = portfolio;