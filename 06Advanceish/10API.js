// Node has a limitation, we cannot handle APIs from here. Therefore, we're going to use the browser console in order to handle APIs and learn how to do it. We can handle APIs in React/Vue and we'll do that there but for now let's do it with the console.
// In this tutorial, we'll use the Chuck Norris API
// We can use things like Axios to do all this stuff but let's go the classic way first.
// fetch will always give us a promise.
// Whenever a promise returns a resolve, we can chain multiple then events on it.

fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    return response.json();
})// Whatever it returns goes to next .then()
.then((data) => {
    // console.log("DATA is :", data);
    var joke = data.value;
    console.log("JOKE - ", joke);
})
.catch() // Reject code

// We're receiving a response in Chrome and it returns a readable string and we need to convert it to JSON so as to read it.
// We'll use .json in line 9 to do that.
