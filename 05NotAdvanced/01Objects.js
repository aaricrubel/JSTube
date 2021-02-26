// In proto, if we open it, all the 'f' stand for functional object
// proto --> Prototype
// A prototype is something like, eg--> every user would get these certain properties on signup.
// Also, eg--> It should be a unique user everytime.

// new keyword creates multiple copies of user, whenever called. It's like a constructor, more or less, a constructor only.
// if we don't use new, we'll get undefined. because this points to a global object and node has an empty object.
//Therefore we use new which moves from global object to inside the user object.
// new keyword invokes the constructor and make a unique instance every single time.

var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course Count is : ${this.courseCount}`);
    }
};

// BY using proto, we can access or give more properties, getters, setters
// and whatever we like to the object we create using the above functional approach.
// This is how we do stuff in production level.
// So let's give the function getFirstName to User -->

User.prototype.getFirstName = function () {
    console.log(`Your first name is : ${this.firstName}`);
}

// proto has something called hasOwnProperty which tells us if there is a certain property that is inside the object we are
// trying to access. It returns true/false based on that. Syntax --> User.hasOwnProperty("firstName"); No need to write 
// prototype in between. We can directly access the properties.

// Like in case of array, all the methods are automatically generated inside proto, so we can use methods like length,fill,filter,
// push, pop etc. directly. We can also inject a method that we want for everyone to have access to, using proto.

var abhinav = User("abhinav", 4);
console.log(abhinav);

// Now we'll use new

var kabir = new User("kabir", 2);
kabir.getCourseCount();
//Now
if (kabir.hasOwnProperty("firstName")) {
    kabir.getFirstName();
}
console.log(kabir);

var agrim = new User("agrim", 6);
agrim.getCourseCount();
agrim.getFirstName();
console.log(agrim);

// Therefore, now this will point to inside of user instead of global object and then return kabir and agrim
// instead of undefined in case of abhinav where new was not used and this was pointing to the empty object of nodejs.