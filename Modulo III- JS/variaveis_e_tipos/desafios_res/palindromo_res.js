//Solução 1
function verificarPalindromo(str) {
    if(!str || typeof(str) !== "string") return "String inexistente"

    return str.split("").reverse().join("") === str
}

// Solução 2
function verificarPalindromo2(str) {
    if(!str || typeof(str) !== "string") return "String inexistente"

    for (let index = 0; index < str.length / 2; index++) {
        if (str[index] !== str[str.length - (index+1)]) {
            return false
        }
    }
    return true
}

console.log(verificarPalindromo2("gato"))