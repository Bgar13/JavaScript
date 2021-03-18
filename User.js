class User{
    constructor(username, emailAddress) {  // here's what we have so far       
        this.name = username      
        this.email = emailAddress  
        this.accountBalance = 0
    }
    makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
    }
    makeWithdraw(amount){
        this.accountBalance -= amount;
    }
    displayBalance(){
        return this.name + ",Balance:"+ this.accountBalance;
    }
}

const Brenda = new User("Brenda","brenda@gmail.com");
const cinnamon = new User("Cinnamon","cinnamon@gmail.com");
console.log(cinnamon.name);
console.log(cinnamon.email);
console.log(Brenda.name);
console.log(Brenda.email);

Brenda.makeDeposit(1000);
cinnamon.makeDeposit(1000);
cinnamon.makeDeposit(1000);
cinnamon.makeDeposit(1000);
console.log(Brenda.displayBalance());
console.log(cinnamon.displayBalance());

Brenda.makeWithdraw(50);
cinnamon.makeWithdraw(50);

console.log(Brenda.displayBalance());
console.log(cinnamon.displayBalance());
