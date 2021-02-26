//* This code will only work in the Browser console because document == DOM is not defined in NodeJS, therefore, there is no
//* of document in it.

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// Now we will use our global object which is window, to get the background color

console.log(window.getComputedStyle(red)); //Gives the entire CSS declaration of the computed style
// This get computed style gives all the styles that is applied by the browser on that element. Like-->

console.log(window.getComputedStyle(red).backgroundColor);

// We write something in CSS as 'background-color' but when it comes to the browser this format takes the form of "backgroundColor"
// Therefore, something like 'font-family' is replaced to 'fontFamily' in the computed styles. Get computed style grabs the styles

//Therefore, a simple method that can actually fetch us the background color would be -->

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}
// Therefore when we call this function with the parameter -->
// It returns the background color of the element.

// var color = getBGColor(orange);

// Now, we'll start with Event Listeners in JS. For reference --> https://developer.mozilla.org/en-US/docs/Web/Events

// After we have hunted for the event that we wish to apply, we can then add the event listener -->
//* Lines 30 and 36 to 40 are further implemented in the magicColorChanger Function
// orange.addEventListener('mouseenter', () => {
     // To implement a style we use the style method
     //Therefore -->
//     center.style.background = color;
// })

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    })
}

magicColorChanger(red, getBGColor(red))
magicColorChanger(cyan, getBGColor(cyan))
magicColorChanger(violet, getBGColor(violet))
magicColorChanger(orange, getBGColor(orange))
magicColorChanger(pink, getBGColor(pink))