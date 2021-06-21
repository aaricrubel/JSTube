const cards = document.querySelectorAll(".card");
// If we get the word List somewhere, it is most likely to be related to Arrays
console.log(cards);

//variables -->
var isFlipped = false;
var firstCard;
var secondCard;


cards.forEach((card) => card.addEventListener("click", flip))
function flip(){
    // console.log("Card Flipped");
    // console.log(this); this is pointing to the object
    this.classList.add("flip") //Flips the thing for us.
    if(!isFlipped) {
        isFlipped = true;
        firstCard = this; // keep a track of the first card.
    } else {
        secondCard = this;
		checkIt()
    }
}

function checkIt() {
    // console.log("Checking!");
    firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
}

function success(){
    // console.log("Success");
    firstCard.removeEventListener('click', flip)
    secondCard.removeEventListener('click', flip)
    reset();
}


function fail(){
    // console.log("Failed");
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}


function reset(){
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}


// Shuffle -- need to do this

(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random()*16)
        card.style.order = index; //flexbox property
    })
})(); // this parenthesis enables it to call itself as soon as the script loads.
//We can also call it as shuffle()
// window.onload // Alternatively we can use the paranthesis, so that as soon as the program runs it calls itself.