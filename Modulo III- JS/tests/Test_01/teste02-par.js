function returnEvenValues(array) {
    let even = []
    for (const number of array) {
        if (number%2 === 0) {
            console.log(number)
            even.push(number)
        }
    }
    console.log(even)
}
returnEvenValues([2,3,4,7,9,8,12,36,"244",54])