var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Maharashtra", "Assam");

console.log(states[1]);

console.log(states.length);
states[0] = "Punjab";
console.log(states);

var user = ["abhinav", "abhinav@mukherjee.dev", 3, 34, true];
console.log(user);

user.pop();
user.pop();
console.log(user);
user.unshift("NEW VALUE");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("abhinav"));
console.log(user.indexOf("newwwwy"));

console.log(Array.from("abhinav"));