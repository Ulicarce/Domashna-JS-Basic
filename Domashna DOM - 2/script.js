console.log("Hello");
const numbers = [1,2,3,4,5,6,7];
const list = document.createElement("ul");
let sum = 0;
for(let i = 0; i < numbers.length; i++){
 sum += numbers[i];
 const item = document.createElement("li");
 const text = document.createTextNode(numbers[i]);
 item.appendChild(text);
 list.appendChild(item);
}
document.body.appendChild(list);
const sumText = document.createTextNode("Zbirot na site broevi 1+2+3+4+5+6+7 =" + sum);
document.body.appendChild(sumText);