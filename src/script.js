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
let boutonLangue = document.querySelector(".boutonLangue")
let boutonPlusLoisirs = document.querySelector(".boutonPlusLoisirs")
let boutonPlusDiplome = document.querySelector(".boutonPlusDiplome")
let boutonPlusExperience = document.querySelector(".boutonPlusExperience")
let boutonPlusCertificat = document.querySelector(".boutonPlusCertificat")

let cv_classic = document.querySelector(".cv-classic-div")


// inputs du formulaire

let nom = document.querySelector("#nom0")
let prenom = document.querySelector("#prenom")
let photo = document.querySelector("#photo00")
let adresse = document.querySelector("#adresse")
let telephone = document.querySelector("#telephone")
let email = document.querySelector("#email")
let linkedin = document.querySelector("#linkedin")
let github = document.querySelector("#github")
let profil = document.querySelector("#profil")
let resume = document.querySelector("#resume")

// arrays du objet du formulaire

let arrCompetence = []
let arrCompetenceSoft = []
let arrLoisir = []
let arrLangue = []
let arrDiplome = []
let arrCertificat = []
let arrExperience = []
function x(){
    for (let i = 0; i < arrLangue.length; i++) {
        console.log(arrLangue[0].niveau);  
    }
}


// onclick des sections de progress bar
let progress_bar = document.querySelector(".progress-bar")
let progress_item1 = document.querySelector(".progress-item1")
let progress_item2 = document.querySelector(".progress-item2") 
let progress_item3 = document.querySelector(".progress-item3") 
let progress_item4 = document.querySelector(".progress-item4") 
let progress_item5 = document.querySelector(".progress-item5") 
let progress_item6 = document.querySelector(".progress-item6") 
let progress_item7 = document.querySelector(".progress-item7") 
let progress_item8 = document.querySelector(".progress-item8") 
let progress_item9 = document.querySelector(".progress-item9")  

progress_item1.addEventListener("click", ()=>{

    if (section_cv2.style.display === "block") {
        section_cv2.style.display = "none";
        section_cv1.style.display = "block";
    }
    else if (section_cv3.style.display === "block") {
        section_cv3.style.display = "none";
        section_cv1.style.display = "block";
    }
    else if (section_cv4.style.display === "block") {
        section_cv4.style.display = "none";
        section_cv1.style.display = "block";
    }
    else if (section_cv5.style.display === "block") {
        section_cv5.style.display = "none";
        section_cv1.style.display = "block";
    }
    else if (section_cv6.style.display === "block") {
        section_cv6.style.display = "none";
        section_cv1.style.display = "block";
    }
    else if (section_cv7.style.display === "block") {
        section_cv7.style.display = "none";
        section_cv1.style.display = "block";
    }
    else if (section_cv8.style.display === "block") {
        section_cv8.style.display = "none";
        section_cv1.style.display = "block";
    }
    else if (section_cv9.style.display === "block") {
        section_cv9.style.display = "none";
        section_cv1.style.display = "block";
    }


})
progress_item2.addEventListener("click", ()=>{


    if (section_cv3.style.display === "block") {
        section_cv3.style.display = "none";
        section_cv2.style.display = "block";
    }
    else if (section_cv4.style.display === "block") {
        section_cv4.style.display = "none";
        section_cv12style.display = "block";
    }
    else if (section_cv5.style.display === "block") {
        section_cv5.style.display = "none";
        section_cv2.style.display = "block";
    }
    else if (section_cv6.style.display === "block") {
        section_cv6.style.display = "none";
        section_cv2.style.display = "block";
    }
    else if (section_cv7.style.display === "block") {
        section_cv7.style.display = "none";
        section_cv2.style.display = "block";
    }
    else if (section_cv8.style.display === "block") {
        section_cv8.style.display = "none";
        section_cv2.style.display = "block";
    }
    else if (section_cv9.style.display === "block") {
        section_cv9.style.display = "none";
        section_cv2.style.display = "block";
    }


})
progress_item3.addEventListener("click", ()=>{


    if (section_cv4.style.display === "block") {
        section_cv4.style.display = "none";
        section_cv3.style.display = "block";
    }
    else if (section_cv5.style.display === "block") {
        section_cv5.style.display = "none";
        section_cv3.style.display = "block";
    }
    else if (section_cv6.style.display === "block") {
        section_cv6.style.display = "none";
        section_cv3.style.display = "block";
    }
    else if (section_cv7.style.display === "block") {
        section_cv7.style.display = "none";
        section_cv3.style.display = "block";
    }
    else if (section_cv8.style.display === "block") {
        section_cv8.style.display = "none";
        section_cv3.style.display = "block";
    }
    else if (section_cv9.style.display === "block") {
        section_cv9.style.display = "none";
        section_cv3.style.display = "block";
    }


})

