var user = {
    firstName : "Abhinav",
    lastName : "Mukherjee",
    loginCount : 444,
    isSignedIn : true,
    facebookAuth : true,
    role : "admin",
    courseList : [],
    //this keyword is used to talk about the certain object inside this scope. It is like user.courseList but we can't write
    //it like that because we are inside it only. Therefore we use 'this' to refer to that variable/object.
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in a total of ${this.courseList.length} courses`; 
    },
    information : function() {
        return `A total of these ${this.courseList} courses, is given to Facebook Authenticated ${this.facebookAuth},
        ${this.firstName} ${this.lastName} who is signed in -->  ${this.isSignedIn} with a login count of
        ${this.loginCount} and has the role of ${this.role}.`
    }
}

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
user.buyCourse("Vue Course");
console.log(user.getCourseCount());
console.log(user.information());