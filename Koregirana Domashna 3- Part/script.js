console.log("hello")
function sayHello(){
 console.log("Hello Pane & Radmila");
}
sayHello();

function calculate(){
let input = 100000;
let money = prompt("enter a money")
let moneyInput = parseInt(money);
let yourMoney = (input - moneyInput);
if (yourMoney > 0){
  console.log("You still have money")}
else {
  console.log("Not enough money")
}
}
calculate();