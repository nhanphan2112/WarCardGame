// Content the logic for war
import Deck from "./deck.js";

const CARD_VALUE_MAP = {
  "2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
	"6": 6,
	"7": 7,
	"8": 8,
	'9': 9,
	"10": 10,
	J: 11,
	Q: 12,
	K: 13,
	A: 14,
};

//Access to computer-card-slot div
const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");

let playerDeck, computerDeck, inRound, stop;

document.addEventListener("click", () => {
  if(stop){
    startGame();
    return;
  }

	if (inRound) {
		cleanBeforeRound();
	} else {
		flipCards();
	}
});

startGame();

function startGame() {
	const deck = new Deck();
	deck.shuffle();

	// Split deck into 2 equal pile of cards
	const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
	playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
	computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
	inRound = false;
  stop = false;

	console.log(playerDeck);
	console.log(computerDeck);

	cleanBeforeRound();
}

// Clean up function before round
function cleanBeforeRound() {
	inRound = false;
	computerCardSlot.innerHTML = "";
	playerCardSlot.innerHTML = "";
	text.innerText = "";

	updateDeckCount();
}

function flipCards() {
	inRound = true;

	const playerCard = playerDeck.pop();
	const computerCard = computerDeck.pop();

	playerCardSlot.appendChild(playerCard.getHTML());
	computerCardSlot.appendChild(computerCard.getHTML());

	updateDeckCount();
  
  //implement isrRoundWinner
  if(isRoundWinner(playerCard,computerCard)){
    text.innerText = "You Win This Round";
    playerDeck.push(playerCard);
    playerDeck.push(computerCard);
  }
  else if(isRoundWinner(computerCard,playerCard)){
    text.innerText = "You Lose This Round";
    computerDeck.push(playerCard);
    computerDeck.push(computerCard);
  }
  else{
    text.innerText = "DRAW!!!";
    playerDeck.push(playerCard);
    computerDeck.push(computerCard);
  }

  //CHECK FOR GAME OVER
  if(isGameOver(playerDeck)){
    text.innerText = 'YOU DEFINITELY LOSE';
    stop = true;
  } else if(isGameOver(computerDeck)){
    text.innerText = 'YOU DEFINITELY WIN';
    stop = true;
  }

}

//update deck count to run inside cleanBeforeRound
function updateDeckCount() {
	computerDeckElement.innerText = computerDeck.numberOfCards;
	playerDeckElement.innerText = playerDeck.numberOfCards;
}

//function determine round winner
function isRoundWinner(cardOne, cardTwo) {
	return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value];
}

//function define GAME OVER
function isGameOver(deck){
  return deck.numberOfCards === 0
}




// console.log(deck.cards);

// computerCardSlot.appendChild(deck.cards[0].getHTML());
