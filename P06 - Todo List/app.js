let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

form.addEventListener("submit", e => {
    e.preventDefault();
    let value = input.value;
    if(!value.trim()) return;

    // appending logic :
    let todo = document.createElement("div");

    let textEl = document.createElement("span");
    textEl.innerHTML = value;

    let closeEl = document.createElement("span");
    closeEl.innerHTML = "&times;";
    closeEl.classList.add("delete");

    todo.appendChild(textEl);
    todo.appendChild(closeEl);
    
    closeEl.addEventListener("click", ()=>{
        todos.removeChild(todo);
    })

    todos.appendChild(todo);
    todo.classList.add("todo");

    input.value = "";
})