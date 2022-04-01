//checking if we are running in the production environment or not.
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//importing/initialzing express from the express library we installed from npm.
const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const io = require("socket.io")(4000, {
    cors: {
        origin: ["http://localhost:3000"]
    }
});

// indexRouter will let our app to use our index in controllers.
// const indexRouter = require('./controllers/index')

// https://www.youtube.com/watch?v=7CqJlxBYj-M
const cors = require('cors');
app.use(cors());
app.use(express.json());

const usersRouter = require('./controllers/users');
app.use('/users', usersRouter)
////////////////////////////////////////////

//hooking up the quetions and answers to the database
const questionsRouter = require('./controllers/questions');
app.use('/questions', questionsRouter)

//Configuring our app 
app.set('view engine', 'ejs')
//Where our views will be coming from (from the views folder) (views folder is for our server render views)
app.set('views', __dirname + '/views')
//This will hook up our expressLayouts and store our html headers and footers in the layout folder
app.set('layout', 'layouts/layout')
//Tell our app we want to use expressLayouts
app.use(expressLayouts)
//telling our app that the folder public is where we will be storing all of our ex: JavaScript, images 
app.use(express.static('public'))


//integrating mongoDB
const mongoose = require('mongoose')
//connection for our datebase from .env file for our URL (to avoid hardcoding our URL)
mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser: true})

//below, db will just let us know if we are connected to Mongoose or not.
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


let allRooms = {};
let allClients = {};

//Socket.IO Integration
io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(allClients.length)


    socket.on("new-player", (room, lobbyID) => {
        socket.join(room)
        allClients[socket.id] = lobbyID
        allRooms[socket.id] = room
        console.log("new-player")
        console.log(room); 
        socket.to(room).emit("update-players", room)
    })
    socket.on("status-update", (room) => {
        console.log("status-update")
        console.log(room); 
        socket.to(room).emit("status-update", room)
    })

    socket.on("disconnecting", () => {
        console.log("disconnecting")
    })
    socket.on("disconnect", () => {
        let room = allRooms[socket.id]
        let lobbyID = allClients[socket.id]
        console.log("disconnecttttttt")
        console.log(room)
        console.log(allClients[socket.id])
        socket.to(room).emit("user-left", room, lobbyID)
        // socket.to(room).emit("update-players", room)
        // socket.to(room).emit("status-update", room)
    })
    socket.on("message-sent", (msg, room, name) => {
        console.log("message-sent: " + name + " " + msg)
        socket.to(room).emit("message-broadcast", msg, room, name)
    })
});
  



//Using our indexRouter. (Basically our app will export information from our index file in controllers)
const gameBrowserRouter = require('./controllers/game-browser.js')
app.use('/game-browser', gameBrowserRouter)

//Telling our app to listen to our localhost:3000 
app.listen(process.env.PORT || 5000)

