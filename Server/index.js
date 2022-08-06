const express = require('express');
const dotenv = require('dotenv')
const router = require('./router/auth')
const homeRoot = require('./router/homeRouter')
const profileRoot = require('./router/profile')
const profileImage = require('./router/profileImage')
const EditUserRoot = require('./router/editUser')
const createPortfolioRoot = require('./router/createPortfolio')
const myPortfolioRoot = require('./router/myPortfolio')
const postStoryRoot = require('./router/postStory')
const postJobRoot = require('./router/postJobRouter')
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
app.use('/edituser', EditUserRoot)
app.use('/profileimage', profileImage)
app.use('/createportfolio', createPortfolioRoot)
app.use('/myportfolio', myPortfolioRoot)
app.use('/', postStoryRoot)
app.use('/postjob', postJobRoot)



app.use('/uploads', express.static('uploads'));
app.use('/storyImages', express.static('storyImages'));
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

