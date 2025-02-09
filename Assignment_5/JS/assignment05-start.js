/*
PART 1a
---------------------------------------
DEFINE A Card OBJECT
---------------------------------------
*/
class Card {
    constructor(face, value, suit) {
        this.face = face;
        this.value = value;
        this.suit = suit;
    }

    describeSelf() {
        // Define two possible image paths
        const imagePath1 = `card-images/${this.face}_of_${this.suit.toLowerCase()}s.svg`;
        const imagePath2 = `card-images/${this.value}_of_${this.suit.toLowerCase()}s.svg`;

        // Create an <img> element with a fallback mechanism
        return `<img src="${imagePath1}" onerror="this.src='${imagePath2}'" alt="${this.face} of ${this.suit}s. Value: ${this.value}">`;
    }
}

/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/
const queenOfHearts = new Card("Queen", 10, "Heart");
document.getElementById('card-object').innerHTML += queenOfHearts.describeSelf();

/*
PART 2a
---------------------------------------
DEFINE A Deck OBJECT
---------------------------------------
Note: Most of the Deck class code should
      not be modified in any way. The only
      Deck code that needs changing is inside the 
      constructor() function. Change nothing else in Deck. 
*/
class Deck {
    constructor() {
        // Build a deck of Card objects
        // Prepare arrays for all the aspects of a Card
        this.faces = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
        this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        this.suits = ["Spade", "Club", "Heart", "Diamond"];

        // Prepare an array to store the Cards in
        this.cards = [];

        // Use nested 'for' loops
        // Build the Deck of Cards
        // One iteration for each suit
        // One iteration for each face/value pair
        // Each time, instantiate a new Card Object
        // Add new cards to the using Array.push()
        for (let s = 0; s < this.suits.length; s++) {
            for (let f = 0; f < this.faces.length; f++) {
                const card = new Card(this.faces[f], this.values[f], this.suits[s]);
                this.cards.push(card);
            }
        }
    }
}

/*
DEFINING Deck OBJECT FUNCTIONS
no changes need to be made 
in the rest of this Deck class definition.
*/
Deck.prototype.dealCard = function () {
    // Remove and return the first item in array
    // And shift the index of remaining items
    const card = this.cards.shift();
    // If we have run out of cards...
    if (card === undefined) {
        return 'No more cards';
    } else {
        // Return the next card in the array
        return card;
    }
};
Deck.prototype.shuffle = function () {
    let j, x, i;
    // Loop through the entire array
    for (i = this.cards.length - 1; i > 0; i--) {
        // Randomly select a card
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        // Resort cards
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    // Return the randomly sorted array
    return this.cards;
};
Deck.prototype.describeSelf = function () {
    let description = "";
    description += `This deck of cards has ${this.cards.length} card(s) in it`;
    // Return the above statement 'description'
    return description;
};

/*
---------------------------------------
end Deck class
---------------------------------------
*/

/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/
// Instantiate a new Deck
const deck = new Deck();

// Display the initial state of the deck
document.getElementById('deck-object').innerHTML += `<p>${deck.describeSelf()}</p>`;

// Shuffle the deck
deck.shuffle();
document.getElementById('deck-object').innerHTML += `<p>Deck shuffled!</p>`;

// Deal a card and display it
let dealtCard = deck.dealCard();
document.getElementById('deck-object').innerHTML += `<p>You've been dealt a</p>`;
document.getElementById('deck-object').innerHTML += dealtCard.describeSelf();
document.getElementById('deck-object').innerHTML += `<p>${deck.describeSelf()}</p>`;

// Deal another card and display it
dealtCard = deck.dealCard();
document.getElementById('deck-object').innerHTML += `<p>You've been dealt a</p>`;
document.getElementById('deck-object').innerHTML += dealtCard.describeSelf();
document.getElementById('deck-object').innerHTML += `<p>${deck.describeSelf()}</p>`;

/*
PART 3a
---------------------------------------
DEFINE A Player OBJECT
---------------------------------------
*/
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    addCardToHand(aCard) {
        this.hand.push(aCard);
    }

    describeSelf() {
        let description = `<div class="player-profile"><img src="avatars/${this.name.toLowerCase()}.jpg" alt="${this.name} avatar"><span>${this.name}'s hand:</span></div><div class="player-hand">`;
        this.hand.forEach(card => {
            description += card.describeSelf();
        });
        description += '</div>';
        return description;
    }
}

/*
PART 3b
Instantiate at least two Player OBJECTs
Instantiate a new Deck and shuffle() it
Deal five Cards to each Player
Display each players hand to the browser
*/
// Instantiate three players
const jill = new Player("jill");
const joe = new Player("joe");
const jane = new Player("jane");

// Instantiate a new Deck and shuffle it
const gameDeck = new Deck();
gameDeck.shuffle();

// Deal five cards to each player
for (let i = 0; i < 5; i++) {
    jill.addCardToHand(gameDeck.dealCard());
    joe.addCardToHand(gameDeck.dealCard());
    jane.addCardToHand(gameDeck.dealCard());
}

// Display each player's hand
document.getElementById('player-objects').innerHTML += jill.describeSelf();
document.getElementById('player-objects').innerHTML += joe.describeSelf();
document.getElementById('player-objects').innerHTML += jane.describeSelf();