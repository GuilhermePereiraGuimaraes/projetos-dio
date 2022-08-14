const BASE_URL = 'https://api.thecatapi.com/v1/images/search'
const catBtn = document.getElementById('change-cat')
const catImg = document.getElementById('cat')

const getCats = async() => {
    try {
        const data = await fetch(BASE_URL)
        const json = await data.json()
        const jsonTrue = json[0]

        return jsonTrue.url
    } catch (error) {
        console.log(error.message)
    }
}

const loading = async() => {
    catImg.src = await getCats()
}

catBtn.addEventListener('click', loading)

loading()