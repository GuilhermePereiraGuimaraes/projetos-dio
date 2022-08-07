function validaArray(arr, num) {
    try {    
        if (!arr || !num) throw new ReferenceError("Envie todos os parâmetros")
        if (typeof(arr) !== 'object') throw new TypeError("O array precisa ser do tipo Object")
        if (typeof(num) !== 'number') throw new TypeError("O número precisa ser do tipo Number")
        if (arr.length !== num) throw new RangeError("Tamanho inválido")

        return arr 
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Esse erro é um ReferenceError")
            console.log(e.name)
            console.log(e.stack)
            throw e
        }
        else if(e instanceof TypeError){
            console.log("Esse erro é um TypeError")
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
            throw e
        }
        else if(e instanceof RangeError){
            console.log("Esse erro é um RangeError")
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
            throw e
        }
        else{
            console.log(`Tipo de erro não esperado: ${e}`)
        }
    } 
}
console.log(validaArray([3,2,1],3))