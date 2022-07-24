function Compare(n1,n2) {
    const PrimeiraFrase = criarPF(n1,n2)
    const SegundaFrase = criarSF(n1,n2)

    return `${PrimeiraFrase} ${SegundaFrase}`
}
function criarPF(n1,n2) {
    let saoIguais = ''
    if (n1!==n2) {
        saoIguais ="não"
    }
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais`
}
function criarSF(n1,n2) {
    const soma = n1+n2
    const compara10 = soma >= 10 ? (soma > 10 ? "maior que" : "igual a") :"menor que"
    const compara20 = soma >= 20 ? (soma > 20 ? "maior que" : "igual a") :"menor que"
    return `Sua soma é ${soma}, que é ${compara10} 10 e é ${compara20} 20`
}

console.log(Compare(3,7))