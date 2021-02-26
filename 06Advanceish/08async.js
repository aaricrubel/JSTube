// An event loop is basically a loop which waits for the event.
const uno = () => {
    console.log("I am one");
};
const dos = () => {
    setTimeout(() => {
        console.log("Woohooo");
    }, 3000);
    console.log("I am two");
};
const tres = () => {
    console.log("I am three");
};

uno();
dos();
tres();

// If we run this code, we'll find that I am two runs and then runs I am three, and after three seconds, Woohoo gets loaded up.
// This shows how that certain portion of code is waiting for 3000ms to happen and in turn allows any other code that is in the queue to run first.
// That's how Woohoo prints after tres gets executed. Because of the setTimeout.