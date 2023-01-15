// Block Scope
function fruits() {
    if (true) {
        var fruit1 = "Apple"; // Function Scope
        let fruit2 = "Kiwi"; // Block Scope
        const fruit3 = "Banana"; // Block Scope
    }

    console.log(fruit1); // "Apple"
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined
}

fruits();
