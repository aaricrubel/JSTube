// In JS, if and else are not actually considered a scope but a function is strictly considered a scope.
// Global Context - Big Guy
// Execution Context - Small Guy
// Execution Context on top of that - Smaller Guy
// and so on
// It's like stack memory.
// See examples below
// https://youtu.be/vGGOOYOXoQ4

var name = "abhinav";

console.log("Line Number 12", name);

sayName();

function sayName() {
    var name = "abhinav mukherjee";
    console.log("Line Number 18", name);
    sayNametwo();
    function sayNametwo() {
        console.log("Line Number 21", name);
    }

sayNameAgain();

}
function sayNameAgain() {
    console.log("Line Number 28", name);
    sayNametwoAgain();
    function sayNametwoAgain() {
        console.log("Line Number 31", name);
    }

}