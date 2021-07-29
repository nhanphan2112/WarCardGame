const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export default class Deck {
	constructor(cards = freshDeck()) {
		this.cards = cards;
	}
  
	// getter to access number of card
	get numberOfCards() {
		return this.cards.length;
	}

	// function to shuffle deck of cards
	shuffle() {
		for (let i = this.numberOfCards - 1; i > 0; i--) {
			const newIndex = Math.floor(Math.random() * (i + 1));
			// oldValue is an intermediate value before we update this.cards[i]
			const oldValue = this.cards[newIndex];
			this.cards[newIndex] = this.cards[i];
			this.cards[i] = oldValue;
		}
	}
}

class Card {
	constructor(suit, value) {
		this.suit = suit;
		this.value = value;
	}

	//get function to get color property as output
	get color() {
		return this.suit === "♣" || this.suit === "♠" ? "black" : "red";
	}

	getHTML() {
		const carDiv = document.createElement("div");
		carDiv.innerText = this.suit;
		carDiv.classList.add("card", this.color);
		carDiv.dataset.value = `${this.value} ${this.suit}`;
		return carDiv;
	}
}

function freshDeck() {
	return SUITS.flatMap((suit) => {
		return VALUES.map((value) => {
			return new Card(suit, value);
		});
	});
}
