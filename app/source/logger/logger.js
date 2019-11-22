const path      = require('path')
const bunyan    = require('bunyan')

let log = bunyan.createLogger({
    name: 'myapp',
    streams: [{
        level: 'info',
        path: path.resolve(__dirname, ' logger.json')
    }]
})

module.exports = log