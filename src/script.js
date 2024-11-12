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


// inputs du formulaire

let nom = document.querySelector("#nom0")
let prenom = document.querySelector("#prenom")
let photo = document.querySelector("#photo")
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

// onclick de chaque bouton
if (boutonSuivant1) {
    boutonSuivant1.addEventListener("click",()=>{
        //  const nom = document.getElementById('nom0').value;
        //  const prenom = document.getElementById('prenom').value;
        //  const photo = document.getElementById('photo').files.length;
        //  const adresse = document.getElementById('adresse').value;
        //  const telephone = document.getElementById('telephone').value;
        //  const email = document.getElementById('email').value;
        //  const linkedin = document.getElementById('lien').value;
        //  const github = document.getElementById('lien').value;
        //  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
         
        //  if (!nom || !prenom || !photo || !adresse || !telephone || !email || !linkedin || !github) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "You didn't enter all the informations!",
        //       });
             
        //  }
        //  else if(!emailPattern.test(email)){
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Entrez un email valide!",
        //       });
        //  }
        //  else{
        //     nextSection2();
        //  }
        nextSection2();
         
        });
}
if (boutonSuivant2) {
    boutonSuivant2.addEventListener("click", nextSection3);
}
if (boutonSuivant3) {
    boutonSuivant3.addEventListener("click",()=>{ 
        let competenceIputs = document.querySelectorAll(".competence-input")
        competenceIputs.forEach((e)=>{
            arrCompetence.push(e)
            console.log(e.value);
            
        
    })
        nextSection4();

    });
}
if (boutonSuivant4) {
    boutonSuivant4.addEventListener("click",()=>{
        let competenceIputs1 = document.querySelectorAll(".competence-soft-input")
        competenceIputs1.forEach((e)=>{
            arrCompetenceSoft.push(e)
            console.log(e.value);
            
    })
        nextSection5();
    });
}
if (boutonSuivant5) {
    boutonSuivant5.addEventListener("click", ()=>{

                recuperationLangue();
       
        for (let i = 0; i < arrLangue.length; i++) {
        console.log(arrLangue[i].lnague);
                    
        }
        nextSection6();

    });
}
if (boutonSuivant6) {
    boutonSuivant6.addEventListener("click",()=>{

        var inputs = document.querySelectorAll('#nom_loisir');
        inputs.forEach(function(input) { arrLoisir.push(input.value); console.log((input.value));
        });


        nextSection7();

    });
}
if (boutonSuivant7) {
    boutonSuivant7.addEventListener("click", ()=>{
        recuperationDiplome();

        for (let i = 0; i < arrDiplome.length; i++) {
            console.log(arrDiplome[i]);
                        
            }

      nextSection8();  
    });
}
if (boutonSuivant8) {
    boutonSuivant8.addEventListener("click",()=>{
        
        recuperationExperience()
        for (let i = 0; i < arrExperience.length; i++) {
            console.log(arrExperience[i]);
                        
            }

       nextSection9(); 
    });
}
if(boutonSubmit){
    boutonSubmit.addEventListener("click",()=>{
        recuperationCertificat();

        for (let i = 0; i < arrCertificat.length; i++) {
            console.log(arrCertificat[i]);
                        
            }
        changeIcon(9)
        section_cv9.style.display = "none";
        let classic = document.querySelector(".cv-bouttons")
        document.querySelector(".section-derniere").innerHTML += `
        <div id="FormSomary" class="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">

        <!-- Contact Section -->
        <section class="mb-8">
            <div class="text-center">
                <h1 class="text-3xl font-bold text-blue-600">Nom Prénom</h1>
                <img class="w-[50px] h-[40px]" src="${objetGlobal.photo.value}">
                <div class="flex justify-center mt-4 space-x-6">
                    <a href="mailto:email@example.com" class="text-blue-500">email@example.com</a>
                    <a href="tel:+1234567890" class="text-blue-500">+123 456 7890</a>
                    <a href="https://linkedin.com/in/votrenom" class="text-blue-500" target="_blank">LinkedIn</a>
                </div>
            </div>
        </section>

        <!-- Compétences Techniques -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Compétences Techniques</h2>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Node.js</li>
                <li>Python, Django</li>
                <li>Base de données SQL (MySQL, PostgreSQL)</li>
                <li>Git, GitHub</li>
            </ul>
        </section>

        <!-- Soft Skills -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Soft Skills</h2>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Communication efficace</li>
                <li>Travail en équipe</li>
                <li>Gestion du temps</li>
                <li>Adaptabilité</li>
            </ul>
        </section>

        <!-- Langues -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Langues</h2>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Français - Langue maternelle</li>
                <li>Anglais - Courant</li>
                <li>Espagnol - Intermédiaire</li>
            </ul>
        </section>

        <!-- Loisirs -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Loisirs</h2>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Voyages</li>
                <li>Photographie</li>
                <li>Musique (guitare)</li>
            </ul>
        </section>

        <!-- Cursus Universitaire -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Cursus Universitaire</h2>
            <div class="space-y-4 mt-4">
                <div>
                    <p class="font-semibold">2020 - 2023 : Licence Informatique</p>
                    <p class="text-gray-600">Université XYZ</p>
                </div>
                <div>
                    <p class="font-semibold">2018 - 2020 : BTS SIO</p>
                    <p class="text-gray-600">Lycée ABC</p>
                </div>
            </div>
        </section>

        <!-- Expériences Professionnelles -->
        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Expériences Professionnelles</h2>
            <div class="space-y-4 mt-4">
                <div>
                    <p class="font-semibold">2023 - Présent : Développeur Web</p>
                    <p class="text-gray-600">Entreprise XYZ - Description du poste.</p>
                </div>
                <div>
                    <p class="font-semibold">2021 - 2023 : Stagiaire Développeur</p>
                    <p class="text-gray-600">Entreprise ABC - Description du stage.</p>
                </div>
            </div>
        </section>

        <!-- Certificats -->
        <section>
            <h2 class="text-2xl font-semibold text-blue-600">Certificats</h2>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Certificat en Développement Web - Coursera (2022)</li>
                <li>Certificat Python - Udemy (2023)</li>
                <li>Certificat en Gestion de Projet - LinkedIn Learning (2023)</li>
            </ul>
        </section>

    </div>
        `
        classic.style.display = "block";


    })
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


function recuperationLangue(){
    let input_langue = document.querySelectorAll(".langueInputs")
    let select_langue = document.querySelectorAll(".Select-langue")

    for (let i = 0; i < input_langue.length; i++) {
         objetLangue = {
            lnague : input_langue[i].value,
            niveau : select_langue[i].value
        }
        arrLangue.push(objetLangue)
    }

}

function recuperationDiplome(){
    let inputDiplome = document.querySelectorAll(".inputDiplome")
    let inputUniversite = document.querySelectorAll(".inputUniversite")
    let inputdateDebut = document.querySelectorAll(".inputdateDebut")
    let inputdateFin = document.querySelectorAll(".inputdateFin")

    for (let i = 0; i < inputDiplome.length; i++) {
         objetDiplome = {
            diplome : inputDiplome[i].value,
            universite : inputUniversite[i].value,
            dateDebut : inputdateDebut[i].value,
            dateFin : inputdateFin[i].value
        }
        arrDiplome.push(objetDiplome)
    }

}

function recuperationExperience(){
    let inputExperience = document.querySelectorAll(".inputExperience")
    let inputEntreprise = document.querySelectorAll(".inputEntreprise")
    let inputdateDebutExp = document.querySelectorAll(".inputdateDebutExp")
    let inputdateFinExp = document.querySelectorAll(".inputdateFinExp")

    for (let i = 0; i < inputdateFinExp.length; i++) {
         objetExperience = {
            experience : inputExperience[i].value,
            entreprise : inputEntreprise[i].value,
            dateDebutExp : inputdateDebutExp[i].value,
            dateFinExp : inputdateFinExp[i].value
        }
        arrExperience.push(objetExperience)
    }

}

function recuperationCertificat(){
    let inputCertificat = document.querySelectorAll(".inputCertificat")
    let inputCertificatlieu = document.querySelectorAll(".inputCertificatlieu")

    for (let i = 0; i < inputCertificatlieu.length; i++) {
         objetCertificat = {
            certificat : inputCertificat[i].value,
            lieu : inputCertificatlieu[i].value
            
        }
        arrCertificat.push(objetCertificat)
    }

}


// html to pdf
let btndwlond = document.querySelector(".btndwlond")
btndwlond.addEventListener('click', async function () {
    const content = document.getElementById('FormSomary'); 
    const filename = 'my-cv.pdf';

    const options = {
        margin: 1,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    try {
        await html2pdf().set(options).from(content).save();
    } catch (error) {
        console.error('false:', error.message);
    }
});
