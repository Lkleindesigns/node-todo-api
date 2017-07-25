var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://lklein:test123@ds043981.mlab.com:43981/node-todo-api' || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose}
