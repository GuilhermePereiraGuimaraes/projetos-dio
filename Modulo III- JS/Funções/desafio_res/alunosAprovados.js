const alunos = [
    {
        nome: "Pedro",
        nota: 7.8,
        turma:"1B"
    }
    ,
    {
        nome: "Guilherme",
        nota: 10,
        turma:"3D"
    }
    ,
    {
        nome: "Joana",
        nota: 5,
        turma:"2C"
    }
]

function alunosAprovados(arr, media){
    let aprovados = []
    for (let i = 0; i < arr.length; i++) {
        const {nome, nota} = arr[i]
        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

// function test(x) {
//     if (x<10) {
//         console.log(x)
//         return test(x+=1)
//     }
//     return x
// }
// console.log(test(3))
console.log(alunosAprovados(alunos, 7))