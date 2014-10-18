/**
 * List
 * - Holds a collection of tasks
 */
function List (element) {

    var element = element;
    var tasks   = [];

    this.addTask = function (task) {
        if (task instanceof Task && task.getText())
            tasks.push(task), this.redraw();
    }

    this.toggleTask = function (index) {
        tasks[index].toggleCompleted();
        this.redraw();
    }

    this.clearCompleted = function () {
        for (var i = tasks.length; i--;)
            if (tasks[i].isCompleted())
                tasks.splice(i, 1);

        this.redraw();
    }

    this.redraw = function () {
        var taskCount = element.childNodes.length;

        while (--taskCount)
            element.removeChild(element.childNodes[taskCount]);

        for (task in tasks) {
            var taskElement = tasks[task].asElement();
                taskElement.setAttribute('id', task);
            element.appendChild(taskElement);
        }

        this.save();
    }

    this.load = function () {
        if (window.localStorage.list) {
            var storedTasks = JSON.parse(window.localStorage.list);
            for (storedTask in storedTasks)
                this.addTask(new Task(
                    storedTasks[storedTask].text,
                    storedTasks[storedTask].completed
                ));
        }
    }

    this.save = function () {
        window.localStorage.setItem('list', JSON.stringify(tasks));
    }
}

/**
 * Task
 * - A single task
 */
function Task (text, completed) {

    var text      = text;
    var completed = completed || false;

    this.setText = function (updatedText) {
        text = updatedText;
    };

    this.getText = function () {
        return text;
    }

    this.isCompleted = function () {
        return completed;
    }

    this.toggleCompleted = function () {
        completed = !completed;
    }

    this.asElement = function () {
        var element   = document.createElement ('li')
        var innerText = document.createTextNode(text);
        var checkbox  = document.createElement ('input');
            checkbox.setAttribute('type', 'checkbox');

        if (this.isCompleted()) {
            element.setAttribute('class', 'strike');
            checkbox.setAttribute('checked', true);
        }

        element.appendChild(checkbox);
        element.appendChild(innerText);
        return element;
    }

    this.toJSON = function () {
        return {
            text: text,
            completed: completed
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {

    var elements = {
        todo:  document.getElementsByName('todo')[0],
        list:  document.getElementById('list'),
        clear: document.getElementsByTagName('sup')[0]
    }

    var todoList = new List (list);
    todoList.load();

    elements.todo.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            todoList.addTask(new Task(this.value));
            this.value = '';
        }
    });

    elements.list.addEventListener('click', function (event) {
        if (event.target instanceof HTMLInputElement)
            todoList.toggleTask(event.target.parentNode.id);

        if (event.target instanceof HTMLLIElement)
            todoList.toggleTask(event.target.id);
    });

    elements.clear.addEventListener('click', function (event) {
        todoList.clearCompleted();
    });
});
