# Task Manager

This is a simple Task Manager application written in HTML, CSS, and JavaScript. It allows users to add, remove, edit, and mark tasks as complete or incomplete.

## Usage

Clone the repository:

```bash
git clone https://github.com/jeremiahcaleb/task-manager.git
```

Open the `index.html` file in a web browser.

## Features

- **Add tasks:** Enter a task in the input field, select priority, and choose a due date, then click "Add Task" to add it to the list.
- **Remove tasks:** Click the "Remove" button next to a task to remove it from the list.
- **Edit tasks:** Click on a task name to edit its content.
- **Mark tasks as complete/incomplete:** Click the "Complete" button to mark a task as complete, and click it again to mark it as incomplete.
- **Sort tasks:** Tasks are sorted by priority and due date automatically.

## Code Structure

- **Task Input:** Input field where users can enter tasks.
- **Priority Select:** Dropdown menu to select task priority.
- **Due Date Input:** Date picker to select task due date.
- **Add Task Button:** Button to add tasks to the list.
- **Task List:** List container where tasks are displayed.
- **Remove Button:** Button to remove a task from the list.
- **Complete/Incomplete Button:** Button to mark a task as complete or incomplete.

## How it Works

The Task Manager utilizes HTML, CSS, and JavaScript to provide functionality for adding, removing, editing, and marking tasks dynamically. When a user enters a task, selects priority and due date, and clicks "Add Task," the `addTask()` function is called, which creates a new list item (`<li>`) containing the task details and buttons for removing and marking the task as complete. When the "Remove" button is clicked, the `removeTask()` function is called to remove the corresponding list item from the list. Similarly, the `completeTask()` function is called to mark a task as complete, and the `editTask()` function is called to edit a task's content.

## Technologies Used

- **HTML:** Structure of the Task Manager.
- **CSS:** Styling for the Task Manager.
- **JavaScript:** Functionality for adding, removing, editing, and marking tasks dynamically.

## Customization

This Task Manager is a basic implementation and can be further extended with additional features such as task persistence, due dates, reminders, user authentication, etc. Feel free to customize the Task Manager by modifying the styles in the `styles.css` file or adding new features to enhance its functionality.

## Contributing

Contributions to this project are welcome. You can contribute by:

- Suggesting enhancements or new features.
- Reporting bugs or issues.
- Creating pull requests with code improvements.