progress_item4.addEventListener("click", ()=>{


    if (section_cv5.style.display === "block") {
        section_cv5.style.display = "none";
        section_cv4.style.display = "block";
    }
    else if (section_cv6.style.display === "block") {
        section_cv6.style.display = "none";
        section_cv4.style.display = "block";
    }
    else if (section_cv7.style.display === "block") {
        section_cv7.style.display = "none";
        section_cv4.style.display = "block";
    }
    else if (section_cv8.style.display === "block") {
        section_cv8.style.display = "none";
        section_cv4.style.display = "block";
    }
    else if (section_cv9.style.display === "block") {
        section_cv9.style.display = "none";
        section_cv4.style.display = "block";
    }


})

progress_item5.addEventListener("click", ()=>{


    if (section_cv6.style.display === "block") {
        section_cv6.style.display = "none";
        section_cv5.style.display = "block";
    }
    else if (section_cv7.style.display === "block") {
        section_cv7.style.display = "none";
        section_cv5.style.display = "block";
    }
    else if (section_cv8.style.display === "block") {
        section_cv8.style.display = "none";
        section_cv5.style.display = "block";
    }
    else if (section_cv9.style.display === "block") {
        section_cv9.style.display = "none";
        section_cv5.style.display = "block";
    }


})

progress_item6.addEventListener("click", ()=>{


    if (section_cv7.style.display === "block") {
        section_cv7.style.display = "none";
        section_cv6.style.display = "block";
    }
    else if (section_cv8.style.display === "block") {
        section_cv8.style.display = "none";
        section_cv6.style.display = "block";
    }
    else if (section_cv9.style.display === "block") {
        section_cv9.style.display = "none";
        section_cv6.style.display = "block";
    }


})

progress_item7.addEventListener("click", ()=>{


    if (section_cv8.style.display === "block") {
        section_cv8.style.display = "none";
        section_cv7.style.display = "block";
    }
    else if (section_cv9.style.display === "block") {
        section_cv9.style.display = "none";
        section_cv7.style.display = "block";
    }


})

progress_item8.addEventListener("click", ()=>{


    if (section_cv9.style.display === "block") {
        section_cv9.style.display = "none";
        section_cv8.style.display = "block";
    }


})


// let competenceForm = document.querySelector(".competence-form ")
// let competenceFormSoft = document.querySelector(".competence-soft-form ")

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


// document.getElementById("prenom11").addEventListener('input', checkFormInputs);

 // if (!emailRegex.test(email)) {
        //     document.getElementById("emailError").innerHTML = "Veuillez entrer un email valide.";
        //     boutonSuivant1.disabled = false;
        // }
              


