function show() {
    var tooltip = document.getElementById("sidTip");
    tooltip.style.display = "inline";
}

function hide() {
    var tooltip = document.getElementById("sidTip");
    tooltip.style.display = "none";
}

function init() {
    var user = document.getElementById("user");
    user.addEventListener("mouseover", show);
    user.addEventListener("mouseout", hide);
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
});

const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

window.onload = init;