var palindrome = function (s){
    s = String(s)
    s = s.toUpperCase()
    let array = s.split("")
    for (let index = 0; index < array.length; index++) {
        if (array[index] === ' ') {
            array.splice(index, 1)
        }
    }
    return array === array.reverse()
}

console.log(palindrome("Roma me tem amor"))