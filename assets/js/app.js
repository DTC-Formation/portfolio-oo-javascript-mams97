//seletors
const myIfo = {
    "name": "RATSIMBARISON",
    "firstName": [
        "ANJANIAINA",
        "MAMISOA"
    ],
    "adress": "Lot ANO 06 Antsampandra Ilafy",
    "contacts": {
        "number": "+261 38 16 574 55",
        "git": {
            "userName": "mams97",
            "path": "https://github.com/mams97"
        },
        "mail": {
            "userName": "anjaniainamamisoa@gmail.com",
            "path": "https://anjaniainamamisoa@gmail.com"
        }
    },
    "educations": [
        {
            "date": 2022,
            "diplome": "Licences en génie logiciel",
            "university": "ISIME Betongolo"
        },
        {
            "date": 2021,
            "diplome": "Diplôme de téchnicien supérieur en génie logiciel",
            "university": "ISIME Betongolo"
        }
    ],
    "experiences": {
        "stage":
            {
                "dateDebut": "Aout 2022",
                "dateFin": "Octobre 2020",
                "company": "R@ndevTeam",
                "lieu": "andavamba",
                "post": "dev REACT NATIVE" 
            },
        "projects":
            {
                "name": "I-verbs",
                "techno": [
                    "HTML",
                    "bootstrap",
                    "PHP (PDO)"
                ],
                "description": "Verbe irrégulier anglais",
                "lien": "https://github.com/mams97/I-Verb.git"
            },
    }
}
// add info
let about = document.getElementById('apropos');
if (about != null) {
    document.getElementById('name').innerHTML = myIfo.name + '<br>' + myIfo.firstName[0] + '<br>' + myIfo.firstName[1];
    document.getElementById('mail').innerHTML = '<a href="' + myIfo.contacts.mail.path + '">' + myIfo.contacts.mail.userName + '</a>';
    document.getElementById('number').innerText = myIfo.contacts.number;
    document.getElementById('adress').innerText = myIfo.adress;
    document.getElementById('git').innerHTML = '<a href="' + myIfo.contacts.git.path + '">' + myIfo.contacts.git.userName + '</a>';
}

let experience = document.getElementById('experience');
if (experience != null) {
    document.getElementById('stage').innerHTML = 
    'Date debut: ' + myIfo.experiences.stage.dateDebut + '<br>' + 
    'Date fin: ' + myIfo.experiences.stage.dateFin + '<br>' +
    'Entreprise: ' + myIfo.experiences.stage.company + ' ' + myIfo.experiences.stage.lieu + '<br>' +
    'Poste: ' + myIfo.experiences.stage.post;
}

// document.getElementById('stage').innerText = myIfo.experiences.stage.dateDebut  
//mode dark and light
let mode = document.getElementById('mode')
let dark = document.getElementById("dark")
let light = document.getElementById("light")
let container = document.getElementsByClassName('container')[0]

//events
dark.addEventListener('click', function() {
    dark.classList.add('modeDsp')
    light.classList.remove('modeDsp')
    container.classList.remove('modeLight')
    container.classList.add('modeDark')
})

light.addEventListener('click', function() {
    light.classList.add('modeDsp')
    dark.classList.remove('modeDsp')
    container.classList.remove('modeDark')
    container.classList.add('modeLight')
})
