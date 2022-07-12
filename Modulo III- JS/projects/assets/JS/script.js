window.onload = function(){
    var count = document.getElementById("count")
    let sum = document.getElementById("sum")
    let sub = document.getElementById("sub")

    
    sum.addEventListener("click", somar)
    sub.addEventListener("click", subtrair)
}

function somar(e) {
    let num = Number(count.innerText)
    num++
    count.innerText = num
    mudar()

    if (num >= 20) {
        e.target.disabled = true
    } else {
        e.target.disabled = false
    }
    document.getElementById("sub").disabled = false
}

function subtrair(e) {
    let num = Number(count.innerText)
    num--
    count.innerText = num
    mudar()

    if (num <= -10) {
        e.target.disabled = true
    } else {
        e.target.disabled = false
    }
    document.getElementById("sum").disabled = false
}

function mudar() {
    let num = Number(count.innerText)
    if (num > 10) {
        count.style.color = "green"
    } else if (num < 0){
        count.style.color = "red"
    } else{
        count.style.color = "black"
    }
}