// boutons des sections de form
let boutonSuivant1 = document.querySelector(".bouton1");
let boutonSuivant2 = document.querySelector(".bouton2");
let boutonSuivant3 = document.querySelector(".bouton3");
let boutonSuivant4 = document.querySelector(".bouton4");
let boutonSuivant5 = document.querySelector(".bouton5");
let boutonSuivant6 = document.querySelector(".bouton6");
let boutonSuivant7 = document.querySelector(".bouton7");
let boutonSuivant8 = document.querySelector(".bouton8");
let boutonPlus = document.querySelector(".boutonPlus")
let buttonPlusSoft = document.querySelector(".buttonPlusSoft")
let boutonSubmit = document.querySelector(".boutonSubmit")



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





function changeIcon(sectionIndex) {

    let icons = document.querySelectorAll('.progress-item i');
    
    if (icons[sectionIndex - 1]) {  
        icons[sectionIndex - 1].classList.remove('fa-spinner');  
        icons[sectionIndex - 1].classList.add('fa-check');
    }
}

// les fonctions de change de section de form et barre de progress
function nextSection2() {
        section_cv1.style.display = "none";
        section_cv2.style.display = "block";
        changeIcon(1)
}
function nextSection3() {
    section_cv2.style.display = "none";
    section_cv3.style.display = "block";
    changeIcon(2)
}
function nextSection4() {
    section_cv3.style.display = "none";
    section_cv4.style.display = "block";
    changeIcon(3)
}
function nextSection5() {
    section_cv4.style.display = "none";
    section_cv5.style.display = "block";
    changeIcon(4)
}
function nextSection6() {
    section_cv5.style.display = "none";
    section_cv6.style.display = "block";
    changeIcon(5)
}
function nextSection7() {
    section_cv6.style.display = "none";
    section_cv7.style.display = "block";
    changeIcon(6)
}
function nextSection8() {
    section_cv7.style.display = "none";
    section_cv8.style.display = "block";
    changeIcon(7)
}
function nextSection9() {
    section_cv8.style.display = "none";
    section_cv9.style.display = "block";
    changeIcon(8)
}

// onclick de chaque bouton
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

// boutonPlus.addEventListener("click",()=> {
//     let divCompetence = document.querySelector(".InputCompetence")
//     divCompetence.innerHTML=''
    
//     let competence = document.createElement('div')
//     competence.innerHTML= `
//         <input type="text" id="nom" name="nom" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre compétence...">
//     `
//     divCompetence.appendChild(competence)
// });
boutonPlus.addEventListener('click', function() {
    let divCompetence = document.querySelector(".form-element1");
        let competence = document.createElement('div');
        competence.classList.add('form-element', 'flex', 'flex-col', 'w-full');
        competence.innerHTML = `
            <label for="nom" class="text-sm font-medium text-gray-700">Compétence:</label>
            <input type="text" id="nom" name="nom" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre compétence...">
        `;
        divCompetence.appendChild(competence);

});
buttonPlusSoft.addEventListener('click', function() {
    let divCompetence = document.querySelector(".form-element2");
        let competence = document.createElement('div');
        competence.classList.add('form-element', 'flex', 'flex-col', 'w-full');
        competence.innerHTML = `
            <label for="nom" class="text-sm font-medium text-gray-700">Compétence:</label>
            <input type="text" id="nom" name="nom" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre soft skill...">
        `;
        divCompetence.appendChild(competence);

});

boutonSubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    let nom0 = document.querySelector("#nom0")
    console.log(nom0.value);
    
})