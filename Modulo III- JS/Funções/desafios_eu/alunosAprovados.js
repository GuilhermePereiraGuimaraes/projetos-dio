function aprovados(alunos, mediaF) {
    let alunosAprovados = []

    for (let index = 0; index < alunos.length; index++) {
        let {nota, nome} = alunos[index]
        if (nota >= mediaF) {
            alunosAprovados.push(nome)
        }        
    }

    return console.log(`Os alunos aprovados são ${alunosAprovados.join(", ")}`)
}
aprovados([{nome:"Francisco", nota: 10}, {nome:"Andreza", nota: 7.5}, {nome:"Carlos", nota: 8}, {nome:"Guilherme", nota: 3}], 7)