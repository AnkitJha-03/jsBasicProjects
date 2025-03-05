let result = document.querySelector(".result");
let btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let op = document.querySelector("#op").value;

    switch(op) {
        case "plus":
            result.innerHTML = +num1 + +num2;
            break;
        case "minus":
            result.innerHTML = +num1 - +num2;
            break;
        case "multiply":
            result.innerHTML = +num1 * +num2;
            break;
        case "divide":
            result.innerHTML = +num1 / +num2;
            break;
    }
})