// var nameOfDog; // hoisting

console.log(nameOfDog); // undefined
var nameOfDog;
// console.log(nameOfDog); // Elmo

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';

// El mejor perrito es undefined

var elmo;

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

nameOfDog();

// Examen
const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        const fruit2 = 'banana';
        let fruit3 = 'kiwi';
    }
}