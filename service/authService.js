const fs = require('fs')
const bcrypt = require('bcrypt')

const rx = require('./regexService')
const mail = require('./mailService')
const print = require('../source/print/print')

const { User } = require('../models')

let log = JSON.parse(fs.readFileSync('source/jsonlog.json', 'utf8'))

exports.loginPost = async (req, res) => {
    const { username, password } = req.body

    let user = await User.findOne({ username })
    let errors = []

    // rules
    if(!user){
        errors.push({ type: 'error', msg: log['2user'] })
    }else{
        let comparePass = await bcrypt.compareSync(password, user.password)
        if(!comparePass){ errors.push({ type: 'error', msg: log['2password'] }) }
    }

    if(errors.length > 0){
        res.render('authLogin', { log: errors })
    }else{
        !user.code ? res.status(200).send('ok') : res.status(200).send('ok, not actived code!')
    }
}

exports.registerPost = async (req, res) => {
    const { username, first_name, email, password } = req.body

    let user = await User.findOne({ $or: [{ username }, { email }] })
    let errors = []

    // rules
    if(rx.usernameRx.test(username) || rx.first_nameRx.test(first_name)){
        errors.push({ type: 'error', msg: log.username_and_first_name })
    }
    if(username.length < 4 || first_name.length < 4 || password[0].length < 8){
        errors.push({ type: 'error', msg: log.length })
    }
    if(password[0] != password[1]){
        errors.push({ type: 'error', msg: log['1password'] })
    }
    if(user){
        errors.push({ type: 'error', msg: log['1user'] })
    }

    // send error or success process
    if(errors.length > 0){
        res.render('authRegister', { log: errors })
    }else{
        let hash = await bcrypt.hash(password[0] || password[1], 14)

        try{
            let code = Math.floor(10000000000 + Math.random() * 90000000000) // 11

            user = new User({ username, first_name, email, password: hash, code })
            user.save()
            
            mail.sendMail('active/send code to email', email, user._id, code)

            res.status(200).send('ok, not actived code!')
        }catch(e){
            print.error(e)
            res.status(500).send('Errors 500')
        }
    }
}

exports.getApiRequestCode = async (req, res) => {
    let user = await User.findById(req.params.userId)
    if(user.code == req.params.code){
        user.code = null
        user.save()

        res.redirect('/')
    }else{
        res.send('Error invalide code')
    }
}