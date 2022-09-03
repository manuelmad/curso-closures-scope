// var
var firstName; // Declarar / undefined
firstName = 'Oscar'; // Asignar
console.log(firstName); // Oscar

var lastName = 'David'; // Declarar y asignar
lastName = 'Ana'; // reasignar
console.log(lastName); // Ana

var secondName = 'David'; // Declarar y asignar
var secondName = 'Ana'; // redeclarar y reasignar
console.log(secondName); // Ana


// let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit); // No corre
let fruit = 'Banana'; // SyntaxError: Identifier 'fruit' has already been declared
console.log(fruit); // No corre


// const
const animal = 'Dog'; // Declarar y asignar
//const animal = 'Cat'; // SyntaxError: Identifier 'animal' has already been declared
animal = 'Cat'; // TypeError: Assignment to constant variable.
console.log(animal); // No corre

const vehicles = [];
vehicles.push('Toyota');
console.log(vehicles); // [ 'Toyota' ]
vehicles.pop();
console.log(vehicles); // []