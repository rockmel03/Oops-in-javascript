class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount < 0) throw new Error("deposit amount should be positive");

    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

const account1 = new BankAccount();
account1.deposit(100);

console.log(account1.getBalance());
