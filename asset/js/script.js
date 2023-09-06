/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

BONUS AGGIUNTIVO:
Aggiungete un form in pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

Consigli del giorno:

Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!

Buon divertimento e confermate lettura come al solito!

Dati:

Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg

Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg

Walter Gordon
Office Manager
walter-gordon-office-manager.jpg

Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg

Scott Estrada	
Developer	
scott-estrada-developer.jpg

Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg
*/

/*
Tools:

- Array
- For / Forin
- const / let
- log
- document.querySelector
- insertAdjacentHTML
- addEventListener

*/



// creo un array contenente le info del team
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

// creo una costante che mi consenta di aggiungere nuovi membri al team
const newMembers = {
    nome: '',
    role: '',
    image: ''
}


// creo una costante per selezionare il form dalla DOM
const formElement = document.querySelector('form');

// creo un evento che si attivi ad un click del pulsante in pagina
formElement.addEventListener('submit', function(ev) {

    ev.preventDefault();

    console.log(ev);

})

// pusho i nuovi membri
teamMembers.push(newMembers);

// loggo in console i dati dei membri del team
console.log(teamMembers);

//seleziono degli elementi dalla DOM in cui voglio stampare le info del team
const rowDomElement = document.querySelector('.team .row')

// creo un ciclo che renda dinamica l'aggiunta dei membri
for (let i = 0; i < teamMembers.length; i++) {

    const team = teamMembers[i];

    console.log(team);

    console.log(team['name']);

    console.log(team['role']);

    console.log(team['image']);

    // creo una costante per l'aggiunta del markup che voglio visualizzare in pagina
    const markup = `
        <div class="col-lg-4">
            <div class="card">
                <img class="card-img-top" src="asset/img/${team['image']}" alt="">
                <h4 class="">${team['name']}</h4>
                <p class="">${team['role']}</p>
            </div>
        </div>`
    
    // loggo il markup in console
    //console.log(markup);
    // stampo in pagina le card partendo dalla prima in ordine c
    rowDomElement.insertAdjacentHTML('beforeend', markup);

}