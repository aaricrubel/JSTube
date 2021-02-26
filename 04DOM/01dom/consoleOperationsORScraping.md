We can use console operations to scrap or find or select DOM elements using certain functions.

Hitesh's video on it -   https://youtu.be/nkOL-mZjq60

Like if we want the title from an index file -->

var title = document.getElementsByTagName("h1")
// This would return an array and inside it we can find the inner HTML or inner text and many other things and then
// we can select it and then call it or do anything that we want to do with it.
It'd be like -->
var title = document.getElementByTagName("h1")[0].innerHTML;
It returns the title inside variable title.

We can also do stuff like -->

var titleTwo = document.getElementByClassName("title")[0].innerText;
It also returns the title inside variable title.

//! Inner HTML and Inner Text are two separate things. They are not the same.