// import express
const express = require('express')
const app = express()

// import packages
const expressSession    = require('express-session')
const bodyParser        = require('body-parser')

// use
app.set('trust proxy', true)
app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }))
app.use(expressSession({ secret: process.env.SECRET, cookie: { maxAge: null }, resave: false, saveUninitialized: false }))

// import routers
const { authRouter } = require('./routes')

// use routers
app.use('/', authRouter)

// not found 404
app.use((req, res, next) => {
    res.status(404).render('404', { url: req.originalUrl })
})

module.exports = app