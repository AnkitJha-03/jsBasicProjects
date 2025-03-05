const panel = document.querySelector(".panel-container")
const ratingsContainer = document.querySelector(".rating-container");
const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
let selectedRating;

ratingsContainer.addEventListener("click", e=>{
    if(e.target.parentNode.classList.contains("rating")) {
        console.log(e.target);
        if (e.target.classList.contains("rating")) {
            selectedRating = e.target.querySelector("small").innerText; 
        } 
        else if (e.target.parentNode.classList.contains("rating")) {
            selectedRating = e.target.parentNode.querySelector("small").innerText;
        }

        removActives();
        e.target.parentNode.classList.add("active");
    }
})

btn.addEventListener("click", ()=>{
    panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You</strong>
        <br>
        <strong>Feedback : ${selectedRating}</strong>
    `
})

function removActives() {
    ratings.forEach((rating) => {
        rating.classList.remove("active");
    })
}