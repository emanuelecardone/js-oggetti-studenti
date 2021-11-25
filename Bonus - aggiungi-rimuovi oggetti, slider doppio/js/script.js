// HEADER
const pageHeader = document.querySelector('header');

// Titolo header, relative classi, contenuto e inserimento in pagina
// Variabile
const headerTitle = document.createElement('h1');
// Classi di stile
headerTitle.classList.add('text-white', 'mb-0');
// Contenuto
headerTitle.innerHTML = 'Your objects list';
// Inserimento in pagina
pageHeader.appendChild(headerTitle);


// MAIN
const pageMain = document.querySelector('main');

// Box contentente la lista
// Variabile
const listWrapper = document.createElement('div');
// Classi di stile
listWrapper.classList.add('list_wrapper', 'w-50', 'h-75');

// Sezioni dei containers riempiti dall'utente e relativi titoli
// Variabili 
const chosenGames = document.createElement('div');
const chosenMovies = document.createElement('div');
const chosenGamesTitle = document.createElement('h6');
const chosenMoviesTitle = document.createElement('h6');
// Classi di stile
chosenGames.classList.add( 'chosen_games', 'chosen_list', 'w_10', 'h-50', 'border', 'border-3', 'border-white', 'fw-bolder', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'position-absolute');
chosenMovies.classList.add('chosen_movies', 'chosen_list', 'w_10', 'h-50', 'border-3', 'fw-bolder', 'border_black', 'd-flex', 'justify-content-center', 'flex-column', 'align-items-center', 'position-absolute');
chosenGamesTitle.classList.add('text-uppercase', 'text-center', 'fw-bolder', 'position-absolute');
chosenMoviesTitle.classList.add('text-uppercase', 'text-center', 'fw-bolder', 'position-absolute');
// Contenuto
chosenGamesTitle.innerHTML = `Your games list`;
chosenMoviesTitle.innerHTML = `Your movies list`;
// Inserimento in pagina
chosenGames.appendChild(chosenGamesTitle);
chosenMovies.appendChild(chosenMoviesTitle);

// Sezioni della lista
// Variabili
const listHead = document.createElement('div');
const listBody = document.createElement('div');
// Classi di stile
listHead.classList.add('list_head', 'w-100', 'h_15', 'd-flex', 'justify-content-center', 'align-items-center');
listBody.classList.add('list_body', 'w-100', 'h_85', 'd-flex', 'flex-column');
// Inserimento in pagina
listWrapper.append(listHead, listBody);

// Buttons lista superiore
// Variabili
const gamesButton = document.createElement('button');
const moviesButton = document.createElement('button');
const addButton = document.createElement('button');
const removeButton = document.createElement('button');
// Classi di stile
gamesButton.classList.add('games_button', 'picked', 'btn', 'text-white', 'fs-4', 'fw-bold', 'text-uppercase');
moviesButton.classList.add('movies_button', 'btn', 'fs-4', 'fw-bold', 'text-uppercase');
addButton.classList.add('add_button', 'chosen_button', 'btn', 'text-white', 'fw-bold', 'text-uppercase', 'border-3', 'position-fixed');
removeButton.classList.add('remove_button', 'chosen_button', 'btn', 'text-white', 'fw-bold', 'text-uppercase', 'border-3', 'position-fixed');
// Contenuto
gamesButton.innerHTML = 'games';
moviesButton.innerHTML = 'movies';
addButton.innerHTML = 'add to list';
removeButton.innerHTML = 'empty list';
// Inserimento in pagina
listHead.append(addButton, gamesButton, moviesButton, removeButton);

