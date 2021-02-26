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

// For loop -->

for (let i = 0; i < myStates.length; i++) {
    console.log(myStates[i]); 
    
}

// Implementation of break; Terminates the looping

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") {
        break;
    }
    console.log(myStates[i]); 
    
}

// Implementation of continue; ignores the condition and goes on with the next value into the loop.

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") {
        continue;
    }
    console.log(myStates[i]); 
    
}

// Print only Numbers.

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] === "string") {
        continue;
    }
    console.log(myStates[i]); 
    
}