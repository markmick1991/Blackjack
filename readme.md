The `createDeck` function is used to generate a standard deck of playing cards for a game of Blackjack. In the function:

    1. `const suits` defines an array of four strings, representing the four suits of a deck of cards: Hearts, Diamonds, Clubs, and Spades.

    2. `const values` defines an array of strings representing the face values and numbers on a card, from '2' to 'A' (Ace). In Blackjack, 'J' stands for Jack, 'Q' for Queen, and 'K' for King.

    3. The function uses two nested `for` loops. The outer loop iterates over each suit in the `suits` array, while the inner loop iterates over each value in the `values` array.

    4. For each combination of suit and value, a card is created by combining the value and suit with the text " of " in between. For example, "2 of Hearts," "7 of Diamonds," "K of Clubs," and so on.

    5. Each card is added to the `deck` array by using the `push` method. This array will store all the cards in the order they are created, resulting in a complete deck of 52 cards (13 values * 4 suits).

    In summary, this function creates a deck of cards by combining each suit with each value, resulting in a standard deck of playing cards used in many card games, including Blackjack. The `deck` array will hold all these cards in the order they are generated, and the deck is then shuffled for use in the game.

The `shuffleDeck` function is responsible for shuffling the order of cards in a deck to ensure randomness in card games like Blackjack. Let's break down how it works:

    1. It starts by iterating over the deck of cards, starting from the last card (index `deck.length - 1`) and moving towards the first card (index `0`).

    2. In each iteration, it generates a random index `j` within the range from `0` to `i`. This random index `j` represents a position in the deck where a card will be swapped with the card at index `i`. This random selection of an index makes the shuffle random and unpredictable.

    3. Next, it performs a swap operation to shuffle the cards. It uses destructuring assignment (the square brackets) to simultaneously swap the positions of the cards at indices `i` and `j` within the `deck` array. This effectively swaps the positions of two cards, making the deck more randomized.

    4. The loop continues to the previous card (from `i-1` to `0`), repeating the random selection and swapping process for each card in the deck. After this loop, the deck is thoroughly shuffled.

    In summary, the `shuffleDeck` function shuffles the deck of cards by iteratively swapping each card with another randomly chosen card within the deck. This process randomizes the order of the cards, making them ready for use in a card game.

The `dealCard` function is used to simulate dealing a card from a deck to a player in a card game, like Blackjack. Let's break down how it works:

    1. `player` is a parameter passed to the function, representing the player's hand. It is expected to be an array where the dealt card will be added.

    2. `deck` is assumed to be a global variable that holds an array of playing cards, representing a standard deck.

    3. `deck.pop()` is used to remove the last card from the `deck` array. In most card games, you typically deal cards from the top of the deck, and by using `pop()`, we take the last card, which simulates dealing from the top.

    4. `const card` stores the removed card (the one being dealt) in a variable for later use.

    5. `player.push(card)` adds the dealt card to the player's hand. It pushes the card into the player's hand array, so the player effectively "receives" the card.

    6. Finally, the function returns the `card` that was dealt. This allows you to access the specific card that was dealt in case you need to display it or perform any other game-related actions.

    In summary, the `dealCard` function takes a player's hand and simulates dealing a card from the deck to that player. It removes the card from the deck, adds it to the player's hand, and returns the dealt card for further use in a card game.

The `calculateHandValue` function is used to determine the total value of a hand of playing cards in a card game. Let's break down how this function works:

    1. `hand` is a parameter passed to the function, representing a player's or dealer's hand. It's expected to be an array of card strings, where each card is represented with a format like "2 of Hearts," "K of Diamonds," "A of Spades," and so on.

    2. `value` is a variable that keeps track of the total value of the hand. It starts at 0 and will be incremented as each card's value is calculated.

    3. `hasAce` is a boolean variable used to track whether an Ace card is present in the hand. An Ace can have a value of 11 or 1, depending on the player's hand's total value. This variable helps to handle Aces properly.

    4. The function uses a `for...of` loop to iterate through each card in the `hand`.

    5. For each card in the hand, it extracts the rank of the card by using `card.split(' ')[0]`. This splits the card string at the space character and takes the first part, which represents the card's rank (e.g., "A" for Ace, "K" for King, etc.).

    6. It then checks the rank:
    - If the rank is "A" (for Ace), it sets `hasAce` to `true` and adds 11 to the `value`. Aces can initially be counted as 11.
    - If the rank is "K," "Q," or "J" (for King, Queen, or Jack), it adds 10 to the `value`. These face cards are worth 10 points each.
    - For any other rank (2-10), it converts the rank to an integer using `parseInt(rank)` and adds that value to the `value`.

    7. After calculating the initial `value` of the hand based on the ranks of the cards, it checks if there's an Ace (`hasAce` is `true`) and if the total `value` is greater than 21. If both conditions are met, it subtracts 10 from the `value`. This is because the value of an Ace can be changed from 11 to 1 to avoid going over 21 (busting) and still keep the hand in the game.

    8. Finally, the function returns the calculated `value`, which represents the total value of the hand, taking into account the specific rules for Aces and face cards in the game.

    In summary, the `calculateHandValue` function is a critical part of card games like Blackjack, where it calculates the total value of a player's or dealer's hand, considering the special rules related to Aces and face cards.

