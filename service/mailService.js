const nodemailer = require('nodemailer')
const fs = require('fs')

const print = require('../source/print/print')

let mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.E_LOGIN,
        pass: process.env.E_PASS
    }
})

let msgJSON = JSON.parse(fs.readFileSync('source/messages.json', 'utf8'))

exports.sendMail = (type = '', email) => {
    switch(type){
        case 'active/send code to email':
            mailer.sendMail({
                from: process.env.E_LOGIN,
                to: email,
                subject: msgJSON.snedCodeToEmail.subjects,
                text: msgJSON.snedCodeToEmail.message
            }).catch((e) => print.error(e))
        break
    }
}