function greeting() {
    let name = "Alexis";

    return function displayGreeting() {
        return `Hello ${name}`;
    };
}

const greet = greeting();
console.log(greet);
console.log(greet());
