console.log("hello")
function sayHello(){
 console.log("Hello Pane & Radmila");
}
sayHello();

let money = prompt("enter a money")
let moneyInput = parseInt(money);
let yourMoney = (100000 - moneyInput);
// console.log(typeof(yourMoney));

if (yourMoney > 0){
  console.log("You still have money")}
else {
  console.log("Not enough money")
}
