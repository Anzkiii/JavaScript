"use strict";

var continuousArray = [1, 2, 3, 4, 5];

while (continuousArray[continuousArray.length - 1] != 1000) {
  console.log(continuousArray);
  continuousArray.push(continuousArray[continuousArray.length - 1] + 1);
  continuousArray.shift();
}

;