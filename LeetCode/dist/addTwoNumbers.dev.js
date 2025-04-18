"use strict";

// this code doesnt work yet, i attempted to solve it but looks like ill have to learn linked lists
function reverseArray(arr) {
  var resultArray = [];
  var arrLenght = arr.length;

  for (i in arr) {
    resultArray.push(arr[arrLenght - 1]);
    arrLenght -= 1;
  }

  ;
  return resultArray;
}

;

function addTwoNumbers(l1, l2) {
  var result = 0;
  var arrayResult = [];
  l1 = reverseArray(l1);
  l2 = reverseArray(l2);
  l1 = JSON.stringify(l1).replace("]", "").replace("[", "").replace(" ", "").replace(/,/g, "");
  l2 = JSON.stringify(l2).replace("]", "").replace("[", "").replace(" ", "").replace(/,/g, "");
  result += Number(l1) + Number(l2);
  result = JSON.stringify(result);

  for (i in result) {
    arrayResult.push(Number(result[i]));
  }

  return reverseArray(arrayResult);
}

;
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));