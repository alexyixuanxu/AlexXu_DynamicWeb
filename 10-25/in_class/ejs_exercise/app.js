// require and instantiate express
const app = require('express')()

// fake posts to simulate a database
const groceries = [
{store: 'Acme', list: ['strawberries', 'blueberries', 'yogurt']},
{stpre: 'Corner Martket', list: ['baguette', 'basil', 'tomatoes']}
]

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', function(req, res){
  // render `list.ejs` 
  res.render('list')
})

app.listen(8080)

console.log('listening on port 8080')