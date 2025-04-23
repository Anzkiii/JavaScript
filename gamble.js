
const prompt = require("prompt-sync")();

class Gambler{
    constructor(){
        this.balance = 0;
    }
}

const gambler = new Gambler()
function deposit(person){
    console.log(`Current balance: $${person.balance}`);
    const amount = prompt("how much $$$ would you like to deposit: ")
    if (isNaN(amount) || amount <= 0){
        console.log("Please enter a valid amount.");
        deposit(person);
    } else {
        person.balance += parseInt(amount);
    }
}

function numberOfLines(person){

    const amount = prompt("how many reels would you like to play on: ")
    if (isNaN(amount) || amount <= 0 || amount > 3){
        console.log("Please enter a valid amount.");
        numberOfLines(person);
    } else{
        return parseInt(amount);
    }
}

function bet(person){

    const bet = prompt("How much $$$ would you like to bet: ")
    if (isNaN(bet) || bet <= 0 || bet > person.balance){
        console.log("Please bet a valid amount")
        bet(person)
    } else{
        person.balance -= parseInt(bet);
        const amountOfLines = numberOfLines(person)
        spinTheSlot(person, parseInt(bet), amountOfLines)
    }
}

function spinTheSlot(person, amount, amountOfLines){



}

deposit(gambler)
bet(gambler)





