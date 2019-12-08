const { Schema } = require('mongoose')

let user = new Schema({
    username:   { type: String, required: true },
    first_name: { type: String, required: true },
    email:      { type: String, required: true },
    password:   { type: String, required: true },

    code:       Number,

    date:       { type: Date, default: Date.now }
})

module.exports = user