//---------boutton 1  suivant disabled-----
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function checkFormInputs() {

    let isFormValid = true;


    // document.getElementById("nomError").innerHTML = "";
    // document.getElementById("prenomError").innerHTML = "";
    // document.getElementById("emailError0").innerHTML = "";


    if (!nom.value) {
        document.getElementById("nomError").innerHTML = "Veuillez entrer un nom valide.";
        isFormValid = false;
    }

    if (!prenom.value) {
        document.getElementById("prenomError").innerHTML = "Veuillez entrer un prénom valide.";
        isFormValid = false;
    }

    if (!photo.value) {
        document.getElementById("photoError").innerHTML = "Veuillez télécharger une photo.";
        isFormValid = false;
    }

    if (!adresse.value) {
        document.getElementById("adresseError").innerHTML = "Veuillez entrer une adresse.";
        isFormValid = false;
    }

    if (!telephone.value) {
        document.getElementById("telephoneError").innerHTML = "Veuillez entrer un numéro de téléphone.";
        isFormValid = false;
    }

    if (!linkedin.value) {
        document.getElementById("linkedinError").innerHTML = "Veuillez entrer un profil LinkedIn.";
        isFormValid = false;
    }

    if (!github.value) {
        document.getElementById("githubError").innerHTML = "Veuillez entrer un profil GitHub.";
        isFormValid = false;
    }


    if (!email.value) {
        document.getElementById("emailError0").innerHTML = "Veuillez entrer un email.";
        isFormValid = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById("emailError0").innerHTML = "Veuillez entrer un email valide.";
        isFormValid = false;
    }


    if (isFormValid) {
        boutonSuivant1.disabled = false;
    } else {
        boutonSuivant1.disabled = true;
    }
}

nom.addEventListener('input', checkFormInputs);
prenom.addEventListener('input', checkFormInputs);
photo.addEventListener('input', checkFormInputs);
adresse.addEventListener('input', checkFormInputs);
telephone.addEventListener('input', checkFormInputs);
email.addEventListener('input', checkFormInputs);
linkedin.addEventListener('input', checkFormInputs);
github.addEventListener('input', checkFormInputs);

function checkFormInputs2() {
    let isFormValid = true;
    if (!profil.value) {
        document.getElementById("profilError0").innerHTML = "Veuillez entrer un profil valide.";
        isFormValid = false;
    }
    else if (!resume.value) {
        document.getElementById("resumeError").innerHTML = "Veuillez entrer un profil valide.";
        isFormValid = false;
    } else if (resume.value.length > 60) {
        document.getElementById("resumeError").innerHTML = "Le résumé ne doit pas dépasser 30 caractères.";
        isFormValid = false;
    }
    if (isFormValid) {
        boutonSuivant2.disabled = false;
    } else {
        boutonSuivant2.disabled = true;
    }
}

profil.addEventListener('input', checkFormInputs2);
resume.addEventListener('input', checkFormInputs2);

// function checkFormInputs2() { 
//     let isFormValid = true;
//     for

// }


// onclick de chaque bouton
if (boutonSuivant1) {

   
    boutonSuivant1.addEventListener("click",()=>{
            
        

        nextSection2();
         
        });
}

if (boutonSuivant2) {
    boutonSuivant2.addEventListener("click", nextSection3);
}

if (boutonSuivant3) {
    boutonSuivant3.addEventListener("click", () => { 
        let competenceInputs = document.querySelectorAll(".competence-input");
        let allFilled = true;  

        competenceInputs.forEach((input) => {
            if (input.value.trim() === "") {
                allFilled = false; 
                input.style.borderColor = "red";  
            } else {
                input.style.borderColor = "";  
                arrCompetence.push(input); 
            }
        });

        if (allFilled) {
            console.log("Tous les champs sont remplis", arrCompetence);
            nextSection4();  
        } else {
            console.log("Certains champs sont vides.");

        }
    });
}

if (boutonSuivant4) {
    boutonSuivant4.addEventListener("click", () => { 
        let competenceInputs1 = document.querySelectorAll(".competence-soft-input");
        let allFilled = true;  

        competenceInputs1.forEach((input) => {
            if (input.value.trim() === "") {
                allFilled = false;  
                input.style.borderColor = "red";  
            } else {
                input.style.borderColor = "";  
                arrCompetenceSoft.push(input);  
            }
        });

        if (allFilled) {
            console.log("Tous les champs sont remplis", arrCompetenceSoft);
            nextSection5();  
        } else {
            console.log("Certains champs sont vides.");

        }
    });
}


