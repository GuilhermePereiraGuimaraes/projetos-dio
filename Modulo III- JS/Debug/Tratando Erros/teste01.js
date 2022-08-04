function palindromo(s) {
    if(!s) throw "String Inválida"

    return s === s.split("").reverse().join("")
}
function exemplo(s) {
    try {
        return palindromo(s)
    } catch (error) {
        throw error
    }
    finally{
        console.log(`A string foi: ${s}`)
    }
}
exemplo('') 