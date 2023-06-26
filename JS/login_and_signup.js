let anima_D = document.getElementById("D");
let anima_I = document.getElementById("I");
let anima_E = document.getElementById("E");
let anima_T = document.getElementById("T");
let anima_X = document.getElementById("X");

anima_D.addEventListener("animationend", D_end, false);
anima_I.addEventListener("animationend", I_end, false);
anima_E.addEventListener("animationend", E_end, false);
anima_T.addEventListener("animationend", T_end, false);
anima_X.addEventListener("animationend", X_end, false);

function D_end() {
    anima_D.classList.remove('opacity');
}
function I_end() {

    anima_I.classList.remove('opacity');
}
function E_end() {
    anima_E.classList.remove('opacity');
}
function T_end() {
    anima_T.classList.remove('opacity');
}
function X_end() {
    anima_X.classList.remove('opacity');
}

let button = document.querySelector('.button_style_3');

// Agregar un event listener al botón
button.addEventListener('click', redirectToIndex);

// Función que redirige a la página principal
function redirectToIndex() {
    window.location.href = "../Index.html";
}

