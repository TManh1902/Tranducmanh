function showtip() {
    var sidtip = document.getElementById("sidtip");
    sidtip.style.display = "inline";
}

function hidetip() {
    var sidtip = document.getElementById("sidtip");
    sidtip.style.display = "none";
}

function init() {
    var sid = document.getElementById("sid");
    sid.onmouseover = showtip;
    sid.onmouseout = hidetip;
}
window.onload = init;
