const colors = require('./colors')
const logger = require('../logger/logger')

class Print {
    constructor(message){
        this.msgLog = `[denpo:log] ${message}`
        this.msgWarn = `[denpo:warn] ${message}`
        this.msgError = `[denpo:error] ${message}`
    }

    log(){
        logger.info('log', this.msgLog)
        return console.log(colors.green + this.msgLog + colors.reset)
    }
    warn(){
        logger.info('warn', this.msgWarn)
        return console.log(colors.yellow + this.msgWarn + colors.reset)
    }
    error(){
        logger.info('error', this.msgError)
        return console.log(colors.red + this.msgError + colors.reset)
    }
}

module.exports = Print