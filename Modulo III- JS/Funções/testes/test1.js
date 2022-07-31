(
    function () {
    let nome = "Guilherme"
    return console.log(nome)
    }
)()

const SOMA3 = (
    function (a, b) {
        return a+b
    }

)(12,3)

console.log(SOMA3)

function op(operacao, x, y) {
    return operacao(x,y)
}
function multiplicacao(x,y) {
    return x*y
}

console.log(op(multiplicacao, 3, 4))

function argumentos() {
    return arguments[0]
}
console.log(argumentos(2, "string", true))