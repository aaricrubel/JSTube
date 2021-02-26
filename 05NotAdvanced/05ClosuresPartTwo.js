function doAddition(x) {
    return function (y) {
        return x+y;
    };
}

var add5 = doAddition(4); // Returns a reference to y function. add5 holds a reference.
console.log(add5(5)); // Now gets executed.

// We can also do -->

// doAddition(4)(5); // Because of closure and memory working of JS //Curring
// Therefore

console.log(doAddition(4)(5));