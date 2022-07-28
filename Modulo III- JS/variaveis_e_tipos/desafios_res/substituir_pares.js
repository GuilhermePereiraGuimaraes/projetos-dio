function substituirPares(array) {
    if(!array || !array.length ||typeof(array) !== "object") return "Array inexistente"

    for (let index = 0; index < array.length; index++) {
        if (typeof(array[index]) === "number" && array[index] % 2 === 0 && array[index] != 0) {
            console.log(`Substituindo ${array[index]} por 0`)
            array[index] = 0
        }        
    }
    return array
}
console.log(substituirPares(null))