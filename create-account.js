function createAccount(pin, amount = 0) {
    return ({
        checkBalance(accountPin) {
            if (accountPin === pin) {
                return (`$${amount}`);
            }
            return ("Invalid PIN.");
        },
        deposit(accountPin, depositAmount) {
            if (accountPin === pin) {
                amount += depositAmount;
                return (`Succesfully deposited $${depositAmount}. Current balance: $${amount}.`);
            }
            return ("Invalid PIN.");
        },
        withdraw(accountPin, withdrawalAmount) {
            if (accountPin === pin) {
                if (amount >= withdrawalAmount) {
                    amount -= withdrawalAmount;
                    return (`Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`);
                }
                return ("Withdrawal amount exceeds account balance. Transaction cancelled.");
            }
            return ("Invalid PIN.");
        },
        changePin(oldPin, newPin) {
            if (oldPin === pin) {
                pin = newPin;
                return ("PIN successfully changed!");
            }
            return ("Invalid PIN.");
        }
    });
}

module.exports = { createAccount };
