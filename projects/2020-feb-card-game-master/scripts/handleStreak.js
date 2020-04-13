/**
 * Function to update the streak and update them on the frontend
 * 
 * @param {game} Object The active game
 */
function handleStreak(game) {
game.streak++;
    if (game.streak >= 10) {
        game.streak -= 10;
        game.remainingTime += 2;
        displayTimer(game.remainingTime);
        document.querySelector('.award').classList.remove('hidden');
        setTimeout(() => {
            document.querySelector('.award').classList.add('hidden');
        }, 1000);
    }
    displayStreak(game.streak);
}

/**
 * Function to update the display of the streak on the HTML
 * 
 * @param {streak} int the current length of the streak to be displayed 
 */
function displayStreak(streak) {
    document.querySelector('.streak').innerHTML = `Streak: <br> ${streak}`;
}