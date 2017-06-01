
Hi Zakk and Christine,
/*
I'm currently very confused -- I had no idea how to do this;
I'm working on getting through a UDemy class right now on JavaScript
to get caught up and already went through Code Academy; hopefully,
I aim to finish the Udemy Course over the weekend and then try my
hand at this assignment again.
*/

//defining const
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }

//class for one card
class Card {
  constructor( rank, suit ) {
    this.suit = suit
    this.rank = rank
    this.score = rankScores[ rank ]
    this.title = `${rank} of ${suit}`
  }
}

class Deck {
  constructor (  ) {
    this.cards = []
  }

//class for deck
  createNewDeck() {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push( new Card( ranks[j] + ' of ' + suits[i] ))
      }
    }
  }
}

let testDeck = new Deck()
testDeck.createNewDeck()

//class for players
class Player {
  constructor (username){
    this.username = username
    this.hand = []
  }
}

const playerOne = new Player('username')
const playerTwo = new Player('username')

//prompt
var prompt = require('prompt');

 prompt.start();

 prompt.get(['username'], function (err, result) {

   console.log('Command-line input received:');
   console.log('  username: ' + result.username);
 });

if ( rankScores[playerOne] > rankScores[playerTwo] ) {
    console.log(PlayerOneScore++)
} else if (ranksScores[playerOne] < rankScores[playerTwo] ) {
    console.log(PlayerTwoScore++)
} else {
    console.log('War!');
    //start again
}




function createDeck( suitsP, ranksP) {
  let finalDeck = []

  for (let i = 0; i < suitsP.length; i++) {
    for (let j = 0; j < ranksP.length; i++) {

      finalDeck.push( ranks[j] + ' of ' + suits[i] )
    }
  }

  return finalDeck
}



function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];

    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    return cards;
// }

//
//
