function operadores(n1, n2) {
    n1 = prompt("Número 1")
    n2 = prompt("Número 2")

    if (isNaN(n1) || isNaN(n2)) {

        operadores(0,0)
        
    } else {
        let x = Number(n1)
        let y = Number(n2)

        let res = x == y ? `Os números ${x} e ${y} são iguais. ` : `Os números ${x} e ${y} NÃO são iguais. `
        
        res += `Sua soma é ${x+y}, `
        
        res += (x+y) >= 10 ? (x+y) > 10 ? `que é maior que 10 `: `que é igual que 10 ` : `que é menor que 10 `

        res += (x+y) >= 20 ? (x+y) > 20 ? `e é maior que 20`: `e é igual que 20` : `e é menor que 20`

        alert(res)
    }
    
}
operadores(0,0)