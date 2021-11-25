// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// INIZIO QUI 


// Header
const pageHeader = document.querySelector('header');
// Titolo header, relative classi e inserimento in pagina
const headerTitle = document.createElement('h1');
headerTitle.innerHTML = 'Your objects list';
headerTitle.classList.add('text-white', 'mb-0');
pageHeader.appendChild(headerTitle);

// Main
const pageMain = document.querySelector('main');
// Box contentente la lista, relative classi e inserimento in pagina
const listWrapper = document.createElement('div');
listWrapper.classList.add('list_wrapper', 'w-50', 'h-75');


// Sezioni della lista, relativi stili e inserimento in pagina
const listHead = document.createElement('div');
const listBody = document.createElement('div');
listHead.classList.add('list_head', 'w-100', 'h_15', 'd-flex', 'justify-content-center', 'align-items-center', 'border', 'border-3', 'border-white');
listBody.classList.add('list_body', 'w-100', 'h_85', 'd-flex', 'flex-column');
listWrapper.append(listHead, listBody);

// Titolo lista superiore
const listHeadTitle = document.createElement('h2');
listHeadTitle.innerHTML = 'Add or remove anything you wish';
listHeadTitle.classList.add('text-white', 'mb-0');
listHead.appendChild(listHeadTitle);

// Footer
const pageFooter = document.querySelector('footer');
// Wrapper decorazione footer, classi ai sottoelementi e inserimento del tutto in pagina
const footerDecorationWrapper = document.createElement('div');
const leftFooterDecoration = document.createElement('div');
const middleFooterDecoration = document.createElement('div');
const footerStar = document.createElement('i');
const rightFooterDecoration = document.createElement('div');
footerDecorationWrapper.classList.add('footer_decoration_wrapper', 'w-50', 'h-50', 'd-flex', 'justify-content-between', 'align-items-center');
leftFooterDecoration.classList.add('side_footer_decoration', 'border', 'border-2', 'border-white', 'rounded');
middleFooterDecoration.classList.add('middle_footer_decoration', 'h_20p', 'd-flex', 'justify-content-center', 'align-items-center');
footerStar.classList.add('footer_star','text-white', 'fas', 'fa-star', 'fs-3');
rightFooterDecoration.classList.add('side_footer_decoration', 'border', 'border-2', 'border-white');
pageFooter.appendChild(footerDecorationWrapper);
footerDecorationWrapper.append(leftFooterDecoration, middleFooterDecoration, rightFooterDecoration);
middleFooterDecoration.appendChild(footerStar);


// OBJECTS

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







// TEST
const pageListNameBox = document.createElement('div');
const pageListTypeBox = document.createElement('div');
const pageListPriceBox = document.createElement('div');
const pageListSagaBox = document.createElement('div');

const sliderLeftArrow = document.createElement('i');
const sliderRightArrow = document.createElement('i');

sliderLeftArrow.classList.add('slider_arrow', 'fas', 'fa-arrow-left', 'text-white', 'fs-1');
sliderRightArrow.classList.add('slider_arrow', 'fas', 'fa-arrow-right','text-white', 'fs-1');

pageMain.append(sliderLeftArrow, listWrapper, sliderRightArrow);


pageListNameBox.classList.add('h-25', 'border', 'border-3', 'border-white', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fs-5', 'fw-bold');
pageListTypeBox.classList.add('h-25', 'border', 'border-3', 'border-white', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fs-5', 'fw-bold');
pageListPriceBox.classList.add('h-25', 'border', 'border-3', 'border-white', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fs-5', 'fw-bold');
pageListSagaBox.classList.add('h-25', 'border', 'border-3', 'border-white', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fs-5', 'fw-bold');

listBody.append(pageListNameBox, pageListTypeBox, pageListPriceBox, pageListSagaBox);

let activeObject = 0;
let numberOfKeys = 0;

// Tutti gli oggetti hanno lo stesso numero di keys quindi un controllo su uno è sufficiente
for(let key in videoGames[0]){
    numberOfKeys++;
}
console.log(numberOfKeys);


pageListNameBox.innerHTML = videoGames[activeObject]['name'];
pageListTypeBox.innerHTML = videoGames[activeObject]['type'];
pageListPriceBox.innerHTML = videoGames[activeObject]['price'];
pageListSagaBox.innerHTML = videoGames[activeObject]['saga'];

sliderLeftArrow.addEventListener('click', function(){

    if(activeObject === 0){
        activeObject = numberOfKeys;
    } else{
        activeObject--;
    }
    

    console.log(activeObject);

    pageListNameBox.innerHTML = videoGames[activeObject]['name'];
    pageListTypeBox.innerHTML = videoGames[activeObject]['type'];
    pageListPriceBox.innerHTML = videoGames[activeObject]['price'];
    pageListSagaBox.innerHTML = videoGames[activeObject]['saga'];

});

sliderRightArrow.addEventListener('click', function(){

    if(activeObject === numberOfKeys){
        activeObject = 0;
    } else{
        activeObject++;
    }
    
    

    console.log(activeObject);

    console.log(videoGames[0])

    pageListNameBox.innerHTML = videoGames[activeObject]['name'];
    pageListTypeBox.innerHTML = videoGames[activeObject]['type'];
    pageListPriceBox.innerHTML = videoGames[activeObject]['price'];
    pageListSagaBox.innerHTML = videoGames[activeObject]['saga'];

});
