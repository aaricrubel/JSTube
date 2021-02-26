// * Important array functions for speedy operations

var number = [2,4,5,8,21,33,211,234,543];

// !Start point of a range is always inclusive and end point is always exclusive.

console.log(number.fill("empty", 3, 7));

const myNumber = [23,89,65,46,77,890,234,32,12];

const result = myNumber.filter((element) => (element > 100))
console.log(result);

// Slice and Splice functions

var users = ["Tim", "Tom", "Ting", "Tong", "Him", "Her", "He", "She"];
// Two values --> start and end point of slicing. Start inclusive and end exclusive. Return the sliced part.
console.log(users.slice(1,3));

var usersTwo = ["Tim", "Tom", "Ting", "Tong", "Him", "Her", "He", "She"];
// One value --> Slice off upto that index, i.e. remove everything before the given index and return the rest of the array.
console.log(usersTwo.slice(2));

// Splicing -->

var usersThree = ["Tim", "Tom", "Ting", "Tong", "Him", "Her", "He", "She"];
// Splicing --> start with first parameter, count n times (n == second parameter) and replace the selection
// with all the consecutive parameters
usersThree.splice(1,3,"HI", "BYE")
console.log(usersThree);

// !If we do the splicing inside the console log, then it acts as slice with two parameters.