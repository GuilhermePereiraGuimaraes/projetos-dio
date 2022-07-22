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

   if (isNaN(num1) == true || isNaN(num2) == true) {
        alert("DIgite apenas numeros")
   } else {
    
       switch (operacao) {
           case "+":
               soma()
               break;
           
           case "-":
               subtracao()
               break
           
           case "*":
               multiplicacao()
               break

           case "/":
                divisaoR()
                break
            case "%":
                divisaoI()
                break
            case "**":
                potenciacao()
                break 
           default:
               alert("Digite uma operação válida!")
               break;
       }
   }

}
// calculadora()
