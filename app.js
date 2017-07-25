const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express')

const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function(req, res) {
  // TODO write your code here
  const data = {
    dones: [{ done: 'Learn Node basics' }, { done: 'Learn Express basics' }, { done: 'Learn Mustache' }],
    todos: [
      { task: 'Learn HTML forms with Express' },
      { task: 'Learn about authentication' },
      { task: 'Learn how to connect to PostgreSQL' },
      { task: 'Learn how to create databases' },
      { task: 'Learn SQL' },
      { task: 'Learn how to connect to PostgreSQL from Node' },
      { task: 'Learn how to use Sequelize' }
    ]
  }
  res.render('todo', data)
})

app.listen(3000, function() {
  console.log('Successfully started express application!')
})
