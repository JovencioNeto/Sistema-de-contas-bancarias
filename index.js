const BankAccount = require('./BankAccount')
const SavingAccount = require('./SavingAccount')

const myAccount = new BankAccount('Jonh', 1000 )
const myAccount2 = new SavingAccount('Mary', 1.5, 2000)

myAccount.deposit(500)
myAccount.withdraw(300)
myAccount.getBalance()
console.log('========================================================')
myAccount2.applyInterest()
myAccount2.withdraw(500)