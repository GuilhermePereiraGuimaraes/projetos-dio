function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;  
}
const pessoa1 = {
    nome: "Carlos",
    idade: 27,
}
const pessoa2 = {
    nome: "Guilherme",
    idade: 22,
}
console.log(calculaIdade.apply(pessoa1,[21]))
console.log(calculaIdade.call(pessoa2, 7))