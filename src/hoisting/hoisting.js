// VAR
console.log(nameOfDog); // undefined - nameOfDog is declared but value is undefined
var nameOfDog = "Jojo";
console.log(nameOfDog); // "Jojo

// FUNCTION
bestDog();

function bestDog() {
    console.log(`The best dog is ${jojo}`); // "The best dog is undefined" - function is whole hoisted, for jojo only the declaration is hoisted, the value is undefined
}

var jojo = "Jojo";
