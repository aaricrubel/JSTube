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

let i = 0;
while (i<myStates.length) {
    /* break and continue would also work here because technically, it's a scope. JS behaves differently but we'll study 
    that later.*/
    console.log(myStates[i]);
    i++;
}

// Do while loops are used when we want to do the task at least once, even if the condition is wrong.

let j = 20;
do{
    /* break and continue would also work here because technically, it's a scope. JS behaves differently but we'll study 
    that later.*/
    console.log(j);
    j++;
}while (j<10);
