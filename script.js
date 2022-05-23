//prepare variables for the cards so we can work with them.
const one = document.getElementById("one");
const two = document.getElementById("two");
const tree = document.getElementById("tree");
const four = document.getElementById("four");
//make a string of all the cards.
const cards = [one, two, tree, four];
let flippedCards = 0;
let matched = 0;


//make a function for the card to flip
cards.forEach(card => {
    card.addEventListener("click", function flip() {
        flippedCards++;
        let cardOne = "";
        let cardTwo = "";
        if (flippedCards === 1) {
            card.classList.add("flip");
            cardOne = card.title;
            console.log(cardOne);
        } else if (flippedCards === 2) {
            card.classList.add("flip")
            cardTwo = card.title;
            console.log(cardTwo);
        }
        if (cardOne === cardTwo) {
            matched++;
            console.log(matched);
        } //else {
            //console.log("no match");
        //}
    })


});


//make a function to shuffle the cards.
function shuffle() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 4);
        //to change the order of the string use: style.order
        card.style.order = rand.toString();
    });
};
//call the shuffle function for the shuffle button.
document.getElementById("shuffle").addEventListener("click", shuffle);


