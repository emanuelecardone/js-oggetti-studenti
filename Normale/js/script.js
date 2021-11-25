// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



// Parte 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

console.log('Parte 1:');

const student = {
    firstName: 'Emanuele',
    lastName: 'Cardone',
    age: 25
};

for(let key in student){
    console.log(key + `: ` + student[key]);
}


///////////////////////////////////////////////////////////////////////


// Parte 2
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

console.log('-------');
console.log('Parte 2:');

const studentsList = [
    {
        firstName: 'Matteo',
        lastName: 'Centoni',
        age: 28
    },
    {
        firstName: 'Daniele',
        lastName: 'Martini',
        age: 42
    },
    {
        firstName: 'Daniela',
        lastName: 'Leopardi',
        age: 21
    },
    {
        firstName: 'Jennifer',
        lastName: 'Lo Santo',
        age: 15
    },
    {
        firstName: 'Giacomo',
        lastName: 'Taddei',
        age: 35
    }
];

for(let i = 0; i < studentsList.length; i++){

    // Dot notation
    console.log('Dot notation: ' + studentsList[i].firstName + ' ' + studentsList[i].lastName);
    
    // Bracket notation
    console.log('Bracket notation: ' + studentsList[i]['firstName'] + ' ' + studentsList[i]['lastName']);

    // For in
    for(let key in studentsList[i]){
        switch(key){
            case 'firstName':
            case 'lastName':
                console.log('For in: ' + studentsList[i][key]);
                break;
        }
    }

}


///////////////////////////////////////////////////////////////////////


// Parte 3
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

console.log('-------');
console.log('Parte 3:');

const newStudent = {
    firstName: prompt(`Inserisci il nome del nuovo studente:`),
    lastName: prompt(`Inserisci il cognome del nuovo studente:`),
    age: parseInt(prompt(`Inserisci l'età del nuovo studente:`))
};

console.log(newStudent);

studentsList.push(newStudent);

console.log(studentsList);