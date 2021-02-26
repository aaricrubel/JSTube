console.log(name);

var name = "Abhinav";

// The above code would log an undefined.
// But if we use let, it will give us an error which is quite useful in backend rather than undefined.

// Javascript considers functions as scope rather than braces in other languages.

if (true) {
    var lastName = "Mukherjee"
}
console.log(lastName);
// It will display and print out the last name because braces are not scope in JS
// Therefore we use 'let' to define a variable inside braces and they go away like other languages when we come out of the braces.