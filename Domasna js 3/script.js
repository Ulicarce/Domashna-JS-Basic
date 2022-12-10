console.log("hello")
function sayHello(){
 console.log("Hello Pane & Radmila");
}
sayHello();

let year = prompt("enter a year")
let yearInput = parseInt(year);
let yourYear = ((yearInput-4)%12);
console.log(typeof(yourYear));

// if(yourYear = 0){
//  console.log("In the Chinese zodijac you are  Rat");
// }
// else if(yourYear = 1) {
//  console.log("In the Chinese zodijac you are Ox");
// }
// else if(yourYear = 2) {
//  console.log("In the Chinese zodijac you are Tiger");
// }
// else if(yourYear = 3) {
//  console.log("In the Chinese zodijac you are Rabbit");
// }
// else if(yourYear = 4) {
//  console.log("In the Chinese zodijac you are Dragon");
// }
// else if(yourYear = 5) {
//  console.log("In the Chinese zodijac you are Snake");
// }
// else if(yourYear = 6) {
//  console.log("In the Chinese zodijac you are Horse");
// }
// else if(yourYear = 7) {
//  console.log("In the Chinese zodijac you are Goat");
// }
// else if(yourYear = 8) {
//  console.log("In the Chinese zodijac you are Monkey");
// }
// else if(yourYear = 9) {
//  console.log("In the Chinese zodijac you are Rooster");
// }
// else if(yourYear = 10) {
//  console.log("In the Chinese zodijac you are Dog");
// }
// else if(yourYear = 11){
//  console.log("In the Chinese zodijac you are Pig");}
// else{
//   console.log("Please enter a year");
// }


switch (yourYear) {
  case 0:
  console.log("In the Chinese zodijac you are Rat");
  break;
  case 1:
  console.log("In the Chinese zodijac you are Ox");
  break;
  case 2:
  console.log("In the Chinese zodijac you are Tiger");
  break;
  case 3:
  console.log("In the Chinese zodijac you are Rabbit");
  break;
  case 4:
  console.log("In the Chinese zodijac you are Dragon");
  break;
  case 5:
  console.log("In the Chinese zodijac you are Snake");
  break;
  case 6:
  console.log("In the Chinese zodijac you are Horse");
  break;
  case 7:
  console.log("In the Chinese zodijac you are Goat");
  break;
  case 8:
  console.log("In the Chinese zodijac you are Monkey");
  break;
  case 9:
  console.log("In the Chinese zodijac you are Rooster");
  break;
  case 10:
  console.log("In the Chinese zodijac you are Dog");
  break;
  case 11:
  console.log("In the Chinese zodijac you are Pig");
  break;
  default:
  console.log("Please enter a year")
 }
