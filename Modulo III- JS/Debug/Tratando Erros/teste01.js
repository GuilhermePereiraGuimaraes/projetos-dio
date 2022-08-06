const ERROR = new Error('Mensagem Inválida')
ERROR.name = 'InvalidMessage'
function palindromo(s) {
    if(!s) throw ERROR

    return s === s.split("").reverse().join("")
}
function exemplo(s) {
    try {
        return palindromo(s)
    } catch (ERROR) {
        throw ERROR
    }
    finally{
        console.log(`A string foi: ${s}`)
    }
}
exemplo('') 