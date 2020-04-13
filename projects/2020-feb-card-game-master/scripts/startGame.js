/** 
 * Declare variables at the start:
 * gameLocked: Is the game currently locked?
 * currentScore: The player's current score
 */
let game = {
    gameLocked : true,
    currentScore : 0,
    cardOnScreen : 0,
    cardsDrawn : 0,
    remainingTime : 0,
    cardOnScreen: 0,
    streak : 0,
    mute: false
}

/** Add event listener for when the button is clicked
 * Call the "start game" function when the button is clicked
 */
let startButton = document.querySelector('.startButton');
startButton.addEventListener('click',function(e) {
    e.preventDefault();
    startGame(startButton, game);
});

/**
 * Function to start the game
 * 
 * @param {start} DOMElement the "start" button on the frontend
 * @param {game} Object object to hold all information about the active game
 */
function startGame(start, game) {
    //hides gameover box
    document.querySelector('.gameOverBox').classList.add('hidden');
    // Hide the Start Button
    start.classList.add('hidden');
    // Set the score to zero and display it in the HTML, and reset the streak
    game.streak = 0;
    game.currentScore = 0;
    printScore(game.currentScore);
    displayStreak(game.streak);
    document.querySelector('.score').classList.remove('hidden');
    // Display the buttons to play the game
    document.querySelector('.gameButtonContainer').classList.remove('hidden');
    // Display the timer and begin the countdown from 30
    startCountDown(30, game);
    document.querySelector('.timer').classList.remove('hidden');
    // Display the streak
    document.querySelector('.streak').classList.remove('hidden');
    // Draw the first card at random
    let cardToDraw = weightedRand();
    drawCard(cardToDraw);
    game.cardsDrawn = 1;
    game.cardOnScreen = cardToDraw;
    document.querySelector('.card').classList.remove('hidden');
    // Unlock the game
    game.gameLocked = false;
}