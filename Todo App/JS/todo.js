var obj = { "name": "John", "age": 30, "city": "New York" };
var myJSON = JSON.stringify(obj);
document.getElementById("demo1").innerHTML = myJSON;

var obj2 = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
document.getElementById("demo2").innerHTML = obj2.name;

// set an item to local storage
localStorage.setItem("lastname", "Smith");
// retrieve it back and post on document
document.getElementById("demo3").innerHTML = localStorage.getItem("lastname");

//


function add() {
    var task = document.getElementById("task").value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    return false;
}

//
function show() {
    var todos = get_todos();
    var html = "<ul>";
    for (var i = 0; i < todos.length; i++) {
        html += "<li>" + todos[i] + "<button class='remove' data-id='" + i + "'>x</button></li>";
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    // Add click event listener to each 'x' button
    var removeButtons = document.getElementsByClassName("remove");
    for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", function (event) {
            var index = event.target.getAttribute("data-id");
            remove(index);
        });
    }
}

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem("todo");
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
document.getElementById('add').addEventListener('click', add);
show();
