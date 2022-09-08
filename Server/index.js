const express = require('express');
const dotenv = require('dotenv')
const authRoot = require('./router/auth')
const homeRoot = require('./router/homeRouter')
const profileRoot = require('./router/profile')
const profileImage = require('./router/profileImage')
const EditUserRoot = require('./router/editUser')
const createPortfolioRoot = require('./router/createPortfolio')
const myPortfolioRoot = require('./router/myPortfolio')
const postStoryRoot = require('./router/postStory')
const postJobRoot = require('./router/postJobRouter')
const messageRouter = require('./router/messageRouter')
const { Server } = require("socket.io");
const http = require("http");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const searchRoot = require('./router/search')
dotenv.config('./env');
const app = express();
const server = http.createServer(app);
app.use(cookieParser());
app.use(express.json())
app.use(cors())
require('./db/conn')
app.use('/', authRoot)
app.use('/home', homeRoot)
app.use('/', profileRoot)
app.use('/edituser', EditUserRoot)
app.use('/profileimage', profileImage)
app.use('/createportfolio', createPortfolioRoot)
app.use('/myportfolio', myPortfolioRoot)
app.use('/', postStoryRoot)
app.use('/', postJobRoot)
app.use('/search', searchRoot)
app.use('/', messageRouter)



app.use('/uploads', express.static('uploads'));
app.use('/storyImages', express.static('storyImages'));
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
// server.listen(PORT, () => console.log(`server is running on ${PORT}`));

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//     },
// });


// io.on("connection", (socket) => {
//     console.log(`User Connected: ${socket.id}`);
//     socket.on('joinRoom', (data) => {
//         console.log(`${data.data}joined room`);
//         socket.join(data.data)

//     })
//     socket.on('sendMessage', (data) => {
//         console.log(`${data.message}`);
//         console.log('this is the room ID:', data.id);
//         const room = data.id
//         const message = data.message;
//         socket.broadcast.to(room).emit("reseveMessage", { message })
//     })
//     socket.on("disconnect", () => {
//         console.log("User Disconnected", socket.id);
//     });
// })