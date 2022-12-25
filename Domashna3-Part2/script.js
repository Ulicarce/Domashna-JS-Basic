function sayHello(){
 console.log("Hello Pane & Radmila");
}
sayHello();

function calculateHumanAge(){
 let inputAge = prompt("Enter dog age")
 let numberInputAge = parseInt(inputAge);
 let humanAge = numberInputAge / 7;

 if (inputAge >  0 ){
  console.log(`The human has ${humanAge}years`)
 }
  else
  (`Please enter the dog age`)
 }



function calculateDogAge(){
 let inputHumanAge = prompt("Enter human age")
 let numberInputHumanAge = parseInt(inputHumanAge)
 let dogAge = numberInputHumanAge * 7;
  if (dogAge > 0){
  console.log(`The dog has ${dogAge}years`)
  }
  else
  (`Please enter the human age`)
 }

 // calculateHumanAge();
 calculateDogAge();

