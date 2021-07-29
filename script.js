// Content the logic for war
import Deck from "./deck.js";

//Access to computer-card-slot div
const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");

let playerDeck, computerDeck;

startGame();

function startGame() {
	const deck = new Deck();
	deck.shuffle();

	// Split deck into 2 equal pile of cards
	const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
	playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
	computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

	console.log(playerDeck);
	console.log(computerDeck);

	cleanBeforeRound();
}

// Clean up function before round
function cleanBeforeRound() {
	computerCardSlot.innerHTML = "";
	playerCardSlot.innerHTML = "";
	text.innerText = "";

	updateDeckCount();
}

//update deck count to run inside cleanBeforeRound
function updateDeckCount() {
	computerDeckElement.innerText = computerDeck.numberOfCards;
	playerDeckElement.innerText = playerDeck.numberOfCards;
}

// console.log(deck.cards);

// computerCardSlot.appendChild(deck.cards[0].getHTML());
