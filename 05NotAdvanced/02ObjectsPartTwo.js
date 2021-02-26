// Almost everything is an object in JS. Therefore, the array thing happens where certain methods are automatically made inside proto.
// https://youtu.be/IH7TJla_rwY  --> Hitesh's video on the weirdness of JS Objects.
// In JS, if we define objects using object.create() as in MDN Object JS Documentation.It gives back an empty object but has
// all the properties defined inside the proto, so we can still access the methods but we don't recommend this way of creating objects.
// Like --> See in the code, after it's run

var User = {
    name: "",
    getUserName : function () {
        console.log(`User Name is ${this.name}`);
    }
};

var abhinav = Object.create(User);
console.log(abhinav);
abhinav.name = "Abhinav Mukherjee";
abhinav.getUserName();

// Now, weird JS again --> if we use constructor -->

var kabir = Object.create(User, {
    name: {value: "kabir"},
    courseCount: {value: 3}
});
kabir.getUserName();