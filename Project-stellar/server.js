//checking if we are running in the production environment or not.
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//importing/initialzing express from the express library we installed from npm.
const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

//indexRouter will let our app to use our index in controllers.
const indexRouter = require('./controllers/index')

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

//Using our indexRouter. (Basically our app will export information from our index file in controllers)
app.use('/', indexRouter)

//Telling our app to listen to our localhost:3000 
app.listen(process.env.PORT || 3000)

