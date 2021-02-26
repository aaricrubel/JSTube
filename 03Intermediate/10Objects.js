// Objects are like the spinal cord of JS. We mostly use objects to store data. Most APIs also rely on this.

var user = {
    firstName : "Abhinav",
    lastName : "Mukherjee",
    loginCount : 444,
    isSignedIn : true,
    facebookAuth : true,
    role : "admin"
}

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 123
console.log(user.loginCount);

console.log(user);
console.table(user);