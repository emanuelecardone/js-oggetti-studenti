// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



// Parte 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// console.log('Parte 1:');

// const student = {
//     firstName: 'Emanuele',
//     lastName: 'Cardone',
//     age: 25
// };

// for(let key in student){
//     console.log(key + `: ` + student[key]);
// }


// ///////////////////////////////////////////////////////////////////////


// // Parte 2
// // Creare un array di oggetti di studenti.
// // Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// console.log('-------');
// console.log('Parte 2:');

// const studentsList = [
//     {
//         firstName: 'Matteo',
//         lastName: 'Centoni',
//         age: 28
//     },
//     {
//         firstName: 'Daniele',
//         lastName: 'Martini',
//         age: 42
//     },
//     {
//         firstName: 'Daniela',
//         lastName: 'Leopardi',
//         age: 21
//     },
//     {
//         firstName: 'Jennifer',
//         lastName: 'Lo Santo',
//         age: 15
//     },
//     {
//         firstName: 'Giacomo',
//         lastName: 'Taddei',
//         age: 35
//     }
// ];

// for(let i = 0; i < studentsList.length; i++){

//     // Dot notation
//     console.log('Dot notation: ' + studentsList[i].firstName + ' ' + studentsList[i].lastName);
    
//     // Bracket notation
//     console.log('Bracket notation: ' + studentsList[i]['firstName'] + ' ' + studentsList[i]['lastName']);

//     // For in
//     for(let key in studentsList[i]){
//         switch(key){
//             case 'firstName':
//             case 'lastName':
//                 console.log('For in: ' + studentsList[i][key]);
//                 break;
//         }
//     }

// }


// ///////////////////////////////////////////////////////////////////////


// // Parte 3
// // Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// console.log('-------');
// console.log('Parte 3:');

// const newStudent = {
//     firstName: prompt(`Inserisci il nome del nuovo studente:`),
//     lastName: prompt(`Inserisci il cognome del nuovo studente:`),
//     age: parseInt(prompt(`Inserisci l'età del nuovo studente:`))
// };

// console.log(newStudent);


// --------------------------------------------------------------------------------------------------------------------



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
listWrapper.classList.add('list_wrapper', 'w-50', 'h-75', 'border', 'border-5', 'border-white', 'rounded');
pageMain.appendChild(listWrapper);

// Sezioni della lista, relativi stili e inserimento in pagina
const listHead = document.createElement('div');
const listBody = document.createElement('div');
listHead.classList.add('list_head', 'w-100', 'h_15', 'd-flex', 'justify-content-center', 'align-items-center', 'border-bottom', 'border-5', 'border-white');
listBody.classList.add('list_body', 'w-100', 'h_85');
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





