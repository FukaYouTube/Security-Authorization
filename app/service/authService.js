// data base users
const { User } = require('../model')

// import packages
const fs = require('fs')
const inputRegex = require('../source/regex/inputRegex')

exports.loginPost = async (req, res) => {
    const { username, password } = req.body
}

exports.registerPost = async (req, res) => {
    const { username, first_name, email, password } = req.body
    
    let JSONErrors = JSON.parse(fs.readFileSync('app/source/logMessage/error.json'))

    let errors = []
    
    if(!inputRegex.username[username]){
        errors.push({ type: 'error', msg: JSONErrors['1err_input'] })
    }

    if(errors.length > 0){
        res.json(errors).send()
    }else{
        
    }
}