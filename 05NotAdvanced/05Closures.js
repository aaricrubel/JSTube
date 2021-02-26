function init() {
    var firstName = "abhinav";
    console.log("I am init");
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName; // A reference to sayFirstName
}

// Therefore , the execution context doesn't exit because the reference to sayFirstName is still there and init also stays after execution.

var toReturn = init();

toReturn(); //This is the closure.
// This closure will now print the firstName.