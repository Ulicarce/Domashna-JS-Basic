console.log("hello")
const elements = document.querySelectorAll('p, h1, h3');
for (let i = 0; i < elements.length; i++) {
 elements[i].textContent = 'Ovoj tekst e promenet'
}
