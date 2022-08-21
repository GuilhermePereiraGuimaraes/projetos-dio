interface ICalcularIdade{
    nome: string,
    ano: number,
    profissao?: string
}

function calcularIdade({
    nome, 
    ano, 
    profissao
    }: ICalcularIdade): string {
    const data = new Date()
    const anoAtual = data.getFullYear()
    const idade: number = anoAtual - ano

    if (profissao) {
        return `Olá ${nome}, você tem ${idade} e sua profissão é: ${profissao}.`
    }
    return `Olá ${nome}, você tem ${idade} e não tem profissão.`
}

const nome ='Guilherme'
const ano = 2000
const profissao = 'Programador'

// console.log(calcularIdade({nome: "Guilherme", ano: 2000}))
console.log(calcularIdade({nome, ano, profissao}))
