
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
let symbolArray = [star, blueberry, strawberry, bomb, seven, key, box];
const gambler = new Person("Edward")

function deposit(person){
    let depositAmount = parseFloat(input(`Hi, ${person.name}! How much $ would you like to deposit into your account? `))
    if (isNaN(depositAmount) || depositAmount <= 0){
        throw new Error("Enter a valid number please!")
    }
    person.balance += depositAmount;
    console.log(`${person.name}, you successfuly deposited ${depositAmount}$`);
}

function determinePayout(person, array, bet){

    let reelDictMultipliers = {"⭐":5, "🫐": 3, "🍓": 3, "💣": 10, "7️⃣":15, "🔑":10 ,"🎁":15}
    
    for (subArray in array){

        for (symbol in symbolArray){
            if (array[subArray].every(x => symbolArray[symbol] == x)){
                let winningSymbol = array[subArray][0]
                bet *= parseInt(reelDictMultipliers[winningSymbol])

                person.balance += bet
                console.log(`You won on line ${parseInt(subArray) + 1} with ${symbolArray[symbol]}. You have ${person.balance} dollars left`);
            } 
            if (array[subArray][0] == symbolArray.at(-2) && array[subArray][1] == symbolArray.at(-1) && array[subArray][2] == symbolArray.at(-2)){
                bet *= 150;
                person.balance += bet
                console.log(`CONGRATULATIONS YOU WON 150X!!! YOU NOW HAVE: ${person.balance} dollars`);
            }
        
        }  
    }
    person.balance -= bet;
    console.log(`You lost: ${bet}, you have ${person.balance} dollars left`); 
    
    return gamble(person)
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
    let linesArray = new Array(lines).fill([]).map(() => [])


    for (arr of linesArray){
        for (x = 0; x <= 2; x++){
            arr.push(symbolArray[Math.floor(Math.random()*symbolArray.length)])
        }
    }

    for (x of linesArray){
        console.log(x);
    }
    determinePayout(person, linesArray, bet)

    
    

}

deposit(gambler)

gamble(gambler)