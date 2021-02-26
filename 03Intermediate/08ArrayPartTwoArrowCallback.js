// Arrow function -->

var isEven = (element) => {
    if (element%2 === 0) {
        return true;
    }
    return false;
}

// The above code is as same as -->

var isEvenn = (element) => {
    return element%2 === 0;
}

console.log(isEven(2));
console.log(isEvenn(2));

// Now if we want to iterate over an array with any function, we
// can use Callback functions. Therefore we won't require loops
// to do this.

var result = [2,3,6,8].every(isEven);
console.log(result);

//with callback functions -->

var resultt = [2,3,6,8].every((e) => ( e%2 === 0 ));
console.log(resultt);

// The above code is as same as -->

var resulttt = [2,3,6,8].every((e) => {
    return e%2 === 0
});
console.log(resulttt);

// Whenever we put the curly braces inside a callback function, we
// ought to return something.