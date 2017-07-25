var mongoose = require('mongoose')

mongoose.Promise = global.Promise
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://lklein:test123@ds043981.mlab.com:43981/node-todo-api'
}
mongoose.connect(db.mlab || db.localhost)

module.exports = {mongoose}
