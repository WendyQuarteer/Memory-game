//prepare variables for the cards so we can work with them.
const one = document.getElementById("one");
const two = document.getElementById("two");
const tree = document.getElementById("tree");
const four = document.getElementById("four");
//make a string of all the cards.
const cards = [one, two, tree, four];

//make function to flip the cards.
//cards.forEach(card => {


//make a function to shuffle the cards.
function shuffle() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 4);
        //to change the order of the string use: style.order
        card.style.order = rand.toString();
    });
};
//call the shuffle function for the shuffle button.
document.getElementById("shuffle").addEventListener("click",shuffle);


