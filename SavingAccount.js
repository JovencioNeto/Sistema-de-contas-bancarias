const BankAccount = require('./BankAccount')

class SavingAccount extends BankAccount{
    #interestRate
    constructor(accountHolder, interestRate){
        super(accountHolder)
        this.#interestRate = interestRate
    }

    applyInterest(){
        let balance = super.getBalance()
        let interest = balance * this.#interestRate / 100
        balance += interest
        console.log(`Saldo total de ${this.getAccountHolder()}: R$${this.getBalance().toFixed(2)} | Aplicado ${this.#interestRate}% de juros`);
        console.log(`Novo saldo total: R$${balance.toFixed(2)}`);
    }
}

module.exports = SavingAccount