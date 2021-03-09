const google = 'google';
const fb = null;

if (google) {
    console.log("I execute Block -- 1");
}

if (fb) { // fb is a falsy value here and in order to get an exact true or false value, we use double bangs i.e. !! which converts to an exact true or false and is a Goodcase practice in production. Check Airbnb JS documentation for more.
    console.log("I execute Block -- 2");
}

// Fixed -->
if (!!fb) {
    console.log("I execute Block -- 1");
}