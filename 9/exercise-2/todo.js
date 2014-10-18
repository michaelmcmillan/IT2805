/**
 * List
 * - Holds a collection of tasks
 */
function List () {

    var tasks = [];

    this.addTask = function (task) {
        if (task instanceof Task)
            tasks.push(task);
    }

    this.removeTask = function (task) {
        if (task instanceof Task)
            tasks.remove(task);
    }

    this.getTasks = function () {
        return tasks;
    }
}

/**
 * Task
 * - A single task
 */
function Task (text, due) {

    this.text      = text;
    this.due       = due;
    this.completed = false;

    this.toggleCompleted = function () {
        this.completed = !this.completed;
    }
}

var todo = new List();

todo.addTask(new Task('Lufte bikkja'));

console.log(todo);

//var task = new Task('Lufte hunden');
