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

exports.sendMailToCode = (email, user_id, code) => {
        let urlCode = `https://localhost:8080/code_actived/api/${user_id}&${code}`

        mailer.sendMail({
            from: process.env.E_LOGIN,
            to: email,
            subject: msgJSON.snedCodeToEmail.subjects,
            text: msgJSON.snedCodeToEmail.message + ' SecretCodeURL: ' + urlCode
        }).catch((e) => print.error(e))
}

exports.sendMailToUnInput = (email, agent) => {
    mailer.sendMail({
        from: process.env.E_LOGIN,
        to: email,
        subject: msgJSON.unknownInput.subjects,
        text: msgJSON.unknownInput.message + agent.toString()
    }).catch((e) => print.error(e))
}