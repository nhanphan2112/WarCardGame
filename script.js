// Content the logic for war
import Deck from "./deck.js";

//Access to computer-card-slot div
const computerCardSlot = document.querySelector('.computer-card-slot');

const deck = new Deck();
deck.shuffle();
console.log(deck.cards);

computerCardSlot.appendChild(deck.cards[0].getHTML());