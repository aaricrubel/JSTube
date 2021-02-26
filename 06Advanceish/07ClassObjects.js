// import User from "./06ClassJS";

const User = require("./06ClassJS");

const abhinav  = new User("abhinav", "ab@wx.yz");

console.log(abhinav.getinfo().email);
abhinav.enrollCourse("React Bootcamp");

console.log(abhinav.getCourseList());

let courses = abhinav.getCourseList();

courses.forEach((c) => console.log(c));