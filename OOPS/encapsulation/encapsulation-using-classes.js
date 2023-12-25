class BankAccount {

    constructor(accountNumber, accountHolderName, balance) {
        this._accountNumber = accountNumber;
        this._accountHolderName = accountHolderName;
        this._balance = balance;
    }

    // method
    showAccountDetails() {
        console.log(`Account Number: ${this._accountNumber}`);
        console.log(`Account Holder Name: ${this._accountHolderName}`);
        console.log(`Balance: ${this._balance}`);
    }

    deposit(amount) {
        this._balance += amount;
        this.showAccountDetails();
    }

    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            this.showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }
}

let myBankAccount = new BankAccount("123456", "utkarsh", 1000);
myBankAccount.deposit(500);  