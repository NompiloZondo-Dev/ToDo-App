const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse POST request data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// In-memory data storage for To-Do items
let todos = [];

// Home route - Display To-Do List
app.get('/', (req, res) => {
    console.log(todos); // Log the todos array to check if it has the expected data
    res.render('index', { todos });
  });

// Route to add a new To-Do item
app.post('/add', (req, res) => {
    const todoText = req.body.todoText;
    if (todoText) {
      todos.push({ text: todoText, completed: false }); // Ensure the 'text' property is added
    }
    res.redirect('/');
  });

// Route to mark a To-Do as completed
app.post('/complete', (req, res) => {
  const todoIndex = req.body.todoIndex;
  if (todoIndex !== undefined) {
    todos[todoIndex].completed = !todos[todoIndex].completed;
  }
  res.redirect('/');
});

// Route to delete a To-Do item
app.post('/delete', (req, res) => {
  const todoIndex = req.body.todoIndex;
  if (todoIndex !== undefined) {
    todos.splice(todoIndex, 1);
  }
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`To-Do App running on http://localhost:${port}`);
});

app.use(express.static('public'));
