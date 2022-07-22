// var funcao = function test() {
//     console.log("Tá funcionando!!")
// }

// funcao()

// var funcao = () => {
//     console.log("Olá mundo!!")
// }
// funcao()

function calculadora() {
   let operacao = prompt("Escolha uma operação \n 1- Adição (+) \n 2- Subtração (-) \n 3- Multiplicação (*)\n 4- Divisão Real (/) \n 5- Divisão Inteira (%) \n 6- Potenciação (**)")

    switch (operacao) {
        case "+":
            alert("soma")
            break;
        
        case "-":
            alert("subtração")
            break
        
        default:
            alert("Digite uma operação válida!")
            break;
    }
}
calculadora()
