console.log("Olá mundo!!")
function testando(key1,key2) {
    console.log(`O valor ${key1} é igual a ${key2}?`)
    console.log(key1===key2)
}

testando(2,2)

function funcao(x) {
    const A = 4
    const B = 7

    let formula = (A*x) + B

    return formula
}
let x3 = funcao(65)
console.log(x3)