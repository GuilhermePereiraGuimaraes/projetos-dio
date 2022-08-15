const BASE_URL = 'https://dog.ceo/api/breeds/image/random'
const img = document.getElementById('dog_img')
const btn = document.getElementById('botao')

const fet = async () => {
    try {
        const data = await fetch(BASE_URL)
        const json = await data.json()

        return json.message

    } catch (error) {
        console.log(error.message)
    }
}
const load = async () => {
    img.src = await fet()
}

load()

btn.addEventListener('click', load)