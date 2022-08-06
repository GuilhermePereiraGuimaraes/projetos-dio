function validaArray(arr, num) {
    try {    
        if (!arr || !num) throw new ReferenceError("Envie todos os parâmetros")
        if (typeof(arr) !== 'object') throw new TypeError("O array precisa ser do tipo Object")
        if (typeof(num) !== 'number') throw new TypeError("O número precisa ser do tipo Number")
        if (arr.length !== num) throw new RangeError("Tamanho inválido")
    } catch (e) {
        
    } 
}