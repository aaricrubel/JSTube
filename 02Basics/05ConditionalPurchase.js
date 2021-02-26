var isLoggedIn = true;
var verifiedEmail = true;
var cardInfo = false;

// if (isLoggedIn && verifiedEmail && cardInfo) {
//     console.log("Allowed");
// } else {
//     console.log("NOT Allowed");
// }

if (isLoggedIn) {
    console.log("LoggedIn");
    if (verifiedEmail) {
        console.log("Has Verified Email");
        if (cardInfo) {
            console.log("Allowed to Purchase");
        } else {
            console.log("Has NOT provided card info");
            console.log("NOT ALLOWED TO PURCHASE");
        }
    } else {
        console.log("Has NOT verified Email");
        console.log("NOT ALLOWED TO PURCHASE");
    }
} else{
    console.log("IS NOT LOGGED IN");
    console.log("NOT ALLOWED TO PURCHASE");
}