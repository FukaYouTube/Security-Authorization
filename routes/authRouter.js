const router = require('express').Router()

router.get('/', (req, res) => res.render('authLogin'))

router.get('/register', (req, res) => res.render('authRegister'))

module.exports = router