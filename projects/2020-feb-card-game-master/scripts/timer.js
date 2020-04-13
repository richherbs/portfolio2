/**
 * Function begins an interval. Every second, the timer decrements by one and prints the remaining time to the 
 * appropriate div on the frontend
 * When the remaining time reaches zero, the interval is stopped and the endGame function is called 
 * @param timer value representing the number the length of the timer
 * @param game object representing the current state of the game
 */
function startCountDown(timer, game) {
    game.remainingTime = timer;
    displayTimer(game.remainingTime);
    let countDown = setInterval(() => {
        game.remainingTime--;
        displayTimer(game.remainingTime);
        if (game.remainingTime == 0) {
            clearInterval(countDown);
            endGame(game);
        }
    }, 1000);
}
/**
 * function to display the remaining time of the game
 * @param remaingTime take in the remaining time on a game 
 */
function displayTimer(remainingTime) {
    let timer = document.querySelector('.timer');
    let timeDisplayed = 'Time Left: <br> 00:';
    if (remainingTime >= 10) {
        timer.innerHTML = timeDisplayed + remainingTime;
    } else {
        timer.innerHTML = timeDisplayed + '0' + remainingTime;
    }
}