if (boutonSuivant5) {
    boutonSuivant5.addEventListener("click", ()=>{
                if( recuperationLangue()){
                    nextSection6();
                }
                
       
        // for (let i = 0; i < arrLangue.length; i++) {
        // console.log(arrLangue[i].lnague);
                    
        // }
        

    });
}

if (boutonSuivant6) {
    boutonSuivant6.addEventListener("click",()=>{

        var inputs = document.querySelectorAll('#nom_loisir');
        // inputs.forEach(function(input) { arrLoisir.push(input.value); console.log((input.value));
        // });
        let allFilled = true;
        inputs.forEach((input) => {
            if(input.value.trim() === ""){
                allFilled = false
                input.style.borderColor = "red"
            }
            else{
                input.style.borderColor = ""
                arrLoisir.push(input.value)
            }
        });

        if(allFilled){
            nextSection7(); 
        }
        

    });
}

if (boutonSuivant7) {
    boutonSuivant7.addEventListener("click", ()=>{
        if(recuperationDiplome()){
            nextSection8();  
        }
        

        for (let i = 0; i < arrDiplome.length; i++) {
            console.log(arrDiplome[i]);
                        
            }

      
    });
}

if (boutonSuivant8) {
    boutonSuivant8.addEventListener("click",()=>{
        if(recuperationExperience() ){
            nextSection9(); 
        }
        
        for (let i = 0; i < arrExperience.length; i++) {
            console.log(arrExperience[i]);
                        
            }

       
    });
}

