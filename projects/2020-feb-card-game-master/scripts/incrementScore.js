/**  
 * Increments the Current score stored in the game object by one
 * Prints the new score to the frontend using the printScore function
 * 
 * @param {game} Object the object storing information about the active game
 */
function incrementScore(game) {
    game.currentScore++;
    handleStreak(game);
    printScore(game.currentScore);
    newCard(game);
}