class BankAccount{
    #balance
    #accountHolder
    constructor(user){
        this.#balance = 0
        this.#accountHolder = user.accountHolder
    }

    deposit(amount){
        this.#balance += amount
        console.log(`${this.#accountHolder} depositou R$${amount.toFixed(2)} | Saldo total : R$${this.#balance.toFixed(2)}`)
    }
    withdraw(amount){
        if(this.#balance >= amount){
            this.#balance -= amount
            console.log(`${this.#accountHolder} sacou R$${amount.toFixed(2)} | Saldo total : R$${this.#balance.toFixed(2)}`)
        }else{
            console.log('Seu saldo bancário é insuficiente para descontar esse montante!')
        }
    }
    getBalance(){
        return this.#balance
    }
    getAccountHolder(){
        return this.#accountHolder
    }
}

module.exports = BankAccount