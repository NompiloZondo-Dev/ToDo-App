# ToDo-App

This is a simple and interactive To-Do List application built with Node.js, Express.js, and EJS templating engine. It allows users to add tasks, mark them as completed, and delete them. When a task is marked as complete, it get cancelled, and the trash icon allows the deletion of tasks after a confirmation dialog.

# Features

Add Tasks: Users can add new tasks to the list. Complete Tasks: Users can mark tasks as completed. When completed, a blue checkmark is displayed. Delete Tasks: Users can delete tasks, with a confirmation message to prevent accidental deletion. Responsive Design: The app is designed to work on both desktop and mobile devices. Tech Stack Backend: Node.js, Express.js Frontend: HTML, CSS, EJS (Embedded JavaScript templating) Icons: FontAwesome (for trash bin icon) Database: In-memory array (tasks are stored temporarily and will reset when the app is restarted) Installation Prerequisites Before you begin, ensure you have the following installed:

Node.js (which includes npm) Git (optional for version control) Steps to Run the App Locally Clone the repository:

bash Copy code git clone https://github.com/NompiloZondo-Dev/ToDo-App.git cd todo-app Install dependencies:

bash Copy code npm install Run the application:

bash Copy code node app.js Open your browser and go to http://localhost:3000.

Project Structure php Copy code todo-app/ │ ├── public/ # Public folder for static files like CSS, JS, and images │ └── style.css # Application CSS file ├── views/ # EJS templates for rendering HTML │ └── index.ejs # Main template for the To-Do List ├── app.js # Main Express.js application file ├── package.json # npm package manager file (dependencies & scripts) └── README.md # This readme file How It Works Adding a Task:

A user can enter the task description in the input field and click Add. The task will be added to the list and rendered dynamically on the page. Marking a Task as Completed:

Users can mark tasks as completed by clicking the checkbox. When clicked, the task text will be crossed out and a green checkmark will appear next to it. Additionally, a flower animation will appear to indicate completion. Deleting a Task:

Each task has a delete button (represented by a trash bin icon). Clicking this will prompt the user to confirm deletion with a confirmation dialog. If confirmed, the task will be removed from the list. Animation on Completion:

A simple animation (flowers popping) appears next to the task when it's marked as completed. Example Screenshots Main To-Do List Page: Displays all tasks with options to complete and delete. Task Completion Animation: A flower pops up near the task when marked as completed. Confirmation Dialog: A confirmation box appears when a user tries to delete a task. Running in Production To deploy this application in production, you can follow the below steps:

Use a production server like Heroku, DigitalOcean, or AWS to host the app. Modify your app.js to listen on the production port by setting the port dynamically: js Copy code const port = process.env.PORT || 3000; Set up environment variables and follow the hosting platform's instructions for deploying Node.js apps. Troubleshooting Error: Port 3000 already in use: If you get this error, try changing the port number in app.js:

js Copy code const port = 3001; Missing Dependencies: If some dependencies are missing, run npm install again.

App not starting: Ensure you have installed all dependencies and have Node.js running correctly.

# Future Enhancements

Persisting Data: Right now, tasks are stored in memory. In a future version, we can implement a database (like MongoDB or MySQL) to store tasks permanently. User Authentication: Add user login and session management to allow users to have their own task lists. Task Due Dates: Add functionality to set due dates for tasks and show them in the task list. License This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgements

FontAwesome for providing the beautiful icons. Express.js for the backend framework. EJS for rendering dynamic HTML.

# Contact Details
nompilozondo44@gmail.com
