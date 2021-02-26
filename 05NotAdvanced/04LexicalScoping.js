// This is Lexical Scoping
function init() {
    var firstName = "abhinav";
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName();
}

init();

console.log(firstName);

// It won't log the firstName because it is not in the scope of it and the execution context of init and sayFirstName are already out and we are in the global execution context.
// This can be achieved if we assign the function to a variable.
// This can be achieved with closures which is a little tricky and we'll learn in the next file.
