function calcularIdade(nome, ano) {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var idade = anoAtual - ano;
    return "Ol\u00E1 ".concat(nome, ", voc\u00EA tem ").concat(idade, " anos.");
}
console.log(calcularIdade("Guilherme", 2000));
