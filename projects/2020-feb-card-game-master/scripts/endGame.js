/**
 * function to end the game when the timer reaches zero.
 * adds 'hidden' class to score, timer, card and game buttons
 * removes 'hidden' from the gameOverBox and startGameButton
 * inserts html to display game over message
 * 
 * @param {game} Object The game object stores all relevant information about the active game
 */
function endGame(game) {
    // Lock the game so that no further input is possible
    game.gameLocked = true;
    // Hide elements visible while playing the game
    document.querySelector('.score').classList.add('hidden');
    document.querySelector('.timer').classList.add('hidden');
    document.querySelector('.card').classList.add('hidden');
    document.querySelector('.streak').classList.add('hidden');
    document.querySelector('.gameButtonContainer').classList.add('hidden');
    document.querySelector('.award').classList.add('hidden');
    // Display the Game Over screen with the player's score
    document.querySelector('.startButton').classList.remove('hidden');
    document.querySelector('.gameOverBox').classList.remove('hidden');
    document.querySelector('.gameOver').innerHTML = `GAME OVER!<br>Your Score Was:<br> ${game.currentScore}`;
}
 
