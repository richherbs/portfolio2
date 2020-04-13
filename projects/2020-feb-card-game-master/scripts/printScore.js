/**
 * function which Outputs the player's current score to the appropriate div on the frontend
 * 
 * @param {currentScore} int contains the players score
 */
function printScore(currentScore) {
    let scoreContainer = document.querySelector('.score');
    let scoreContent = `Score: <br> ${currentScore}`;
    scoreContainer.innerHTML = scoreContent;
}