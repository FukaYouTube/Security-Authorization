const router = require('express').Router()
const { loginPost, registerPost } = require('../service/authService')

router.get('/', (req, res) => res.render('authLogin'))
router.post('/', (req, res) => loginPost(req, res))

router.get('/register', (req, res) => res.render('authRegister', { log: undefined }))
router.post('/register', (req, res) => registerPost(req, res))

module.exports = router