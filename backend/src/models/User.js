const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: String,
  //name: String,
  //age: Number,
  //activate: Boolean,
})

module.exports = mongoose.model('User', UserSchema)