const { red, yellow, green, reset } = require('./colors')
const logger = require('../logger/logger')

class Print {
    constructor(message){
        this.message = message
    }

    log(){
        let msg = `[denpo::log] ${this.message}`
        console.log(green + msg + reset)
        logger.info(msg)
    }

    warn(){
        let msg = `[denpo::warn] ${this.message}`
        console.log(yellow + msg + reset)
        logger.info(msg)
    }

    error(){
        let msg = `[denpo::error] ${this.message}`
        console.log(red + msg + reset)
        logger.info(msg)
    }
}

module.exports = Print