The `startGame` function is responsible for initiating a new round of the blackjack game. Here's an explanation of how this function works:

    1. The function begins by checking the `gameOver` variable. If the game is not already over (`gameOver` is `false`), the function proceeds. This check ensures that a new game can only start if the previous round has concluded.

    2. Inside the function, the following steps are executed to set up the new game:

    - The `createDeck` function is called to create a fresh deck of cards containing all combinations of suits (Hearts, Diamonds, Clubs, Spades) and values (2, 3, 4, ..., 10, J, Q, K, A). This prepares a new deck for the round.

    - The `shuffleDeck` function is called to shuffle the deck randomly, ensuring that the order of the cards is different for each game. This provides a more realistic and unpredictable gaming experience.

    - Two cards are dealt to the player and the dealer. This is done by calling the `dealCard` function twice for each, which removes cards from the shuffled deck and adds them to the respective player's or dealer's hand.

    - The `document.getElementById` method is used to update the HTML elements that display the player's and dealer's hands. The `player-hand` element is set to display the two cards dealt to the player, joined together with a comma. The `dealer-hand` element is set to display the first card of the dealer (face-up) and another card as "?, ?" to represent the hidden card.

    3. Once these steps are completed, a new round of the game begins with both the player and dealer having their initial cards, and the game proceeds from there.

    In summary, the `startGame` function prepares and initializes a new round of the blackjack game, ensuring that the deck is shuffled, cards are dealt, and the initial game state is set up for the player and dealer.

The `hit` function represents a player's decision to take another card in a card game (such as Blackjack). Here's a breakdown of how this function works:

    1. The function begins with an `if` statement: `if (!gameOver)`. It checks whether the game is already over or not. If `gameOver` is `true`, it means the game has ended, and the player can no longer take actions. In this context, taking a "hit" (drawing another card) is only allowed if the game is still in progress.

    2. Inside the `if` block, a new card is drawn for the player using the `dealCard(playerHand)` function. This action simulates drawing a card from the deck and adds it to the player's hand. The drawn card is stored in the `card` variable.

    3. The `document.getElementById('player-hand').textContent` line updates the content of the HTML element with the ID "player-hand." It displays the player's current hand, which is an array of cards represented as a comma-separated string (e.g., "2 of Hearts, K of Diamonds, A of Spades"). The player's hand is updated with the newly drawn card, which is appended to the existing hand.

    4. Following the card draw, the function checks if the player's hand has gone over 21 points, which would result in a "bust" (losing the game). This is done by calling the `calculateHandValue(playerHand)` function to calculate the total value of the player's hand.

    5. If the calculated hand value is greater than 21, the player has busted. In this case, the function updates the message displayed in the HTML element with the ID "message" using `document.getElementById('message').textContent`. The message notifies the player that they have lost with the text "Bust! You lose."

    6. Finally, the `gameOver` variable is set to `true` to indicate that the game has ended. This prevents the player from taking further actions (such as hitting or standing) until the game is restarted.

    In summary, the `hit` function allows the player to draw additional cards, updates the player's hand, checks for a bust condition, and sets the game as "over" if the player has lost. It's a key function in managing player actions in a card game.

The `stand` function represents a player's decision to end their turn in a card game, typically in games like Blackjack. Here's an explanation of how this function works:

    1. The function begins with an `if` statement: `if (!gameOver)`. It checks whether the game is still in progress or not. If `gameOver` is `true`, it means the game has already ended, and the player can't take any further actions. In this context, a "stand" action is only allowed if the game is ongoing.

    2. Inside the `if` block, there's a `while` loop that continues as long as the total hand value of the dealer is less than 17. In many variations of Blackjack, the dealer is required to draw cards until their hand's value is at least 17 or higher. This loop simulates the dealer drawing cards.

    3. During the `while` loop, the `dealCard(dealerHand)` function is called to simulate drawing a card from the deck for the dealer. The drawn card is added to the dealer's hand.

    4. After the `while` loop, the function updates the content of the HTML element with the ID "dealer-hand." This element displays the dealer's hand, showing all the cards in the dealer's hand.

    5. The function then compares the hand values of the dealer and the player to determine the outcome of the game.

        - If the value of the dealer's hand exceeds 21 (bust), or if the value of the player's hand is greater than the value of the dealer's hand, the player wins. The function updates the message in the HTML element with the ID "message" to indicate "You win!"
        
        - If the hand values are equal (a tie), the function updates the message to "It's a tie!"
        
        - If neither of the above conditions is met, it means the dealer has won. The message is set to "Dealer wins."

    6. Finally, the `gameOver` variable is set to `true` to indicate that the game has ended. This prevents further actions by the player until the game is restarted.

    In summary, the `stand` function allows the player to end their turn, initiates the dealer's turn, calculates the outcome of the game, and sets the game as "over." It's an essential function for simulating the player's decision to stand in a card game like Blackjack.

The `restartGame` function is responsible for resetting the game to its initial state, allowing the player to start a new round or game. Here's an explanation of how this function works:

    1. Inside the function, various game-related variables and elements are reset to their initial values:

    - `playerHand`, `dealerHand`, and `deck` arrays are emptied, discarding all cards used in the previous round.
    - The `gameOver` variable is set to `false`, indicating that the game is no longer over.
    
    2. The function also clears the content of specific HTML elements used to display game information:

    - The `player-hand` and `dealer-hand` elements are set to an empty string, effectively clearing the displayed cards from the previous round.
    - The `message` element is also set to an empty string, removing any previous game messages.

    3. After resetting the game state and clearing the display, the function calls the `startGame` function. This is done to initiate a new game or round from the beginning, including creating a new shuffled deck and dealing initial cards for both the player and dealer.

    In summary, the `restartGame` function is essential for resetting the game to its initial state, allowing the player to play another round without needing to refresh the entire webpage. It's a convenient way to provide a seamless gaming experience and facilitates multiple rounds of the game without manual intervention.