class ContaBancaria {
    constructor(cliente, agencia, conta, tipo)
    {
        this.cliente = cliente;
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this._saldo = 0;
    }

    sacar (valor) {
        if (valor > this.saldo) {
            console.log("Operação negada, saldo insuficiente");
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar (valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    set saldo (valor) {
        this._saldo = valor;
    }

    get valor () {
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor (cliente, agencia, conta, cartaoCredito) {
        super(cliente, agencia, conta);
        this.tipo = "Corrente";
        cartaoCredito = true;
    }
    set cartaoCredito (valor) {
        this._cartaoCredito = valor;
    }
    get cartaoCredito () {
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (cliente, agencia, conta) {
        super(cliente, agencia, conta);
        this.tipo = 'Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor (cliente, agencia, conta) {
        super(cliente, agencia, conta);
        this.tipo = 'Universitária';
    }

    sacar (valor) {
        if (valor > 500) {
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const minhaConta = new ContaCorrente('Kassio', '0001', 00145236, true);

minhaConta.depositar(198.556).toFixed(3);

console.log(minhaConta);



