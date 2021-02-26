const myStates = [
    "Uttar Pradesh",
    "Rajasthan",
    "West Bengal",
    "Tamil Nadu",
    "Odisha",
    1947,
    2001,
    "Punjab"
]

myStates.forEach((state) => (console.log(state)));    //Best practice

// The above code is as same as -->

myStates.forEach(state => console.log(state));

// The above code is as same as -->

myStates.forEach((state) => {
    return console.log(state);
});