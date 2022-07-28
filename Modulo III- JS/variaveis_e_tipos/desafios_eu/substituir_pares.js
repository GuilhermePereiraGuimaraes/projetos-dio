var substituirPares = function (vetor){
    if (!vetor || vetor.length === 0) {
        return 'Array inexistente'
    } else {
        if (typeof(vetor) === 'object') {
            for (let index = 0; index < vetor.length; index++) {
                if (typeof(vetor[index]) === 'number' && vetor[index] % 2 === 0) {
                    vetor[index] = 0
                }            
            }
            return vetor
        }
        return 'Não é um array'
    }
}
console.log(substituirPares(["oi", 4, 5, true, 9, 13, 14, 100]))