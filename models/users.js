var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
  name: String,
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  about: String,
})

module.exports = mongoose.model('User', UserSchema);