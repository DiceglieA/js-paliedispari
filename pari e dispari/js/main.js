// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. v
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). v
// Sommiamo i due numeri v
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) v
// Dichiariamo chi ha vinto.

let evenOdd = prompt('Scegli pari o dispari').toLowerCase
const userNumber = parseInt(prompt('scegli da 1 a 5'))

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sum(x, y) {
    sum = x + y

    return sum   
}

let randomNum = randomNumber(1, 5)
console.log(randomNum)

let result = sum(userNumber, randomNum)

function game() {
    if (result % 2 == 0) {
        return 'pari'
    }else {
        return 'dispari'
}
}

console.log(game())

if (game() == evenOdd) {
    alert('YOU WIN')
}else {
    alert('TRY AGAIN')
}

