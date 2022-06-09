const express = require('express');
const dotenv = require('dotenv')
const router = require('./router/auth')
const homeRoot = require('./router/homeRouter')
const profileRoot = require('./router/profile')
const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config('./env');
const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(cors())
require('./db/conn')
app.use('/', router)
app.use('/home', homeRoot)
app.use('/profile', homeRoot)



const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

