const form = document.querySelector(".quizz");
let tableauResults = [];
const reponses = ['b', 'a', 'c', 'a', 'c'];
const titreResults = document.querySelector('.resultats h2');
const noteResults = document.querySelector(".note");
const aideResult = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".question_block");
let verifTableau = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    for(i = 1; i < 6; i++) {
        tableauResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResults);
    verifFuction(tableauResults);
    tableauResults = [];
})

function verifFuction(tabResults) {

    for(let a = 0; a < 5; a++) {

        if(tabResults[a] === reponses[a]) {
            verifTableau.push(true);
        }
        else {
            verifTableau.push(false);
        }
    }

    // console.log(afficherResults);
    afficherResults(verifTableau);
    couleurResults(verifTableau);
    verifTableau = [];
}

function afficherResults(tabCheck) {
    
    const nbDeFaute = tabCheck.filter(el => el !== true).length;

    switch (nbDeFaute) {
        case 0:
            titreResults.innerText = "Bravo, vous venez de faire un sans faute !";
            aideResult.innerText = "";
            noteResults.innerText = "5/5";
        break;

        case 1:
            titreResults.innerText = "Allez, encore un effort !";
            aideResult.innerText = "Retentez une autre reponse dans la case rouge et re-valider ";
            noteResults.innerText = "4/5";
        break;

        case 2:
            titreResults.innerText = "Vas y, tu peux le faire";
            aideResult.innerText = "Retentez une autre reponse dans les cases rouges et re-valider ";
            noteResults.innerText = "3/5";
        break;   
    
        case 3:
            titreResults.innerText = "Courage, c'est pas fini";
            aideResult.innerText = "Retentez une autre reponse dans les cases rouges et re-valider ";
            noteResults.innerText = "2/5";
        break; 

        case 4:
            titreResults.innerText = "Beaucoup de courage, tu peux";
            aideResult.innerText = "Retentez une autre reponse dans les cases rouges et re-valider ";
            noteResults.innerText = "1/5";
        break; 

        case 5:
            titreResults.innerText = "Félicitation, Grand maître";
            aideResult.innerText = "Retentez une autre reponse dans les cases rouges et re-valider ";
            noteResults.innerText = "0/5";
        break;

        default:
            "Woops, cas inattendus !!!"
        break;
    }
}

function couleurResults(tabValBool) {
    
    for(let i = 0; i < tabValBool.length; i++) {

        if(tabValBool[i] === true) {
            toutesLesQuestions[i].style.background = "lightgreen";
        }

        else {
            toutesLesQuestions[i].style.background = "#ffb8b8";
            toutesLesQuestions[i].classList.add("echec");

            setTimeout(() => {
                toutesLesQuestions[i].classList.toggle("echec");
            }, 1000)
        }
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener("click", () => {
        item.style.background = "white";
    })
})