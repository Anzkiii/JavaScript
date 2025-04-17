

function calculator(expression){

    expression = expression.split(" ");
    var finalResult = 0;

    var operator = expression[1];
    var leftNumber = expression[0];
    var rightNumber = expression[expression.length - 1];

    if (operator == "+"){
        finalResult = leftNumber + rightNumber;
    } else if (operator == "-"){
        finalResult = leftNumber - rightNumber;
    } else if (operator == "*"){
        finalResult = leftNumber * rightNumber;
    } else if (operator == "/"){
        finalResult = leftNumber / rightNumber;
    }
    return finalResult;
};

console.log(calculator("12 - 15"))




