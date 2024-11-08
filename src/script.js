// boutons des sections de form
let boutonSuivant1 = document.querySelector(".bouton1");
let boutonSuivant2 = document.querySelector(".bouton2");
let boutonSuivant3 = document.querySelector(".bouton3");
let boutonSuivant4 = document.querySelector(".bouton4");
let boutonSuivant5 = document.querySelector(".bouton5");
let boutonSuivant6 = document.querySelector(".bouton6");
let boutonSuivant7 = document.querySelector(".bouton7");
let boutonSuivant8 = document.querySelector(".bouton8");

// queryselector de chaque section
let section_cv1 = document.querySelector(".section-cv1");
let section_cv2 = document.querySelector(".section-cv2");
let section_cv3 = document.querySelector(".section-cv3");
let section_cv4 = document.querySelector(".section-cv4");
let section_cv5 = document.querySelector(".section-cv5");
let section_cv6 = document.querySelector(".section-cv6");
let section_cv7 = document.querySelector(".section-cv7");
let section_cv8 = document.querySelector(".section-cv8");
let section_cv9 = document.querySelector(".section-cv9");



function nextSection2() {
        section_cv1.style.display = "none";
        section_cv2.style.display = "block";

}
function nextSection3() {
    section_cv2.style.display = "none";
    section_cv3.style.display = "block";
}
function nextSection4() {
    section_cv3.style.display = "none";
    section_cv4.style.display = "block";
}
function nextSection5() {
    section_cv4.style.display = "none";
    section_cv5.style.display = "block";
}
function nextSection6() {
    section_cv5.style.display = "none";
    section_cv6.style.display = "block";
}
function nextSection7() {
    section_cv6.style.display = "none";
    section_cv7.style.display = "block";
}
function nextSection8() {
    section_cv7.style.display = "none";
    section_cv8.style.display = "block";
}
function nextSection9() {
    section_cv8.style.display = "none";
    section_cv9.style.display = "block";
}

if (boutonSuivant1) {
    boutonSuivant1.addEventListener("click", nextSection2);
}
if (boutonSuivant2) {
    boutonSuivant2.addEventListener("click", nextSection3);
}
if (boutonSuivant3) {
    boutonSuivant3.addEventListener("click", nextSection4);
}
if (boutonSuivant4) {
    boutonSuivant4.addEventListener("click", nextSection5);
}
if (boutonSuivant5) {
    boutonSuivant5.addEventListener("click", nextSection6);
}
if (boutonSuivant6) {
    boutonSuivant6.addEventListener("click", nextSection7);
}
if (boutonSuivant7) {
    boutonSuivant7.addEventListener("click", nextSection8);
}
if (boutonSuivant8) {
    boutonSuivant8.addEventListener("click", nextSection9);
}
