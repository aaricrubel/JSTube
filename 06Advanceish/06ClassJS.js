// Classes are blueprints. Contains constructors. By default, blank.

class User {
    // Even if we don't declare vars in classes and take it from the constructor. It's not much an issue and is considered GCP in the JS World.
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getinfo() {
        return { name: this.name, email: this.email }
    }
    enrollCourse(name) {  // setter
        this.courseList.push(name);
    }
    getCourseList(){ //getter
        return this.courseList;
    }
    static login() { // static keyword prohibits this method from getting inherited.
        return "You are now logged in";
    }
}

class SubAdmin extends User{
    constructor(name,email) {
        super(name,email); // It will handle the constructor part from the base class. It'll give it the name and email.
    }
    getAdminInfo() {
        return "I am subadmin";
    }
    login() {
        return "Login for admin only" // Overwrites the base method and runs. If functions have the same name, the derived class' method runs.
    }
}

// Use it in another file.

module.exports = User;


// To demonstrate the concept of getters and setters we are making a user here.
const rock = new User("rock", "rock@rock.com")
console.log(rock.getinfo());
rock.enrollCourse("Angular Bootcamp")
console.log(rock.getCourseList());
console.log(rock.courseList); // If we make it private using #, it gives undefined whereas the getter gives us the value.
// getter is a method which helps us to grab some information from a class that is private
// used so that everyone doesn't have a direct access.
// Usually in getters we generally return the information and don't expect any parameters(USUALLY)
// Usually in setters, we expect some value in the parameter because we want to set a value to something which is private in the class.
// In core js, we make private variables as #courselist (a hash before the var)

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login()); // Used inheritance but will give error because the method is static
console.log(tom.getinfo()); // Used Inheritance