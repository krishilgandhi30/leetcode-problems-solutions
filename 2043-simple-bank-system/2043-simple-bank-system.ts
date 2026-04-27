class Bank {
    private balances: number[];
    private n: number;

    constructor(balance: number[]) {
        this.balances = balance;
        this.n = balance.length;
    }

    private isValidAccount(account: number): boolean {
        return account >= 1 && account <= this.n;
    }

    transfer(account1: number, account2: number, money: number): boolean {
        // Validate both accounts and the balance of the sender
        if (
            this.isValidAccount(account1) && 
            this.isValidAccount(account2) && 
            this.balances[account1 - 1] >= money
        ) {
            this.balances[account1 - 1] -= money;
            this.balances[account2 - 1] += money;
            return true;
        }
        return false;
    }

    deposit(account: number, money: number): boolean {
        if (this.isValidAccount(account)) {
            this.balances[account - 1] += money;
            return true;
        }
        return false;
    }

    withdraw(account: number, money: number): boolean {
        if (this.isValidAccount(account) && this.balances[account - 1] >= money) {
            this.balances[account - 1] -= money;
            return true;
        }
        return false;
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */