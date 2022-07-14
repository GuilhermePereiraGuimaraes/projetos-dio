var currentNumber = document.getElementById("currentNumber")

function increment() {
    currentNumber.innerText = Number(currentNumber.innerText) + 1
}
function decrement() {
    currentNumber.innerText = Number(currentNumber.innerText) - 1
    
}