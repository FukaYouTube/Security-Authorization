const fs = require('fs')
const rx = require('./regexService')

const { User } = require('../models')

exports.loginPost = async (req, res) => {
}

exports.registerPost = async (req, res) => {
    const { username, first_name, email, password } = req.body

    let log = JSON.parse(fs.readFileSync('source/jsonlog.json', 'utf8'))
    let user = await User.findOne({ $or: [{ username }, { email }] })
    let errors = []

    // rules
    if(rx.usernameRx.test(username) || rx.first_nameRx.test(first_name)){
        errors.push({ type: 'error', msg: log.username_and_first_name })
    }
    if(username.length < 4 || first_name.length < 4 || password[0].length < 8){
        errors.push({ type: 'error', msg: log.length })
    }
    if(password[0] !== password[1]){
        errors.push({ type: 'error', msg: log['1password'] })
    }
    if(user){
        errors.push({ type: 'error', msg: log['1user'] })
    }

    if(errors.length > 0){
        res.render('authRegister', { log: errors })
    }
}