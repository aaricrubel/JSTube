var email = true;
var google = false;
var facebook = false;

// if (email || google || facebook) {
//     console.log("Allowed");
// } else {
//     console.log("NOT Allowed");
// }

if (email) {
    console.log("Allowed");
} else if(google){
    console.log("Allowed");
} else if (facebook) {
    console.log("Allowed");
} else {
    console.log("NOT Allowed");
}