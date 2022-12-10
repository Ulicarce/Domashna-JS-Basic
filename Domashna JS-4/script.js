
function sayHello(){
 console.log("Hello Pane & Radmila");
}
sayHello();

// 4 functions
console.log("---4 functions---")
// Sum
function sumNumbers(num1, num2) {
 let result = num1 + num2;
 return result;
}
let resultSum = sumNumbers(18,24);
console.log("Тhe sum of the numbers is:",resultSum);
// Subtracts
function subtractsNumbers(num1, num2) {
 let result1 = num1 - num2;
 return result1;
}
let resultSubtracts = subtractsNumbers(24,13);
console.log("The difference of the numbers is:",resultSubtracts);
// Multiplies
function multipliesNumbers(num1, num2) {
 let result2 = num1 * num2;
 return result2;
}
let resultMultiplies = multipliesNumbers(4,5);
console.log("The multiplies of the numbers is:",resultMultiplies);
// Divide
function divideNumbers(num1, num2){
 let result3 = num1 / num2;
 return result3;
}
let resultDivided = divideNumbers(25,5);
console.log("The divided of the numbers is:",resultDivided);


// STUDENT EXERCISE - #2
console.log("----STUDENT EXERCISE - #2------")

let input = prompt("Please write Celsius");
let numberInput = parseInt(input);
console.log("Fahrenheit is:",numberInput * 1.8 + 32);

let input1 = prompt("Please write Fahrenheit");
let numberInput1 = parseInt(input1);
console.log("Celsius is:",(5/9) * (numberInput1-32));