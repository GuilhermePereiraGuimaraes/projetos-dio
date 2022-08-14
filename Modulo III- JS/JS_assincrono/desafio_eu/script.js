let botao = document.getElementById("botao")
botao.addEventListener('click', buttonChange)


async function buttonChange(){
    let img= document.getElementById("cat_img")
    await fetch('https://api.thecatapi.com/v1/images/search',{
        method: 'GET',
        cache: 'no-cache',
        mode: "cors",
    })
        .then(response => response.json())
        .then(function(json){
            var obj = json[0]
            return obj
        })
        .then(function(obj){
            var {url} = obj
            img.src = url
        })
        .then(url => sUrl = url)
        .catch(err => console.log(err))
}