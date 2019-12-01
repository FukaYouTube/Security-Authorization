const { red, yellow, green, reset } = require('./colors')
const logger = require('../logger/logger')

function log(message){
    let msg = `[denpo::log] ${message}`
    console.log(green + msg + reset)
    logger.info(msg)
}

function warn(message){
    let msg = `[denpo::warn] ${message}`
    console.log(yellow + msg + reset)
    logger.info(msg)
}

function error(message){
    let msg = `[denpo::error] ${message}`
    console.log(red + msg + reset)
    logger.info(msg)
}

module.exports = { log, warn, error }