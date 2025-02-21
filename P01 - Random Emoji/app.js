const btn = document.querySelector("#emoji");

const emojis = ["😊","🤣","😍","😘","😁","😉","😎","😆","😜","😢","😃","😒","🤔"];

btn.addEventListener("mouseover", () => {
    btn.innerText = emojis[Math.floor(Math.random()*emojis.length)];
});