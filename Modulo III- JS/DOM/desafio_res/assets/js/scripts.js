function changeMode() {
    changeClasses()
    changeText()
}

function changeClasses() {
    BODY.classList.toggle(DARK_MODE)
    H1.classList.toggle(DARK_MODE)
    BUTTON.classList.toggle(DARK_MODE)
    FOOTER.classList.toggle(DARK_MODE)
}

function changeText() {
    if (BODY.classList.contains(DARK_MODE)) {
        H1.innerText = 'Dark Mode ON'
        BUTTON.innerText = 'Light Mode'
        return
    }
    H1.innerText = 'Light Mode ON'
    BUTTON.innerText = 'Dark Mode'
}

const DARK_MODE = 'dark-mode'
const BODY = document.querySelector("body")
const H1 = document.getElementById("page-title")
const BUTTON = document.getElementById("mode-selector")
const FOOTER = document.querySelector("footer")

BUTTON.addEventListener("click", changeMode)