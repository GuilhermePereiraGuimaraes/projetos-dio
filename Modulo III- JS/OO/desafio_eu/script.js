class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = saldo
    }
    get saldo(){
        return this._saldo
    }
    set saldo(val){
        this._saldo = val
    }
    sacar(valor){
        this._saldo -= valor 
    }
    depositar(valor){
        this._saldo += valor
    }
}

class contaCorrente extends ContaBancaria{
    constructor(cartao, tipo = "Conta Corrente"){
        super("001", "02", 1000)
        this.cartao = cartao
        this.tipo = tipo
    }
}

class contaPoupanca extends ContaBancaria{
    constructor(){
        super("001", "02", "Conta Poupança", 1000)
    }

}

class contaUniversitaria extends ContaBancaria{
    constructor(){
        super("001", "02","Conta Universitária", 1000)
    }
    sacar(valor){
        if (valor >= 500) {
            return 'Operação não permitida'
        }
        this._saldo -= valor
    }

}

let a = new contaCorrente('Master Card')
let b = new contaUniversitaria()
a.sacar(100)
b.sacar(500)
a.depositar(300)
console.log(a.tipo)
console.log(b.saldo)