const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let clr = btn.value.toLowerCase();
        body.className = ""; // important
        body.classList.add(clr);
    })
})