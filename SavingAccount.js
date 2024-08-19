const BankAccount = require('./BankAccount')

class SavingAccount extends BankAccount{
    constructor(interestRate){
        this.interestRate = interestRate / 100
    }

    applyInterest(){
        super(balance) += (this.interestRate * super(balance))
    }
}

module.exports = SavingAccount