// Function Scope
function greeting() {
    var userName = "Alexis"; // function
    console.log(userName); // "Alexis"

    if (userName === "Alexis") {
        console.log(`Hello ${userName}`); // "Hello Alexis"
    }
}

greeting();
console.log(userName); // ReferenceError: userName is not defined
