// sayHello();

//This code works because JS has a context and it is already defined and Node(Engine) is already aware of it.

// function sayHello() {
//     console.log("Hello");
// }

if (2 === 2) {
    console.log("True");
}

var myName = "Abhinav"

if (myName === myName) {
    console.log("True again");
}

// if (myName === window.myName) {
//     console.log("Won't execute here but execute in the browser because it has a different name in Node");
// }

//Window context is tied majorly with the browser
//Learn more about JS Context because it is the basics.
// Two types of major contexts are available to us and they are 1- Global context and 2 - the context that is running right now
// There is also an execution context which kicks in when an execution is needed like a function or a console log.
//Execution context stacks upon Global context just like a memory stack and goes away once an execution is done.