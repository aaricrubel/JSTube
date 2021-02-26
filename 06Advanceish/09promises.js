const uno = () => {
    return "I am one";
};
// const dos = async () => { // If we use the async keyword, when we run the code we can see that it asks for a promise and undefined is printed inside of curly braces. That means there is a promise involved which is not yet being fulfilled.
//     setTimeout(() => {
//         return "I am two";
//     }, 3000);
// };
const tres = () => {
    return "I am three";
};

const callme = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callme();
// This will print undefined in place of I am two and to handle this we will do -->
// Promises --> Either it's gonna fulfil the promise or not. It's like a variable is saying I'll bring something from the web.

const dos = () => { // Resolve --> I got it, Reject --> Sorry, I didn't get it.
    return new Promise((resolve, reject) => {
        // resolve("I got that") // A method, therefore we'll get I got that in return. Now to see it in action, see below -->
        setTimeout(() => { // So, we'll definitely get the response and if we don't reject is gonna work
            resolve("I am two");
        }, 3000); // Later on, we'll handle reject and learn more about promises.
    })
};
