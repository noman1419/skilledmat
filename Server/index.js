const express = require('express');
const dotenv = require('dotenv')
const router = require('./router/auth')
const cors = require('cors');
dotenv.config('./env');
const app = express();
app.use(express.json())
app.use(cors())
require('./db/conn')
app.use('/', router)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

