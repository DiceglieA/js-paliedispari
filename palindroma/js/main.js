const parola = prompt('inserisci una parola')
//console.log (parola)
let palindroma = parolaPalindroma(parola)

if (parola == palindroma) {
    console.log('La parola è palindroma')
} else {
    console.log('non lo è')
}

function parolaPalindroma(parola) {
    let palindroma = ''
    for (let i = parola.lenght - 1; i >= 0; i--) {
        palindroma += parola[i]
    }
    console.log(palindroma)
    return palindroma
}

