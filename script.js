function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var dueDateInput = document.getElementById("dueDate");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.classList.add("task-item");
        var priority = prioritySelect.value;
        var dueDate = dueDateInput.value ? new Date(dueDateInput.value) : null;
        var formattedDate = dueDate ? `${dueDate.getDate().toString().padStart(2, '0')}-${(dueDate.getMonth() + 1).toString().padStart(2, '0')}-${dueDate.getFullYear()}` : '';
        li.innerHTML = `
            <span class="task-content task-content-editable" onclick="editTask(this)">${taskInput.value}</span>
            <span class="task-priority priority-${priority}">${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
            <span class="task-due-date">${formattedDate}</span>
            <button class="remove-btn" onclick="removeTask(this)">Remove</button>
            <button class="complete-btn" onclick="completeTask(this)">Complete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        prioritySelect.value = "high";
        dueDateInput.value = "";
        sortTasks();
    }
}

function removeTask(button) {
    var li = button.parentElement;
    li.parentElement.removeChild(li);
}

function completeTask(button) {
    var taskContent = button.parentElement.querySelector('.task-content');
    taskContent.classList.toggle('task-completed');
    if (button.classList.contains('complete-btn')) {
        button.classList.remove('complete-btn');
        button.classList.add('incomplete-btn');
        button.textContent = 'Incomplete';
    } else {
        button.classList.remove('incomplete-btn');
        button.classList.add('complete-btn');
        button.textContent = 'Complete';
    }
}

function sortTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = Array.from(taskList.children);
    tasks.sort(function(a, b) {
        var priorityA = a.querySelector('.task-priority').textContent.toLowerCase();
        var priorityB = b.querySelector('.task-priority').textContent.toLowerCase();
        if (priorityA !== priorityB) {
            return priorityA.localeCompare(priorityB);
        } else {
            var dateA = new Date(a.querySelector('.task-due-date').textContent);
            var dateB = new Date(b.querySelector('.task-due-date').textContent);
            return dateA - dateB;
        }
    });
    tasks.forEach(function(task) {
        taskList.appendChild(task);
    });
}

function editTask(span) {
    var currentValue = span.textContent;
    var newValue = prompt("Edit Task:", currentValue);
    if (newValue !== null && newValue.trim() !== "") {
        span.textContent = newValue;
    }
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