if(boutonSubmit){
    boutonSubmit.addEventListener("click",()=>{
        if(recuperationCertificat()){
            
        
        

        changeIcon(9)
        section_cv9.style.display = "none";
        let classic = document.querySelector(".cv-bouttons")
    
      classic.style.display = "block";
      cv_classic.style.display = "block";

      

      // affichage des info perso
      let infoPerso = document.querySelector(".infoPerso")
        let infoNom = document.querySelector(".infoNom")
        infoNom.innerHTML=`${objetGlobal.nom.value} ${objetGlobal.prenom.value}`
        let InfoProfil = document.querySelector(".InfoProfil")
        InfoProfil.innerHTML= `${objetGlobal.profil.value} `
        // let infoDesc = document.querySelector(".infoDesc")
        // infoDesc.innerHTML=`${objetGlobal.resume.value} `
        let descc = document.createElement('p')
        descc.classList.add('text-sm','text-gray-500','w-[310px]')
        descc.innerHTML=`${objetGlobal.resume.value}`
        infoPerso.appendChild(descc)

        // email
        let persoContact= document.querySelector(".persoContact")
        let emailto1 = document.createElement("div")
        emailto1.classList.add( 'justify-center', 'mt-4','space-x-6', 'w-[400px]')
        emailto1.innerHTML=` 
             <p class="ml-1"> ${objetGlobal.adresse.value}</p>
             <a href="mailto:${objetGlobal.email.value}" class="InfoEmail text-blue-500">${objetGlobal.email.value}</a>
             <a href="${objetGlobal.telephone.value}" class="text-blue-500">${objetGlobal.telephone.value}</a>
             <a href="${objetGlobal.linkedin.value}<" class="text-blue-500" target="_blank">Linkedin</a>
             <a href="${objetGlobal.github.value}<" class="text-blue-500" target="_blank">Github</a>
        `
        persoContact.appendChild(emailto1)
        let img = document.querySelector("#photo00").files[0];
        let imgURL = URL.createObjectURL(img);
        let InfoPhoto= document.querySelector(".InfoPhoto")
        let photo0 = document.createElement('div')
        photo0.classList.add('w-28')
        photo0.innerHTML=`
        <img class="w-28 h-28 rounded-full" src="${imgURL}" alt="Photo de profil">
        `
        InfoPhoto.appendChild(photo0)


      // affichage des competences technique
      let competences= document.querySelector(".competences")
      for (let i = 0; i < arrCompetence.length; i++) {
        var comp = document.createElement('li')
        comp.innerText=`${arrCompetence[i].value}`
        competences.appendChild(comp)
      }
      // affichage des soft skills
      let competencesSoft= document.querySelector(".competences-soft")
      for (let i = 0; i < arrCompetenceSoft.length; i++) {
        var comp = document.createElement('li')
        comp.innerText=`${arrCompetenceSoft[i].value}`
        competencesSoft.appendChild(comp)
      }
      // affichage des certificats
      let certificats= document.querySelector(".certificats")
      for (let i = 0; i < arrCertificat.length; i++) {
        var comp = document.createElement('li')
        comp.innerText=`${arrCertificat[i].certificat} chez : ${arrCertificat[i].lieu}`
        certificats.appendChild(comp)
      }

      // affichage des langues
      let langues= document.querySelector(".langues")
      for (let i = 0; i < arrLangue.length; i++) {
        var comp = document.createElement('li')
        comp.innerText=`${arrLangue[i].langue} : ${arrLangue[i].niveau}`
        langues.appendChild(comp)
      }


      // affichage des loisirs
     let loisirs= document.querySelector(".loisirs")
     for (let i = 0; i < arrLoisir.length; i++) {
      var comp = document.createElement('li')
      comp.innerText=`${arrLoisir[i]}`
      loisirs.appendChild(comp)
    }

     // affichage des diplomes
     let diplomes= document.querySelector(".diplomes")
     for (let i = 0; i < arrDiplome.length; i++) {
      var comp = document.createElement('p')
      comp.classList.add('font-semibold')
      comp.innerText=`${arrDiplome[i].dateDebut.slice(0, 4)} - ${arrDiplome[i].dateFin.slice(0, 4)} : ${arrDiplome[i].diplome} `
      diplomes.appendChild(comp)
      var comp = document.createElement('p')
      comp.classList.add('text-gray-600')
      comp.innerText=`${arrDiplome[i].universite} `
      diplomes.appendChild(comp)
    }

     // affichage des experiences
     let experiences= document.querySelector(".experiences")
     for (let i = 0; i < arrExperience.length; i++) {
      var comp = document.createElement('p')
      comp.classList.add('font-semibold')
      comp.innerText=`${arrExperience[i].dateDebutExp.slice(0, 4)} - ${arrExperience[i].dateFinExp.slice(0, 4)} : ${arrExperience[i].experience} `
      experiences.appendChild(comp)
      var comp = document.createElement('p')
      comp.classList.add('text-gray-600')
      comp.innerText=`${arrExperience[i].entreprise} `
      experiences.appendChild(comp)
    }

}})
    
}


boutonPlus.addEventListener('click', function() {
    let divCompetence = document.querySelector(".form-element1");
        let competence = document.createElement('div');
        competence.classList.add('form-element1', 'flex','flex-col', 'w-full');
        competence.innerHTML = `

           
            <label for="nom" class="text-sm font-medium text-gray-700">Compétence:</label>
                <div class="InputCompetence flex items-center space-x-2">
                <input type="text" id="nom" name="nom" class="competence-input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre compétence...">
                
                <button type="button" onclick="deleteCompetence(this)" class="px-4 py-3 bg-red-600 text-white rounded-md" >
                -
                </button>
            </div>

        `;
        divCompetence.appendChild(competence);

});


// fonction de supprimer div
function deleteCompetence(button){
    let competenceDiv = button.closest('.form-element1');
    
    if (competenceDiv) {
        competenceDiv.remove();
    }
}

