
let input = require("prompt-sync")()

class Person{
    constructor(name, balance = 0){
        this.name = name
        this.balance = balance;
    }
}

// Symbols: stars, blueberries, strawberries, bombs, 7s, keys, boxes
let star = "⭐"
let blueberry = "🫐"
let strawberry = "🍓"
let bomb = "💣"
let seven = "7️⃣"
let key = "🔑"
let box = "🎁"

const gambler = new Person("Edward")

function deposit(person){
    let depositAmount = parseFloat(input(`Hi, ${person.name}! How much $ would you like to deposit into your account? `))
    if (isNaN(depositAmount) || depositAmount <= 0){
        throw new Error("Enter a valid number please!")
    }
    person.balance += depositAmount;
    console.log(`${person.name}, you successfuly deposited ${depositAmount}$`);
}

function determinePayout(person, array){

    let counter = 0;

    

}

function gamble(person){
    let bet = parseFloat(input(`How much $ would you like to bet? `))
    if (isNaN(bet) || bet <= 0 || bet > person.balance){
        throw new Error("Enter a valid number please!")
    }

    let lines = parseFloat(input(`How many lines would you like to play on? `))
    if (isNaN(lines) || lines <= 0 || lines >= 4){
        throw new Error("Enter a valid number please!")
    }
    person.balance -= bet;

    let linesArray = new Array(lines).fill([]).map(() => [])


    let symbolArray = [star, blueberry, strawberry, bomb, seven, key, box];

    for (arr of linesArray){
        for (x = 0; x <= 2; x++){
            arr.push(symbolArray[Math.floor(Math.random()*symbolArray.length)])
        }
    }
    determinePayout(person, linesArray)
    

}

deposit(gambler)

gamble(gambler)