// class User{
//     constructor(){
//         this.name = "Brenda"
//         this.email = "brenda.garcia1113@gmail.com"
//         this.accountbalance = 0
//     }

// }
// const guido = new User();
// const monty = new User();

// guido.name = "Guido";
// monty.name = "Monty";

// console.log(guido.name);	// output: Michael
// console.log(monty.name);	// output: Michael


class User {
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
        return 
    }
}

const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
console.log(guido.name);	// output: Guido van Rossum
console.log(monty.name);	// output: Monty Python



guido.makeDeposit(100)
guido.makeDeposit(200)
monty.makeDeposit(50)
console.log(guido.accountBalance)	// output: 300
console.log(monty.accountBalance)	// output: 50