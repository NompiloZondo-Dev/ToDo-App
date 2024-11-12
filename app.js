const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

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

// API route to fetch all tasks (optional if needed separately)
app.get('/api/tasks', (req, res) => {
  res.json(todos);
});

// Route to add a new To-Do item
app.post('/add', (req, res) => {
<<<<<<< HEAD
  const todoText = req.body.todoText;
  if (todoText) {
    todos.push({ text: todoText, completed: false }); // Ensure the 'text' property is added
  }
  res.redirect('/'); // Redirect to the homepage
});
=======
    const todoText = req.body.todoText;
    if (todoText) {
      todos.push({ text: todoText, completed: false });
    }
    res.redirect('/');
  });
>>>>>>> c947bdaf34e568d0663375ec0cfd90a2b5e4bfbe

// Route to mark a To-Do as completed
app.post('/complete', (req, res) => {
  const todoIndex = req.body.todoIndex;
  if (todoIndex !== undefined) {
    todos[todoIndex].completed = !todos[todoIndex].completed;
  }
  res.redirect('/'); // Redirect to the homepage
});

// Route to delete a To-Do item
app.post('/delete', (req, res) => {
  const todoIndex = req.body.todoIndex;
  if (todoIndex !== undefined) {
    todos.splice(todoIndex, 1);
  }
  res.redirect('/'); // Redirect to the homepage
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`To-Do App running on http://localhost:${port}`);
});

document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.complete-checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
      handleCompleteClick(this);
    });
  });
});

// Handle the completion click and trigger flower animation
function handleCompleteClick(checkbox) {
  const row = checkbox.closest('tr'); // Get the row of the clicked checkbox
  const flower = document.createElement('div');
  flower.classList.add('flower-pop');
  row.appendChild(flower);

  // Position the flower at the location of the checkbox
  const checkboxRect = checkbox.getBoundingClientRect();
  flower.style.left = `${checkboxRect.left + window.scrollX}px`;
  flower.style.top = `${checkboxRect.top + window.scrollY - 10}px`;

  // Remove flower after animation is done
  setTimeout(() => {
    flower.remove();
  }, 1000);
}

