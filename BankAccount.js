class BankAccount{
    #balance
    #accountHolder
    constructor(user){
        this.#balance = 0
        this.#accountHolder = user.accountHolder
    }

    deposit(amount){
        this.#balance += amount
    }
    withdraw(amount){
        if(this.#balance >= amount){
            this.#balance -= amount
        }else{
            console.log('Seu saldo bancário é insuficiente para descontar esse montante!')
        }
    }
    getBalance(){
        console.log(`Seu saldo atual é ${this.#balance}`)
    }
    getAccountHolder(){
        console.log(`O nome do usuário da conta é ${this.#accountHolder}`)
    }
}

module.exports = BankAccount