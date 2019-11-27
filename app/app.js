const express = require('express')
const app = express()

// import packages
const expressSession    = require('express-session')
const bodyParser        = require('body-parser')

// import print
const print = require('./source/print/print')

// set/use packages
app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }))
app.use(expressSession({ secret: process.env.SECRET, cookie: { maxAge: null }, resave: false, saveUninitialized: false }))

// import router
const { authRouter } = require('./routes')

// use router app
app.use('/', authRouter)

// export application
module.exports = app