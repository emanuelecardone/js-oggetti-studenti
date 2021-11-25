// HEADER
const pageHeader = document.querySelector('header');
// Titolo header, relative classi e inserimento in pagina
const headerTitle = document.createElement('h1');
headerTitle.innerHTML = 'Your objects list';
headerTitle.classList.add('text-white', 'mb-0');
pageHeader.appendChild(headerTitle);

// MAIN
const pageMain = document.querySelector('main');
// Box contentente la lista, relative classi e inserimento in pagina
const listWrapper = document.createElement('div');
listWrapper.classList.add('list_wrapper', 'w-50', 'h-75');

// Sezioni dei containers riempiti dall'utente
const chosenGames = document.createElement('div');
const chosenMovies = document.createElement('div');
chosenGames.classList.add( 'chosen_games', 'chosen_list', 'w_10', 'h-50', 'border', 'border-3', 'border-white', 'd-flex', 'flex-column', 'align-items-center', 'position-absolute');
chosenMovies.classList.add('chosen_movies', 'chosen_list', 'w_10', 'h-50', 'border-3', 'border_black', 'd-flex', 'flex-column', 'align-items-center', 'position-absolute');


// Sezioni della lista, relativi stili e inserimento in pagina
const listHead = document.createElement('div');
const listBody = document.createElement('div');
listHead.classList.add('list_head', 'w-100', 'h_15', 'd-flex', 'justify-content-center', 'align-items-center');
listBody.classList.add('list_body', 'w-100', 'h_85', 'd-flex', 'flex-column');
listWrapper.append(listHead, listBody);

// Buttons lista superiore
const gamesButton = document.createElement('button');
const moviesButton = document.createElement('button');
const addButton = document.createElement('button');
const removeButton = document.createElement('button');
gamesButton.classList.add('games_button', 'picked', 'btn', 'text-white', 'fs-4', 'fw-bold', 'text-uppercase');
moviesButton.classList.add('movies_button', 'btn', 'fs-4', 'fw-bold', 'text-uppercase');
addButton.classList.add('add_button', 'chosen_games_button', 'btn', 'text-white', 'fs-4', 'fw-bold', 'text-uppercase', 'border', 'border-3', 'border-white', 'position-fixed');
removeButton.classList.add('remove_button', 'chosen_movies_button', 'btn', 'text-black', 'fs-4', 'fw-bold', 'text-uppercase', 'border-3', 'border_black', 'position-fixed');
gamesButton.innerHTML = 'games';
moviesButton.innerHTML = 'movies';
addButton.innerHTML = 'add';
removeButton.innerHTML = 'remove';
listHead.append(addButton, gamesButton, moviesButton, removeButton);

// Sezione lista inferiore
const pageListNameBox = document.createElement('div');
const pageListTypeBox = document.createElement('div');
const pageListPriceBox = document.createElement('div');
const pageListSagaBox = document.createElement('div');
pageListNameBox.classList.add('h-25', 'border-3', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fs-5', 'fw-bold');
pageListTypeBox.classList.add('h-25', 'border-3', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fs-5', 'fw-bold');
pageListPriceBox.classList.add('h-25', 'border-3', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fs-5', 'fw-bold');
pageListSagaBox.classList.add('h-25', 'border-3', 'd-flex', 'justify-content-center', 'align-items-center', 'text-white', 'fs-5', 'fw-bold');

listBody.append(pageListNameBox, pageListTypeBox, pageListPriceBox, pageListSagaBox);

// Arrows
const sliderLeftArrow = document.createElement('i');
const sliderRightArrow = document.createElement('i');
sliderLeftArrow.classList.add('slider_arrow', 'fas', 'fa-arrow-left', 'text-white', 'fs-1');
sliderRightArrow.classList.add('slider_arrow', 'fas', 'fa-arrow-right','text-white', 'fs-1');

pageMain.append(chosenGames, sliderLeftArrow, listWrapper, sliderRightArrow, chosenMovies);


// FOOTER
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

// FLAG PER I DUE SLIDER
let activeArray = videoGames;
let arrayWidth = decidingArrayLength(activeArray);
let activeObject = 0;
let numberOfKeys = decidingHowManyKeys(activeArray);
let currentColor = `white`;

fillingBoxesUp(activeArray, activeObject);

// FUNCTIONS


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


sliderLeftArrow.addEventListener('click', function(){

    arrayWidth = decidingArrayLength(activeArray);
    numberOfKeys = decidingHowManyKeys(activeArray);
    if(activeObject === 0){
        activeObject = arrayWidth - 1;
    } else{
        activeObject--;
    }
    fillingBoxesUp(activeArray, activeObject);

});

sliderRightArrow.addEventListener('click', function(){

    arrayWidth = decidingArrayLength(activeArray);
    if(activeObject === arrayWidth - 1){
        activeObject = 0;
    } else{
        activeObject++;
    }
    fillingBoxesUp(activeArray, activeObject);

});


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
        <span class="fs-2 text-center text-${textColor}">Name:<br><span class="fs-4">${pickedArray[pickedObject]['name']}</span></span>
    `;
    pageListTypeBox.innerHTML = `
        <span class="fs-2 text-center text-${textColor}">Type:<br><span class="fs-4">${pickedArray[pickedObject]['type']}</span></span>
    `;
    pageListPriceBox.innerHTML = `
        <span class="fs-2 text-center text-${textColor}">Price:<br><span class="fs-4">${pickedArray[pickedObject]['price']}</span></span>
    `;
    pageListSagaBox.innerHTML = `
        <span class="fs-2 text-center text-${textColor}">Saga:<br><span class="fs-4">${pickedArray[pickedObject]['saga']}</span></span>
    `;
};

function decidingHowManyKeys(pickedArray){
    
    let keysAmount = 0;
    for(let key in pickedArray[0]){
        keysAmount++;
    } 
    return keysAmount;
};

function decidingArrayLength(pickedArray){

    const arraySize = pickedArray.length;
    return arraySize;

}

function switchingBlackWhite(prevColor, pickedColor){

    pageListNameBox.classList.remove(`border_${prevColor}`);
    pageListTypeBox.classList.remove(`border_${prevColor}`);
    pageListPriceBox.classList.remove(`border_${prevColor}`);
    pageListSagaBox.classList.remove(`border_${prevColor}`);
    sliderLeftArrow.classList.remove(`text-${prevColor}`);
    sliderRightArrow.classList.remove(`text-${prevColor}`);

    pageListNameBox.classList.add(`border_${pickedColor}`);
    pageListTypeBox.classList.add(`border_${pickedColor}`);
    pageListPriceBox.classList.add(`border_${pickedColor}`);
    pageListSagaBox.classList.add(`border_${pickedColor}`);
    sliderLeftArrow.classList.add(`text-${pickedColor}`);
    sliderRightArrow.classList.add(`text-${pickedColor}`);
}
