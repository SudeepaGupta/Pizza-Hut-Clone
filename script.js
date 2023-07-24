let buttons = document.querySelectorAll(".btn");
let delBtn = document.getElementById("btn-del");
let ordrBtn = document.getElementById("btn-order")
let inputEl = document.getElementById("delivery-input");
window.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('btn-del');
    button.classList.add('active');
});
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
delBtn.addEventListener('click', function () {
    inputEl.placeholder = "Enter your location for delivery"
})
ordrBtn.addEventListener('click', function () {
    inputEl.placeholder = "Enter your collection location"
})