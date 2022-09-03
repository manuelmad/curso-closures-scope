// Variables

var a; // declarando
var b = 'b'; // declarando y asignando
b = 'bb'; // reasignando
var a = 'aa'; // redeclaración

// GLobal Scope
var fruit = 'Apple'; // global
.console.log(fruit); // 'Apple'

function bestFruit() {
    console.log(fruit);
}

bestFruit(); // 'Apple'

function countries() {
    country = 'Colombia';
    console.log(country);
}

countries(); // 'Colombia'
console.log(country); // 'Colombia'