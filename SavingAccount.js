const BankAccount = require('./BankAccount')

class SavingAccount extends BankAccount{
    constructor(interestRate){
        this.interestRate = interestRate / 100
    }

    applyInterest(){
        const balance = super.getBalance()
        balance += (this.interestRate * balance)
        console.log(`Aplicado ${interestRate}% de juros`)
        console.log(``)
    }
}

module.exports = SavingAccount