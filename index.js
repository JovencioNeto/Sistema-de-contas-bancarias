const BankAccount = require('./BankAccount')
const SavingAccount = require('./SavingAccount')

const jonh = {
    accountHolder: 'Jonh'
}

const mary = {
    accountHolder: 'Mary',
    interestRate: 1.5
}

const myAccount = new BankAccount(jonh)
const myAccount2 = new SavingAccount(mary, mary.interestRate)

myAccount.deposit(500)
myAccount.withdraw(300)
myAccount.getBalance()
console.log('========================================================')
myAccount2.deposit(2000)
myAccount2.applyInterest()
myAccount2.withdraw(500)