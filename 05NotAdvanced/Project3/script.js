const courses = [
    {
        name: "Complete ReactJS Course",
        price: "2.3"
    },
    {
        name: "Complete AngularJS Course",
        price: "2.1"
    },
    {
        name: "Complete MERN Course",
        price: "2.7"
    },
    {
        name: "Complete C++ Course",
        price: "2.8"
    },
    {
        name: "Django Course",
        price: "1.9"
    }
]

function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""; // Resets, so that the value is not repeated when we sort. And actually sorting happens.
    courses.forEach( course => {

        const li = document.createElement("li")
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name)
        li.appendChild(name); // Inject inside li

        const span = document.createElement("span");
        span.classList.add("float-right")

        const price = document.createTextNode("$"+course.price);
        span.appendChild(price); // Inject inside span

        li.appendChild(span); // Inject inside li
        ul.appendChild(li); // Inject inside ul
    });
}
window.addEventListener("load", generateLIST); // For using the fn when the page loads

// SORT COURSES by prices

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price)
    generateLIST();
})

const buttonBlue = document.querySelector(".sort-btn-prim");

buttonBlue.addEventListener("click", () => {
    courses.sort((a,b) => b.price - a.price)
    generateLIST();
})