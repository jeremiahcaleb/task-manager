# Task Manager

This is a simple Task Manager application written in HTML, CSS, and JavaScript. It allows users to add tasks and remove them from a list dynamically.

## Usage

Clone the repository:

```bash
git clone https://github.com/jeremiahcaleb/task-manager.git
```

Open the `index.html` file in a web browser.

## Features

- **Add tasks:** Enter a task in the input field and click "Add Task" to add it to the list.
- **Remove tasks:** Click the "Remove" button next to a task to remove it from the list.

## Code Structure

- **Task Input:** Input field where users can enter tasks.
- **Add Task Button:** Button to add tasks to the list.
- **Task List:** List container where tasks are displayed.
- **Remove Button:** Button to remove a task from the list.

## How it Works

The Task Manager utilizes basic HTML, CSS, and JavaScript to provide functionality for adding and removing tasks dynamically. When a user enters a task and clicks "Add Task," the `addTask()` function is called, which creates a new list item (`<li>`) containing the task text and a "Remove" button. When the "Remove" button is clicked, the `removeTask()` function is called, which removes the corresponding list item from the list.

## Technologies Used

- **HTML:** Structure of the Task Manager.
- **CSS:** Styling for the Task Manager.
- **JavaScript:** Functionality for adding and removing tasks dynamically.

## Customization

This is a basic implementation and can be further extended with features like task persistence, editing, due dates, etc.
Feel free to customize the Task Manager by modifying the styles in the `styles.css` file or adding additional features to enhance its functionality.

## Contributing

Feel free to contribute to this project by:

- Suggesting enhancements or new features.
- Reporting bugs or issues.
- Creating pull requests with code improvements.
