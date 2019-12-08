const router = require('express').Router()
const { loginPost, registerPost, getApiRequestCode } = require('../service/authService')

router.get('/', (req, res) => res.render('authLogin', { log: undefined }))
router.post('/', (req, res) => loginPost(req, res))

router.get('/register', (req, res) => res.render('authRegister', { log: undefined }))
router.post('/register', (req, res) => registerPost(req, res))

router.get('/code_actived/api/:userId&:code', (req, res) => getApiRequestCode(req, res))

module.exports = router