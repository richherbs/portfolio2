/**
 * function to draw a new card
 * Function to draw a new card
 * Updates the value of the card on screen in the game object
 * Displays the correct card on the frontend
 * 
 * @param {game} Object storing information about active game
 */
function newCard(game) {
    let trickCardsWeight = Math.max(0, (20-game.remainingTime)*0.2);
    probs = [
        2,
        2,
        trickCardsWeight
    ];
    game.cardOnScreen = weightedRand(probs);
    drawCard(game.cardOnScreen);
    game.cardsDrawn++;
}