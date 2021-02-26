// ...args ... followed by a variable name is the spread operator and the rest operator, depending on the circumstances.
// ... spread operator takes a group like array or object or any other format and spreads it into multiple values.
// ...args is an array and used to have unlimited parameters and we use it as a single parameter inside a function. It is the rest operator.
// Rest is almost the opposite of spread and what it does is it takes individual items and bunch them together into an array when we pass it into a function.
// If we want multiple operations, we just put them into the parameters as comma separated values and then for the rest of the values we use ...args

var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
console.log(myObj);

function sumOne(a, b) {
    return a + b;
}
    
var myA = [5, 4];
console.log(sumOne(...myA)); // spread Operator

function sumTwo(...args) {
    console.log(args);
    let summ = 0;
    for (const argg of args) {
        summ += argg;
    }
    return summ;
}
function sumThree(a, b, ...argss) {
    console.log(argss);
    let multi = a * b;
    let sum = 0;
    for (const arg of argss) {
        sum += arg;
    }
    return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 1, 1));
console.log(sumThree(2, 3, 1, 1, 1));