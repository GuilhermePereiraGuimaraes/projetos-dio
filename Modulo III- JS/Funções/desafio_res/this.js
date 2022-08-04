function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;  
}

const pessoa1 =  {
    nome: "Maria",
    idade: 78
}
const pessoa2 = {
    nome:"José",
    idade: 75
}
const animal_1 = {
    nome: "Chinaninha",
    idade: 1,
    raça: "Vira-lata"
} 

console.log(calculaIdade.call(pessoa1, 15))
console.log(calculaIdade.apply(pessoa2, [30]))
let x = calculaIdade.bind(animal_1)
console.log(x(12))