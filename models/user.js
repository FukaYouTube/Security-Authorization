const { Schema } = require('mongoose')

let user = new Schema({
    username:   String,
    first_name: String,
    email:      String,
    password:   String,

    date:       { type: Date, default: Date.now }
})

module.exports = user