buttonPlusSoft.addEventListener('click', function() {
    let divCompetence = document.querySelector(".form-element2");
        let competence = document.createElement('div');
        competence.classList.add('form-element2', 'flex', 'flex-col', 'w-full');
        competence.innerHTML = `
            <label for="nom" class="text-sm font-medium text-gray-700">Compétence:</label>
            <div class="InputCompetence flex items-center space-x-2">
            <input type="text" id="nom" name="nom" class="competence-soft-input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre soft skill...">
            <button type="button" onclick="deleteCompetenceSoft(this)" class="px-4 py-3 bg-red-600 text-white rounded-md" >
                -
                </button>
            </div>
            `;
        divCompetence.appendChild(competence);

});

function deleteCompetenceSoft(button){
    let competenceDiv = button.closest('.form-element2');
    
    if (competenceDiv) {
        competenceDiv.remove();
    }
}



boutonLangue.addEventListener("click",()=>{
    ajouterLangue();
})

boutonPlusDiplome.addEventListener("click", ()=>{
    let divDiplome = document.querySelector(".form-element7")
    let diplome = document.createElement("div")
    diplome.classList.add('form-element7','flex','flex-col','space-y-2','mb-4')
    diplome.innerHTML=`
        <div class="flex space-x-4">
            <div class="flex-1">
                <label for="diplome" class="text-sm font-medium text-gray-700">Nom du Diplôme</label>
                <input type="text" name="diplome" class="inputDiplome w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom du diplôme">
            </div>

            <div class="flex-1">
                <label for="universite" class="text-sm font-medium text-gray-700">Université</label>
                <input type="text" name="universite" class="inputUniversite w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom de l'université">
            </div>
        </div>

        <div class="flex space-x-4">
            <div class="flex-1">
                <label for="date_debut" class="text-sm font-medium text-gray-700">Date de début</label>
                <input type="date" name="date_debut" class="inputdateDebut w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div class="flex-1">
                <label for="date_fin" class="text-sm font-medium text-gray-700">Date de fin</label>
                <input type="date" name="date_fin" class="inputdateFin w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
        </div>
        <button type="button" onclick="deleteDiplome(this)" class="px-4 py-3 bg-red-600 h-[45px] w-[50px] mt-[10px] text-white rounded-md" >
            -
        </button>
    `
    divDiplome.appendChild(diplome);

})
// fonction de supprimer div
function deleteDiplome(button){
    let competenceDiv = button.closest('.form-element7');
    
    if (competenceDiv) {
        competenceDiv.remove();
    }
}


boutonPlusExperience.addEventListener("click",()=>{
    let divExperience = document.querySelector(".form-element8")
    let experience = document.createElement("div")
    experience.classList.add('form-element8','flex','flex-col','space-y-2','mb-4')
    experience.innerHTML=`
         <div class="flex space-x-4">
            <div class="flex-1">
                <label for="diplome" class="text-sm font-medium text-gray-700">Nom du Poste</label>
                <input type="text" id="diplome" name="diplome" class="inputExperience w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom du diplôme">
            </div>
                                    

            <div class="flex-1">
                <label for="universite" class="text-sm font-medium text-gray-700">Entreprise</label>
                <input type="text" id="universite" name="universite" class="inputEntreprise w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom de l'université">
            </div>
        </div>
                        

        <div class="flex space-x-4">

            <div class="flex-1">
                <label for="date_debut" class="text-sm font-medium text-gray-700">Date de début</label>
                <input type="date" id="date_debut" name="date_debut" class="inputdateDebutExp w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>


            <div class="flex-1">
                <label for="date_fin" class="text-sm font-medium text-gray-700">Date de fin</label>
                <input type="date" id="date_fin" name="date_fin" class="inputdateFinExp w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
        </div>
        <button type="button" onclick="deleteExperience(this)" class="px-4 py-3 bg-red-600 h-[45px] w-[50px] mt-[10px] text-white rounded-md" >
            -
        </button>
    `
    divExperience.appendChild(experience);
})

// fonction de supprimer div
function deleteExperience(button){
    let competenceDiv = button.closest('.form-element8');
    
    if (competenceDiv) {
        competenceDiv.remove();
    }
}


