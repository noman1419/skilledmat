const express = require('express');
const dotenv = require('dotenv')
const router = require('./router/auth')
const homeRouts = require('./router/homeRouter')
const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config('./env');
const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(cors())
require('./db/conn')
app.use('/', router)
app.use('/home', homeRouts)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

