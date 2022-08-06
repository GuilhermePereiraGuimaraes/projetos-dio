(   function (array, num){
        let error
         try {
            if (!array || !num) {
                error = new ReferenceError ("Variável não definida")
                error.name = 'InvalidReference'
                throw error
            } else if (typeof(array) !== 'object' || typeof(num) !== 'number'){
                error = new TypeError ("Tipo inválido")
                error.name = 'InvalidType'
                throw error
            } else if(array.length > num){
                error = new RangeError ('Array muito grande')
                error.name = 'RangeError'
                throw error
            }
            return console.log( "Tudo certo")
        } catch (error) {
            if (error instanceof ReferenceError) {
                throw error
            } else if (error instanceof TypeError) {
                throw error
            } else if (error instanceof RangeError){
                throw error
            }
        }
    }
)([1,2,3],"2")