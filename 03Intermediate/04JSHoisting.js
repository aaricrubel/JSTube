// Two rules of Execution Context - 

// 1. Function declarations are scanned and made available.
// 2. Variable declarations are scanned and made undefined.

tipper("80");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill+5);
}

// Variable declarations are scanned and made undefined.

//bigTipper("400");

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill+15);
}

bigTipper("200");

// Variable declarations are scanned and made undefined.

console.log(name);
var name = "abhinav"

function sayName() {
    var name = "Mr. A"
    console.log(name);
}
sayName();

console.log(name);