boutonPlusCertificat.addEventListener("click", ()=>{
    let divCertificat = document.querySelector(".form-element9")
    let certificat = document.createElement('div')
    certificat.classList.add('form-element9','flex','flex-col','w-full')
    certificat.innerHTML=`
    <div class="flex space-x-4">
        <div class="flex-1">
            <label for="certificat_nom" class="text-sm font-medium text-gray-700">Nom du certificat</label>
            <input type="text" id="certificat_nom" name="certificat_nom" class="inputCertificat w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom du certificat">
        </div>

        <div class="flex-1">
            <label for="certificat_lieu" class="text-sm font-medium text-gray-700">Lieu d'obtention</label>
            <input type="text" id="certificat_lieu" name="certificat_lieu" class="inputCertificatlieu w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le lieu d'obtention">
        </div>
        <button type="button" onclick="deleteCertificat(this)" class="px-4 py-3 bg-red-600 h-[50px] mt-[10px] text-white rounded-md" >
            -
        </button>
    `
    divCertificat.appendChild(certificat)
})

// fonction de supprimer div
function deleteCertificat(button){
    let competenceDiv = button.closest('.form-element9');
    
    if (competenceDiv) {
        competenceDiv.remove();
    }
}


// fonction d'ajouter et supprimer element loisir
boutonPlusLoisirs.addEventListener("click", ()=>{

    var template = document.getElementById('field-template');
    var clone = template.content.cloneNode(true);
    document.getElementById('dynamic-fields').appendChild(clone);
})

function deleteLoisir(button){
    let competenceDiv = button.closest('.form-element4');
    
    if (competenceDiv) {
        competenceDiv.remove();
    }
}



// fonction d'ajouter et supprimer element langue
function ajouterLangue() {
    

    var template = document.getElementById('field-template-langue');
    var clone = template.content.cloneNode(true);
    document.getElementById('dynamic-fields-langue').appendChild(clone);
}

function deleteLangue(button){
    let competenceDiv = button.closest('.form-element3');
    
    if (competenceDiv) {
        competenceDiv.remove();
    }
}



let objetGlobal = {
    nom : nom,
    prenom : prenom,
    photo : photo,
    adresse: adresse,
    telephone : telephone,
    email : email,
    linkedin : linkedin,
    github : github,
    profil : profil,
    resume : resume,
    competence : arrCompetence,
    competenceSoft : arrCompetenceSoft,
    loisir : arrLoisir,
    langue : arrLangue,
    diplome : arrDiplome,
    experience :arrExperience,
    certificat : arrCertificat
}


function recuperationLangue() {
    let input_langue = document.querySelectorAll(".langueInputs");
    let select_langue = document.querySelectorAll(".Select-langue");
    let allFilled = true; 

    for (let i = 0; i < input_langue.length; i++) {
        if (input_langue[i].value.trim() === "" || select_langue[i].value === "") {
            allFilled = false; 
            input_langue[i].style.borderColor = "red";
            select_langue[i].style.borderColor = "red";
        } else {
            
            input_langue[i].style.borderColor = "";
            select_langue[i].style.borderColor = "";

   
            let objetLangue = {
                langue: input_langue[i].value,
                niveau: select_langue[i].value
            };
            arrLangue.push(objetLangue);
        }
    }


    return allFilled;
}

