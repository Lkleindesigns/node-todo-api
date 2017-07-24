const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var uid = '5973902f93ed2cce17f6e270'
// var id = '597514d7db3de574120bba8211'

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by id', todo)
// }).catch((e) => console.log(e))

User.findById(uid).then((user) => {
  if (!user) {
    return console.log('User not found')
  }
  console.log('User by user id', user)
}).catch((e) => console.log(e))

// User.findById('5973902f93ed2cce17f6e270').then((user) => {
//   if (!user) {
//     return console.log('Unable to find user')
//   }

//   console.log(JSON.stringify(user, undefined, 2))
// }, (e) => {
//   console.log(e)
// })
