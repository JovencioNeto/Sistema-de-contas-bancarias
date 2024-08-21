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
const myAccount2 = new BankAccount(mary)
const myAccount3 = new SavingAccount(mary)

myAccount.deposit(500)
myAccount.withdraw(300)
myAccount.getBalance()

myAccount2.deposit(2000)
myAccount2.getBalance()
myAccount3.applyInterest(1.5)
