function createBankAccount() {
  let balance = 0; 

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}`);
    },

    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },

    getBalance() {
      return balance;
    }
  };
}
const acount = createBankAccount();
account.deposit(500);       
account.withdraw(200);     
account.withdraw(400);      
console.log(account.balance); 
console.log(account.getBalance()); 
///
function createBankAccount() {
  let balance = 0;                    
  let transactionHistory = [];        

  return {
    deposit(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },

    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        transactionHistory.push(`Failed withdrawal: ${amount}`);
        console.log("Insufficient balance");
      }
    },

    getBalance() {
      return balance;
    },

    getHistory() {
      return [...transactionHistory]; 
    }
  };
}

const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);

console.log(account.getBalance());  
console.log(account.getHistory());
