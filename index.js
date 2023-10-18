let playerHand = [];
let dealerHand = [];
let deck = [];
let gameOver = false;

function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit of suits) {
    for (let value of values) {
        deck.push(`${value} of ${suit}`);
    }
    }
}

/*

The `createDeck` function is used to generate a standard deck of playing cards for a game of Blackjack. In the function:

1. `const suits` defines an array of four strings, representing the four suits of a deck of cards: Hearts, Diamonds, Clubs, and Spades.

2. `const values` defines an array of strings representing the face values and numbers on a card, from '2' to 'A' (Ace). In Blackjack, 'J' stands for Jack, 'Q' for Queen, and 'K' for King.

3. The function uses two nested `for` loops. The outer loop iterates over each suit in the `suits` array, while the inner loop iterates over each value in the `values` array.

4. For each combination of suit and value, a card is created by combining the value and suit with the text " of " in between. For example, "2 of Hearts," "7 of Diamonds," "K of Clubs," and so on.

5. Each card is added to the `deck` array by using the `push` method. This array will store all the cards in the order they are created, resulting in a complete deck of 52 cards (13 values * 4 suits).

In summary, this function creates a deck of cards by combining each suit with each value, resulting in a standard deck of playing cards used in many card games, including Blackjack. The `deck` array will hold all these cards in the order they are generated, and the deck is then shuffled for use in the game.

*/

// Shuffle deck using Fisher-Yates algorithm
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

/*

The `shuffleDeck` function is responsible for shuffling the order of cards in a deck to ensure randomness in card games like Blackjack. Let's break down how it works:

1. It starts by iterating over the deck of cards, starting from the last card (index `deck.length - 1`) and moving towards the first card (index `0`).

2. In each iteration, it generates a random index `j` within the range from `0` to `i`. This random index `j` represents a position in the deck where a card will be swapped with the card at index `i`. This random selection of an index makes the shuffle random and unpredictable.

3. Next, it performs a swap operation to shuffle the cards. It uses destructuring assignment (the square brackets) to simultaneously swap the positions of the cards at indices `i` and `j` within the `deck` array. This effectively swaps the positions of two cards, making the deck more randomized.

4. The loop continues to the previous card (from `i-1` to `0`), repeating the random selection and swapping process for each card in the deck. After this loop, the deck is thoroughly shuffled.

In summary, the `shuffleDeck` function shuffles the deck of cards by iteratively swapping each card with another randomly chosen card within the deck. This process randomizes the order of the cards, making them ready for use in a card game.

*/

// Deal a card to a player
function dealCard(player) {
    const card = deck.pop();
    player.push(card);
    return card;
}

// Calculate the value of a hand
function calculateHandValue(hand) {
    let value = 0;
    let hasAce = false;

    for (let card of hand) {
    const rank = card.split(' ')[0];
    if (rank === 'A') {
        hasAce = true;
        value += 11;
    } else if (rank === 'K' || rank === 'Q' || rank === 'J') {
        value += 10;
    } else {
        value += parseInt(rank);
    }
    }

    if (hasAce && value > 21) {
    value -= 10; // Change the value of the Ace from 11 to 1 to avoid busting
    }

    return value;
}

// Start the game
function startGame() {
    if (!gameOver) {
    createDeck();
    shuffleDeck();
    playerHand = [dealCard(playerHand), dealCard(playerHand)];
    dealerHand = [dealCard(dealerHand), dealCard(dealerHand)];

    document.getElementById('player-hand').textContent = playerHand.join(', ');
    document.getElementById('dealer-hand').textContent = dealerHand[0] + ', ?';
    }
}

// Player takes a hit
function hit() {
    if (!gameOver) {
    const card = dealCard(playerHand);
    document.getElementById('player-hand').textContent = playerHand.join(', ');

    if (calculateHandValue(playerHand) > 21) {
        document.getElementById('message').textContent = 'Bust! You lose.';
        gameOver = true;
    }
    }
}

// Player stands
function stand() {
    if (!gameOver) {
    while (calculateHandValue(dealerHand) < 17) {
        dealCard(dealerHand);
    }
    document.getElementById('dealer-hand').textContent = dealerHand.join(', ');

    if (calculateHandValue(dealerHand) > 21 || calculateHandValue(playerHand) > calculateHandValue(dealerHand)) {
        document.getElementById('message').textContent = 'You win!';
    } else if (calculateHandValue(playerHand) === calculateHandValue(dealerHand)) {
        document.getElementById('message').textContent = 'It\'s a tie!';
    } else {
        document.getElementById('message').textContent = 'Dealer wins.';
    }

    gameOver = true;
    }
}
        
function restartGame() {
    // Reset all game-related variables and elements
    playerHand = [];
    dealerHand = [];
    deck = [];
    gameOver = false;

    // Clear messages and card displays
    document.getElementById('player-hand').textContent = '';
    document.getElementById('dealer-hand').textContent = '';
    document.getElementById('message').textContent = '';

    // Start a new game
    startGame();
}