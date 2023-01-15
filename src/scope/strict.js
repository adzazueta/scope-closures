function myFunction() {
    foo = "foo";
    return foo;
}

function myStrictFunction() {
    "use strict";
    baz = "baz";
    return baz;
}

console.log(myFunction()); // "foo"
console.log(myStrictFunction()); // Reference error: pi is not defined
