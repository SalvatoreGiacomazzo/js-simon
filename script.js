/*
Traccia
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS 1:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
BONUS 2:
Generiamo gli input da JS, invece di scriverli nel codice
*/

/*TO DO LIST
1. Recupero gli elementi dal DOM.
2. Stampare in pagina 5 numeri casuali.
3. Creare una funzione che li rende visibili solo per 30 secondi.
4. Alla fine dei 30 secondi appaiono 5 input di numeri(provo a iniettarli con JS direttamente, (Bonus1)).
5. All'inserimento dei numeri, stabilire quali e quanti sono i numeri corretti inseriti dall'utente.
6. Validazione. (Bonus2)
*/


//Funzioni utili
//Funzione che genera i numeri
let generateNumber = (min, max) => Math.floor(Math.random() * (max - min - 1) + min);



//Recupero gli elementi dal dom
const numberDisplay = document.getElementById('numbers');
const takeGuess = document.getElementById('guessS')

//Opzioni di preparazione
let min = 1;
let max = 20;
let listNumbers = []; //Array dei numeri
let time = 30000;


// Ciclo iterativo che genera 5 numeri casuali unici
while (listNumbers.length < 5) {
    const randomNumber = generateNumber(min, max);
    // Verifica se il numero è già presente nell'array
    if (!listNumbers.includes(randomNumber)) {
        listNumbers.push(randomNumber);
    }
}
// Aggiungo i numeri unici alla pagina

numberDisplay.innerHTML = listNumbers


setTimeout(() => {
    numberDisplay.innerHTML = ''; // Pulisce il contenuto dell'elemento
}, time); 