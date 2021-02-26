// * For all regular function calls, this points to Window object/global object/(in case of node)Global Empty object.

console.log(this);

var user = {
    firstName : "Abhinav",
    lastName : "Mukherjee",
    courseCount : 4,
    getCourseCount : function () { //Not a regular function, function is a part of the object.
        console.log("LINE 10", this);
        //Regular Function -->
        function sayHello() { // Returns Global object. Because it is normal regular function.
            console.log("Hello");
            console.log("LINE 14", this);
        }
        //Regular Function call -->
        sayHello();
    }
}

user.getCourseCount(); //Not a regular function call. Function getting called from an object. Therefore, this returns the object.

//Regular Function -->
function sayHello() {
    console.log("Hello");
}
//Regular Function call -->
sayHello();