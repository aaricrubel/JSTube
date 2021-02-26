const abhinav = {
    firstName: "Abhinav",
    lastName: "Mukherjee",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses.
        `);
    }
};

/* Like length and breadth properties get attached to arrays, similarly
here also many proto properties get attached to this object. One such method is bind */

const dj = {
    firstName : "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4
}; // There is no getInfo method here.

abhinav.getInfo();
// Now we are going to borrow the method using bind.
// If we somehow point the getInfo in abhinav to dj, obviously without copying it, we can use the getInfo method inside dj also.
// We will do that using bind. Bind binds the object but we can change the reference to.
// Now, bind gives us a reference back. So, to borrow,
// abhinav.getInfo.bind(dj);
// We got back the reference now.
// So now to run it, there are two ways of running this like closures -->
abhinav.getInfo.bind(dj)();
//OR
var djInfo = abhinav.getInfo.bind(dj);
djInfo();

//*Bind always gives a reference back. We have to run that reference.
// There's also a property called 'call'. It's similar to bind. Read more about it on MDN.