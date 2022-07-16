var currentNumber = document.getElementById("currentNumber")
var numCN = Number(currentNumber.innerText)

function increment(bAdd) {
    currentNumber.innerText = numCN + 1
    numCN = Number(currentNumber.innerText)
    let b = document.getElementById("sub")

    checagem(false, b)
    if (numCN>=10) {
        checagem(true, bAdd)
    } else {
        checagem(false, bAdd)
    }
    corTexto()
}
function decrement(bSub) {
    currentNumber.innerText = numCN - 1
    numCN = Number(currentNumber.innerText)
    let b = document.getElementById("add")
    
    checagem(false, b)
    if (numCN<=-10) {
        checagem(true, bSub)
    } else {
        checagem(false, bSub)
    }
    corTexto()
}

function checagem(key, b) {
    if (key == true) {
        b.disabled =true
        b.style.color = "gray"
        b.style.backgroundColor = "lightgray"
        b.style.borderColor = "gray"
    } else {
        b.disabled =false
        b.style.color = "lightcoral"
        b.style.backgroundColor = "#f1d6d6"
        b.style.borderColor = "lightcoral"
    }
}

function corTexto() {
    if (numCN > 0) {
        currentNumber.style.color = "green"
    } else if (numCN < 0) {
        currentNumber.style.color = "red"
    } else {
        currentNumber.style.color = "black"
    }
}