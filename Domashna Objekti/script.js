console.log("Hello");
function Animal(dogName,love) {
 this.dogName = dogName;
 this.love = love;
}
Animal.prototype.speak = function(message) {
console.log(this.dogName + `'veli:'${message}`)
};
const dog = new Animal('Kucheto', true);
dog.speak('Ej brat!!!');