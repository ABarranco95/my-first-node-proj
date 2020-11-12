const {add, subtract} = require("./myModule");

let name = 'Angel Barranco'
console.log('Hello World!');

function printName(person) {
    return `Hello ${person}`;
}

console.log(printName(name));


console.log(add(5,50));
console.log(subtract(55, 155));