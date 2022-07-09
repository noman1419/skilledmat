const mongoose = require('mongoose');
const DB = process.env.DB
mongoose.connect(DB).then(() => console.log('Connection Successfully ')).catch((error) => console.log(error));