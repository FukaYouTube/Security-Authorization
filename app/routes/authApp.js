const app = require('express').Router()
const authService = require('../service/authService')

// log-in
app.get('/', (req, res) => res.render('authLogin'))
app.post('/', (req, res) => authService.loginPost(req, res))

// register
app.get('/register', (req, res) => res.render('authRegister'))
app.post('/register', (req, res) => authService.registerPost(req, res))

// export auth routers
module.exports = app