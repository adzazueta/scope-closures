// Variables

var a; // Declaration
var b = "b"; // Declaration and Assignment
b = "bb"; // Re-Assignment
var a = "aa"; // Re-Declaration

// Global Scope
var fruit = "Apple"; // global
console.log(fruit); // "Apple"

function bestFruit() {
    console.log(fruit); // "Apple"
}

bestFruit();

function countries() {
    country = "Mexico"; // global
    console.log(country); // "Mexico"
}

countries();
console.log(country); // "Mexico"
