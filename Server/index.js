const express = require('express');
const dotenv = require('dotenv')
const router = require('./router/auth')
dotenv.config('./env');
const app = express();
app.use(express.json())
require('./db/conn')
app.use('/', router)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

