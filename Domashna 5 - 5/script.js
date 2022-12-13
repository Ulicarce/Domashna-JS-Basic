function sayHello(){
 console.log("Hello Pane & Radmila");
}
sayHello();

const array = [1,4,3,7,6];

console.log(`Min number is ${Math.min(...array)}`);
console.log(`Max number is ${Math.max(...array)}`);

sum = array.reduce((a,b) => a + b,0);
console.log(`Sum of the numbers is ${sum}`);