// Sezione lista inferiore
// Variabili
const pageListNameBox = document.createElement('div');
const pageListTypeBox = document.createElement('div');
const pageListPriceBox = document.createElement('div');
const pageListSagaBox = document.createElement('div');
// Classi di stile
pageListNameBox.classList.add('h-25', 'border-3', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fw-bold');
pageListTypeBox.classList.add('h-25', 'border-3', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fw-bold');
pageListPriceBox.classList.add('h-25', 'border-3', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fw-bold');
pageListSagaBox.classList.add('h-25', 'border-3', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fw-bold');
// Inserimento in pagina
listBody.append(pageListNameBox, pageListTypeBox, pageListPriceBox, pageListSagaBox);

// Arrows
// Variabili
const sliderLeftArrow = document.createElement('i');
const sliderRightArrow = document.createElement('i');
// Classi di stile
sliderLeftArrow.classList.add('slider_arrow', 'fas', 'fa-arrow-left', 'text-white', 'fs-1');
sliderRightArrow.classList.add('slider_arrow', 'fas', 'fa-arrow-right','text-white', 'fs-1');

// Inserimento in pagina nel main di tutti i suoi contenuti
pageMain.append(chosenGames, sliderLeftArrow, listWrapper, sliderRightArrow, chosenMovies);


// FOOTER
const pageFooter = document.querySelector('footer');

// Decoration wrapper, aside lines, star container, star
// Variabili 
const footerDecorationWrapper = document.createElement('div');
const leftFooterDecoration = document.createElement('div');
const middleFooterDecoration = document.createElement('div');
const footerStar = document.createElement('i');
const rightFooterDecoration = document.createElement('div');
// Classi di stile
footerDecorationWrapper.classList.add('footer_decoration_wrapper', 'w-50', 'h-50', 'd-flex', 'justify-content-between', 'align-items-center');
leftFooterDecoration.classList.add('side_footer_decoration', 'border', 'border-2', 'border-white', 'rounded');
middleFooterDecoration.classList.add('middle_footer_decoration', 'h_20p', 'd-flex', 'justify-content-center', 'align-items-center');
footerStar.classList.add('footer_star','text-white', 'fas', 'fa-star', 'fs-3');
rightFooterDecoration.classList.add('side_footer_decoration', 'border', 'border-2', 'border-white');
// Inserimento in pagina
pageFooter.appendChild(footerDecorationWrapper);
footerDecorationWrapper.append(leftFooterDecoration, middleFooterDecoration, rightFooterDecoration);
middleFooterDecoration.appendChild(footerStar);


// OBJECTS

// Primo dei due array di oggetti (corrisponde allo slider bianco)
const videoGames = [
    {
        name: 'Grand Theft Auto',
        type: 'Action',
        price: 70,
        saga: ['GTA San Andreas', 'GTA 4', 'GTA V']
    },
    {
        name: 'Fifa',
        type: 'Sport',
        price: 90,
        saga: ['Fifa 10', 'Fifa 18', 'Fifa 21']
    },
    {
        name: 'Escape Room',
        type: 'Strategy',
        price: 30,
        saga: ['Escape Room 1', 'Escape Room 3', 'Escape Room 4', 'Escape Room 7', 'Escape Room 10']
    },
    {
        name: 'NBA',
        type: 'Sport',
        price: 50,
        saga: ['NBA 1', 'NBA 2', 'NBA 3', 'NBA 4']
    },
    {
        name: 'PayDay',
        type: 'Action',
        price: 35,
        saga: ['PayDay', 'PayDay2']
    }
];

// Secondo dei due array di oggetti (corrisponde allo slider nero)
const movies = [
    {
        name: 'Harry Potter',
        type: 'Fantasy',
        price: 30,
        saga: ['Harry Potter 1', 'Harry Potter 2', 'Harry Potter 3', 'Harry Potter 4', 'Harry Potter 5']
    },
    {
        name: 'The Lord of the Rings',
        type: 'Medieval',
        price: 20,
        saga: ['The Lord of the Rings 1', 'The Lord of the Rings 2', 'The Lord of the Rings 3']
    },
    {
        name: 'Suicide Squad',
        type: 'Action',
        price: 40,
        saga: ['Suicide Squad 1', 'Suicide Squad 2', 'Suicide Squad 3']
    }
];

// FLAG PER I DUE SLIDER

// Definisce quale dei due array di oggetti è attivo
let activeArray = videoGames;
// Richiamo alla funzione che ritorna quanti click servono a raggiungere il limite dei 2 slider (3 o 5)
let arrayWidth = decidingArrayLength(activeArray);
// Individua l'active attuale
let activeObject = 0;
// Richiamo alla funzione che individua il numero di keys di un oggetto
let numberOfKeys = decidingHowManyKeys(activeArray);
// Debug
let currentColor = `white`;

// Richiamo alla funzione che riempie la lista centrale
fillingBoxesUp(activeArray, activeObject);

// Creo una copia dell'array degli oggetti (mi serve per riempire/svuotare le liste ai lati al click add o remove)
const chosenGamesList = [];
const chosenMoviesList = [];


// FUNCTIONS

// Funzione che aggiunge games nella lista bianca oppure movies nella lista nera
//
// - No argomenti
//
// -> No return
//
// Descrizione:
// Se l'array di oggetti attivo è videoGames, aggiunge nella lista bianca, sennò nella nera
// L'oggetto viene anche aggiunto ad un array che servirà dopo per svuotare
// Inoltre aggiunge solo se quell'oggetto non è già presente
addButton.addEventListener('click', function(){
    if(activeArray === videoGames){
        if(!(chosenGamesList.includes(videoGames[activeObject]['name']))){
            chosenGamesList.push(videoGames[activeObject]['name']);
            chosenGames.innerHTML += `<div class="text-center mb-1">${videoGames[activeObject]['name']}</div>`;
        }
        console.log(videoGames[activeObject]['name']);
        console.log(activeObject);
    } else{
        if(!(chosenMoviesList.includes(movies[activeObject]['name']))){
            chosenMoviesList.push(movies[activeObject]['name']);
            chosenMovies.innerHTML += `<div class="text-center mb-1">${movies[activeObject]['name']}</div>`;
        }
        console.log(videoGames[activeObject]['name']);
        console.log(activeObject);
    }
    
});

// Funzione che svuota la lista games oppure quella movies
//
// - No argomenti
//
// -> No return
//
// Descrizione:
// Se l'array di oggetti attivo è videoGames, svuota la lista bianca, sennò la nera
// L'array viene svuotato completamente da splice e nella pagina viene inserito quell'array, quindi si vuota
// IL debug è per non far sparire anche il titolo quando clicko empty
removeButton.addEventListener('click', function(){
    if(activeArray === videoGames){
        chosenGamesList.splice(0);
        chosenGames.innerHTML =  chosenGamesList;

        // Debug necessario
        chosenGames.appendChild(chosenGamesTitle);
        chosenGamesTitle.innerHTML = `Your games list`;

    } else{
        chosenMoviesList.splice(0);
        chosenMovies.innerHTML = chosenMoviesList;

        // Debug necessario
        chosenMovies.appendChild(chosenMoviesTitle);
        chosenMoviesTitle.innerHTML = `Your movies list`;
    }
    
});

// Funzione che porta l'utente allo slider che riguarda i giochi
//
// - No argomenti
//
// -> No return
//
// Descrizione:
// Se lo slider attivo è movies(nero), passa allo slider videoGames(bianco)
// Richiama una funzione che colora tutto di bianco alla quale passa 2 variabili (colore precedente e attuale)
// Rimuove l'animazione dal pulsante Movies e l'assegna a se stesso (picked)
// Imposta l'elemento attivo su videoGames e resetta il counter al primo oggetto
// Richiama il numero di chiavi dell'oggetto per adattarsi al cambio
// Richiama la funzione che riempie la lista centrale
gamesButton.addEventListener('click', function(){
    
    lastColor = `black`;
    currentColor = `white`;
    switchingBlackWhite(lastColor, currentColor);
    moviesButton.classList.remove('picked');
    gamesButton.classList.add('picked');
    activeArray = videoGames;
    activeObject = 0;   
    numberOfKeys = decidingHowManyKeys(activeArray);
    fillingBoxesUp(activeArray, activeObject);

});

// Funzione che porta l'utente allo slider che riguarda i film
//
// - No argomenti
//
// -> No return
//
// Descrizione:
// Se lo slider attivo è videoGames(bianco), passa allo slider movies(nero)
// Richiama una funzione che colora tutto di nero alla quale passa 2 variabili (colore precedente e attuale)
// Rimuove l'animazione dal pulsante Games e l'assegna a se stesso (picked)
// Imposta l'elemento attivo su movies e resetta il counter al primo oggetto
// Richiama una funzione che ritorna il numero di chiavi dell'oggetto per adattarsi al cambio
// Richiama la funzione che riempie la lista centrale
moviesButton.addEventListener('click', function(){

    lastColor = `white`;
    currentColor = `black`;
    switchingBlackWhite(lastColor, currentColor);
    gamesButton.classList.remove('picked');
    moviesButton.classList.add('picked');
    activeArray = movies;
    activeObject = 0;
    numberOfKeys = decidingHowManyKeys(activeArray);
    fillingBoxesUp(activeArray, activeObject);
    
});

// Funzione slider che scorre gli oggetti dell'array verso sinistra
//
// - No argomenti
//
// -> No return
//
// Descrizione:
// Richiama una funzione che definisce quanto è lungo l'array (quindi se 3 o 5)
// Usa questa lunghezza per definire dopo quanti click il counter activeObject si azzera
// Richiama una funzione che riempie la lista centrale in base all'array e l'oggetto attivo
sliderLeftArrow.addEventListener('click', function(){

    arrayWidth = decidingArrayLength(activeArray);
    if(activeObject === 0){
        activeObject = arrayWidth - 1;
    } else{
        activeObject--;
    }
    fillingBoxesUp(activeArray, activeObject);

});

// Funzione slider che scorre gli oggetti dell'array verso destra
//
// - No argomenti
//
// -> No return
//
// Descrizione:
// Richiama una funzione che definisce quanto è lungo l'array (quindi se 3 o 5)
// Usa questa lunghezza per definire dopo quanti click il counter activeObject si azzera
// Richiama una funzione che riempie la lista centrale in base all'array e l'oggetto attivo
sliderRightArrow.addEventListener('click', function(){

    arrayWidth = decidingArrayLength(activeArray);
    if(activeObject === arrayWidth - 1){
        activeObject = 0;
    } else{
        activeObject++;
    }
    fillingBoxesUp(activeArray, activeObject);

});

// Funzione che riempie la lista centrale della pagina con le keys dell'oggetto attivo
//
// - pickedArray: Corrisponde all'array di oggetti scelto (games o movies)
// - pickedObject: Corrisponde all'oggetto scelto 
//
// -> No return
//
// Descrizione:
// Variabile flag per determinare con quale colore stampo in pagina (in base allo slider attivo)
// Inserimento in pagina nella lista centrale delle 4 keys dell'oggetto attivo dell'array attivo
function fillingBoxesUp(pickedArray, pickedObject){

    let textColor;

    switch(pickedArray){
        case videoGames:
            textColor = 'white';
            break;
        case movies:
            textColor = 'black';
            break;
    }
    
    pageListNameBox.innerHTML = `
        <span class="key_text text-center text-${textColor}">Name:<br><span class="key_nested_text">${pickedArray[pickedObject]['name']}</span></span>
    `;
    pageListTypeBox.innerHTML = `
        <span class="key_text text-center text-${textColor}">Type:<br><span class="key_nested_text">${pickedArray[pickedObject]['type']}</span></span>
    `;
    pageListPriceBox.innerHTML = `
        <span class="key_text text-center text-${textColor}">Price:<br><span class="key_nested_text">${pickedArray[pickedObject]['price']}</span></span>
    `;
    pageListSagaBox.innerHTML = `
        <span class="key_text text-center text-${textColor}">Saga:<br><span class="key_nested_text">${pickedArray[pickedObject]['saga']}</span></span>
    `;
};

// Funzione che definisce il numero di keys di un oggetto
//
// - pickedArray: Corrisponde all'array di oggetti scelto (games o movies)
//
// -> return: keysAmount, numero di keys dell'oggetto
//
// Descrizione:
// Parte un ciclo for in, che percorre tutto l'oggetto
// In questo caso, tutti gli oggetti devono avere 4 keys per riempire tutta la lista centrale, sia giochi che film
// Perciò percorro solo un oggetto
function decidingHowManyKeys(pickedArray){
    
    let keysAmount = 0;
    for(let key in pickedArray[0]){
        keysAmount++;
    } 
    return keysAmount;
};

// Funzione che determina il numero di oggetti in un array
//
// - pickedArray: Corrisponde all'array di oggetti scelto (games o movies)
//
// -> return: arraySize, corrisponde alla lunghezza dell'array di oggetti
//
// Descrizione: 
// Funzione molto semplice, legge la lunghezza dell'array e la ritorna. Posso richiamarla più volte
function decidingArrayLength(pickedArray){

    const arraySize = pickedArray.length;
    return arraySize;
}

// Funzione che asseggna tutti gli stili di bianco o nero per lo slider attivo
//
// - prevColor: una variabile flag che rappresenta lo slider attuale (che deve essere cambiato)
// - pickedColor: una variabile flag che rappresenta lo slider che l'utente vuole selezionare
//
// -> No return
//
// Descrizione:
// Rimuove il colore bianco se lo slider attivo è games, altrimenti il nero
// Aggiunge il colore nero se lo slider attivo è games, altrimenti il bianco
// I target sono: pulsanti add/remove, bordi della lista centrale, frecce dello slider
function switchingBlackWhite(prevColor, pickedColor){

    addButton.classList.remove(`border_${prevColor}`, `text-${prevColor}`);
    removeButton.classList.remove(`border_${prevColor}`, `text-${prevColor}`);
    pageListNameBox.classList.remove(`border_${prevColor}`);
    pageListTypeBox.classList.remove(`border_${prevColor}`);
    pageListPriceBox.classList.remove(`border_${prevColor}`);
    pageListSagaBox.classList.remove(`border_${prevColor}`);
    sliderLeftArrow.classList.remove(`text-${prevColor}`);
    sliderRightArrow.classList.remove(`text-${prevColor}`);

    addButton.classList.add(`border_${pickedColor}`, `text-${pickedColor}`);
    removeButton.classList.add(`border_${pickedColor}`, `text-${pickedColor}`);
    pageListNameBox.classList.add(`border_${pickedColor}`);
    pageListTypeBox.classList.add(`border_${pickedColor}`);
    pageListPriceBox.classList.add(`border_${pickedColor}`);
    pageListSagaBox.classList.add(`border_${pickedColor}`);
    sliderLeftArrow.classList.add(`text-${pickedColor}`);
    sliderRightArrow.classList.add(`text-${pickedColor}`);
}
