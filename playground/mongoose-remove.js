const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({})

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findOneAndRemove()

// Todo.findOneAndRemove({_id: '59777f5f5baf669a1b15ed37'}).then((todo) => {
//   console.log(todo)
// })

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('59777f5f5baf669a1b15ed37').then((todo) => {
  console.log(todo)
})
