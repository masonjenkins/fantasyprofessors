const mongoose = require('mongoose')

const schema = mongoose.Schema 

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    membership: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    passwordHash: { type: String, required: true}
})

module.exports = mongoose.model('User', userSchema)