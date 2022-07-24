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
    if (isNaN(operacao) || operacao >= 7 || operacao < 1) {
        alert("Erro - Digite apenas operações válidas!!")
        calculadora()
    } else {
        let num1 = Number(prompt("1° Número"))
        let num2 = Number(prompt("2° Número"))
        let resultado
        
        function soma() {
            resultado = num1 + num2
            alert(`${num1} + ${num2} = ${resultado}`)
        }
        function subtracao() {
            resultado = num1 - num2
            alert(`${num1} - ${num2} = ${resultado}`)
        }
        function multiplicacao() {
            resultado = num1 * num2
            alert(`${num1} * ${num2} = ${resultado}`)
        }
        function divisaoR() {
            resultado = num1 / num2
            alert(`${num1} / ${num2} = ${resultado}`)
        }
        function divisaoI() {
            resultado = num1 % num2
            alert(`${num1} % ${num2} = ${resultado}`)
        }
        function potenciacao() {
            resultado = num1 ** num2
            alert(`${num1} ** ${num2} = ${resultado}`)
        }
        function NovaOperacao() {
            let opc = prompt("Deseja fazer outra operacao? \n 1 - Sim \n 2 - Não")
            if (opc == 1) {
                calculadora()
            }
            else if(opc == 2){
                alert("Beleza, até mais!")
            }
            else{
                alert("Digite uma opção válida!")
                NovaOperacao()
            }
        }

        if (isNaN(num1) == true || isNaN(num2) == true) {
                alert("DIgite apenas numeros")
        } else {
            
            switch (Number(operacao)) {
                case 1:
                    soma()
                    break;
                case 2:
                    subtracao()
                    break
                case 3:
                    multiplicacao()
                    break
                case 4:
                    divisaoR()
                    break
                case 5:
                    divisaoI()
                    break
                case 6:
                    potenciacao()
                    break 
            }
        }
        NovaOperacao()
    }   
}
calculadora()
