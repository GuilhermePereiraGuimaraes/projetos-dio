// @ts-check
class ContaBancaria{
    constructor (agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0 
    }
    get saldo(){
        return this._saldo
    }
    set saldo(valor){
        this._saldo = valor
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação Negada!"
        }
        this._saldo -= valor

        return this._saldo
    }
    depositar(valor) {

        this._saldo += valor
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartao){
        super(agencia, numero)
        this.tipo = 'Corrente'
        this._cartao = cartao
    }
    get cartao(){
        return this._cartao
    }
    set cartao(valor){
        this._cartao = valor
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Poupança'
    }
}
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Universitária'
    }

    sacar(valor){
        if (valor > 500 || valor > this._saldo) {
            return 'Operação negada'
        }

        this._saldo -= valor

        return this._saldo
    }
}