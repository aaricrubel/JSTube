// Destructuring doesn't only happen in Objects
// Data type on the rhs should be on the lhs and then **probably** you can do destructuring

const user = ["abhinav", 3, "admin"]
console.log(user[1]);

var role = user[2];
var name = user[0];
console.log(role);

var [name, courseCount, role] = user;
console.log(role);

const myUser = {
    firstName: "abhinav",
    courses: 5,
    rolee: "admin"
};

console.log(myUser.courses);

// Destructure -->

// const {namee, ccourseCount, rrole} = myUser;
// console.log(ccourseCount);
// will give undefined. Identifiers should also match.

const {firstName, courses, rolee} = myUser;
// console.log(ccourseCount);