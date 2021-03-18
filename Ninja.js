class Ninja{
    constructor(name, health){
        this.name = name
        this.health = health
        this.strength = 3
        this.speed = 3
    }
    sayName(){
        console.log(`This ninjas name is ${this.name}`);
    }
    showStats(){
        console.log(`Ninja ${this.name}'s speed is ${this.speed}, their strenght is ${this.strength} and their health is ${this.health}`);
    }
    drinkSake(){
        this.health += 10
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name,health = 200, strength = 10, speed = 10, wisdom = 10){
        super(name,health,strength,speed);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();

superSensei.speakWisdom();
superSensei.showStats();

const ninja1 = new Ninja ("Brenda", 100);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();