function recuperationDiplome(){
    let inputDiplome = document.querySelectorAll(".inputDiplome")
    let inputUniversite = document.querySelectorAll(".inputUniversite")
    let inputdateDebut = document.querySelectorAll(".inputdateDebut")
    let inputdateFin = document.querySelectorAll(".inputdateFin")
    let allFilled = true; 

    for (let i = 0; i < inputDiplome.length; i++) {
        if (inputDiplome[i].value.trim() === "" || inputUniversite[i].value === "" || inputdateDebut[i].value.trim() === "" || inputdateFin[i].value === "") {
            allFilled = false; 
            inputDiplome[i].style.borderColor= "red"
            inputUniversite[i].style.borderColor= "red"
            inputdateDebut[i].style.borderColor= "red"
            inputdateFin[i].style.borderColor= "red"
        }
        else{
            inputDiplome[i].style.borderColor= ""
            inputUniversite[i].style.borderColor= ""
            inputdateDebut[i].style.borderColor= ""
            inputdateFin[i].style.borderColor= ""

            let dateDebut = new Date(inputdateDebut[i].value);
            let dateFin = new Date(inputdateFin[i].value);

            if (dateFin < dateDebut) {
                allFilled = false;
                inputdateDebut[i].style.borderColor = "red";
                inputdateFin[i].style.borderColor = "red";
            } else {
                let objetDiplome = {
                    diplome: inputDiplome[i].value,
                    universite: inputUniversite[i].value,
                    dateDebut: inputdateDebut[i].value,
                    dateFin: inputdateFin[i].value
                };
            arrDiplome.push(objetDiplome)
        }}
        
    }
    return allFilled;

}

function recuperationExperience(){
    let inputExperience = document.querySelectorAll(".inputExperience")
    let inputEntreprise = document.querySelectorAll(".inputEntreprise")
    let inputdateDebutExp = document.querySelectorAll(".inputdateDebutExp")
    let inputdateFinExp = document.querySelectorAll(".inputdateFinExp")
    let allFilled = true; 

    for (let i = 0; i < inputdateFinExp.length; i++) {
        if (inputExperience[i].value.trim() === "" || inputEntreprise[i].value === "" || inputdateDebutExp[i].value.trim() === "" || inputdateFinExp[i].value === "") {
            allFilled = false; 
            inputExperience[i].style.borderColor= "red"
            inputEntreprise[i].style.borderColor= "red"
            inputdateDebutExp[i].style.borderColor= "red"
            inputdateFinExp[i].style.borderColor= "red"
        }
        else{
            inputExperience[i].style.borderColor= ""
            inputEntreprise[i].style.borderColor= ""
            inputdateDebutExp[i].style.borderColor= ""
            inputdateFinExp[i].style.borderColor= ""

            let dateDebut = new Date(inputdateDebutExp[i].value);
            let dateFin = new Date(inputdateFinExp[i].value);

            if (dateFin < dateDebut) {
                allFilled = false;
                inputdateDebutExp[i].style.borderColor = "red";
                inputdateFinExp[i].style.borderColor = "red";
            } 
            else {
                objetExperience = {
                    experience : inputExperience[i].value,
                    entreprise : inputEntreprise[i].value,
                    dateDebutExp : inputdateDebutExp[i].value,
                    dateFinExp : inputdateFinExp[i].value
                }
                arrExperience.push(objetExperience)
        }
        }   
    }
    return allFilled;
}

function recuperationCertificat(){
    let inputCertificat = document.querySelectorAll(".inputCertificat")
    let inputCertificatlieu = document.querySelectorAll(".inputCertificatlieu")
    let allFilled = true; 

    for (let i = 0; i < inputCertificatlieu.length; i++) {
        if(inputCertificat[i].value.trim() === "" || inputCertificatlieu[i].value.trim() === ""){
            allFilled = false; 
            inputCertificat[i].style.borderColor = "red"
            inputCertificatlieu[i].style.borderColor = "red"
        }else{
            inputCertificat[i].style.borderColor = ""
            inputCertificatlieu[i].style.borderColor = ""

            objetCertificat = {
                certificat : inputCertificat[i].value,
                lieu : inputCertificatlieu[i].value
                
            }
            arrCertificat.push(objetCertificat)

        }
         
    }
    return allFilled;
}

const content = document.querySelector(".cv-classic-div")
// ---------------html to pdf-----------
let btndwlond = document.querySelector(".btndwlond")
btndwlond.addEventListener('click', async function () {
    
    
    const filename = 'my-cv.pdf';

    const options = {
        margin: 1,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 8 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
    };
    try {
        await html2pdf().set(options).from(content).save();
    } catch (error) {
        console.error('false:', error.message);
    }
});
