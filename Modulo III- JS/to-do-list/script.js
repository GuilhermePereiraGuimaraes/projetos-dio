function add_task(a) {
    let txt = a.parentElement.children[0]
    let ul = document.getElementById("task_list")

    let li = document.createElement("li")
    let check = document.createElement("input")
    check.type = "checkbox"
    check.addEventListener("click", check_f)
    let p = document.createElement("p")
    p.innerHTML = txt.value

    ul.appendChild(li)
    li.appendChild(check)
    li.appendChild(p)
}

function check_f(checkBox) {
    let c = checkBox.target
    let p = c.parentElement.children[1]
    if (c.checked == true) {
        p.classList.add("p_checked")
    } else {
        p.classList.remove("p_checked")
    }    
}