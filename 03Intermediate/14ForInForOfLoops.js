// For of loop is majorly used for arrays. There is no compulsion but it is considered as the best practice measure.

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

for (const i of myStates) {
    console.log(i);
}

// For in loop is majorly used for objects. There is no compulsion but it is considered as the best practice measure.

const symbols = {
    yt : "youtube",
    fb : "facebook",
    ig : "instagram",
    hp : "hewlett packard"
}

for (const i in symbols) {
    console.log(`key is ${i} and value is ${symbols[i]}`);
}